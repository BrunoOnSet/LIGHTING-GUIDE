/* Carnet personnel DP — données de travail avancées.
   Informations vérifiées et recommandations éditoriales distinctes ; aucune valeur universelle d'exposition.
   Une configuration est une proposition possible, pas la reproduction d'un tournage particulier. */
window.BOS_PRO = Object.create(null);
window.BOS_PRO_SOURCES = {
  fury:{name:"fxguide — Mad Max: Fury Road, John Seale et Eric Whipp : étude technique de nuit américaine",url:"https://www.fxguide.com/fxfeatured/a-graphic-tale-the-visual-effects-of-mad-max-fury-road/"},
  furyGrade:{name:"FilmLight — Eric Whipp, retour coloriste sur les scènes Day for Night de Fury Road",url:"https://www.filmlight.ltd.uk/customers/meet-the-colourist/eric_whipp.php"},
  ascNight:{name:"American Cinematographer — Walking Dead : choix du clair de lune et des peaux",url:"https://theasc.com/article/walking-dead-and-loving-it-part-ii-of-ii/"},
  ascSkin:{name:"American Cinematographer — Color Fidelity in LED Volumes : rendu spectral de la peau",url:"https://theasc.com/article/color-fidelity-in-led-volumes/"},
  ascSkin2:{name:"American Cinematographer — Color Fidelity in LED Volumes, partie 2",url:"https://theasc.com/article/color-fidelity-in-led-volumes-part-two/"},
  ascOutlander:{name:"American Cinematographer — Outlander : couleurs et peaux en nuit intérieure",url:"https://theasc.com/article/outlander-love-is-a-battlefield/"},
  bhDay:{name:"B&H Explora — Day for Night Cinematography, Steven Gladstone",url:"https://www.bhphotovideo.com/explora/video/tips-and-solutions/lighting-tips-the-basics-of-day-for-night-cinematography"},
  kroll:{name:"Noam Kroll — Étalonnage day-for-night",url:"https://noamkroll.com/color-grading-tutorial-creating-a-day-for-night-look/"},
  krollSet:{name:"Noam Kroll — Tournage et postproduction day-for-night",url:"https://noamkroll.com/5-easy-tips-for-achieving-excellent-day-for-night-shots-on-set-and-in-post/"},
  colorFinale:{name:"Color Finale — Day into night, luminance et masques",url:"https://www.api.colorfinale.com/blog/post/cf-day-into-night-08-25"},
  arriX:{name:"ARRI — Photométrie et caractéristiques SkyPanel X",url:"https://www.arri.com/en/lighting/led-panel-lights/skypanel-x/tech-data"},
  arriMoon:{name:"ARRI — Victoria Panero, reproduction du clair de lune avec Orbiter",url:"https://www.arri.com/news-en/dp-victoria-panero-working-with-arri-orbiter"},
  arriSet:{name:"ARRI — Thomas Garreau, SkyPanel X en extérieur nuit et soleil",url:"https://www.arri.com/news-fr/gaffer-thomas-garreau-lights-up-emilia-perez-with-arri"},
  arriLemerle:{name:"ARRI — Guillaume Lemerle, ambiance nuit et projection de fonds",url:"https://www.arri.com/news-en/gaffer-guillaume-lemerle-passion-for-lighting-with-arri-tools"},
  arriSensor:{name:"ARRI — Matching des sources LED et capteurs ALEXA",url:"https://www.arri.com/en/learn/lighting/arri-alexa-modes"},
  arriApps:{name:"ARRI — applications du SkyPanel X, night for day, moonlight",url:"https://www.arri.com/en/lighting/led-panel-lights/skypanel-x/applications"},
  aputureCS:{name:"Aputure — STORM CS32 : fiche constructeur",url:"https://aputure.com/en-US/products/storm-cs32"},
  aputureXT:{name:"Aputure — STORM XT52 : fiche constructeur et photométrie",url:"https://aputure.com/en-US/products/storm-xt52"},
  aputure1200:{name:"Aputure — STORM 1200x : fiche constructeur",url:"https://aputure.com/en-US/products/storm-1200x"},
  nanlux:{name:"Nanlux — catalogue officiel et fiches Evoke",url:"https://www.nanlux.com/service-productDetail"},
  roger:{name:"Roger Deakins — discussion sur le cove lighting",url:"https://www.rogerdeakins.com/forums/topic/cove-lightning/"},
  rosco:{name:"Rosco — tissus et grands cadres",url:"https://emea.rosco.com/sites/default/files/content/resource/2023-08/Rosco_Butterflies_and_Overheads_data_sheet_0.pdf"},
  matte:{name:"Matthews — Supports et accroches de plateau",url:"https://www.msegrip.com/collections/c-stands"}
};
const register=(id,obj)=>window.BOS_PRO[id]=obj;
register("day-for-night",{
  headline:"Nuit américaine : tourner de jour, fabriquer la nuit à l'image",
  level:"DP / étalonnage / VFX",depth:"Dossier avancé",priority:1,
  intent:"Préserver des indices nocturnes crédibles au tournage, puis construire la nuit dans une chaîne de couleur contrôlée. Une sous-exposition arbitraire n'est pas une méthode.",
  variants:[
    {title:"Soleil arrière trois-quarts, extérieur naturel",when:"Pour une forêt, une route, une plaine sans ciel dominant.",setup:"Soleil hors cadre en contre-jour latéral, visages majoritairement à l'ombre, fond choisi pour conserver un contraste dessiné. Un bounce blanc discret ou une petite soft source peut rendre l'œil si nécessaire.",camera:"Log 10 bits / RAW selon caméra. Exposer pour conserver les hautes lumières et la texture des ombres ; créer une LUT d'essai night pour le moniteur. Éviter de décider seul d'un « -2 IL » sur le plateau.",why:"L'angle du soleil fournit une direction proche de celle d'une source lunaire de fiction ; cela se défend mieux qu'un soleil de face.",kit:["ultrabounce","black-solid","net-single"]},
    {title:"Jour couvert ou ombre ouverte",when:"Pour un rendu nocturne plus doux ou des portraits rapprochés.",setup:"Cadrer hors du ciel blanc, supprimer les taches de soleil, garder un fond sombre. Installer un grand négatif du côté caméra pour recréer une direction ; envisager une source latérale contrôlée sur le visage.",camera:"Test en conditions de livraison avec costume, peau et décor, car la scène risque de manquer de relief.",why:"La douceur est crédible mais le jour plat devient très vite « jour assombri » si aucune lumière n'est motivée.",kit:["floppy","duvetyne","storm-700x"]},
    {title:"Plans larges avec ciel : stratégie VFX",when:"Lorsque les cadrages imposent une grande portion de ciel ou un horizon clair.",setup:"Définir dès le découpage le remplacement ou traitement du ciel, les masques nécessaires et les mouvements de caméra. Capturer les références d'éclairage, HDRI, textures et cartes de tracking demandées par le superviseur VFX.",camera:"Exposer pour conserver des séparations exploitables ; prévoir des plates et un pipeline log/ACES documenté.",why:"Un ciel de jour blanc ou bleu trop lumineux ne se corrige pas toujours proprement par une simple transformation globale.",kit:["black-solid"]}
  ],
  camera:[
    "Balance des blancs : fixer une référence cohérente dans toute la séquence. Une WB plus basse que la lumière du jour rend l'ambiance plus bleue, mais les valeurs restent un choix artistique à tester, non une consigne universelle.",
    "Surveiller highlight clipping sur les chemises blanches, les frontaux et les reflets spéculaires : si les informations ne sont plus enregistrées, l'étalonnage ne peut pas les reconstruire.",
    "Prévoir un monitoring night LOOK validé et enregistrer la prise dans un format suffisamment robuste. Une image de contrôle sombre n'implique pas de sacrifier le négatif numérique.",
    "ND : vérifier les dominantes IR sur tissus sombres et costume noir si la filtration est forte ; effectuer un test avec la vraie caméra et les vrais filtres.",
    "Surveillance au waveform / false color, comparaison des positions, métadonnées de WB, ND, EI/ISO, filtre et exposition notées sur une référence.",
    "Exemple professionnel vérifié : sur Mad Max: Fury Road, John Seale et l’équipe VFX ont testé une exposition de capture plus haute, d’environ deux à trois stops pour certains plans de nuit américaine, puis Eric Whipp a fortement assombri l’image en étalonnage. C’était un choix validé par essais en ARRIRAW pour préserver les détails des ombres SANS cliper les hautes lumières, et non une recommandation universelle de surexposition."
  ],
  color:[
    "Le rouge du costume, du feuillage sec ou d'une peau chauffée par la balance globale peut devenir artificiellement lumineux dans une nuit froide. Désaturer ou réduire la luminance des rouges/oranges selon le plan ; ne pas effacer tous les tons chair.",
    "La peau peut devenir trop rouge / magenta si les couleurs chaudes restent hautes alors que l'ambiance est fortement refroidie, ou si des corrections séparées en post se contredisent. Diagnostiquer à la parade RGB et au vectorscope plutôt qu'en supposant une seule cause.",
    "Un suivi de visage isolé en étalonnage peut conserver des nuances de peau plus naturelles que le décor. La quantité de chaleur résiduelle est un choix de look : la peau n'a pas à rester orange, ni à devenir bleue uniforme.",
    "Pour les scènes mixtes, éviter un sky key qui déborde sur les cheveux ou les contours des peaux ; vérifier les transitions de masques image par image et pendant le mouvement.",
    "En workflow Resolve ou Baselight : corriger et apparier les rushes d'abord, séparer ciel/peau si besoin sur un signal suffisamment propre, ensuite seulement abaisser ambiance et modeler la couleur. L'ordre exact dépend du pipeline color-managed."
  ],
  traps:[
    {symptom:"Peau trop rouge ou orange dans une ambiance bleue",cause:"Rouges et teintes chaudes trop lumineux/saturés relativement au décor refroidi ; correction de balance ou de teinte excessive ; practical trop chaude.",fix:"Tester une key moins saturée sur plateau ; à l'étalonnage isoler peau et rouge de décor, ajuster chroma/luma à part, comparer sur scopes et gros plans."},
    {symptom:"Peau violette / magenta",cause:"Mélange de LEDs dont les spectres / décalages vert-magenta ne s'accordent pas, ou poussée globale vers le bleu-magenta.",fix:"Comparer chaque source seule sur charte + peau réelle, faire des corrections G/M, réduire saturation des bleus et magentas plutôt que changer seulement la CCT."},
    {symptom:"Soleil de midi immédiatement identifiable",cause:"Ombres courtes très dures, reflets et directions incompatibles avec la scène de nuit.",fix:"Tourner sur des axes contre-jour latéraux, attendre une hauteur de soleil favorable, diffuser ou cadrer plus serré. La postproduction ne déplace pas les ombres."},
    {symptom:"Ciel trop clair, chemise blanche fluorescente",cause:"Rapports de luminance de jour conservés et surfaces blanches non contrôlées.",fix:"Réduire le ciel sur le plateau, changer d'axe, contrôler les blancs avec nets ou préparer remplacement du ciel."},
    {symptom:"Bleu uniforme et image « jour sous-exposé »",cause:"Même teinte et même niveau partout, absence de sources de motivation et de zones lumineuses.",fix:"Prévoir des poches de lumière, garder la cohérence des contours, réduire la saturation dans les ombres et travailler des gradients de luminance."},
    {symptom:"Noirs magenta / brun dans les costumes",cause:"Possible fuite infrarouge sous filtrage ND important, mélanges colorimétriques ou artefacts de sous-exposition.",fix:"Isoler l'origine par test sans ND, avec IRND de qualité, charte noire et costume ; éviter de confondre une pollution IR avec une simple couleur de key."}
  ],
  kit:[
    {id:"skypanel-x21",role:"Renfort de visage / bord de cadre",reason:"Avec Dome ou optique ouverte pour un fill localisé, ou HyPer Optic pour un accent précis si une touche artificielle est assumée."},
    {id:"storm-1200x",role:"Direction de renfort",reason:"À travers diffusion ou vers un bounce pour détacher un visage sous lumière naturelle ; ne pas créer une nouvelle ombre solaire incohérente."},
    {id:"orbiter",role:"Accent précis",reason:"Découpe ou snoot pour une zone de fond ou de visage, utile dans un décor contrôlé."},
    {id:"arri-m18",role:"Option HMI historique",reason:"Pour reconstituer une direction si le plan le permet ; ne sert pas à transformer automatiquement tout un extérieur de jour en nuit."}
  ],
  controls:["Plan test avec peau claire ET peau foncée, cheveux, tissu rouge, blanc, noir et feuillage.","Plan large + gros plan, même LUT d'essai et même pipeline couleur.","Contrôle des ombres, du ciel et des surfaces blanches AVANT d'affiner les sources.","Un test de grade complet doit être validé avant d'engager une grosse journée de prises.","Noter la position du soleil et la progression de la journée pour les raccords."],
  refs:["bhDay","kroll","krollSet","colorFinale","ascNight","ascSkin","fury","furyGrade"]
});
register("night-skin",{
  headline:"Peau en lumière lunaire : maîtriser rouge, magenta et séparation chromatique",
  level:"DP / color science",depth:"Dossier avancé",priority:1,
  intent:"Conserver le relief et le détail des carnations sous éclairage froid sans transformer la peau en violet, en rouge éclatant ou en cyan uniforme.",
  variants:[
    {title:"Moonlight froide mais spectre blanc complet",when:"Portrait de nuit naturaliste.",setup:"Source réglée en blanc de bonne fidélité spectrale, filtrée ou refroidie avec retenue, large côté opposé caméra. Contrôle par noir proche sur le côté caméra.",camera:"Choisir WB scène selon les autres sources, puis évaluer la peau réelle et les noirs sur les scopes.",why:"Une CCT froide en blanc réglable n'est pas équivalente à un mode RGB bleu saturé.",kit:["skypanel-x21","negatif"]},
    {title:"Ambiance bleue + petite key neutre",when:"Très grande ambiance nocturne froide, mais dialogue à préserver.",setup:"Laisser le bleu dans décor et fond. Construire un petit key spectralement riche et peu saturé sur la peau, dans une direction motivée similaire à l'ambiance.",camera:"Observer le ratio peau / décor dans une transform de monitoring définie ; doser plutôt que neutraliser entièrement la peau.",why:"Séparer ambiance et key évite de dépendre exclusivement de la correction de peau en post.",kit:["storm-400x","skypanel-s60pro","floppy"]},
    {title:"Nuit urbaine mixte",when:"Source sodium/enseignes + ciel froid.",setup:"Définir zones d'influence : enseigne sur dos/fond, lune sur contour, practical modeste sur visage. Éviter de superposer sans contrôle trois couleurs saturées sur la peau.",camera:"Tester un visage qui tourne, pas seulement un portrait immobile.",why:"Les problèmes apparaissent lors des changements d'orientation et des doubles ombres.",kit:["orbiter","titan","skypanel-x21"]}
  ],
  camera:["Ne pas confondre CCT et spectre : deux LEDs à 5 600 K peuvent rendre différemment des peaux et textiles.","Tester le vrai rendu avec charte couleurs et peaux sous la transform caméra/LUT prévue.","La baisse du niveau d'une LED, le changement de mode « high output » ou des corrections +/- green peuvent changer le mélange émis : recontrôler à chaque modification importante.","Monitorer à niveau final visé, pas uniquement dans une image log très plate."],
  color:[
    "Peau rouge : vérifier d'abord la lumière incidente et la balance scène, puis seulement la saturation de peau en post.",
    "Peau magenta : comparer sur les canaux R/B et sur les reflets neutres ; une teinte magenta générale peut être un problème de green/magenta, pas une question de température Kelvin.",
    "La luminance relative des couleurs joue autant que leur teinte. Une peau orange lumineuse dans un fond bleu très sombre aura l'air artificielle.",
    "Préférer une correction locale et suivie si la peau doit conserver sa lecture ; éviter un key HSL trop dur créant un contour lors des mouvements."
  ],
  traps:[
    {symptom:"Visage rouge vif dans une nuit froide",cause:"Warm key trop haute ou peau conservée à sa saturation diurne sous un décor refroidi.",fix:"Baisser le niveau ou la saturation de la key, redistribuer la couleur sur le décor, ajuster luma/chroma du rouge en post."},
    {symptom:"Couleur de peau irrégulière entre deux LEDs",cause:"SPD différents, réglage vert-magenta et compromis du moteur LED.",fix:"Comparer sur une même peau et charte, faire les réglages sur le plateau plutôt que d'espérer un matching par Kelvin uniquement."},
    {symptom:"Visage cireux ou gris",cause:"Blue-only / RGB saturé pauvre en longueurs d'onde pertinentes pour la peau, puis correction de saturation excessive.",fix:"Ajouter une composante de blanc de meilleur rendu spectral et limiter l'usage d'un bleu primaire pur sur le key."},
    {symptom:"Peau impeccable à l'arrêt, mauvaise au mouvement",cause:"Passage d'une zone colorée à une autre, ou remplacement d'un visage sous gel par un autre.",fix:"Faire répéter toute la trajectoire et noter la couleur à chaque position."}
  ],
  kit:[
    {id:"skypanel-x21",role:"Key / ambiance blanche ou colorée",reason:"RGBACL, modes ALEXA et G/M selon exploitation ; particulièrement utile pour le matching caméra."},
    {id:"storm-1000c",role:"Direction colorée",reason:"Gamme couleur, à exploiter après vérification de rendu sur peau."},
    {id:"orbiter",role:"Key précise",reason:"Optiques et correction chromatique, petit faisceau de renfort ou reflet."},
    {id:"titan",role:"Sources de décor / contour",reason:"Très utile en pratique discrète, moins convaincant comme unique source pour un grand visage."}
  ],
  controls:["Filmer la même peau sous chaque source, une source à la fois, à CCT déclarée identique.","Comparer peau et textiles rouge/bleu/noir à deux niveaux d'intensité.","Tester rotation du visage et croisement des zones.","Valider en étalonnage une image test avant le prelight définitif."],
  refs:["ascNight","ascSkin","ascSkin2","ascOutlander","arriSensor"]
});
register("window-night",{
  headline:"Fausse nuit intérieure par fenêtre — bleu lunaire, ville et practicals",
  level:"Intérieur / nuit",depth:"Dossier avancé",priority:1,
  intent:"Fabriquer une fenêtre nocturne qui conserve une direction et une distance crédibles, avec maîtrise des peaux, reflets et sources de décor.",
  variants:[
    {title:"Lune directionnelle depuis l'extérieur",when:"On doit voir une empreinte lunaire sur sol ou mur.",setup:"Placer une source dure ou semi-dure à distance et en hauteur relative, légèrement de côté pour éviter un « projecteur face fenêtre ». Utiliser les montants comme motifs naturels ; couper les fuites sur le plafond.",camera:"WB et teinte choisis en référence des practicals et de la peau ; pas de règle universelle « lune = 10 000 K ».",why:"Une seule direction lointaine crée une empreinte lisible.",kit:["skypanel-x21","storm-1200x","arri-m18"]},
    {title:"Nuit douce de ciel urbain",when:"Intérieur sombre avec baie large sans rayon lunaire précis.",setup:"Placer un grand cadre ou panneau doux hors de la fenêtre, à distance suffisante pour remplir l'ouverture ; réduire son niveau et travailler le négatif côté caméra.",camera:"Conserver de la texture sur les murs sans relever artificiellement toutes les zones sombres.",why:"Une grande source paraît plus crédible pour une ambiance de ciel que des ombres tranchées simultanées.",kit:["skypanel-x22","vortex8","gridcloth","floppy"]},
    {title:"Nuit éclairée par la rue",when:"Lampadaires, enseignes, fenêtres d'immeubles.",setup:"Installer une source localisée qui vient d'une zone plausible de rue, éventuellement légèrement chaude, avec un complément lunaire plus discret et un ou deux points de fond.",camera:"Revoir les reflets dans le verre à chaque axe et mettre la source la plus colorée plutôt en fond si les peaux dérivent.",why:"La justification architecturale est souvent plus forte qu'un bain bleu général.",kit:["orbiter","skypanel-x21","titan"]}
  ],
  camera:["Si la scène est tournée de jour, occulter le jour réel selon le cadre : fuite par stores, joints, couloirs, autres fenêtres et réflexions.","Regarder la vraie baie en plan large : un cadre trop petit apparaît comme un rectangle brillant ou une tache locale.","Prévoir un petit niveau sur les yeux avec une source riche en spectre si la « lune » bleue coupe les détails des peaux.","Surveiller flicker et PWM des practicals, surtout ralenti ou obturateur atypique."],
  color:["Le mélange lune bleue et lampe tungstène peut rendre les visages très rouges en comparaison. Définir une hiérarchie : laquelle éclaire réellement la peau ?","Une source en mode bleu RGB saturé pourra donner un visage violacé ou gris ; comparer avec un blanc froid de bonne qualité et une WB créative.","La lumière doit également affecter le décor près de la fenêtre : une source énorme sur la joue mais aucune trace sur embrasure ou sol paraît non motivée."],
  traps:[
    {symptom:"Peau orange / rouge très saturée",cause:"Practical trop dominante face à une ambiance lunaire refroidie ; contraste de couleur extrême.",fix:"Baisser practical ou ajouter un renfort spectralement plus neutre qui vient de sa direction. Tester au LUT final."},
    {symptom:"Fenêtre fait « panneau de studio »",cause:"Surface diffusante trop proche de la vitre, hotspot ou limite de cadre visible.",fix:"Recule le diffuseur, élargir son cadre, vérifier la perspective des bords, adoucir/contrôler le faisceau incident."},
    {symptom:"Deux ombres lunaires opposées",cause:"Plusieurs projecteurs hors d'axes cohérents.",fix:"Une direction de lune dominante ; les autres sources doivent être beaucoup plus diffuses ou motivées."},
    {symptom:"Fenêtre réfléchit le plateau",cause:"Angle de caméra / source par rapport au verre.",fix:"Déplacer le projecteur, utiliser négatif autour caméra, modifier le hors-champ ou retirer le vitrage si le décor le permet."}
  ],
  kit:[
    {id:"skypanel-x21",role:"Lune dure ou souple",reason:"HyPer Optic pour une direction concentrée, Dome pour une source plus douce ; modes et angle précis selon accessoire."},
    {id:"storm-1200x",role:"Faisceau extérieur puissant",reason:"Renfort directionnel à optique adaptée, éventuellement diffusion derrière la fenêtre."},
    {id:"orbiter",role:"Lampadaire / motif",reason:"Réglage fin du faisceau ou découpe sur une zone extérieure."},
    {id:"titan",role:"Practical cachée",reason:"Petit trait de lumière de décor, sans prétendre remplacer la source lunaire principale."}
  ],
  controls:["Vérifier la fenêtre depuis le cadre le plus large, puis les gros plans.","Tester d'abord la lune seule, puis les practicals une par une.","Photographier les reflets parasites et les coupes sur les murs.","Répéter sur toutes les positions et directions de regard."],
  refs:["ascNight","ascOutlander","arriMoon","arriX","arriSet"]
});
register("moonlight",{
  headline:"Clair de lune extérieur : direction, niveau relatif et atmosphère",
  level:"Extérieur / nuit",depth:"Dossier avancé",priority:1,
  intent:"Éclairer un extérieur nocturne sans impression de plateau suréclairé, en donnant un sens spatial aux ombres et aux reflets.",
  variants:[
    {title:"Lune dure à grande distance",when:"Forêt, rue, façade, plan large avec direction unique.",setup:"Appareil assez éloigné, surélevé et dirigé en 3/4 arrière vers la zone de jeu ; contrôler une seule famille d'ombres. Ajouter des points locaux à bas niveau, distincts de la lune.",camera:"Mesurer le fond et le contour en plus du visage. Vérifier le flare et la dynamique réelle.",why:"La distance réduit les variations de niveau lors des déplacements et rend les angles plus parallèles.",kit:["storm-xt52","storm-cs32","skypanel-x23","arri-m90"]},
    {title:"Lune large, nuit nuageuse",when:"Scène douce sans ombres nettes ; paysage nocturne stylisé.",setup:"Grande diffusion ou bounce éloigné et surélevé avec une couverture étendue. Ajouter un négatif directionnel près du jeu pour éviter une ambiance complètement plate.",camera:"Garder le niveau général bas comparé aux points de motivation.",why:"Une nuit diffuse existe aussi ; l'objectif est la hiérarchie, pas obligatoirement une ombre dure.",kit:["skypanel-x23","vortex8","infinimat"]},
    {title:"Silhouette nocturne",when:"On veut percevoir présence et décor avant les visages.",setup:"Backlight ou rim placés derrière les personnages, fonds progressivement éclairés, face majoritairement sombre. Une très faible aide optique de visage peut suffire.",camera:"Exposer le fond et le contour sans brûler les lignes de cheveux.",why:"Le contre-jour est plus efficace qu'une forte key frontale pour vendre une nuit sombre.",kit:["skypanel-x21","orbiter","storm-1200x"]}
  ],
  camera:["L'impression de nuit est une relation de luminances : un acteur peut rester lisible, même si le décor est bas.","Éviter de juger la lune seulement au Kelvin : dans une nuit sans sources chaudes, un bleu très fort est souvent une convention stylisée.","Établir une carte des sources, secteurs et recharges de batteries/énergie ; les grands projecteurs puissants imposent du rigging.","Protéger les équipements selon leur IP réel, accessoires et connectique inclus."],
  color:["Une lune trop saturée bleue plus du feu orange intense peut poser de sévères problèmes de rendu des peaux. Réduire la distance colorimétrique lorsque la lisibilité des visages est prioritaire.","En lumière très pauvre, la vision humaine perd en discrimination chromatique ; le cinéma peut évoquer cela par une saturation réduite sans supprimer tout détail.","Ne pas compter sur un réglage CCT extrême pour garantir un rendu de peau exploitable : mesure spectrale et tests de caméra si possible."],
  traps:[
    {symptom:"Nuit bleue caricaturale",cause:"Saturation globale, peu de neutralité dans les noirs et tous les projecteurs réglés identiquement.",fix:"Rendre une partie de l'ambiance neutre, réserver le bleu aux zones motivées, surveiller la peau."},
    {symptom:"Doubles ombres directionnelles",cause:"Trop de sources dures sur une même zone.",fix:"Une direction lunaire forte ; les compléments plus diffus et plus faibles."},
    {symptom:"Plan large sans profondeur",cause:"Sujet et fond à niveau uniforme.",fix:"Éclairer quelques éléments profonds, protéger l'avant-plan et séparer silhouettes."}
  ],
  kit:[
    {id:"skypanel-x23",role:"Grande source lunaire modulable",reason:"HyPer Optics pour une portée importante ; Dome pour un rendu plus doux selon configuration."},
    {id:"storm-xt52",role:"Longue portée",reason:"Source très puissante avec reflecteurs 20°/25°/35° et modes blancs variables ; vérifier alimentation 180–240 V à pleine puissance."},
    {id:"storm-cs32",role:"Lune colorée puissante",reason:"Moteur BLAIR-CG, IP65 et optiques adaptées ; consommation max 3 200 W, sortie annoncée distincte."},
    {id:"arri-m90",role:"Référence HMI classique",reason:"Option très forte puissance encore pertinente dans les parcs cinéma quand la distribution HMI est prévue."}
  ],
  controls:["Plan large à axe extrême et détail de peau sur le même setup.","Rapport de niveau entre contour, fond et visage noté.","Vérification des angles d'ombres au sol, sur bâtiment et sur arbres.","Valider en présence du chef électricien les contraintes de puissance, levage et intempéries."],
  refs:["ascNight","arriApps","arriMoon","arriSet","arriX","aputureXT","aputureCS"]
});
register("exterior-night",{
  headline:"Extérieur nuit à grande échelle : relief par zones et logique des sources",
  level:"Extérieur / nuit",depth:"Dossier avancé",
  intent:"Préserver une géographie nocturne lisible à travers les plans larges et les axes rapprochés.",
  variants:[
    {title:"Rue motivée par lampadaires",when:"Rue ou place urbaine avec architecture répétitive.",setup:"Définir la couleur et l'emprise de chaque lampadaire fictif, ajouter quelques points de fond et une key douce cachée au niveau de jeu. Travailler des zones de 2 à 3 positions au lieu d'éclairer la rue entière.",camera:"Raccords d'ombres et de couleur entre axes opposés.",why:"La répétition des poches de lumière rend l'espace crédible.",kit:["orbiter","skypanel-x21","titan"]},
    {title:"Grand décor, lune lointaine",when:"Une rue large ou un site naturel avec profondeur.",setup:"Une source directionnelle puissante éloignée et éventuellement élevée selon sécurité, combinée à une ambiance faible plus large. Définir les fonds prioritaires ; travailler les niveaux par couches.",camera:"Plan large et silhouette, pas seulement gros plan sur le visage.",why:"On hiérarchise les distances plutôt que chercher un lux identique sur tout l'espace.",kit:["storm-xt52","storm-cs32","skypanel-x23"]}
  ],
  camera:["Choisir les axes qui limitent l'apparition des sources dans reflets vitrés et façades.","Prévoir les lumières de fond et les zones noires dans le même plan de feu.","Faire un prélight caméra : un œil humain s'adapte trop facilement dans la pénombre.","Tracer les itinéraires équipe, câbles et véhicules avant tout placement."],
  color:["Limiter les dominantes simultanées sur les peaux ; réserver les couleurs les plus saturées aux fonds.","Comparer source froide, source chaude et vrai lampadaire séparément sur une charte et sous la transform caméra."],
  traps:[
    {symptom:"Extérieur de nuit ressemble à plein jour",cause:"Toutes les zones éclairées également et aucune ombre de référence.",fix:"Réintroduire des zones franchement sombres et hiérarchiser les plans de profondeur."},
    {symptom:"Couleurs des visages changent à chaque pas",cause:"Passage brutal entre lampadaire chaud et key bleue.",fix:"Recouvrir légèrement les zones ou accepter des transitions motivées, testées en mouvement."}
  ],
  kit:[
    {id:"storm-xt52",role:"Grand key à distance",reason:"Portée et réflecteurs adaptés, alimentation à dimensionner."},
    {id:"skypanel-x23",role:"Moonlight façade",reason:"Module hard / soft utilisable selon direction."},
    {id:"orbiter",role:"Points urbains et découpes",reason:"Projection précise, sodium fictif, accent de mur."}
  ],
  controls:["Plan large avec tous les appareils allumés.","Une répétition complète des déplacements.","Point de sécurité HSE/chef électricien sur levage et énergie."],
  refs:["arriLemerle","arriSet","arriApps","aputureXT"]
});
register("interior-night-studio",{
  headline:"Nuit intérieure construite en studio, sans jour réel",
  level:"Studio / nuit",depth:"Dossier avancé",
  intent:"Fabriquer une nuit reproductible sur un décor de studio en donnant à chaque source une motivation intelligible.",
  variants:[
    {title:"Chambre avec fenêtre lune + lampe de chevet",when:"Décor nocturne classique avec deux motivations opposées.",setup:"Une source directionnelle ou douce depuis le faux extérieur, un petit renfort du côté de la lampe, une practical moins lumineuse que le niveau maximal qu'elle motive, et du négatif entre les axes.",camera:"Tester la peau avec la lune seule et lampe seule, puis ensemble.",why:"Des directions distinctes structurent le décor et les visages.",kit:["skypanel-x21","orbiter","titan"]},
    {title:"Couloir obscur avec point de passage",when:"Déplacement de plusieurs mètres et grande profondeur.",setup:"Segments de plafond juponnés ou petites sources intégrées dans des cadres de porte, une zone de fond choisie et alternance d'ombres. Prévoir les allées et venues et un cue DMX si utile.",camera:"Mesurer les positions intermédiaires et les virages.",why:"Une continuité de nuit conserve du relief en changeant de poche.",kit:["litemat-spectrum4","infinimat","titan"]}
  ],
  camera:["Décider en prélight si le contraste est réalisé à la source ou uniquement en grade ; en général, les grosses différences de direction se dessinent au plateau.","Stabiliser balance des blancs et intensités des practicals ; tester l'obturateur pour flicker.","Concevoir une texture de fond, sinon le décor entièrement noir paraît vide."],
  color:["Attention aux peaux trop rouges sous practical contre lune très froide ; créer une key de transition si nécessaire.","Sur certains modes RGB saturés, la peau peut manquer d'information : tester le spectre des sources."],
  traps:[
    {symptom:"Peaux irréalistes",cause:"Conflit bleu primaire / rouge tungsten sans composante intermédiaire.",fix:"Utiliser une key riche en spectre, réduire l'écart chromatique ou isoler les pratiques décor."},
    {symptom:"Le studio paraît uniformément éclairé",cause:"Diffusion partout et trop de bounce involontaire.",fix:"Juponner et noircir les zones hors cadre."}
  ],
  kit:[{id:"skypanel-x21",role:"Source extérieure simulée",reason:"Choix hard ou soft."},{id:"litemat-spectrum4",role:"Source cachée",reason:"Format mince."},{id:"orbiter",role:"Accent de fond",reason:"Optique directionnelle."}],
  controls:["Prendre une photo de référence du contraste réel pour tous les axes.","Tourner un essai avec comédien et costume avant finalisation du look."],
  refs:["arriLemerle","ascOutlander","arriSensor"]
});
register("night-day-interior",{
  headline:"Faux nuit en intérieur réel, mais tournée en plein jour",
  level:"Jour réel / nuit fictive",depth:"Dossier avancé",
  intent:"Neutraliser autant que possible les entrées de jour incontrôlables puis recréer des motivations nocturnes compatibles avec les fenêtres et les plans.",
  variants:[
    {title:"Occultation extérieure complète + nuit contrôlée",when:"Petites ou moyennes fenêtres et extérieur occultable sans apparaître au cadre.",setup:"Créer une tente/black out sécurisé devant fenêtre et vitrages secondaires. Tester les fuites de lumière de jour, puis poser des sources de nuit à l'extérieur de l'occultation ou dans la poche noire.",camera:"Contrôler continuité si le soleil réel traverse la tente et le sol.",why:"La source de jour est séparée du schéma nocturne.",kit:["black-solid","floppy","skypanel-x21","storm-1200x"]},
    {title:"Fenêtres visibles au cadre",when:"Le décor voit clairement l'extérieur.",setup:"Prévoir découverte nocturne, black trans, tenting plus profond ou solution VFX décidée avant le tournage. Une simple baisse d'exposition de l'intérieur ne transforme pas la rue blanche visible en nuit.",camera:"Références VFX, reflets et plans de raccord ; inclure le ciel dans les tests.",why:"La difficulté n'est pas le visage mais l'extérieur qui trahit l'heure réelle.",kit:["duvetyne","orbiter"]}
  ],
  camera:["Faire un repérage des fenêtres, portes vitrées, verrières et fuites indirectes à plusieurs heures.","Placer tout le matériel de black out hors du cadre et hors de circulation d'urgence.","Surveiller les reflets des projecteurs dans la vitre et le bruit des occultants en prise de son."],
  color:["La peau chaude à côté d'une fausse lune très froide peut rougir fortement ; contrôler intensité et saturation des practicals.","Garder une couleur nocturne motivée plutôt qu'appliquer un bleu uniforme."],
  traps:[
    {symptom:"Fuite de jour impossible à étalonner",cause:"Entrée de soleil ou réflexion extérieure très lumineuse.",fix:"Corriger l'occultation en amont ; ne pas compter sur une clé HSL en post."},
    {symptom:"Façade visible en plein jour",cause:"Fenêtre transparente dans l'axe.",fix:"Backings, tissu noir, cadrage ou VFX préparé."}
  ],
  kit:[{id:"skypanel-x21",role:"Lune créée",reason:"Dome ou HyPer Optic selon dureté souhaitée."},{id:"storm-1200x",role:"Pénétration à travers fenêtre",reason:"Faisceau dirigé et contrôlé."},{id:"orbiter",role:"Streetlight local",reason:"Pour peindre une surface de façade ou un coin de couloir."}],
  controls:["Test black-out à heure de soleil la plus défavorable.","Plan large sur baie et reflets avant modification du décor.","Prendre une source par source pour détecter les dominantes."],
  refs:["bhDay","arriApps","arriSet"]
});
register("car-night",{
  headline:"Habitacle automobile de nuit : reflets, mouvement et sources motivées",
  level:"Nuit / voiture",depth:"Dossier avancé",
  intent:"Reproduire une nuit urbaine vivante sans perdre le jeu, tout en gardant les vitres et rétroviseurs propres.",
  variants:[
    {title:"Voiture statique en studio",when:"Driving process / fond LED / voiture arrêtée.",setup:"Une base de face très contrôlée via panneaux souples / tubes cachés, des passages lumière pilotés en latéral, une back ambience cohérente avec l'extérieur. Couper tout reflet d'appareil visible dans les vitres.",camera:"Tester les mouvements de tête, mains et pare-brise avec le décor final.",why:"L'illusion repose sur la cadence et la géographie des sources.",kit:["titan","litemat-spectrum4","skypanel-x21"]},
    {title:"Voiture réellement en mouvement",when:"Trajet sécurisé avec opérateur et dispositif de rig professionnel.",setup:"Petites sources intégrées approuvées, distribution et batteries dimensionnées, extérieur réellement parcouru pris en compte. Planification avec chef machiniste, sécurité et réglementation.",camera:"Évaluer variation d'exposition et scintillement dans le mouvement réel.",why:"Les vraies lumières de rue font déjà partie du dispositif.",kit:["titan","helios","luna"]}
  ],
  camera:["Les vitres superposent reflets avant/arrière ; toujours tester depuis la position réelle du capteur.","Éviter un rouge et un bleu trop purs sur les joues, surtout si le personnage tourne constamment.","Tester les phares et éclairages de tableau de bord sous la cadence prévue."],
  color:["Faire de la couleur une information géographique (enseigne à droite, feu arrière à gauche).","Préserver le rendu de peau sous les LEDs intégrées et les sources de passage."],
  traps:[{symptom:"Reflet de softbox dans le pare-brise",cause:"Source alignée avec l'angle de réflexion.",fix:"Déplacer le panneau, mettre du noir près caméra et re-tester au cadre."},{symptom:"Saturation rouge/bleu de police caricaturale",cause:"FX coloré trop fort ou constant.",fix:"Réduire et rendre les passages intermittents et motivés."}],
  kit:[{id:"titan",role:"Source courte de décor",reason:"Tube pilotable et cachable selon les contraintes."},{id:"skypanel-x21",role:"Passages extérieurs",reason:"Grande source sur plateau avec variation DMX."},{id:"litemat-spectrum4",role:"Fill mince et doux",reason:"Rapprocher sans apparition au cadre."}],
  controls:["Plan intérieur + plan à travers vitre.","Test en mouvement à vitesse finale.","Contrôle sécurité rig / électrique."],
  refs:["arriLemerle","ascNight"]
});
