/* BOS LIGHTING GUIDE V2 — static professional reader */
(function(){
"use strict";

var DATA=window.BOS_V2||{principles:[],methods:[],situations:[],cases:[],vocabulary:[],materials:[]};
var VISUAL=(window.BOS_VISUAL_CASES&&window.BOS_VISUAL_CASES.cases)||[];
var byCase=new Map(VISUAL.map(function(x){return [x.id,x]}));
var section="principles";
var query="";

var META={
  principles:{num:"01",title:"Principes",intro:"Révisions courtes de phénomènes qui conditionnent réellement le rendu."},
  methods:{num:"02",title:"Méthodes",intro:"Dispositifs de plateau décrits par leur logique, leurs variables et leurs limites."},
  situations:{num:"03",title:"Situations",intro:"Tournages documentés : plan de feu, BTS, image finale et lecture source par source."},
  cases:{num:"04",title:"Cas de plateau",intro:"Lis la contrainte, pense ton dispositif, puis ouvre les pistes et compare les compromis."},
  vocabulary:{num:"05",title:"Vocabulaire",intro:"Termes de plateau, grip, lumière et colorimétrie à garder actifs."},
  materials:{num:"06",title:"Matériel",intro:"Surfaces et outils de contrôle : ce qu’ils changent réellement dans le trajet lumineux."}
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
    '<div class="bubble-body">'+
      bulletList(item.bullets)+
      (item.watch&&item.watch.length?'<div class="watch"><span>À SURVEILLER</span>'+bulletList(item.watch,"watch-list")+'</div>':"")+
      sourceLink(item.source)+
      (item.tags?'<div class="tags">'+item.tags.map(function(t){return "<span>"+esc(t)+"</span>"}).join("")+"</div>":"")+
    '</div></details>';
}

function methodCard(item){
  return '<details class="bubble method" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.kicker||"METHOD")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary||"")+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+
      bulletList(item.bullets)+
      (item.watch&&item.watch.length?'<div class="watch"><span>LIMITES / PIÈGES</span>'+bulletList(item.watch,"watch-list")+'</div>':"")+
      sourceLink(item.source)+
      (item.tags?'<div class="tags">'+item.tags.map(function(t){return "<span>"+esc(t)+"</span>"}).join("")+"</div>":"")+
    '</div></details>';
}

function materialCard(item){
  return '<details class="bubble material" id="'+esc(item.id)+'">'+
    '<summary><span><small>'+esc(item.type||"MATÉRIEL")+'</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.summary||"")+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body two-col">'+
      '<div><span class="micro-label">UTILISER POUR</span><p>'+esc(item.use||"")+'</p></div>'+
      '<div><span class="micro-label">À SURVEILLER</span><p>'+esc(item.watch||"")+'</p></div>'+
      sourceLink(item.source)+
    '</div></details>';
}

function vocabCard(item,i){
  return '<details class="vocab" id="vocab-'+i+'">'+
    '<summary><span><small>'+esc(item.family||"TERM")+'</small><strong>'+esc(item.term)+'</strong></span><b>⌄</b></summary>'+
    '<div><p>'+esc(item.definition||"")+'</p><p class="nuance">'+esc(item.nuance||"")+'</p></div>'+
  '</details>';
}

function caseCard(item){
  var constraints='<div class="chips">'+arr(item.constraints).map(function(x){return "<span>"+esc(x)+"</span>"}).join("")+"</div>";
  var approaches=arr(item.approaches).map(function(a){
    return '<article class="approach"><h4>'+esc(a.name)+'</h4><p>'+esc(a.idea)+'</p><small>'+esc(a.tradeoff)+'</small></article>';
  }).join("");
  return '<details class="bubble sparring" id="'+esc(item.id)+'">'+
    '<summary><span><small>SPARRING / CAS À RÉSOUDRE</small><strong>'+esc(item.title)+'</strong><em>'+esc(item.setup)+'</em></span><b>⌄</b></summary>'+
    '<div class="bubble-body">'+constraints+
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
    '<div class="bubble-body">'+
      '<p class="focus">'+esc(item.focus||"")+'</p>'+
      '<p>'+esc(c.context||"")+'</p>'+
      '<div class="study-grid">'+media+'</div>'+
      '<div class="positions">'+positions+'</div>'+
      (c.takeaway?'<div class="takeaway"><span>POINT À RETENIR</span><p>'+esc(c.takeaway)+'</p></div>':"")+
      '<a class="source-link" href="'+esc(c.source||"#")+'" target="_blank" rel="noopener noreferrer">'+esc(c.author||"Source originale")+' · source originale ↗</a>'+
    '</div></details>';
}

function renderItems(key,items){
  if(key==="principles")return items.map(principleCard).join("");
  if(key==="methods")return items.map(methodCard).join("");
  if(key==="materials")return items.map(materialCard).join("");
  if(key==="vocabulary")return '<div class="vocab-grid">'+items.map(vocabCard).join("")+'</div>';
  if(key==="cases")return items.map(caseCard).join("");
  if(key==="situations")return items.map(situationCard).join("");
  return "";
}

function render(){
  var meta=META[section];
  $("#sectionKicker").textContent=meta.num+" / "+meta.title.toUpperCase();
  $("#sectionTitle").textContent=meta.title;
  $("#sectionIntro").textContent=meta.intro;
  $$("[data-section]").forEach(function(btn){btn.classList.toggle("active",btn.dataset.section===section)});

  var notice=$("#searchNotice");
  if(query){
    var groups=[];
    Object.keys(META).forEach(function(k){
      var found=(DATA[k]||[]).filter(matches);
      if(found.length)groups.push({key:k,items:found});
    });
    notice.hidden=false;
    notice.textContent="Recherche globale · "+groups.reduce(function(n,g){return n+g.items.length},0)+" résultat(s)";
    $("#content").innerHTML=groups.length?groups.map(function(g){
      return '<section class="result-group"><div class="result-head"><span>'+META[g.key].num+'</span><h3>'+esc(META[g.key].title)+'</h3><small>'+g.items.length+'</small></div>'+renderItems(g.key,g.items)+'</section>';
    }).join(""):'<div class="empty">Aucun résultat.</div>';
  }else{
    notice.hidden=true;
    var list=DATA[section]||[];
    $("#content").innerHTML=renderItems(section,list);
  }
}

$$("[data-section]").forEach(function(btn){
  btn.addEventListener("click",function(){section=btn.dataset.section;query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();$(".workspace").scrollIntoView({behavior:"smooth",block:"start"})});
});

$("#searchInput").addEventListener("input",function(e){query=e.target.value.trim();$("#clearSearch").hidden=!query;render()});
$("#clearSearch").addEventListener("click",function(){query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();$("#searchInput").focus()});

$("#randomBtn").addEventListener("click",function(){
  query="";$("#searchInput").value="";$("#clearSearch").hidden=true;render();
  var items=DATA[section]||[];
  if(!items.length)return;
  var item=items[Math.floor(Math.random()*items.length)];
  var id=section==="vocabulary"?"vocab-"+items.indexOf(item):item.id;
  var el=document.getElementById(id);
  if(el){el.open=true;el.scrollIntoView({behavior:"smooth",block:"center"});toast("Fiche au hasard · "+(item.title||item.term))}
});

document.addEventListener("click",function(e){
  var link=e.target.closest(".tags span");
  if(!link)return;
  query=link.textContent.trim();
  $("#searchInput").value=query;
  $("#clearSearch").hidden=false;
  render();
  $(".workspace").scrollIntoView({behavior:"smooth",block:"start"});
});

render();
})();