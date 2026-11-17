/* BOS LIGHTING GUIDE — moteur statique, sans dépendances externes.
 * Les fiches textuelles et les schémas sont disponibles hors ligne après installation.
 */
(()=>{"use strict";
const DATA=window.BOS_GUIDE||{techniques:[],situations:[],projecteurs:[],accessoires:[]};
const SOURCES=window.BOS_SOURCES||{},MEDIA=window.BOS_MEDIA||{};
const SECTIONS={techniques:"Méthodes",situations:"Situations",projecteurs:"Projecteurs",accessoires:"Accessoires",favoris:"Favoris"};
const all=Object.keys(DATA).flatMap(k=>DATA[k]);
const find=id=>all.find(x=>x.id===id);
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const normalize=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const list=x=>Array.isArray(x)?x:[];
const iconArrow='<span aria-hidden="true">↗</span>';
let tab="techniques",filter="Tous",query="",current=null,previousFocus=null,deferredInstall=null,loadingMedia=0;
const storage=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let favoriteIds=new Set(storage("bos-guide-favs-v1",[]));
function persist(){try{localStorage.setItem("bos-guide-favs-v1",JSON.stringify([...favoriteIds]))}catch{}}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast._timer);toast._timer=setTimeout(()=>el.classList.remove("show"),2300)}
function theme(mode){document.documentElement.dataset.theme=mode;document.querySelector('meta[name="theme-color"]').content=mode==="dark"?"#171d1b":"#f3f4f2";$("#themeBtn").setAttribute("aria-label",mode==="dark"?"Passer au thème clair":"Passer au thème sombre");try{localStorage.setItem("bos-guide-theme",mode)}catch{}}
theme(storage("bos-guide-theme","light"));
$("#themeBtn").addEventListener("click",()=>theme(document.documentElement.dataset.theme==="light"?"dark":"light"));
Object.keys(DATA).forEach(k=>{const n=$('[data-count="'+k+'"]');if(n)n.textContent=DATA[k].length+" fiches"});
function favoritesCount(){const el=$("#favCounter");el.textContent=favoriteIds.size||""}
function selectTab(name,{scroll=false,clear=true}={}){
if(!SECTIONS[name])return;
tab=name;filter="Tous";if(clear){query="";$("#searchInput").value="";$("#clearSearch").hidden=true}
$$('[data-tab]').forEach(el=>{const active=el.dataset.tab===tab;el.classList.toggle("active",active);el.setAttribute("aria-selected",String(active))});
render();if(scroll)$("#bibliotheque").scrollIntoView({behavior:"smooth",block:"start"});
}
$$("[data-tab]").forEach(el=>el.addEventListener("click",()=>selectTab(el.dataset.tab)));
$("[data-section]").forEach(el=>el.addEventListener("click",()=>selectTab(el.dataset.section,{scroll:true})));
$("[data-quick]").forEach(el=>el.addEventListener("click",()=>openItem(el.dataset.quick)));
$("#exploreBtn").addEventListener("click",()=>$("#bibliotheque").scrollIntoView({behavior:"smooth",block:"start"}));
$("#searchInput").addEventListener("input",e=>{query=e.target.value.trim();filter="Tous";$("#clearSearch").hidden=!query;render()});
$("#clearSearch").addEventListener("click",()=>{query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();$("#searchInput").focus()});
$("#resetBtn").addEventListener("click",()=>{query="";filter="Tous";$("#searchInput").value="";$("#clearSearch").hidden=true;render()});
function baseItems(){if(query)return all;return tab==="favoris"?all.filter(x=>favoriteIds.has(x.id)):DATA[tab]||[]}
function searchText(o){const p=window.BOS_PRO?.[o.id];const extra=p?JSON.stringify(p):"";return normalize([o.title,o.group,o.brand,o.summary,o.principle,o.usage,o.tip,...list(o.steps),...list(o.related),extra].join(" "))}
function renderFilters(items){const groups=[...new Set(items.map(x=>x.group).filter(Boolean))];if(!groups.includes(filter))filter="Tous";const filters=$("#filters");filters.innerHTML=["Tous",...groups].map(g=>'<button type="button" data-filter="'+esc(g)+'" class="'+(filter===g?"active":"")+'" aria-pressed="'+(filter===g)+'">'+esc(g)+'</button>').join("");$$("[data-filter]",filters).forEach(el=>el.addEventListener("click",()=>{filter=el.dataset.filter;render()}))}
function cardSketch(type){
const variant=({window:1,book:2,bounce:3,cove:3,negative:4,moving:5,top:6,cross:7,back:8,direct:9,diffuse:10,double:10,three:7,practical:8,side:9,under:9,cookie:1})[type]||9;
const loc=[[45,76],[74,75],[87,73],[68,55],[55,115],[96,78],[70,60],[82,80],[90,78],[80,70],[76,85]][variant]||[80,70];
return '<svg viewBox="0 0 440 170" aria-hidden="true"><defs><pattern id="gridc" width="23" height="23" patternUnits="userSpaceOnUse"><path d="M23 0H0V23" fill="none" stroke="#708179" stroke-width=".45" opacity=".22"/></pattern><linearGradient id="glowc"><stop stop-color="#c88a52" stop-opacity=".35"/><stop offset="1" stop-color="#c88a52" stop-opacity=".015"/></linearGradient></defs><rect width="440" height="170" fill="#26342f"/><rect width="440" height="170" fill="url(#gridc)"/><path d="M30 20H410V150H30Z" fill="none" stroke="#61746b" stroke-width="1.2"/><path d="M'+loc[0]+' '+loc[1]+'L240 20L240 150Z" fill="url(#glowc)"/><circle cx="'+loc[0]+'" cy="'+loc[1]+'" r="12" fill="#d2a272" stroke="#e5c9a0" stroke-width="1.5"/><circle cx="260" cy="75" r="18" fill="#b3c4b8"/><path d="M243 99q18-10 35 0v18h-35z" fill="#8fae9b"/><path d="M260 117v19" stroke="#b3c4b8"/><rect x="241" y="145" width="38" height="10" rx="3" fill="#d6a16a"/><path d="M241 145l-8-7m46 7 8-7" stroke="#d6a16a" stroke-width="2"/><path d="M'+loc[0]+' '+loc[1]+'L245 69" fill="none" stroke="#d5b28a" stroke-dasharray="5 6" stroke-width="1.5"/>'+([2,3,10].includes(variant)?'<rect x="170" y="28" width="10" height="110" rx="3" fill="#d5d7c7" opacity=".8"/>':'')+([4].includes(variant)?'<rect x="350" y="35" width="12" height="100" rx="2" fill="#101815" stroke="#738078"/>':'')+'<text x="23" y="159" fill="#a5b9ac" font-size="9" font-family="sans-serif" letter-spacing="1.4">BOS / LIGHTING</text></svg>';
}
function photoFor(item){return item.media&&MEDIA[item.media]?MEDIA[item.media]:null}
function card(item){
const m=photoFor(item);const typeLabel=SECTIONS[item.type]||"Guide";
return '<button class="guide-card" type="button" data-open="'+esc(item.id)+'" aria-label="Ouvrir '+esc(item.title)+'"><div class="card-graphic">'+(m?'<img class="card-photo" src="'+esc(m.url)+'" alt="Photographie réelle : '+esc(item.title)+'" loading="lazy" referrerpolicy="no-referrer">':cardSketch(item.diagram))+'<span class="graphic-corner">'+esc(typeLabel.toUpperCase())+'</span></div><div class="card-content"><div class="card-topline"><span class="card-category">'+esc(item.brand?item.brand+" · "+item.group:item.group)+'</span><span class="card-arrow">'+(favoriteIds.has(item.id)?"★":"↗")+'</span></div><h3>'+esc(item.title)+'</h3><p>'+esc(item.summary)+'</p><div class="card-tags"><span>Fiche pratique</span>'+(item.type==="situations"||item.type==="techniques"?'<span>Schéma en plan</span>':"<span>Documentation</span>")+'</div></div></button>';
}
function render(){
favoritesCount();const base=baseItems();
let output=base;
if(query){const terms=normalize(query).split(/\s+/).filter(Boolean);output=output.filter(x=>terms.every(q=>searchText(x).includes(q)))}
renderFilters(output);
if(filter!=="Tous")output=output.filter(x=>x.group===filter);
$("#resultCount").textContent=output.length+" fiche"+(output.length!==1?"s":"")+(query?" · recherche dans toutes les rubriques":"");
$("#cards").innerHTML=output.map(card).join("");
$("#emptyState").hidden=output.length>0;
}
$("#cards").addEventListener("click",e=>{const el=e.target.closest("[data-open]");if(el)openItem(el.dataset.open)});
$("#cards").addEventListener("error",e=>{const img=e.target;if(img.matches("img.card-photo"))img.replaceWith(document.createRange().createContextualFragment(cardSketch("direct")))},true);
const SVG_BASE=(contents)=>'<svg viewBox="0 0 640 390" role="img" aria-label="Schéma technique, vue du dessus, non à l’échelle" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="board" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="#788a80" stroke-opacity=".16" stroke-width="1"/></pattern><marker id="arr" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="#dfb98f" stroke-width="1.2"/></marker></defs><rect width="640" height="390" fill="#24302d"/><rect width="640" height="390" fill="url(#board)"/><rect x="45" y="30" width="550" height="316" fill="none" stroke="#7f9286" stroke-width="1.3"/>'+contents+'<text x="60" y="369" fill="#b0baaf" font-size="10" letter-spacing="1.8" font-family="sans-serif">SCHÉMA D’IMPLANTATION / VUE DE DESSUS</text><text x="580" y="369" fill="#b0baaf" text-anchor="end" font-size="10" font-family="sans-serif">NON À L’ÉCHELLE</text></svg>';
const txt=(x,y,t,anchor="start")=>'<text x="'+x+'" y="'+y+'" fill="#bdc9bb" font-family="sans-serif" font-size="10.5" text-anchor="'+anchor+'" letter-spacing=".4">'+esc(t)+'</text>';
const lamp=(x,y,caption)=>'<g><circle cx="'+x+'" cy="'+y+'" r="21" fill="#c89158" stroke="#f8d9a9" stroke-width="1.5"/><circle cx="'+x+'" cy="'+y+'" r="7" fill="#f9e9cc"/><path d="M'+(x-23)+' '+(y-12)+'l-11-6v36l11-6Z" fill="#c89158"/></g>'+txt(x,y+39,caption,"middle");
const actor=(x,y,label="SUJET")=>'<g><ellipse cx="'+x+'" cy="'+y+'" rx="23" ry="28" fill="#bbd2c2" stroke="#dce9df" stroke-width="1"/><path d="M'+(x-20)+' '+(y+24)+'q20 10 40 0v20h-40Z" fill="#9ebaab"/></g>'+txt(x,y-39,label,"middle");
const camera=(x,y)=>'<g><rect x="'+(x-19)+'" y="'+(y-8)+'" width="38" height="24" rx="5" fill="#bdc8bf"/><path d="M'+(x-8)+' '+(y-8)+'v-13h16v13M'+(x-16)+' '+(y+16)+'l-12 13m44-13 12 13" stroke="#bdc8bf" stroke-width="3" fill="none"/></g>'+txt(x,y+41,"CAMÉRA","middle");
const panel=(x,y,w,h,label,color="#d6dac9")=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="3" fill="'+color+'" fill-opacity=".25" stroke="'+color+'" stroke-width="3"/>'+txt(x+w/2,y-10,label,"middle");
const ray=(a,b,c,d)=>'<path d="M'+a+' '+b+'L'+c+' '+d+'" fill="none" stroke="#dfb98f" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#arr)"/>';
const simple=()=>lamp(150,170,"PROJECTEUR")+actor(450,170)+camera(452,295)+ray(177,170,415,170);
function diagram(type){
let s="",note="";
switch(type){
case "book":s=lamp(110,260,"SOURCE")+panel(195,85,12,120,"BOUNCE")+panel(337,85,9,165,"DIFFUSION")+actor(495,168)+camera(498,291)+ray(125,239,195,171)+ray(207,150,337,164)+ray(349,163,464,170);note="Le faisceau éclaire d’abord le bounce, puis traverse la diffusion.";break;
case "bounce":s=lamp(115,270,"SOURCE")+panel(245,95,12,135,"RÉFLECTEUR")+actor(479,177)+camera(478,293)+ray(131,250,245,166)+ray(257,168,448,175);note="La surface éclairée devient la source secondaire.";break;
case "double":s=lamp(122,172,"SOURCE")+panel(230,85,10,167,"DIFF. 1")+panel(346,74,10,198,"DIFF. 2")+actor(500,179)+camera(501,299)+ray(144,172,230,172)+ray(242,172,346,172)+ray(359,172,469,174);note="La deuxième surface forme le dernier plan diffusant.";break;
case "diffuse":s=lamp(145,178,"SOURCE")+panel(305,76,10,195,"DIFFUSION")+actor(490,179)+camera(495,300)+ray(169,176,304,176)+ray(318,174,458,176);note="La taille apparente du cadre vue du sujet détermine la douceur.";break;
case "cove":s=lamp(115,260,"SOURCE")+panel(218,68,12,158,"REBONDA")+panel(327,58,143,10,"REBOND B")+actor(451,182)+camera(451,292)+ray(133,243,221,157)+ray(233,149,417,172);note="Les grandes surfaces réfléchissantes forment une source enveloppante.";break;
case "negative":s=lamp(150,166,"KEY")+actor(419,173)+camera(422,292)+ray(178,164,389,168)+panel(502,103,13,153,"NEGATIVE FILL","#111816");note="Le noir supprime des retours sur le côté opposé.";break;
case "side":s=lamp(410,81,"SOURCE")+actor(418,185)+camera(420,298)+ray(410,107,413,155);note="Vue de dessus : la direction latérale façonne le visage.";break;
case "back":s=lamp(421,66,"CONTRE-JOUR")+actor(422,193)+camera(422,308)+ray(421,92,421,158);note="Le faisceau arrive depuis l’arrière du sujet.";break;
case "cross":s=lamp(180,80,"SOURCE A")+lamp(466,80,"SOURCE B")+actor(256,212,"SUJET A")+actor(397,212,"SUJET B")+camera(332,309)+ray(191,101,378,195)+ray(450,101,270,194);note="Deux sources se croisent pour servir plusieurs positions.";break;
case "three":s=lamp(145,110,"KEY")+lamp(520,177,"FILL")+lamp(420,66,"BACK")+actor(363,207)+camera(360,304)+ray(160,121,340,187)+ray(497,183,391,205)+ray(413,86,370,178);note="Fonctions key / fill / back : elles ne nécessitent pas toujours trois lampes.";break;
case "top":s=panel(183,77,261,187,"EMPRISE OVERHEAD","#e6c398")+actor(322,191)+camera(324,306)+txt(320,55,"SOURCE EN HAUTEUR — projection sur le sol","middle");note="Le schéma montre l’emprise au sol ; la hauteur n’est pas représentée.";break;
case "practical":s=lamp(225,129,"PRACTICAL")+actor(418,179)+camera(421,298)+ray(248,138,388,166)+panel(290,90,6,78,"RENFORT POSSIBLE");note="Une lampe visible peut motiver une source de renfort hors champ.";break;
case "window":s='<path d="M180 30v60m0 146v110" stroke="#9bafa1" stroke-width="7"/><path d="M180 90v146" stroke="#d3e7de" stroke-width="9" opacity=".7"/>'+txt(187,82,"FENÊTRE")+lamp(82,166,"EXTÉRIEUR")+actor(447,184)+camera(450,304)+ray(106,165,409,181)+panel(290,102,8,142,"DIFF. SI BESOIN");note="Les positions exactes varient selon architecture, recul et axes.";break;
case "moving":s=lamp(197,88,"SOURCE 1")+lamp(468,88,"SOURCE 2")+actor(244,205,"DÉPART")+actor(446,205,"ARRIVÉE")+camera(340,308)+'<path d="M278 214h131" stroke="#a0bcb0" stroke-width="2.5" stroke-dasharray="4 7" marker-end="url(#arr)"/>'+ray(197,110,236,170)+ray(467,110,452,170);note="Couverture d’une trajectoire : mesurer aussi les points intermédiaires.";break;
case "under":s=lamp(434,255,"SOURCE BASSE")+actor(420,167)+camera(419,306)+ray(428,232,423,198);note="L’altitude de la source n’est pas visible sur ce plan.";break;
case "cookie":s=lamp(120,175,"SOURCE")+panel(285,124,12,101,"GOBO","#ad9e87")+actor(485,179)+camera(491,303)+ray(141,175,282,175)+ray(301,174,454,177);note="L’obstacle structure des ombres sur le sujet ou le décor.";break;
default:s=simple();note="Implantation de principe, à adapter au cadre et au décor.";}
return '<div class="diagram-wrap"><div class="diagram-head"><span>IMPLANTATION DE PRINCIPE</span><span>VUE DE DESSUS · SCHÉMATIQUE</span></div>'+SVG_BASE(s)+'<div class="diagram-footer">'+esc(note)+'</div></div>';
}
function section(head,body){return '<section class="detail-section"><h3>'+esc(head)+'</h3>'+body+'</section>'}
function paras(s){return s?'<p>'+esc(s)+'</p>':""}
function bullets(items,ordered=false){if(!items||!items.length)return"";let tag=ordered?"ol":"ul";return '<'+tag+'>'+items.map(t=>'<li>'+esc(t)+'</li>').join("")+'</'+tag+'>'}
function sourceList(item){const found=list(item.sources).map(k=>SOURCES[k]).filter(Boolean);
return found.length?section("Sources et documentation",'<div class="sources-list">'+found.map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+' ↗</a>').join("")+'</div><p>Vérification documentaire : '+esc(window.BOS_REFERENCE_DATE||"2026")+'. Les documents et les versions de matériel peuvent évoluer.</p>'):""}
function related(item){const found=list(item.related).map(id=>find(id)).filter(Boolean).slice(0,12);if(!found.length)return"";return section("À explorer également",'<div class="links-list">'+found.map(o=>'<button type="button" data-related="'+esc(o.id)+'">'+esc(o.title)+' ↗</button>').join("")+'</div>')}
function materialSpecs(item){const entries=Object.entries(item.specs||{});return entries.length?section("Repères constructeur",'<div class="specs">'+entries.map(([k,v])=>'<div class="spec"><strong>'+esc(k)+'</strong><span>'+esc(v)+'</span></div>').join("")+'</div><p>Comparer seulement des valeurs mesurées dans des conditions identiques (optique, distance, mode, CCT).</p>'):""}
function mainDetails(item){
let body="";
if(item.principle)body+=section(item.type==="projecteurs"?"Particularités":"Comprendre le principe",paras(item.principle));
if(item.steps&&item.steps.length)body+=section("Mise en place — étape par étape",bullets(item.steps,true));
if(item.usage)body+=section("Pour quoi l’utiliser ?",paras(item.usage));
if(item.result)body+=section("Rendu recherché",paras(item.result));
if(item.limits)body+=section("Limites et points de vigilance",paras(item.limits));
if(item.tip)body+='<div class="tip"><strong>Conseil de plateau</strong>'+esc(item.tip)+'</div>';
return body;
}
function showPhotograph(item){
const media=photoFor(item);
if(media)return '<figure class="detail-photo"><img src="'+esc(media.url)+'" alt="Photographie réelle liée à '+esc(item.title)+'" loading="eager" referrerpolicy="no-referrer"><figcaption>'+esc(media.credit)+' — <a href="'+esc(media.page)+'" target="_blank" rel="noopener noreferrer">Voir le document et les crédits ↗</a>. Photo non retouchée et hébergée par sa source.</figcaption></figure>';
const search=encodeURIComponent(item.title+" film lighting");
return '<div class="photo-status" id="dynamicPhoto"><b>Photographie documentaire</b><span class="photo-message">Recherche d’un fichier photographique sous licence libre…</span><div class="photo-actions"><a href="https://commons.wikimedia.org/w/index.php?search='+search+'&title=Special%3AMediaSearch&type=image" target="_blank" rel="noopener noreferrer">Chercher des photos réelles ↗</a>'+(item.type==="projecteurs"?'<a href="'+esc((SOURCES[list(item.sources)[0]]||SOURCES.arri).url)+'" target="_blank" rel="noopener noreferrer">Photos constructeur ↗</a>':"")+'</div></div>';
}

