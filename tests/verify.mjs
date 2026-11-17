import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const files=['data.js','data-techniques.js','data-situations.js','data-projecteurs.js','data-accessoires.js','data-pro.js','data-pro-extra.js','data-pro-final.js','data-pro-methods.js','app.js','sw.js'];
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
assert.equal(sections.situations.filter(x=>pro[x.id]).length,sections.situations.length,'Chaque situation doit avoir son dossier professionnel');
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

for(const [key,media] of Object.entries(context.window.BOS_MEDIA)){
  assert(media.url.startsWith('https://'),'Média sans HTTPS : '+key);
  assert(media.credit&&media.page,'Crédit manquant : '+key);
}
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert(manifest.name&&manifest.icons.some(i=>i.sizes==='192x192'));
const html=fs.readFileSync('index.html','utf8');
for(const f of files.filter(x=>x!=='sw.js'))assert(html.includes('src="'+f+'?'),'Script non référencé : '+f);
console.log('Vérification terminée. '+items.length+' fiches et '+Object.keys(context.window.BOS_MEDIA).length+' médias directs.');