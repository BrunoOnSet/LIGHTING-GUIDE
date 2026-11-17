import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const files=['data.js','data-techniques.js','data-situations.js','data-projecteurs.js','data-accessoires.js','data-pro.js','data-pro-extra.js','data-pro-final.js','data-pro-methods.js','data-visual-cases.js','data-shoots.js','data-method-tips.js','app.js','sw.js'];
for (const file of files) {
  const code=fs.readFileSync(file,'utf8');
  new vm.Script(code,{filename:file});
  console.log('Syntaxe OK:',file);
}
const context={window:{}};vm.createContext(context);
vm.runInContext(fs.readFileSync('data.js','utf8'),context);
context.BOS_REGISTER=context.window.BOS_REGISTER;
for(const file of files.filter(f=>f.startsWith('data-'))){
  vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file});
}
const sections=context.window.BOS_GUIDE;
const items=Object.values(sections).flat();
const ids=new Set(items.map(x=>x.id));
assert.equal(ids.size,items.length,'Identifiants doublons');
assert(items.length>=180,'Catalogue incomplet');
for(const [section,entries] of Object.entries(sections)){
  assert(entries.length>0,'Section vide : '+section);
  for(const item of entries){
    assert(item.id&&item.title&&item.group&&item.summary,'Champs manquants : '+item.id);
    assert.equal(item.type,section,'Section incorrecte : '+item.id);
    for(const src of item.sources||[])assert(context.window.BOS_SOURCES[src],'Source manquante : '+item.id+' -> '+src);
    for(const related of item.related||[])assert(ids.has(related),'Référence cassée : '+item.id+' -> '+related);
  }
  console.log(section+': '+entries.length+' fiches');
}
const pro=context.window.BOS_PRO||{};
const proSources=context.window.BOS_PRO_SOURCES||{};
assert.equal(sections.techniques.filter(x=>x.documentationType==='configuration'&&pro[x.id]).length,27,'Les 27 configurations type doivent rester disponibles dans Méthodes');
assert(Object.keys(pro).length>=30,'Dossiers professionnels incomplets');
for(const [id,dossier] of Object.entries(pro)){
  assert(ids.has(id),'Dossier sans fiche : '+id);
  assert(dossier.headline&&dossier.intent,'Dossier sans introduction : '+id);
  assert(dossier.variants?.length,'Dossier sans configurations : '+id);
  assert(dossier.camera?.length&&dossier.color?.length&&dossier.traps?.length&&dossier.kit?.length&&dossier.controls?.length,'Dossier incomplet : '+id);
  for(const setup of dossier.variants){
    assert(setup.title&&setup.when&&setup.setup&&setup.camera&&setup.why,'Configuration incomplète : '+id);
    for(const ref of setup.kit||[])assert(ids.has(ref),'Matériel lié absent : '+id+' -> '+ref);
  }
  for(const ref of dossier.kit)assert(ids.has(ref.id),'Projecteur lié absent : '+id+' -> '+ref.id);
  for(const source of dossier.refs||[])assert(proSources[source],'Source avancée manquante : '+id+' -> '+source);
}
console.log(Object.keys(pro).length+' dossiers DP vérifiés, dont '+sections.situations.length+' situations couvertes.');