/* V1.1 — Carnet technique avancé */
const PRO=window.BOS_PRO||{};
const PRO_SOURCES=window.BOS_PRO_SOURCES||{};
const proPara=text=>'<p>'+esc(text)+'</p>';
const proList=entries=>'<ul class="pro-bullet-list">'+list(entries).map(v=>'<li>'+esc(v)+'</li>').join("")+'</ul>';
function proAnchorNav(){
const links=[["pro-configs","Configurations"],["pro-camera","Caméra"],["pro-color","Peaux / couleur"],["pro-traps","Pièges"],["pro-kit","Projecteurs"],["pro-checks","Contrôle"],["pro-evidence","Références"]];
return '<nav class="pro-anchors" aria-label="Accès rapide aux chapitres">'+links.map(([id,label])=>'<button type="button" data-scroll="'+id+'">'+esc(label)+'</button>').join("")+'</nav>';
}
function proDiagram(item){
if(!["day-for-night","night-skin","window-night","moonlight","exterior-night","night-day-interior","interior-night-studio","window-sun","window-sky","moving-soft"].includes(item.id))return"";
const isWindow=/window|night-day-interior/.test(item.id);
const isOutdoor=/moonlight|day-for-night|exterior-night/.test(item.id);
const isMovement=item.id==="moving-soft";
let svg;
if(isMovement)svg=panel(140,70,16,232,"GRANDE SOURCE","#e6d5b3")+actor(360,137,"A")+actor(470,240,"B")+camera(420,312)+'<path d="M365 168Q385 210 450 231" fill="none" stroke="#dfb98f" stroke-width="2" stroke-dasharray="7 7" marker-end="url(#arr)"/>'+txt(320,65,"PARCOURS DES ACTEURS");
else if(isWindow)svg='<path d="M210 30V107M210 235V345" stroke="#a6b9ac" stroke-width="8"/><path d="M210 107V235" stroke="#d4e4d7" stroke-width="9" opacity=".9"/>'+txt(213,100,"FENÊTRE")+lamp(92,145,"SOURCE EXTÉRIEURE")+actor(412,164,"PERSONNAGE")+camera(411,300)+ray(115,145,378,164)+panel(509,103,10,152,"NEGATIVE FILL","#111816");
else if(isOutdoor)svg=lamp(152,79,"LUNE / SOLEIL")+actor(350,196,"SUJET")+camera(350,313)+ray(176,99,328,175)+panel(462,128,12,120,"NEG / FLAG","#161b18")+'<path d="M45 270h550" stroke="#576a5e" stroke-width="2" stroke-dasharray="5 8"/>'+txt(70,288,"ARRIÈRE-PLAN");
else svg=lamp(150,113,"KEY")+panel(274,91,11,167,"MODIFICATEUR")+actor(424,172)+camera(423,299)+ray(172,123,272,153)+ray(288,156,393,169);
return '<div class="pro-diagram"><div class="pro-diagram-head"><b>PLAN DE PRINCIPE / 01</b><span>Vue de dessus · non à l’échelle</span></div>'+SVG_BASE(svg)+'<p>Schéma conceptuel : orientations et accessoires à adapter au cadre, aux dimensions, à la sécurité et à la lumière réellement mesurée.</p></div>';
}
function proEquip(item){
return list(item.kit).map(ref=>{
const target=find(ref.id);if(!target)return "";
return '<article class="pro-equip"><div><strong>'+esc(target.brand||"MATÉRIEL")+'</strong><button type="button" data-related="'+esc(target.id)+'">'+esc(target.title)+' ↗</button><small>'+esc(ref.role||"")+'</small></div><p>'+esc(ref.reason||"")+'</p></article>';
}).join("");
}
function proDetail(item){
const p=PRO[item.id];if(!p)return"";
const setups=list(p.variants).map((v,i)=>{
const linked=list(v.kit).map(id=>find(id)).filter(Boolean);
return '<article class="pro-setup"><div class="pro-setup-top"><span class="pro-number">'+String(i+1).padStart(2,"0")+'</span><h4>'+esc(v.title)+'</h4></div><p class="pro-when">'+esc(v.when||"")+'</p><div class="pro-setup-grid"><div><b>Implantation</b>'+proPara(v.setup||"")+'</div><div><b>Contrôle caméra</b>'+proPara(v.camera||"")+'</div></div><p class="pro-why"><b>Logique :</b> '+esc(v.why||"")+'</p>'+(linked.length?'<div class="pro-mini-kit"><span>Sources / accessoires</span>'+linked.map(o=>'<button type="button" data-related="'+esc(o.id)+'">'+esc(o.title)+' ↗</button>').join("")+'</div>':"")+'</article>';
}).join("");
const problems=list(p.traps).map(v=>'<article class="pro-issue"><div class="pro-issue-title"><span>PIÈGE</span><h4>'+esc(v.symptom||"")+'</h4></div><div><strong>Cause probable</strong><p>'+esc(v.cause||"")+'</p><strong>Diagnostic / correction</strong><p>'+esc(v.fix||"")+'</p></div></article>').join("");
const citations=list(p.refs).map(id=>PRO_SOURCES[id]).filter(Boolean).map(v=>'<a target="_blank" rel="noopener noreferrer" href="'+esc(v.url)+'">'+esc(v.name)+' ↗</a>').join("");
return '<div class="pro-intro"><span>FICHE DE TRAVAIL · '+esc(p.level||"CHEF OPÉRATEUR")+'</span><h3>'+esc(p.headline||"")+'</h3><p>'+esc(p.intent||"")+'</p></div>'+
proAnchorNav()+(photoFor(item)?showPhotograph(item):"")+proDiagram(item)+
'<section id="pro-configs" class="pro-section"><div class="pro-chapter"><span>01</span><div><h3>Configurations de plateau</h3><p>Plusieurs réponses possibles à une même intention. Les implantations ne sont pas des prescriptions de matériel.</p></div></div><div class="pro-setups">'+setups+'</div></section>'+
'<section id="pro-camera" class="pro-section"><div class="pro-chapter"><span>02</span><h3>Caméra, exposition & essais</h3></div>'+proList(p.camera)+'</section>'+
'<section id="pro-color" class="pro-section"><div class="pro-chapter"><span>03</span><h3>Colorimétrie & carnation</h3></div>'+proList(p.color)+'</section>'+
'<section id="pro-traps" class="pro-section"><div class="pro-chapter"><span>04</span><h3>Pièges et dépannage</h3></div><div class="pro-issues">'+problems+'</div></section>'+
'<section id="pro-kit" class="pro-section"><div class="pro-chapter"><span>05</span><h3>Projecteurs adaptés / usages</h3></div><p class="pro-preface">Exemples de projecteurs actuels ou encore présents dans les parcs, à valider chez le loueur. Les puissances ne remplacent pas les photométries correspondant aux optiques choisies.</p><div class="pro-equips">'+proEquip(item)+'</div></section>'+
'<section id="pro-checks" class="pro-section"><div class="pro-chapter"><span>06</span><h3>Contrôles avant prise</h3></div><ul class="pro-checklist">'+list(p.controls).map(x=>'<li><span aria-hidden="true">□</span>'+esc(x)+'</li>').join("")+'</ul></section>'+
'<section id="pro-evidence" class="pro-section"><div class="pro-chapter"><span>07</span><h3>Références professionnelles</h3></div><div class="pro-ref-list">'+citations+'</div><p class="pro-disclaimer">Les exemples de configuration sont des propositions éditoriales basées sur les principes documentés, et non des plans de tournage attribués aux professionnels cités. Contrôler les spécifications et la documentation de sécurité du matériel réel.</p></section>';
}
function updateStepper(item){
const members=DATA[item.type]||[],index=members.findIndex(x=>x.id===item.id),n=members.length;
$("#stepperCount").textContent=(SECTIONS[item.type]||"GUIDE").toUpperCase()+" · "+(index+1)+" / "+n;
const groups=[...new Set(members.map(v=>v.group))];
$("#itemJump").innerHTML=groups.map(g=>'<optgroup label="'+esc(g)+'">'+members.filter(v=>v.group===g).map(v=>'<option value="'+esc(v.id)+'"'+(v.id===item.id?" selected":"")+'>'+esc(v.title)+'</option>').join("")+'</optgroup>').join("");
$("#itemJump").value=item.id;
$("#prevItem").disabled=index<=0;
$("#nextItem").disabled=index<0||index>=n-1;
}
function stepMove(delta){
if(!current)return;const item=find(current);if(!item)return;const members=DATA[item.type]||[];
const index=members.findIndex(v=>v.id===item.id);const next=members[index+delta];
if(next)openItem(next.id);
}
$("#prevItem").addEventListener("click",()=>stepMove(-1));
$("#nextItem").addEventListener("click",()=>stepMove(1));
$("#itemJump").addEventListener("change",e=>{if(find(e.target.value))openItem(e.target.value)});

