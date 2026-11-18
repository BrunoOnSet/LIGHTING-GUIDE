import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const syntaxFiles=['data-v2.js','data-library.js','data-visual-cases.js','app.js','sw.js'];
for(const file of syntaxFiles){
  const code=fs.readFileSync(file,'utf8');
  new vm.Script(code,{filename:file});
  console.log('Syntaxe OK:',file);
}

const context={window:{}};vm.createContext(context);
vm.runInContext(fs.readFileSync('data-visual-cases.js','utf8'),context,{filename:'data-visual-cases.js'});
vm.runInContext(fs.readFileSync('data-v2.js','utf8'),context,{filename:'data-v2.js'});
vm.runInContext(fs.readFileSync('data-library.js','utf8'),context,{filename:'data-library.js'});

const data=context.window.BOS_V2;
assert(data,'BOS_V2 absent');
const required=['principles','methods','situations','cases','vocabulary','materials','fixtures','dossiers'];
for(const key of required){
  assert(Array.isArray(data[key]),'Section absente: '+key);
  assert(data[key].length>0,'Section vide: '+key);
}

assert(data.principles.length>=12,'Pas assez de principes');
assert(data.methods.length>=13,'Pas assez de méthodes');
assert.equal(data.situations.length,5,'Les 5 situations documentées doivent rester disponibles');
assert(data.cases.length>=8,'Pas assez de cas de plateau');
assert(data.vocabulary.length>=30,'Vocabulaire trop court');
assert(data.materials.length>=20,'Accessoires insuffisants');
assert(data.principles.length>=20,'Principes V3 insuffisants');
assert(data.methods.length>=18,'Méthodes V3 insuffisantes');
assert(data.fixtures.length>=13,'Catalogues projecteurs V3 insuffisants');
assert(data.dossiers.length>=9,'Dossiers V3 insuffisants');
for(const f of data.fixtures){
  assert(f.id&&f.brand&&f.name&&f.family&&f.role&&f.strength&&f.limits,'Projecteur incomplet: '+f.id);
  assert(f.source?.url?.startsWith('https://'),'Source fabricant absente: '+f.id);
  assert(f.photo?.startsWith('https://')&&f.credit,'Photo réelle sourcée absente: '+f.id);
}
for(const d of data.dossiers){
  assert(d.id&&d.title&&d.intro&&d.summary,'Dossier incomplet: '+d.id);
  assert(d.science?.length>=2&&d.plateau?.length>=2&&d.alternatives?.length>=2,'Dossier trop superficiel: '+d.id);
  assert(d.source?.url?.startsWith('https://'),'Source de dossier absente: '+d.id);
}

for(const item of [...data.principles,...data.methods]){
  assert(item.id&&item.title&&item.summary,'Fiche incomplète: '+(item.id||item.title));
  assert(item.bullets?.length>=2,'Fiche trop superficielle: '+item.id);
  if(item.source)assert(item.source.url?.startsWith('https://'),'Source invalide: '+item.id);
}
for(const c of data.cases){
  assert(c.id&&c.title&&c.setup,'Cas incomplet: '+c.id);
  assert(c.approaches?.length>=3,'Le cas doit proposer trois approches: '+c.id);
  assert(c.ask?.length>=2,'Questions de réflexion absentes: '+c.id);
}
for(const v of data.vocabulary){
  assert(v.term&&v.family&&v.definition&&v.nuance,'Vocabulaire incomplet: '+v.term);
}
for(const m of data.materials){
  assert(m.id&&m.title&&m.type&&m.summary&&m.use&&m.watch,'Fiche matériel incomplète: '+m.id);
}

