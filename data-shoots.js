/* Situations V1.3 — 1 fiche = 1 tournage documenté.
   Le catalogue ancien des scénarios-types est conservé dans Méthodes,
   sans recycler les photos des tournages dans plusieurs rubriques.
   Chaque référence source apparaît une seule fois parmi les Situations.
*/
(()=>{
  const guide=window.BOS_GUIDE;
  const visual=window.BOS_VISUAL_CASES;
  if(!guide||!visual||!Array.isArray(guide.situations))throw Error("Chargement des dossiers de tournage impossible");

  // Les scénarios génériques sont des méthodes de travail et non des tournages distincts.
  const generic=guide.situations.splice(0);
  guide.techniques.push(...generic.map(item=>({
    ...item,
    type:"techniques",
    group:"Configuration type · "+item.group,
    media:"",
    documentationType:"configuration"
  })));

  const lookup=new Map(visual.cases.map(x=>[x.id,x]));
  const selected=[
    {caseId:"josh-bar-wide",id:"shoot-bar-white",group:"Fiction",title:"Bar de nuit — The Bar",
      subtitle:"Nuit reconstituée dans un bar sans fenêtre",
      tags:["Intérieur nuit","LiteMat","Practical","Faux nuit"],
      linked:["night-day-interior","low-ceiling","dialogue","night-skin"],
      context:"Une scène de fiction tournée en journée, mais censée se dérouler la nuit. Josh White choisit un bar en sous-sol sans fenêtres ; quelques LiteMat et des sources de décor suffisent alors à obtenir le rendu recherché.",
      lesson:"C'est le choix du lieu qui rend la configuration simple : en éliminant le jour, chaque source acquiert un rôle lisible.",
      variationId:"josh-bar-close",
      provenance:"Photogramme final, plan large du chef opérateur et BTS de la même scène. Le plan rapproché est regroupé dans cette fiche, pas réutilisé comme deuxième Situation."},
    {caseId:"grant-apartment",id:"shoot-nights-crawling",group:"Clip",title:"Nights Crawling — Appartement dystopique",
      subtitle:"Faisceau à travers persiennes, haze et lumière intégrée",
      tags:["Intérieur nuit","Spotlight","Haze","Practical"],
      linked:["window-night","smoke","night-skin","interior-night-studio"],
      context:"Grant MacAllister construit une nuit de science-fiction dans un appartement de studio : source dure derrière une fenêtre, plafond LED plus diffus et lampes de décor. Le plan de feu du DP, un BTS et un photogramme sont publiés dans le même breakdown.",
      lesson:"Le contraste vient de la hiérarchie : un faisceau marqué dessine l'espace, le plafond reste discret, et les practicals donnent la motivation.",
      provenance:"Plan d'implantation, photo de plateau et image du même décor. Les images ne sont pas nécessairement prises à la même seconde."},
    {caseId:"hall-times-square",id:"shoot-fantastic-four-times-square",group:"Cinéma",title:"Fantastic Four — Times Square de nuit",
      subtitle:"Près de 2 000 practicals, grandes sources et lumière en mouvement",
      tags:["Extérieur nuit","Vortex8","DMX","Grand décor"],
      linked:["exterior-night","moving-pools","plan-sequence","moonlight"],
      context:"Sur un immense Times Square reconstitué, Jess Hall ASC utilise des luminaires de décor, des batteries de Vortex8 sur nacelles et une source mobile simulant un projecteur d'hélicoptère. L'équipe publie le plan lumière de la scène 54, une image de plateau et le résultat.",
      lesson:"Une grande quantité de lumières visibles ne remplace pas une direction de key : les sources de cinéma sculptent la peau, tandis que le DMX organise les zones.",
      provenance:"Plan lumière de la scène 54, BTS de Times Square et photogramme du même passage du film."},
    {caseId:"hall-worldship",id:"shoot-fantastic-four-worldship",group:"Cinéma",title:"Fantastic Four — Intérieur du Worldship",
      subtitle:"Grande ambiance sous-exposée, lueur de lave et visages visibles",
      tags:["Studio","Vortex8","Lave","Lumière intégrée"],
      linked:["interior-night-studio","night-skin","overhead","negatif"],
      context:"Jess Hall ASC éclaire un environnement gigantesque en gardant un fill de grande surface inférieur au key, des sources orangées interactives dans le décor et des sources spéciales dans les accessoires des comédiens. Plan, BTS et résultat correspondent au Worldship.",
      lesson:"Un grand soft n'oblige pas à faire une image claire : le niveau relatif du fill, les noirs et les accents de décor déterminent le caractère nocturne.",
      provenance:"Plan lumière de la scène 83, BTS de la scène Worldship et image finale du film."},
    {caseId:"grant-interview",id:"shoot-fantastic-negrito",group:"Interview",title:"Fantastic Negrito — Entretien en bar",
      subtitle:"Key LiteMat, lumière plus dure et edge froid",
      tags:["Interview","LiteMat","SnapGrid","Nova"],
      linked:["interview","far-side","negatif","practical"],
      context:"Grant MacAllister explique son dispositif d'interview dans un bar chaud : grand key LiteMat 4 + SnapGrid, Aputure 300x plus froid et Nova P300C pour le détachement. Prévisualisation, BTS et image tournée sont documentés.",
      lesson:"Le mélange contrôlé d'une grande source douce, d'un accent plus étroit et d'un contre-jour froid sépare le visage du fond sans perdre la cohérence de la pièce.",
      provenance:"Plan prévisualisé Set.A.Light, BTS et photogramme de l'interview publiés par le DP."}
  ];

  const usedOriginalIds=new Set();
  const usedImages=new Set();
  for(const cfg of selected){
    const caseInfo=lookup.get(cfg.caseId);
    if(!caseInfo)throw Error("Cas de tournage absent : "+cfg.caseId);
    if(usedOriginalIds.has(caseInfo.id))throw Error("Tournage réutilisé : "+caseInfo.id);
    const photos=caseInfo.media||[];
    if(photos.length!==3||photos.some(x=>!x.url)||photos.some(x=>!["plan","bts","frame"].includes(x.role)))throw Error("Triptyque incomplet : "+caseInfo.id);
    for(const photo of photos){
      const url=photo.url;
      if(usedImages.has(url))throw Error("Photographie répétée dans les Situations : "+url);
      usedImages.add(url);
    }
    usedOriginalIds.add(caseInfo.id);
    guide.situations.push({
      id:cfg.id,title:cfg.title,group:cfg.group,summary:cfg.subtitle,
      type:"situations",study:caseInfo,related:cfg.linked,
      description:cfg.context,lesson:cfg.lesson,provenance:cfg.provenance,
      tags:cfg.tags,variationId:cfg.variationId||null,
      sources:[],diagram:"",media:""
    });
  }
  window.BOS_SHOOT_SELECTION={
    originalGenericCount:generic.length,
    caseIds:[...usedOriginalIds],
    imageCount:usedImages.size
  };
})();
