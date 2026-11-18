/* BOS LIGHTING GUIDE — bulles contextuelles, sans dépendance.
   Le texte est converti par TextNode : HTML, liens et boutons existants restent intacts. */
(function(){
"use strict";
var content=document.getElementById("content");
if(!content)return;
var entries=Object.create(null),words=Object.create(null);
function normalize(x){return String(x||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}
function insert(x,aliases){
 if(!x||!x.id||!x.definition)return;
 if(!entries[x.id])entries[x.id]=x;
 (Array.isArray(aliases)?aliases:[]).forEach(function(alias){
   var term=String(alias||"").trim(),key=normalize(term);
   if(term&&!words[key])words[key]={id:x.id,term:term};
 });
}
(window.BOS_GLOSSARY||[]).forEach(function(x){insert(x,x.aliases||[x.title])});
((window.BOS_V2&&window.BOS_V2.vocabulary)||[]).forEach(function(v,i){
 var t=String(v.term||"").trim();
 if(t&&!words[normalize(t)])insert({id:"vocab-"+i,title:t,group:v.family||"VOCABULAIRE",definition:v.definition,application:v.nuance},[t]);
});
function reEscape(x){return x.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}
var all=Object.keys(words).map(function(k){return words[k]})
  .sort(function(a,b){return b.term.length-a.term.length||a.term.localeCompare(b.term)});
var pattern=new RegExp(all.map(function(x){return reEscape(x.term)}).join("|"),"giu");
var boundary=/[\p{L}\p{N}_]/u;
function isWord(c){return !!c&&boundary.test(c)}
function eligible(node){
 var parent=node.parentElement;
 return node.nodeValue&&parent&&!parent.closest("button,a,script,style,textarea,input,select,.tags,.glossary-popover,[contenteditable]");
}
function decorate(){
 var walker=document.createTreeWalker(content,NodeFilter.SHOW_TEXT),node,nodes=[];
 while((node=walker.nextNode()))if(eligible(node))nodes.push(node);
 nodes.forEach(function(old){
   if(!old.parentNode)return;
   var txt=old.nodeValue,from=0,m,fragment=null,added=0;
   pattern.lastIndex=0;
   while((m=pattern.exec(txt))){
     if(isWord(txt[m.index-1])||isWord(txt[m.index+m[0].length]))continue;
     var word=words[normalize(m[0])];
     if(!word)continue;
     if(!fragment)fragment=document.createDocumentFragment();
     fragment.appendChild(document.createTextNode(txt.slice(from,m.index)));
     var btn=document.createElement("button");
     btn.type="button";btn.className="gloss-term";
     btn.setAttribute("data-gloss",word.id);
     btn.setAttribute("aria-haspopup","dialog");
     btn.setAttribute("aria-expanded","false");
     btn.setAttribute("aria-label","Définition : "+m[0]);
     btn.textContent=m[0];fragment.appendChild(btn);
     from=m.index+m[0].length;
     if(++added>400)break;
   }
   if(fragment){fragment.appendChild(document.createTextNode(txt.slice(from)));old.replaceWith(fragment)}
 });
}
var pop=document.createElement("aside");
pop.className="glossary-popover";pop.id="glossaryPopover";pop.hidden=true;
pop.setAttribute("role","dialog");pop.setAttribute("aria-modal","false");pop.setAttribute("aria-labelledby","glossaryTitle");
pop.innerHTML='<div class="glossary-head"><div><span class="glossary-kicker" id="glossaryGroup"></span><h3 id="glossaryTitle"></h3></div><button type="button" class="glossary-close" id="glossaryClose" aria-label="Fermer la définition">×</button></div><p class="glossary-definition" id="glossaryDefinition"></p><div class="glossary-detail" id="glossaryApplicationBlock"><span>SUR LE PLATEAU</span><p id="glossaryApplication"></p></div><div class="glossary-detail gloss-caution" id="glossaryCautionBlock"><span>À DISTINGUER</span><p id="glossaryCaution"></p></div><div class="glossary-actions"><a id="glossarySource" href="#" target="_blank" rel="noopener noreferrer">Source technique</a><button type="button" id="glossaryFurther">Lire la fiche complète ↗</button></div>';
document.body.appendChild(pop);
function $(id){return document.getElementById(id)}
var current=null;
function hide(focus){
 if(pop.hidden)return;
 pop.hidden=true;
 if(current){
  current.setAttribute("aria-expanded","false");
  if(focus&&current.isConnected)current.focus();
 }
 current=null;
}
function position(){
 if(pop.hidden||!current||!current.isConnected){hide(false);return}
 if(window.innerWidth<=620){pop.style.top="";pop.style.left="";return}
 var r=current.getBoundingClientRect(),p=pop.getBoundingClientRect(),width=window.innerWidth,height=window.innerHeight;
 pop.style.left=Math.max(12,Math.min(r.left,width-p.width-12))+"px";
 var below=r.bottom+10,above=r.top-p.height-10;
 pop.style.top=Math.max(12,Math.min(below+p.height<height-12?below:above,height-p.height-12))+"px";
}
function show(trigger){
 var entry=entries[trigger.dataset.gloss];if(!entry)return;
 if(current===trigger&&!pop.hidden){hide(false);return}
 hide(false);current=trigger;
 $("glossaryGroup").textContent=entry.group||"VOCABULAIRE";
 $("glossaryTitle").textContent=entry.title||trigger.textContent;
 $("glossaryDefinition").textContent=entry.definition;
 $("glossaryApplicationBlock").hidden=!entry.application;
 $("glossaryApplication").textContent=entry.application||"";
 $("glossaryCautionBlock").hidden=!entry.caution;
 $("glossaryCaution").textContent=entry.caution||"";
 var src=$("glossarySource");src.hidden=!(entry.source&&entry.source.url);
 if(!src.hidden){src.href=entry.source.url;src.textContent=entry.source.label||"Source technique";}
 var full=$("glossaryFurther");full.hidden=!(entry.related&&entry.related.section&&entry.related.id);
 if(!full.hidden){full.dataset.section=entry.related.section;full.dataset.target=entry.related.id}
 trigger.setAttribute("aria-expanded","true");
 pop.hidden=false;position();
}
document.addEventListener("click",function(e){
 var word=e.target.closest(".gloss-term");
 if(word){e.preventDefault();e.stopPropagation();show(word);return}
 if(e.target.closest("#glossaryClose")){hide(true);return}
 var full=e.target.closest("#glossaryFurther");
 if(full){
  e.preventDefault();e.stopPropagation();
  var section=full.dataset.section,id=full.dataset.target;
  hide(false);
  var tab=document.querySelector('.section-nav [data-section="'+section+'"]');
  if(tab)tab.click();
  var target=document.getElementById(id);
  if(target){target.open=true;target.scrollIntoView({behavior:"smooth",block:"center"})}
  return;
 }
 if(!e.target.closest("#glossaryPopover"))hide(false);
});
document.addEventListener("keydown",function(e){
 if(e.key==="Escape"&&!pop.hidden){e.preventDefault();hide(true)}
});
window.addEventListener("resize",position);
window.addEventListener("scroll",function(){if(!pop.hidden)position()},{passive:true});
var observer=new MutationObserver(function(){if(current&&!current.isConnected)hide(false);decorate()});
observer.observe(content,{childList:true,subtree:true,characterData:false});
decorate();
window.BOS_GLOSSARY_TEST={count:all.length,definitions:entries,refresh:decorate};
})();