const visual=context.window.BOS_VISUAL_CASES;
assert(visual?.cases?.length>=5,'Archive des tournages réels absente');
const caseMap=new Map(visual.cases.map(x=>[x.id,x]));
const photoUrls=new Set();
for(const sit of data.situations){
  assert(sit.id&&sit.caseId&&sit.title,'Situation incomplète');
  const study=caseMap.get(sit.caseId);
  assert(study,'Cas visuel introuvable: '+sit.caseId);
  assert(study.source?.startsWith('https://'),'Source de tournage absente: '+sit.caseId);
  assert.equal(study.media?.length,3,'Triptyque incomplet: '+sit.caseId);
  assert.equal(study.media.map(x=>x.role).sort().join(','),'bts,frame,plan','Triptyque mal classé: '+sit.caseId);
  for(const media of study.media){
    assert(media.url?.startsWith('https://'),'Image externe invalide: '+sit.caseId);
    assert(!photoUrls.has(media.url),'Image réutilisée entre Situations: '+media.url);
    photoUrls.add(media.url);
  }
  assert(study.positions?.length>=3,'Analyse source par source insuffisante: '+sit.caseId);
}
assert.equal(photoUrls.size,15,'Les 5 Situations doivent utiliser 15 visuels distincts');

const ids=[
  ...data.principles.map(x=>x.id),
  ...data.methods.map(x=>x.id),
  ...data.situations.map(x=>x.id),
  ...data.cases.map(x=>x.id),
  ...data.materials.map(x=>x.id),
  ...data.fixtures.map(x=>x.id),
  ...data.dossiers.map(x=>x.id)
];
assert.equal(new Set(ids).size,ids.length,'Identifiants V2 dupliqués');

const html=fs.readFileSync('index.html','utf8');
assert(html.includes('data-v2.js?v=3.0.2'),'data-v2.js non chargé');
assert(html.includes('data-library.js?v=3.0.2'),'data-library.js non chargé');
assert(html.includes('data-section="fixtures"'),'Onglet Projecteurs absent');
assert(html.includes('data-section="dossiers"'),'Onglet Dossiers absent');
assert(html.includes('data-visual-cases.js?v=3.0.2'),'Archive visuelle non chargée');
assert(!html.includes('data-techniques.js'),'La V1 ne doit plus être chargée');
assert(html.includes('Cas de plateau'),'Navigation Cas de plateau absente');
assert(html.includes('Vocabulaire'),'Navigation Vocabulaire absente');

const app=fs.readFileSync('app.js','utf8');
assert(app.includes('function caseCard'),'Lecteur de cas absent');
assert(app.includes('function situationCard'),'Lecteur des tournages réels absent');
assert(app.includes('Fiche au hasard')||html.includes('Fiche au hasard'),'Mode feuilleter au hasard absent');
assert(app.includes('function diagramSvg'),'Schémas pédagogiques V3 absents');
assert(app.includes('function dossierCard'),'Lecteur de dossiers V3 absent');
assert(app.includes('function fixtureCard'),'Lecteur de projecteurs V3 absent');
assert(app.includes('function favoriteButton'),'Bouton favoris absent');
assert(html.includes('id="favoritesBtn"'),'Commande favoris absente');

const styles=fs.readFileSync('style.css','utf8');
assert(styles.includes('.bubble'),'Accordéons absents');
assert(styles.includes('.approach-grid'),'Pistes des cas de plateau absentes');
assert(styles.includes('.study-grid'),'Triptyques de tournage absents');

const sw=fs.readFileSync('sw.js','utf8');
assert(sw.includes('bos-lighting-guide-v3-0-2-20261118'),'Cache V3 non versionné');
assert(sw.includes('./data-library.js'),'Catalogue V3 absent du cache');
assert(sw.includes('./data-v2.js'),'data-v2.js absent du cache');
assert(sw.includes('./data-visual-cases.js'),'Archive visuelle absente du cache');

const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert(manifest.name&&manifest.icons.some(i=>i.sizes==='192x192'),'Manifest PWA invalide');

console.log('V3 vérifiée : '+data.principles.length+' principes, '+data.methods.length+' méthodes, '+data.situations.length+' situations, '+data.cases.length+' cas, '+data.vocabulary.length+' termes, '+data.materials.length+' accessoires, '+data.fixtures.length+' projecteurs et '+data.dossiers.length+' dossiers.');