function detailHTML(item){
let isTech=item.type==="techniques"||item.type==="situations";
const advanced=!!PRO[item.id];
return '<div class="detail-kicker">'+esc(SECTIONS[item.type])+' / '+esc(item.group)+'</div><h2 class="detail-title" id="detailTitle">'+esc(item.title)+'</h2><p class="detail-summary">'+esc(item.summary)+'</p><div class="detail-labels">'+(item.brand?'<span>'+esc(item.brand)+'</span>':"")+'<span>'+esc(item.group)+'</span><span>'+(advanced?"Carnet DP · dossier technique":isTech?"Installation illustrée":"Référence de plateau")+'</span></div>'+(advanced?proDetail(item)+'<details class="pro-legacy"><summary>Fiche synthétique & photographie documentaire</summary>'+(photoFor(item)?"":showPhotograph(item))+mainDetails(item)+(isTech?diagram(item.diagram):"")+'</details>':showPhotograph(item)+(isTech?diagram(item.diagram):"")+mainDetails(item)+materialSpecs(item)+(isTech?"":diagram(item.diagram)))+related(item)+sourceList(item);
}
function openItem(id,{fromHash=false}={}){
const item=find(id);if(!item)return;if(!current)previousFocus=document.activeElement;current=id;loadingMedia++;
$("#detailBreadcrumb").textContent="BOS / "+SECTIONS[item.type].toUpperCase()+" / FICHE";
$("#detailScroll").innerHTML=detailHTML(item);
updateStepper(item);
$("#detailOverlay").hidden=false;document.body.classList.add("modal-open");$("#favoriteBtn").textContent=favoriteIds.has(id)?"★":"☆";$("#favoriteBtn").classList.toggle("is-fav",favoriteIds.has(id));
$("#detailScroll").scrollTop=0;$(".detail-panel").focus();
if(!fromHash)history.pushState(null,"","#fiche/"+encodeURIComponent(id));
if(!photoFor(item))loadCommonsPhoto(item,loadingMedia);
const img=$(".detail-photo img");
if(img)img.addEventListener("error",()=>{const fig=img.closest("figure");if(fig)fig.innerHTML='<div class="photo-status"><b>Photo non accessible depuis ce site</b><a href="'+esc(photoFor(item).page)+'" target="_blank" rel="noopener noreferrer">Consulter la photographie sur son site d’origine ↗</a></div>'},{once:true});
}
function closeItem({fromHash=false}={}){
if(!current)return;
$("#detailOverlay").hidden=true;document.body.classList.remove("modal-open");current=null;loadingMedia++;if(!fromHash)history.pushState(null,"","#bibliotheque");if(previousFocus&&previousFocus.isConnected)previousFocus.focus();
}
$("#closeDetail").addEventListener("click",()=>closeItem());
$("#overlayBackdrop").addEventListener("click",()=>closeItem());
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&current)closeItem();if(current&&(e.key==="ArrowLeft"||e.key==="ArrowRight")&&!["INPUT","SELECT","TEXTAREA"].includes(document.activeElement?.tagName)){e.preventDefault();stepMove(e.key==="ArrowRight"?1:-1)}if(current&&e.key==="Tab"){const focusable=$$('button,a[href],input',$(".detail-panel")).filter(x=>!x.disabled&&x.getClientRects().length);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
$("#detailScroll").addEventListener("click",e=>{const btn=e.target.closest("[data-related]");if(btn){openItem(btn.dataset.related);return}const jump=e.target.closest("[data-scroll]");if(jump){const target=document.getElementById(jump.dataset.scroll);if(target)target.scrollIntoView({behavior:"smooth",block:"start"})}});
$("#favoriteBtn").addEventListener("click",()=>{if(!current)return;if(favoriteIds.has(current))favoriteIds.delete(current);else favoriteIds.add(current);persist();const fav=favoriteIds.has(current);$("#favoriteBtn").textContent=fav?"★":"☆";$("#favoriteBtn").classList.toggle("is-fav",fav);render();toast(fav?"Ajouté aux favoris":"Retiré des favoris")});
$("#shareBtn").addEventListener("click",async()=>{if(!current)return;const url=location.origin+location.pathname+"#fiche/"+encodeURIComponent(current);try{await navigator.clipboard.writeText(url);toast("Lien copié")}catch{toast("Lien : "+url)}});
function syncHash(){const match=decodeURIComponent(location.hash).match(/^#fiche\/(.+)$/);if(match){if(match[1]!==current)openItem(match[1],{fromHash:true})}else if(current)closeItem({fromHash:true})}
window.addEventListener("hashchange",syncHash);
function stringText(html){const el=document.createElement("div");el.innerHTML=html||"";return el.textContent.trim()}
async function loadCommonsPhoto(item,request){
const mount=$("#dynamicPhoto");if(!mount)return;
// Recherche exacte : jamais afficher un résultat qui pourrait représenter un autre objet.
const terms=normalize(item.title).replace(/[^\w\s-]/g," ").split(/\s+/).filter(s=>s.length>=4&&!["source","white","light","full","film","cinema","avec","tough","luminaire","panneau"].includes(s));
const q=item.type==="projecteurs"?item.title:item.title+" lighting";
const params=new URLSearchParams({action:"query",generator:"search",gsrsearch:q,gsrnamespace:"6",gsrlimit:"10",prop:"imageinfo",iiprop:"url|mime|extmetadata",iiurlwidth:"960",format:"json",origin:"*"});
try{
const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),6500);
const response=await fetch("https://commons.wikimedia.org/w/api.php?"+params.toString(),{signal:controller.signal,credentials:"omit"});clearTimeout(timeout);
if(!response.ok)throw Error("media");
const data=await response.json();if(request!==loadingMedia||current!==item.id)return;
const pages=Object.values(data.query?.pages||{});
let candidates=pages.filter(p=>p.imageinfo?.[0]?.thumburl&&/^image\/(png|jpeg|webp)/.test(p.imageinfo[0].mime||""));
const candidate=candidates.find(p=>{const name=normalize(p.title).replace("file:","");if(item.type==="projecteurs"){const brand=normalize(item.brand);return name.includes(brand)&&terms.slice(-1).some(t=>name.includes(t))}return terms.length>=1&&terms.every(t=>name.includes(t))});
if(!candidate)throw Error("unverified");
const info=candidate.imageinfo[0], meta=info.extmetadata||{};
const author=stringText(meta.Artist?.value||meta.Credit?.value||"Auteur précisé sur Wikimedia Commons").slice(0,150);
const license=stringText(meta.LicenseShortName?.value||"Licence à consulter").slice(0,60);
const url="https://commons.wikimedia.org/wiki/"+encodeURIComponent(candidate.title.replace(/ /g,"_"));
const fig=document.createElement("figure");fig.className="detail-photo";
const image=document.createElement("img");image.alt="Photographie Wikimedia Commons : "+candidate.title;image.src=info.thumburl;image.loading="eager";
const caption=document.createElement("figcaption");caption.append("Photo réelle : "+candidate.title+" · "+author+" · "+license+" · ");
const anchor=document.createElement("a");anchor.href=url;anchor.target="_blank";anchor.rel="noopener noreferrer";anchor.textContent="Licence et fichier source ↗";caption.append(anchor);
fig.append(image,caption);mount.replaceWith(fig);
}catch{if(request!==loadingMedia||current!==item.id)return;const msg=$(".photo-message",mount);if(msg)msg.textContent="Aucune photographie précisément vérifiée n’a été trouvée automatiquement. Consulte les images du fabricant ou la recherche documentaire, sans substituer une image approximative."}
}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("#installBtn").hidden=false});
$("#installBtn").addEventListener("click",async()=>{if(deferredInstall){const p=deferredInstall;deferredInstall=null;p.prompt();try{await p.userChoice}catch{}$("#installBtn").hidden=true}else toast("Installation : menu du navigateur → Ajouter à l’écran d’accueil")});
window.addEventListener("appinstalled",()=>{$("#installBtn").hidden=true;toast("Application installée")});
if("serviceWorker"in navigator&&location.protocol==="https:")navigator.serviceWorker.register("./sw.js").catch(()=>{});
render();syncHash();
})();