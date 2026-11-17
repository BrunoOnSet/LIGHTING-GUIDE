import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const files=['data.js','data-techniques.js','data-situations.js','data-projecteurs.js','data-accessoires.js','app.js','sw.js'];
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
for(const [key,media] of Object.entries(context.window.BOS_MEDIA)){
  assert(media.url.startsWith('https://'),'Média sans HTTPS : '+key);
  assert(media.credit&&media.page,'Crédit manquant : '+key);
}
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
assert(manifest.name&&manifest.icons.some(i=>i.sizes==='192x192'));
const html=fs.readFileSync('index.html','utf8');
for(const f of files.filter(x=>x!=='sw.js'))assert(html.includes('src="'+f+'?'),'Script non référencé : '+f);
console.log('Vérification terminée. '+items.length+' fiches et '+Object.keys(context.window.BOS_MEDIA).length+' médias directs.');