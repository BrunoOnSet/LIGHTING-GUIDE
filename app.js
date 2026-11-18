/* BOS LIGHTING GUIDE V2 — static professional reader */
(function(){
"use strict";

var DATA=window.BOS_V2||{principles:[],methods:[],situations:[],cases:[],vocabulary:[],materials:[],fixtures:[],dossiers:[]};
var VISUAL=(window.BOS_VISUAL_CASES&&window.BOS_VISUAL_CASES.cases)||[];
var byCase=new Map(VISUAL.map(function(x){return [x.id,x]}));
var section="principles";
var query="";
var favoritesMode=false;
var favorites=(function(){try{var x=JSON.parse(localStorage.getItem("bos-lighting-favorites-v1")||"[]");return new Set(Array.isArray(x)?x:[])}catch(e){return new Set()}})();

var META={
  principles:{num:"01",title:"Principes",intro:"Révisions courtes de phénomènes qui conditionnent réellement le rendu."},
  methods:{num:"02",title:"Méthodes",intro:"Dispositifs de plateau décrits par leur logique, leurs variables et leurs limites."},
  situations:{num:"03",title:"Situations",intro:"Tournages documentés : plan de feu, BTS, image finale et lecture source par source."},
  cases:{num:"04",title:"Cas de plateau",intro:"Lis la contrainte, pense ton dispositif, puis ouvre les pistes et compare les compromis."},
  vocabulary:{num:"05",title:"Vocabulaire",intro:"Termes de plateau, grip, lumière et colorimétrie à garder actifs."},
  materials:{num:"06",title:"Accessoires",intro:"Diffusion, réflexion, coupe, projection et outils de grip : fonction réelle et limites."},
  fixtures:{num:"07",title:"Projecteurs",intro:"Sources actuelles et classiques : famille optique, rôle, particularités et contraintes sur le plateau."},
  dossiers:{num:"08",title:"Dossiers",intro:"Lectures de fond, schémas pédagogiques et arbitrages pour développer son regard."}
};

function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
function esc(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function norm(v){return String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function arr(v){return Array.isArray(v)?v:[]}
function toast(msg){var t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(function(){t.classList.remove("show")},1800)}
function sourceLink(s){return s&&s.url?'<a class="source-link" href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label||"Source")+' ↗</a>':""}
function bulletList(items,cls){if(!items||!items.length)return "";return '<ul class="'+(cls||"bullets")+'">'+items.map(function(x){return "<li>"+esc(x)+"</li>"}).join("")+"</ul>"}
function textIndex(obj){return norm(JSON.stringify(obj))}
function matches(obj){return !query||textIndex(obj).indexOf(norm(query))>=0}
function favKey(item){return String(item.id||("vocab:"+norm(item.term)))}
function favoriteButton(item){var k=favKey(item),saved=favorites.has(k);return '<button type="button" class="save-card" data-save="'+esc(k)+'" aria-pressed="'+saved+'">'+(saved?"★ Dans mes favoris":"☆ Garder à relire")+'</button>'}
function updateFavoritesBtn(){var b=$("#favoritesBtn");if(b){b.textContent=favoritesMode?"Tous les articles":"Mes favoris ("+favorites.size+")";b.setAttribute("aria-pressed",String(favoritesMode))}}

function theme(mode){
  document.documentElement.dataset.theme=mode;
  var meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.content=mode==="light"?"#f2f3f0":"#0e1110";
  try{localStorage.setItem("bos-lighting-v2-theme",mode)}catch(e){}
}
theme((function(){try{return localStorage.getItem("bos-lighting-v2-theme")||"dark"}catch(e){return "dark"}})());
$("#themeBtn").addEventListener("click",function(){theme(document.documentElement.dataset.theme==="dark"?"light":"dark")});

var installPrompt=null;
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();installPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").addEventListener("click",async function(){if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("#installBtn").hidden=true});
if("serviceWorker" in navigator)window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js").catch(function(){})});

Object.keys(META).forEach(function(k){
  var el=$("#count-"+k);
  if(el)el.textContent=(DATA[k]||[]).length+" fiches";
});

function principleCard(item){
  return '<details class="bubble" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.kicker||"PRINCIPE")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary||"")+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+
      bulletList(item.bullets)+
      (item.watch&&item.watch.length?'<div class="watch"><span>À SURVEILLER</span>'+bulletList(item.watch,"watch-list")+'</div>':"")+
      sourceLink(item.source)+
      (item.tags?'<div class="tags">'+item.tags.map(function(t){return "<span>"+esc(t)+"</span>"}).join("")+"</div>":"")+
    '</div></details>';
}

function methodCard(item){
  return '<details class="bubble method" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.kicker||"METHOD")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary||"")+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+
      bulletList(item.bullets)+
      (item.watch&&item.watch.length?'<div class="watch"><span>LIMITES / PIÈGES</span>'+bulletList(item.watch,"watch-list")+'</div>':"")+
      sourceLink(item.source)+
      (item.tags?'<div class="tags">'+item.tags.map(function(t){return "<span>"+esc(t)+"</span>"}).join("")+"</div>":"")+
    '</div></details>';
}

function materialCard(item){
  return '<details class="bubble material" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.type||"MATÉRIEL")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary||"")+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body two-col">'+favoriteButton(item)+
      '<div><span class="micro-label">UTILISER POUR</span><p>'+esc(item.use||"")+'</p></div>'+
      '<div><span class="micro-label">À SURVEILLER</span><p>'+esc(item.watch||"")+'</p></div>'+
      sourceLink(item.source)+
    '</div></details>';
}

function vocabCard(item,i){
  return '<details class="vocab" id="vocab-'+i+'">'+
    '<summary><span><small>'+esc(item.family||"TERM")+'</small><strong>'+esc(item.term)+'</strong></span><b>⌄</b></summary>'+
    '<div>'+favoriteButton(item)+'<p>'+esc(item.definition||"")+'</p><p class="nuance">'+esc(item.nuance||"")+'</p></div>'+
  '</details>';
}

function caseCard(item){
  var constraints='<div class="chips">'+arr(item.constraints).map(function(x){return "<span>"+esc(x)+"</span>"}).join("")+"</div>";
  var approaches=arr(item.approaches).map(function(a){
    return '<article class="approach"><h4>'+esc(a.name)+'</h4><p>'+esc(a.idea)+'</p><small>'+esc(a.tradeoff)+'</small></article>';
  }).join("");
  return '<details class="bubble sparring" id="'+esc(item.id)+'">'+
    '<summary><span><small>SPARRING / CAS À RÉSOUDRE</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.setup)+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+constraints+
      '<div class="questions"><span>AVANT D’OUVRIR LES PISTES</span>'+bulletList(item.ask,"watch-list")+'</div>'+
      '<details class="reveal"><summary>Ouvrir les pistes de travail <b>↘</b></summary><div class="approach-grid">'+approaches+'</div></details>'+
    '</div></details>';
}

function situationCard(item){
  var c=byCase.get(item.caseId);
  if(!c){
    return '<details class="bubble"><summary><span><small>SITUATION DOCUMENTÉE</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary)+'</em></span><b>⌄</b></summary><div class="bubble-body"><p>Archive visuelle introuvable.</p></div></details>';
  }
  var media=arr(c.media).map(function(m){
    return '<figure class="study-media"><a href="'+esc(m.url)+'" target="_blank" rel="noopener noreferrer"><img src="'+esc(m.url)+'" loading="lazy" referrerpolicy="no-referrer" alt="'+esc(m.title||"Visuel de tournage")+'"></a><figcaption><b>'+esc(m.title||"")+'</b><span>'+esc(m.caption||"")+'</span></figcaption></figure>';
  }).join("");
  var positions=arr(c.positions).map(function(p){
    return '<article class="position"><h4>'+esc(p.name||"")+'</h4><p><b>Placement.</b> '+esc(p.where||"")+'</p><p><b>Fonction.</b> '+esc(p.purpose||"")+'</p><p><b>Conséquence.</b> '+esc(p.consequence||"")+'</p></article>';
  }).join("");
  return '<details class="bubble situation" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(c.production||"SITUATION")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary)+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+
      '<p class="focus">'+esc(item.focus||"")+'</p>'+
      '<p>'+esc(c.context||"")+'</p>'+
      '<div class="study-grid">'+media+'</div>'+
      '<div class="positions">'+positions+'</div>'+
      (c.takeaway?'<div class="takeaway"><span>POINT À RETENIR</span><p>'+esc(c.takeaway)+'</p></div>':"")+
      '<a class="source-link" href="'+esc(c.source||"#")+'" target="_blank" rel="noopener noreferrer">'+esc(c.author||"Source originale")+' · source originale ↗</a>'+
    '</div></details>';
}


function diagramSvg(kind){
  var diagrams={
    specular:'<path d="M180 175 L235 175" stroke="#A6B6BB" stroke-width="5" stroke-linecap="round"/><path d="M207 175V65" stroke="#647A85" stroke-dasharray="4 5"/><path d="M70 57L207 175L341 57" fill="none" stroke="#F5BA78" stroke-width="3"/><circle cx="70" cy="57" r="14" fill="#D1A367"/><circle cx="341" cy="57" r="14" fill="#7C9DAA"/><text x="70" y="30" text-anchor="middle">SOURCE</text><text x="341" y="30" text-anchor="middle">CAMÉRA</text><text x="207" y="203" text-anchor="middle">SURFACE RÉFLÉCHISSANTE</text><text x="218" y="92" font-size="10">NORMALE</text>',
    beam:'<rect x="24" y="98" width="44" height="32" rx="5" fill="#7A8E99"/><path d="M68 114L383 20L383 206Z" fill="#DCB064" fill-opacity=".10" stroke="#B79457" stroke-dasharray="5 5"/><path d="M68 114L383 67L383 161Z" fill="#EAC073" fill-opacity=".22" stroke="#EAC073" stroke-width="2"/><path d="M68 114H385" stroke="#687F8A" stroke-dasharray="4 5"/><text x="220" y="53" text-anchor="middle">FIELD • 10 %</text><text x="224" y="103" text-anchor="middle">BEAM • 50 %</text><text x="43" y="85" text-anchor="middle">SOURCE</text><text x="224" y="199" text-anchor="middle">COUPE DU FAISCEAU</text>',
    surface:'<rect x="14" y="68" width="62" height="62" rx="6" fill="#354954" stroke="#7899A6"/><text x="45" y="100" text-anchor="middle">SOURCE</text><path d="M76 100H145" stroke="#EBC27A" stroke-width="3"/><rect x="145" y="53" width="28" height="92" fill="#E5BE84" fill-opacity=".46" stroke="#E5BE84"/><path d="M173 100L254 59M173 100H254M173 100L254 143" stroke="#EBC27A" stroke-width="2"/><rect x="254" y="32" width="7" height="140" fill="#7DA6AF"/><path d="M261 101L342 45M261 101L342 101M261 101L342 158" stroke="#8BC6C6" stroke-dasharray="5 4" stroke-width="2"/><circle cx="364" cy="101" r="20" fill="none" stroke="#9DBDAE" stroke-width="2"/><text x="159" y="28" text-anchor="middle">REBON(D)</text><text x="258" y="202" text-anchor="middle">DIFFUSION</text><text x="362" y="142" text-anchor="middle">SUJET</text>',
    window:'<rect x="26" y="16" width="388" height="194" rx="4" fill="#15222C" stroke="#304A58"/><path d="M274 22V85M274 140V205" stroke="#7C959E" stroke-width="8"/><path d="M274 85V140" stroke="#E8C79D" stroke-width="6"/><circle cx="360" cy="111" r="15" fill="#E6B56B"/><path d="M346 103L245 66L109 99M346 116L245 147L118 165" fill="none" stroke="#E6B56B" stroke-width="2"/><ellipse cx="130" cy="134" rx="13" ry="20" fill="#9CBFB2"/><text x="359" y="80" text-anchor="middle">SOLEIL</text><text x="125" y="189" text-anchor="middle">COMÉDIEN</text><text x="277" y="20" text-anchor="middle">FENÊTRE</text><path d="M306 163L276 163L206 192" stroke="#7FA4B4" stroke-dasharray="4 4"/><text x="341" y="185" text-anchor="middle">CIEL / REBOND</text>',
    walk:'<path d="M28 172H393" stroke="#8BA69A" stroke-width="4" stroke-dasharray="8 8"/><path d="M78 40L36 161L225 161Z" fill="#E0B16D" fill-opacity=".16"/><path d="M327 40L200 161L396 161Z" fill="#A6C1B9" fill-opacity=".16"/><rect x="47" y="27" width="62" height="21" rx="4" fill="#C5A271"/><rect x="295" y="27" width="62" height="21" rx="4" fill="#799E9E"/><text x="78" y="20" text-anchor="middle">ZONE A</text><text x="325" y="20" text-anchor="middle">ZONE B</text><circle cx="83" cy="171" r="12" fill="#D5DCD6"/><circle cx="207" cy="171" r="12" fill="#C5D1C7"/><circle cx="327" cy="171" r="12" fill="#D5DCD6"/><text x="83" y="204" text-anchor="middle">A</text><text x="207" y="204" text-anchor="middle">TRANSITION</text><text x="327" y="204" text-anchor="middle">B</text>',
    book:'<rect x="25" y="132" width="54" height="28" rx="4" fill="#738996"/><path d="M79 146L156 51L179 62L79 146" fill="#D0B371" fill-opacity=".25" stroke="#E5C58A" stroke-width="2"/><path d="M154 30L187 80" stroke="#F4D59F" stroke-width="8"/><path d="M170 55L253 105M170 55L253 145" stroke="#D8A966" stroke-width="2"/><path d="M257 79V178" stroke="#8CBCC2" stroke-width="6"/><path d="M260 95L349 123M260 158L349 123" stroke="#9BBBC2" stroke-dasharray="4 4" stroke-width="2"/><circle cx="363" cy="123" r="17" fill="none" stroke="#C5D7D4" stroke-width="3"/><text x="44" y="179" text-anchor="middle">SOURCE</text><text x="170" y="21" text-anchor="middle">BOUNCE</text><text x="265" y="197" text-anchor="middle">DIFFUSION</text><text x="362" y="163" text-anchor="middle">SUJET</text>',
    projection:'<rect x="21" y="89" width="64" height="45" rx="5" fill="#6D8592"/><path d="M85 110L358 34L358 190Z" fill="#E6B66C" fill-opacity=".15" stroke="#E6B66C" stroke-width="2"/><rect x="132" y="71" width="7" height="76" fill="#E5C98C"/><path d="M136 109L358 83M136 109L358 140" stroke="#E7C17D" stroke-dasharray="5 4" stroke-width="2"/><path d="M358 28V196" stroke="#98B6B8" stroke-width="6"/><rect x="353" y="83" width="12" height="59" fill="#E8C680" fill-opacity=".65"/><text x="56" y="78" text-anchor="middle">DÉCOUPE</text><text x="135" y="59" text-anchor="middle">GOBO</text><text x="359" y="215" text-anchor="middle">SURFACE PROJETÉE</text>'
  };
  if(!diagrams[kind])return "";
  var labels={specular:"Trajet spéculaire de la source vers la caméra",beam:"Cônes illustratifs du beam et du field angle",surface:"Trajet illustratif de lumière réfléchie et transmise",window:"Faux jour à travers une fenêtre vu du dessus",walk:"Zones de lumière recouvrantes sur le trajet d'un comédien",book:"Trajet du book light, rebond puis diffusion",projection:"Gobo dans l'optique de projection et image formée"};
  return '<figure class="teaching-diagram"><svg viewBox="0 0 430 226" role="img" aria-label="'+esc(labels[kind])+'" xmlns="http://www.w3.org/2000/svg"><rect width="430" height="226" rx="12" fill="#111D25"/><g fill="#DCE4E4" font-family="Arial,sans-serif" font-size="11">'+diagrams[kind]+'</g></svg><figcaption>Schéma de principe BOS, simplifié et non à l’échelle. Ce n’est pas un plan de feu de tournage réel.</figcaption></figure>';
}
function fixtureCard(item){
  var photo=item.photo?'<figure class="fixture-photo"><img src="'+esc(item.photo)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer" alt="Photographie réelle : '+esc(item.brand+" "+item.name)+'"><figcaption>'+esc(item.credit||"Photo produit")+' · illustration documentaire du modèle</figcaption></figure>':
    '<div class="fixture-no-photo"><span>PHOTO PRODUIT</span><p>Consulter les visuels documentaires sur la page du fabricant.</p></div>';
  return '<details class="bubble fixture" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.brand+' / '+item.family)+'</small><strong>'+esc(item.name)+'</strong><em>'+esc(item.role)+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+
      '<div class="fixture-grid">'+photo+'<div class="fixture-notes"><h4>Ce qui le distingue</h4><p>'+esc(item.strength)+'</p><h4>À vérifier sur le plateau</h4><p>'+esc(item.limits)+'</p>'+sourceLink(item.source)+'</div></div>'+
    '</div></details>';
}
function dossierCard(item){
  function block(title,lines){return '<section class="chapter-section"><h4>'+esc(title)+'</h4>'+bulletList(arr(lines))+'</section>'}
  return '<details class="bubble dossier" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.kicker||"DOSSIER")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary)+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+favoriteButton(item)+'<p class="chapter-intro">'+esc(item.intro)+'</p>'+diagramSvg(item.diagram)+
    block("Comprendre le phénomène",item.science)+
    block("Raisonnement sur le plateau",item.plateau)+
    block("Choix et compromis",item.alternatives)+
    '<div class="chapter-source"><span class="micro-label">ALLER À LA SOURCE</span>'+sourceLink(item.source)+'</div>'+
    '</div></details>';
}

function renderItems(key,items){
  if(key==="principles")return items.map(principleCard).join("");
  if(key==="methods")return items.map(methodCard).join("");
  if(key==="materials")return items.map(materialCard).join("");
  if(key==="vocabulary")return '<div class="vocab-grid">'+items.map(vocabCard).join("")+'</div>';
  if(key==="cases")return items.map(caseCard).join("");
  if(key==="situations")return items.map(situationCard).join("");
  if(key==="fixtures")return items.map(fixtureCard).join("");
  if(key==="dossiers")return items.map(dossierCard).join("");
  return "";
}

function render(){
  var meta=META[section];
  $("#sectionKicker").textContent=meta.num+" / "+meta.title.toUpperCase();
  $("#sectionTitle").textContent=meta.title;
  $("#sectionIntro").textContent=meta.intro;
  $$("[data-section]").forEach(function(btn){btn.classList.toggle("active",btn.dataset.section===section)});

  var notice=$("#searchNotice");
  if(query||favoritesMode){
    var groups=[];
    Object.keys(META).forEach(function(k){
      var found=(DATA[k]||[]).filter(function(x){return matches(x)&&(!favoritesMode||favorites.has(favKey(x)))});
      if(found.length)groups.push({key:k,items:found});
    });
    notice.hidden=false;
    notice.textContent=(favoritesMode?"Mes favoris":"Recherche globale")+" · "+groups.reduce(function(n,g){return n+g.items.length},0)+" résultat(s)";
    $("#content").innerHTML=groups.length?groups.map(function(g){
      return '<section class="result-group"><div class="result-head"><span>'+META[g.key].num+'</span><h3>'+esc(META[g.key].title)+'</h3><small>'+g.items.length+'</small></div>'+renderItems(g.key,g.items)+'</section>';
    }).join(""):'<div class="empty">'+(favoritesMode?"Aucun favori enregistré. Ouvre une fiche et sélectionne « Garder à relire ».":"Aucun résultat.")+'</div>';
  }else{
    notice.hidden=true;
    var list=DATA[section]||[];
    $("#content").innerHTML=renderItems(section,list);
  }
}

$$("[data-section]").forEach(function(btn){
  btn.addEventListener("click",function(){favoritesMode=false;updateFavoritesBtn();section=btn.dataset.section;query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();$(".workspace").scrollIntoView({behavior:"smooth",block:"start"})});
});

$("#searchInput").addEventListener("input",function(e){query=e.target.value.trim();$("#clearSearch").hidden=!query;render()});
$("#clearSearch").addEventListener("click",function(){query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();$("#searchInput").focus()});

$("#randomBtn").addEventListener("click",function(){
  favoritesMode=false;updateFavoritesBtn();query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();
  var items=DATA[section]||[];
  if(!items.length)return;
  var item=items[Math.floor(Math.random()*items.length)];
  var id=section==="vocabulary"?"vocab-"+items.indexOf(item):item.id;
  var el=document.getElementById(id);
  if(el){el.open=true;el.scrollIntoView({behavior:"smooth",block:"center"});toast("Fiche au hasard · "+(item.title||item.term))}
});

$("#favoritesBtn").addEventListener("click",function(){favoritesMode=!favoritesMode;query="";$("#searchInput").value="";$("#clearSearch").hidden=true;updateFavoritesBtn();render();$(".workspace").scrollIntoView({behavior:"smooth",block:"start"})});
updateFavoritesBtn();
document.addEventListener("click",function(e){
  var target=e.target.closest("[data-save]");
  if(!target)return;
  e.preventDefault();e.stopPropagation();
  var key=target.getAttribute("data-save");
  if(favorites.has(key))favorites.delete(key);else favorites.add(key);
  try{localStorage.setItem("bos-lighting-favorites-v1",JSON.stringify(Array.from(favorites)))}catch(err){}
  updateFavoritesBtn();
  target.setAttribute("aria-pressed",String(favorites.has(key)));
  target.textContent=favorites.has(key)?"★ Dans mes favoris":"☆ Garder à relire";
  if(favoritesMode)render();
});
document.addEventListener("click",function(e){
  var link=e.target.closest(".tags span");
  if(!link)return;
  favoritesMode=false;updateFavoritesBtn();query=link.textContent.trim();
  $("#searchInput").value=query;
  $("#clearSearch").hidden=false;
  render();
  $(".workspace").scrollIntoView({behavior:"smooth",block:"start"});
});

render();
})();