const cases=context.window.BOS_VISUAL_CASES;
assert(cases?.cases?.length>=5,'Bibliothèque source de tournages manquante');
assert.equal(sections.situations.length,5,'La section Situations doit compter cinq tournages distincts');
const chosen=sections.situations;
const chosenCases=new Set(),photoUrls=new Set();
for(const item of chosen){
  assert(item.study,'Situation sans tournage documenté : '+item.id);
  assert(item.study.id&&item.study.source&&item.study.author,'Attribution manquante : '+item.id);
  assert(!chosenCases.has(item.study.id),'Tournage affiché plusieurs fois : '+item.study.id);
  chosenCases.add(item.study.id);
  assert(item.study.media?.length===3,'Triptyque absent : '+item.id);
  assert.equal(item.study.media.map(p=>p.role).sort().join(','),'bts,frame,plan','Documents mal classés : '+item.id);
  for(const media of item.study.media){
    assert(media.url?.startsWith('https://'),'Image externe manquante : '+item.id);
    assert(!photoUrls.has(media.url),'Photo réutilisée dans plusieurs Situations : '+media.url);
    photoUrls.add(media.url);
  }
  assert(item.study.positions?.length>=3,'Explication des sources insuffisante : '+item.id);
}
assert.equal(chosenCases.size,5);
assert.equal(photoUrls.size,15);
assert.equal(Object.keys(cases.situationPriority).length,0,'Anciennes associations qui provoquaient les doublons encore actives');
const caseIds=new Set(cases.cases.map(x=>x.id));
assert.equal(caseIds.size,cases.cases.length,'Cas visuels avec identifiant répété');
for(const entry of cases.cases){
  assert(entry.author&&entry.source&&entry.context&&entry.takeaway,'Cas sans contexte : '+entry.id);
  assert(entry.positions?.length>=3,'Analyse de postes insuffisante : '+entry.id);
  assert(entry.media?.length===3,'Trois emplacements visuels attendus : '+entry.id);
  for(const photo of entry.media)assert(photo.caption&&photo.relation&&(!photo.url||photo.url.startsWith('https://')),'Photo incorrecte : '+entry.id);
  for(const id of entry.relevance||[])assert(ids.has(id),'Situation inconnue : '+id);
}
for(const [id,caseList] of Object.entries(cases.situationPriority)){
  assert(sections.situations.some(x=>x.id===id),'Situation associée inconnue : '+id);
  for(const caseId of caseList)assert(caseIds.has(caseId),'Cas visuel introuvable : '+caseId);
}
assert(fs.readFileSync('sw.js','utf8').includes('data-visual-cases.js'),'Atlas non mis en cache');
assert(fs.readFileSync('app.js','utf8').includes('is-full-reader'),'Mode plein écran absent');
console.log('Situations vérifiées : 5 tournages uniques et 15 photos distinctes, aucune réutilisation.');


// Notes de chef op : pas de conseil non sourcé, ni de schéma généré dans les Méthodes.
const dpTips=context.window.BOS_METHOD_TIPS||{};
assert(Object.keys(dpTips).length>=25,'Pas assez de méthodes avec conseil de chef op sourcé');
for(const [id,notes] of Object.entries(dpTips)){
  assert(sections.techniques.some(x=>x.id===id),'Conseil attaché à une méthode inconnue : '+id);
  assert(Array.isArray(notes)&&notes.length>0,'Conseils vides : '+id);
  for(const note of notes){
    assert(note.by&&note.text&&note.url?.startsWith('https://'),'Conseil non attribué ou source absente : '+id);
    assert(note.text.length<500,'Conseil trop long : '+id);
  }
}
const methodsJs=fs.readFileSync('app.js','utf8');
assert(methodsJs.includes('function methodCard(item)'),'Bulles Méthodes non implémentées');
assert(methodsJs.includes('class="method-bubble"'),'Accordéons Méthodes absents');
assert(methodsJs.includes('if(item.type==="techniques"){openMethod(id,{fromHash});return}'),'Les Méthodes ne doivent plus s’ouvrir dans le panneau qui contient les schémas originaux');
const styles=fs.readFileSync('style.css','utf8');
assert(styles.includes('#cards.methods-list'),'Layout Méthodes vertical absent');
console.log(Object.keys(dpTips).length+' Méthodes reçoivent des conseils DP avec liens sources, et les schémas sont exclus des bulles.');

for(const [key,media] of Object.entries(context.window.BOS_MEDIA)){
  assert(media.url.startsWith('https://'),'Média sans HTTPS : '+key);
  assert(media.credit&&media.page,'Crédit manquant : '+key);
}
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert(manifest.name&&manifest.icons.some(i=>i.sizes==='192x192'));
const html=fs.readFileSync('index.html','utf8');
for(const f of files.filter(x=>x!=='sw.js'))assert(html.includes('src="'+f+'?'),'Script non référencé : '+f);
console.log('Vérification terminée. '+items.length+' fiches et '+Object.keys(context.window.BOS_MEDIA).length+' médias directs.');