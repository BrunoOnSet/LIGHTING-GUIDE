/* BOS LIGHTING GUIDE — V2 professional editorial core.
   Audience: experienced cinematographers / gaffers.
   Editorial rule: no beginner recipes; each entry must recall a precise principle,
   name a current on-set concept, or open an alternative way to light a scene.
*/
window.BOS_V2={
  principles:[
    {
      id:"angular-size",
      title:"Dureté = taille angulaire apparente",
      kicker:"GEOMETRIE DE SOURCE",
      summary:"La dureté ne dépend pas d’une catégorie de projecteur mais de la taille apparente de la source depuis le sujet.",
      bullets:[
        "Même près du sujet, une petite source peut produire des ombres nettes. Éloigner une grande source peut au contraire durcir ses ombres, car sa taille apparente diminue.",
        "Ce qui compte, c’est la taille apparente de la surface lumineuse vue depuis le sujet, et pas seulement la distance au projecteur.",
        "Une source peut être douce et très directionnelle : douceur et direction ne sont pas des synonymes."
      ],
      watch:["Ne pas confondre durcir une source avec augmenter son contraste global.","Évaluer le bord d’ombre sur le visage et sur le décor, pas uniquement la sensation générale du plan."],
      tags:["hard light","soft light","angular size","penumbra"]
    },
    {
      id:"falloff-hardness",
      title:"Fall-off et dureté : deux variables distinctes",
      kicker:"INVERSE SQUARE",
      summary:"Rapprocher une source augmente le gradient d’exposition dans l’espace ; cela ne la rend pas automatiquement plus dure.",
      bullets:[
        "À taille physique constante, rapprocher la source adoucit généralement les ombres, mais augmente aussi l’écart d’éclairement entre un acteur proche et un acteur plus éloigné.",
        "Éloigner une source homogénéise davantage une zone de jeu ; si sa taille apparente devient faible, l’ombre peut simultanément se durcir.",
        "Pour un travelling ou deux acteurs à des distances différentes, comparer d’abord leurs distances à la source avant d’augmenter sa puissance."
      ],
      watch:["Une grande source proche peut donner un visage très doux et pourtant un fond qui tombe très vite.","Un niveau photométrique identique sur une marque ne garantit pas le même gradient sur le mouvement."],
      tags:["fall-off","inverse square","blocking","distance"]
    },
    {
      id:"filled-frame",
      title:"Un grand cadre de diffusion doit être correctement éclairé",
      kicker:"SOURCE EFFECTIVE",
      summary:"Un cadre de diffusion de 12 × 12 pieds ne produit pas forcément une source lumineuse de cette taille : seule la surface réellement éclairée compte.",
      bullets:[
        "Un COB placé trop près d’un grand cadre peut créer un point chaud au centre : la surface lumineuse utile reste alors plus petite que le cadre.",
        "Reculer le projecteur, élargir le faisceau, utiliser plusieurs sources ou faire un rebond avant le cadre permet de mieux répartir la lumière.",
        "Depuis la position du sujet, regarder la diffusion elle-même est souvent plus instructif que regarder le projecteur."
      ],
      watch:["Contrôler les fuites de lumière directe en bord de cadre.","Une grille sur softbox augmente le contrôle du spill mais ne change pas magiquement la taille physique de la source."],
      source:{label:"ASC — diffusion, bounce et book light",url:"https://theasc.com/article/shot-craft-diffusion-confusion-part-2-alternative-diffusion/"},
      tags:["diffusion","hotspot","source size","book light"]
    },
    {
      id:"shadow-transfer",
      title:"Lire les transitions et la densité des ombres",
      kicker:"QUALITE D’OMBRE",
      summary:"Deux sources peuvent sembler également ‘soft’ tout en produisant des transitions et des densités d’ombre différentes.",
      bullets:[
        "La largeur de la pénombre renseigne sur la taille apparente de la source. La densité de l’ombre dépend aussi de la lumière d’appoint et des réflexions du décor.",
        "Bounce, diffusion et book light ne donnent pas nécessairement la même structure d’ombre même à surface comparable.",
        "Pour juger la lumière sur un visage, observer les ombres du nez, de la mâchoire et des orbites est plus précis que de simplement dire « c’est doux »."
      ],
      watch:["Ne pas juger uniquement la netteté du contour : la profondeur de l’ombre fait partie de la signature.","Les murs clairs peuvent réduire la densité de l’ombre sans modifier la key."],
      source:{label:"ASC — Shadow transfer / book light test",url:"https://theasc.com/article/shot-craft-diffusion-confusion-part-2-alternative-diffusion/"},
      tags:["shadow transfer","umbra","penumbra","density"]
    },
    {
      id:"direction-vs-softness",
      title:"Direction et douceur sont deux réglages différents",
      kicker:"VECTOR DE LUMIERE",
      summary:"Une source très large peut conserver une direction de key très lisible si son centre photométrique et son contrôle sont bien placés.",
      bullets:[
        "Un book light latéral peut être extrêmement doux et rester clairement far-side.",
        "La direction se lit dans la répartition des zones éclairées et des ombres. La douceur se juge à la largeur des transitions.",
        "Les grids, skirts, flags et négatifs travaillent souvent la direction plus que la douceur."
      ],
      watch:["Éviter de ‘ramollir’ une source en ajoutant du fill caméra : cela réduit surtout le modelé.","Séparer la question ‘où vient la lumière ?’ de ‘quelle est la transition d’ombre ?’."],
      tags:["directionality","far-side","soft source","shape"]
    },
    {
      id:"ambient-floor",
      title:"Définir le niveau de lumière ambiante avant la key",
      kicker:"TONAL HIERARCHY",
      summary:"Dans beaucoup de décors, le contraste est déterminé par le niveau ambiant avant même l’ajout de la key.",
      bullets:[
        "Si les murs, plafond et sol créent un fill élevé, ajouter une key augmente le niveau sans forcément recréer de noirs.",
        "On peut commencer par régler le niveau ambiant : lumière existante, source au plafond, rebond général ou extinction de certains éclairages.",
        "Le négatif permet ensuite de retirer localement de la lumière ambiante, plutôt que de placer systématiquement un panneau noir du côté sombre."
      ],
      watch:["Mesurer ou comparer à exposition verrouillée avant/après négatif.","Assombrir une surface du décor peut parfois être plus efficace que multiplier les drapeaux pour réduire les retours lumineux."],
      source:{label:"ARRI — exemple de négatif et gestion de l’ambiance",url:"https://www.arri.com/news-en/shooting-and-grading-for-hdr-with-arri-alexa-35"},
      tags:["ambient floor","negative fill","contrast","production design"]
    },
    {
      id:"ratio-layers",
      title:"Key-to-fill n’est pas le contraste du plan",
      kicker:"EXPOSURE LAYERS",
      summary:"Le ratio visage, le contraste du décor et la plage enregistrée sont trois lectures différentes.",
      bullets:[
        "Un visage peut présenter un fort écart entre key et fill alors que le décor reste globalement lumineux.",
        "À l’inverse, un visage peu contrasté peut se détacher dans un décor composé de zones très claires et très sombres.",
        "Évaluer séparément la peau, l’arrière-plan, les sources visibles, les fenêtres, les noirs et les reflets spéculaires."
      ],
      watch:["Éviter de résumer une scène à un seul ratio incident.","Le contraste final dépend aussi de l’exposition, de la courbe d’affichage et de l’étalonnage."],
      tags:["key fill","contrast","exposure","tonal separation"]
    },
    {
      id:"specular-diffuse",
      title:"Réponse diffuse et réponse spéculaire",
      kicker:"MATIERE",
      summary:"Une source peut produire des ombres douces tout en dessinant un reflet spéculaire très visible.",
      bullets:[
        "La peau, le verre, le métal, le vernis et les textiles ne répondent pas de la même manière à une surface lumineuse.",
        "Agrandir la source agrandit souvent le reflet spéculaire ; cela peut adoucir son gradient mais aussi le rendre plus présent.",
        "Lorsqu’on filme un objet, déplacer la source modifie souvent davantage la forme des reflets que changer son intensité."
      ],
      watch:["Observer la forme de la source telle qu’elle se reflète sur l’objet.","Un filtre polarisant peut atténuer certains reflets sur les surfaces non métalliques, mais il n’agit pas de la même manière sur les reflets d’un métal nu."],
      tags:["specular","diffuse","product","skin"]
    },
    {
      id:"spectral-mismatch",
      title:"CCT identique ≠ spectre identique",
      kicker:"COLOR SCIENCE",
      summary:"Deux sources réglées à 4300 K peuvent produire des peaux et des couleurs différentes si leur distribution spectrale diffère.",
      bullets:[
        "CRI et TM-30 décrivent une partie du rendu ; ils ne prédisent pas à eux seuls la réponse spécifique d’un capteur cinéma.",
        "Le Duv décrit l’écart au locus de Planck dans l’axe vert/magenta ; utile pour comprendre un blanc qui ‘tire’ malgré une CCT correcte.",
        "Deux sources paraissant de même couleur peuvent rendre différemment les textiles ou le maquillage si leurs spectres diffèrent."
      ],
      watch:["Faire les comparaisons avec la caméra du projet, LUT active et exposition de travail.","Éviter de corriger un problème spectral uniquement avec une balance des blancs globale."],
      source:{label:"ARRI — Color fidelity, TM-30 et réponse caméra",url:"https://www.arri.com/en/learn/lighting/arri-alexa-modes"},
      tags:["Duv","TM-30","metamerism","spectral"]
    },
    {
      id:"highlight-budget",
      title:"Préserver la marge dans les hautes lumières",
      kicker:"EXPOSURE PLACEMENT",
      summary:"Avec des fenêtres, des lampes de décor et des reflets, il faut réserver de la marge dans les hautes lumières avant de régler la key.",
      bullets:[
        "Décider quelles zones ont le droit de clipper ou de frôler le roll-off : ampoule, soleil fenêtre, chrome, peau.",
        "Régler ensuite la key sur le visage en tenant compte des hautes lumières déjà présentes dans le cadre.",
        "On peut réduire l’intensité d’une lampe visible et ajouter un renfort hors champ : la motivation reste crédible, sans saturer inutilement l’image."
      ],
      watch:["Comparer waveform et image : une belle valeur numérique n’est pas une hiérarchie esthétique.","Une caméra à grande latitude n’annule pas le besoin de hiérarchiser les valeurs."],
      tags:["dynamic range","highlights","practicals","exposure"]
    },
    {
      id:"blocking-light",
      title:"Éclairer le déplacement, pas seulement une position",
      kicker:"STAGING",
      summary:"Sur un plan vivant, la lumière peut être pensée comme une suite de zones plutôt qu’une exposition constante.",
      bullets:[
        "Accepter qu’un acteur entre ou sorte d’une poche de lumière peut renforcer la mise en scène.",
        "Une source fixe peut devenir key, edge puis background selon le déplacement et l’axe caméra.",
        "Le bon dispositif n’est pas toujours celui qui garde le visage identique sur 8 mètres."
      ],
      watch:["Tester les positions intermédiaires et les rotations de visage.","Prévoir les raccords de direction si la scène sera morcelée au montage."],
      source:{label:"ASC — Happyend, staging dans plusieurs keys",url:"https://theasc.com/article/happyend-capturing-a-confrontation-in-dystopian-tokyo/"},
      tags:["blocking","zones","walk through light","continuity"]
    },
    {
      id:"source-background-distance",
      title:"Séparer sujet et fond par la géométrie avant la puissance",
      kicker:"SPATIAL CONTROL",
      summary:"Le rapport source–sujet–fond peut créer une séparation plus propre qu’un simple changement de dimmer.",
      bullets:[
        "Une source proche du sujet et éloignée du fond favorise un fond plus bas par fall-off.",
        "Une source lointaine homogénéise davantage les plans de profondeur.",
        "Déplacer le sujet de 50 cm peut parfois avoir plus d’effet que monter ou descendre la key."
      ],
      watch:["Regarder l’ombre portée du sujet sur le décor.","Dans un grand décor, prévoir plusieurs zones lumineuses plutôt que demander à une seule source d’éclairer tout l’espace."],
      tags:["distance","background","fall-off","separation"]
    }
  ],

  methods:[
    {
      id:"book-light",
      title:"Book light : bounce → diffusion, mais pas comme dogme",
      kicker:"METHOD",
      summary:"Créer une grande source indirecte, homogène et contrôlable ; le résultat dépend du remplissage du bounce, du grade de diffusion et des distances.",
      bullets:[
        "Classique : source → bounce → diffusion. La diffusion peut être très proche du bounce pour compacter le dispositif.",
        "Le bounce élimine une partie du hotspot primaire ; la diffusion finale homogénéise encore la surface vue du sujet.",
        "Une variante diffusion → bounce peut être pertinente lorsque l’implantation ou la réflexion du décor l’impose."
      ],
      watch:["Mesurer la perte réelle plutôt que supposer ‘deux stops’.","Éviter qu’une petite zone du bounce soit la seule réellement éclairée."],
      source:{label:"ASC — Book light / diffusion test",url:"https://theasc.com/article/shot-craft-diffusion-confusion-part-2-alternative-diffusion/"},
      tags:["book light","bounce","diffusion"]
    },
    {
      id:"bounce-source",
      title:"Bounce : traiter le réflecteur comme la vraie source",
      kicker:"METHOD",
      summary:"Le projecteur fournit l’énergie ; la surface réfléchissante définit souvent la taille, la direction et la texture effectivement vues par le sujet.",
      bullets:[
        "Orienter la normale du bounce vers la zone de jeu plutôt que viser intuitivement ‘le mur’.",
        "La zone réellement illuminée du bounce détermine la source effective.",
        "Muslin, poly, ultrabounce, silver ou miroir modifient rendement, diffusion et caractère spéculaire."
      ],
      watch:["Contrôler la lumière directe qui contourne le bounce.","Sur murs colorés, le bounce prend la chromaticité du décor."],
      tags:["bounce","passive source","muslin","ultrabounce"]
    },
    {
      id:"negative-fill",
      title:"Negative fill : soustraire un angle solide de fill",
      kicker:"METHOD",
      summary:"Le négatif est efficace lorsqu’il remplace réellement une portion importante de l’environnement lumineux vu par le sujet.",
      bullets:[
        "Plus le solid est proche et grand depuis le visage, plus il retire de retour ambiant.",
        "Identifier l’origine du fill : mur, sol, ciel, diffusion, décor. Placer le noir contre cette contribution plutôt que ‘côté caméra’ par automatisme.",
        "En extérieur, grands solids, charcoals ou structures peuvent modeler l’ambiance avant toute source active."
      ],
      watch:["Un négatif lointain et petit peut être presque cosmétique.","Vérifier qu’il ne coupe pas involontairement une source destinée au fond."],
      source:{label:"ASC — negative fill / passive fill sur Django Unchained",url:"https://theasc.com/article/django-unchained-richardson-tarantino/"},
      tags:["negative fill","solid","subtractive lighting"]
    },
    {
      id:"passive-fill",
      title:"Passive fill : relever sans ajouter une nouvelle direction",
      kicker:"METHOD",
      summary:"Utiliser une surface disponible ou placée pour récupérer la key ou l’ambiance et ouvrir une ombre sans créer une seconde source perceptible.",
      bullets:[
        "Muslin, poly, showcard ou mur clair peuvent renvoyer une fraction de la source existante.",
        "Le placement près de l’axe caméra réduit généralement la sensation de seconde ombre.",
        "En extérieur, un grand bounce peut suivre le soleil ou une source principale sans multiplier les projecteurs."
      ],
      watch:["Le fill passif transporte la couleur et le spectre de ce qu’il reçoit.","Une surface brillante peut devenir une seconde key plutôt qu’un fill."],
      source:{label:"ASC — passive fill / negative fill",url:"https://theasc.com/article/django-unchained-richardson-tarantino/"},
      tags:["passive fill","bounce","ambient"]
    },
    {
      id:"crls-relay",
      title:"CRLS / reflector relay : déplacer le point d’émission",
      kicker:"METHOD",
      summary:"Envoyer une source vers un ou plusieurs réflecteurs de précision pour obtenir des directions impossibles depuis la position du projecteur primaire.",
      bullets:[
        "Le réflecteur devient la source apparente depuis le sujet ; le projecteur peut rester au sol ou hors d’une zone caméra.",
        "Les grades de diffusion permettent de choisir entre réflexion quasi miroir et réflexion plus diffusée.",
        "Le relay peut prolonger le trajet optique et limiter le spill sans ajouter un nouveau luminaire."
      ],
      watch:["La logique reste géométrique : angle d’incidence, angle réfléchi, taille apparente.","Ne pas confondre CRLS avec un simple bounce blanc : la surface est conçue pour une réflexion dirigée."],
      source:{label:"Lightbridge — CRLS official",url:"https://www.thelightbridge.com/faq/"},
      tags:["CRLS","reflector","relay","Lightbridge"]
    },
    {
      id:"far-side-key",
      title:"Far-side / upstage key",
      kicker:"METHOD",
      summary:"Placer la key du côté opposé à la caméra par rapport au visage pour conserver modelé, nez lisible et côté caméra plus bas.",
      bullets:[
        "La source est souvent du côté vers lequel le sujet regarde ou du côté opposé à l’axe caméra, selon le blocking.",
        "Le côté caméra peut être laissé sans fill, relevé passivement ou sculpté au négatif.",
        "Sur champ/contrechamp, la cohérence de motivation compte davantage qu’une symétrie mathématique."
      ],
      watch:["Une far-side key trop arrière devient edge et peut perdre l’œil.","Sur visage qui tourne, anticiper le moment où la key change de côté."],
      tags:["far-side key","upstage key","near-side","portrait"]
    },
    {
      id:"overhead-base",
      title:"Top ambience + local keys",
      kicker:"METHOD",
      summary:"Construire un niveau de base par le plafond puis ajouter des directions locales seulement là où le blocking le demande.",
      bullets:[
        "Overhead diffus, lanternes juponnées, soft boxes ou surfaces indirectes peuvent fournir le floor.",
        "Skirts et grids évitent que l’ambiance ne lave les murs et le fond.",
        "Les keys locales peuvent être faibles : elles servent à redonner une direction, pas à porter toute l’exposition."
      ],
      watch:["Une ambiance trop verticale creuse orbites et dessous de nez.","Le plafond lumineux se reflète fortement dans verres, carrosseries et surfaces polies."],
      tags:["overhead","ambient","local key","skirt"]
    },
    {
      id:"hard-soft-layer",
      title:"Hard structure + soft base",
      kicker:"METHOD",
      summary:"Séparer la fonction graphique de la lumière dure de la fonction d’exposition tenue par une ambiance douce.",
      bullets:[
        "Une source dure peut dessiner fenêtre, sol, mur ou haze sans être obligée d’exposer correctement tout le visage.",
        "Un soft base plus bas tient les peaux et le mouvement.",
        "Cette dissociation permet de doser indépendamment texture du décor et lisibilité du sujet."
      ],
      watch:["Éviter deux keys concurrentes sur le visage.","Le niveau de base doit rester assez bas pour que la structure dure garde son poids."],
      tags:["hard light","soft base","sun effect","haze"]
    },
    {
      id:"zone-lighting",
      title:"Lighting into zones",
      kicker:"METHOD",
      summary:"Préparer plusieurs zones lumineuses cohérentes plutôt que suivre chaque acteur avec une source.",
      bullets:[
        "Chaque zone peut avoir une fonction : entrée sombre, table chaude, fenêtre froide, couloir silhouetté.",
        "Le blocking devient un outil de contraste et non un problème à neutraliser.",
        "DMX et sources intégrées facilitent les transitions sans déplacer le matériel."
      ],
      watch:["Prévoir la continuité des gros plans tournés hors chronologie.","Les zones doivent être motivées visuellement ou assumées stylistiquement."],
      source:{label:"ASC — Happyend, acteurs passant d’une key à l’autre",url:"https://theasc.com/article/happyend-capturing-a-confrontation-in-dystopian-tokyo/"},
      tags:["zones","blocking","DMX","walk-in light"]
    },
    {
      id:"practical-augment",
      title:"Practical visible + augmentation hors champ",
      kicker:"METHOD",
      summary:"Dissocier la luminance de l’objet visible de la quantité et de la qualité de lumière nécessaire sur le visage.",
      bullets:[
        "Régler d’abord la practical pour qu’elle tienne dans le cadre et raconte la scène.",
        "Ajouter un renfort hors champ de même logique directionnelle : bounce, petite source diffusée, tube caché, réflecteur.",
        "La practical motive ; le renfort contrôle la peau."
      ],
      watch:["Tester flicker, driver et dimming aux cadences du projet.","Éviter qu’un renfort trop frontal révèle une direction étrangère à la practical."],
      tags:["practical","augmentation","motivated light","flicker"]
    },
    {
      id:"cross-key",
      title:"Cross-key : une source, deux fonctions",
      kicker:"METHOD",
      summary:"Sur deux acteurs face à face, chaque source peut être key pour l’un et edge / separation pour l’autre.",
      bullets:[
        "Croiser les sources derrière ou au-delà de chaque acteur plutôt que créer deux frontales indépendantes.",
        "Différencier les niveaux pour éviter doubles ombres et aplatissement.",
        "Le dispositif gagne en efficacité sur champs/contrechamps et mouvements légers."
      ],
      watch:["Tester le plan large : deux keys acceptables en gros plan peuvent devenir très visibles ensemble.","Sur lunettes et surfaces spéculaires, les deux sources multiplient les reflets."],
      tags:["cross key","dialogue","two shot","edge"]
    },
    {
      id:"day-exterior-subtractive",
      title:"Day exterior : soustraire avant de pousser",
      kicker:"METHOD",
      summary:"En jour extérieur, le contrôle le plus efficace peut être d’abaisser ou filtrer le ciel / soleil sur le sujet plutôt que lutter en puissance.",
      bullets:[
        "Choisir orientation et horaire, placer le soleil arrière ou latéral, puis travailler overhead, negative fill et passive fill.",
        "Un grand textile peut transformer une zone de jeu entière et rendre les raccords plus stables.",
        "La source active devient alors un accent ou une correction plutôt qu’un combat contre le soleil."
      ],
      watch:["Vent, rigging et sécurité deviennent des paramètres de photographie.","Le fond non contrôlé peut rester beaucoup plus contrasté que la zone sous textile."],
      source:{label:"ARRI — gaffer Franck Barrault, soustraction de lumière",url:"https://www.arri.com/news-en/gaffer-franck-barrault-passion-for-light-with-arri-tools/301520-301520"},
      tags:["exterior day","subtractive","overhead","negative fill"]
    },
    {
      id:"low-glow",
      title:"Low glow / floor bounce",
      kicker:"ATTRIBUTED METHOD",
      summary:"Créer une lueur basse et diffuse depuis le sol ou une surface basse pour relever légèrement des visages ou installer une sensation de lumière ambiante inhabituelle.",
      bullets:[
        "Le terme ‘low glow’ apparaît dans des descriptions d’équipe de Robert Richardson / Ian Kincaid : il désigne une contribution basse, souvent indirecte.",
        "Le dispositif peut être très discret et sert davantage à donner de la matière qu’à constituer une key classique.",
        "Sur table ou décor sombre, le rebond bas peut aussi modeler mains et objets."
      ],
      watch:["Une source basse remonte facilement dans les yeux et sous le nez : niveau très contrôlé.","À employer comme vocabulaire attribué, pas comme terme universel de tous les plateaux."],
      source:{label:"ASC — Once Upon a Time in Hollywood / Ian Kincaid",url:"https://theasc.com/article/back-in-time-making-once-upon-a-time-in-hollywood/"},
      tags:["low glow","floor bounce","Robert Richardson"]
    }
  ],

  situations:[
    {id:"sit-bar",caseId:"josh-bar-wide",title:"The Bar — fausse nuit par choix de décor",summary:"Sous-sol sans fenêtres : peu de sources, forte hiérarchie, practicals comme motivation.",focus:"À regarder : comment le choix du lieu supprime le problème avant l’éclairage."},
    {id:"sit-nights",caseId:"grant-apartment",title:"Nights Crawling — faisceau, haze, plafond et practicals",summary:"Une structure dure lisible posée sur un niveau ambiant beaucoup plus faible.",focus:"À regarder : séparation des fonctions entre faisceau graphique, ambiance plafond et sources visibles."},
    {id:"sit-times",caseId:"hall-times-square",title:"Fantastic Four — Times Square",summary:"Décor monumental, milliers de practicals, arrays Vortex et source mobile.",focus:"À regarder : pourquoi la quantité de practicals ne remplace pas une key dirigée."},
    {id:"sit-world",caseId:"hall-worldship",title:"Fantastic Four — Worldship",summary:"Grand intérieur sombre, overhead diffus très bas et interactions orange du décor.",focus:"À regarder : construire de la matière dans les noirs sans transformer l’ambiance en soft frontal."},
    {id:"sit-interview",caseId:"grant-interview",title:"Fantastic Negrito — interview au bar",summary:"Key douce contrôlée, accent plus dur / froid et séparation du fond chaud.",focus:"À regarder : trois familles de sources, trois fonctions, aucune redondance."}
  ],

  cases:[
    {
      id:"case-apartment-270",
      title:"Plan-séquence 270° dans un appartement de jour",
      setup:"Une comédienne traverse trois pièces pendant 90 s. Trois fenêtres réelles, ciel variable, caméra presque 270°. On veut naturel mais sculpté, sans relight visible pendant le plan.",
      constraints:["Plan large + passages proches","Fenêtres parfois dans le cadre","Peu de place au sol","Raccord météo incertain"],
      approaches:[
        {name:"A · Base extérieure + négatif intérieur",idea:"Construire le niveau par les fenêtres depuis l’extérieur puis sculpter surtout avec solids et négatifs à l’intérieur.",tradeoff:"Très cohérent géographiquement, mais demande puissance / accès extérieur et contrôle des fenêtres."},
        {name:"B · Ambient top discret + fenêtres motivantes",idea:"Tenir un floor faible depuis le plafond, laisser les fenêtres donner la direction et réserver quelques accents cachés aux zones critiques.",tradeoff:"Libère la caméra, mais le top peut devenir visible dans les yeux ou aplatir les murs si mal contenu."},
        {name:"C · Zones volontairement différentes",idea:"Accepter une pièce sombre, une zone fenêtre plus haute et un passage silhouette. Le blocking porte la variation.",tradeoff:"Plus cinématographique, mais exige confiance du réalisateur et raccords précis pour les inserts."}
      ],
      ask:["Où veux-tu que le visage soit le plus lisible ?","Quelle fenêtre est réellement la motivation dominante ?","Le plan doit-il être homogène ou raconter une progression par la lumière ?"]
    },
    {
      id:"case-white-office",
      title:"Bureau blanc : le négatif ne semble rien faire",
      setup:"Petit bureau blanc, plafond bas, grande baie latérale. Même avec un floppy côté ombre, le visage reste plat.",
      constraints:["Murs blancs à 1 m","Plafond blanc","Baie large","Champ/contrechamp"],
      approaches:[
        {name:"A · Traiter l’origine du fill",idea:"Le problème n’est peut-être pas le côté ombre mais le plafond / mur caméra. Agrandir le noir pour occuper réellement ce champ réfléchi.",tradeoff:"Efficace mais encombrant."},
        {name:"B · Abaisser l’ambient floor",idea:"Réduire la baie avec net / diffusion / tenting partiel puis reconstruire une key plus directionnelle.",tradeoff:"Plus de contrôle, mais on perd du niveau général."},
        {name:"C · Production design",idea:"Introduire surfaces plus sombres hors axe ou repositionner le sujet pour augmenter la distance aux murs.",tradeoff:"Très propre, mais nécessite collaboration déco / mise en scène."}
      ],
      ask:["D’où vient réellement le fill mesuré ?","Le solid est-il assez grand depuis le visage ?","Peux-tu déplacer le sujet plutôt que la lumière ?"]
    },
    {
      id:"case-night-car",
      title:"Voiture de nuit en mouvement",
      setup:"Deux acteurs dans une voiture roulante, caméra frontale et profils. On veut ville nocturne crédible sans ‘RGB demo’.",
      constraints:["Très peu de place","Reflets pare-brise","Sources extérieures variables","Peaux à préserver"],
      approaches:[
        {name:"A · Base douce quasi neutre + interactions extérieures",idea:"Créer une faible base propre dans l’habitacle puis réserver couleurs et mouvements aux interactions de rue.",tradeoff:"Peaux solides, mais peut sembler trop propre si la base est trop haute."},
        {name:"B · Practical dashboard / plafonnier motivé",idea:"Faire porter la lecture par une source intégrée très basse et laisser l’extérieur découper.",tradeoff:"Très motivé, mais risque de lumière basse peu flatteuse."},
        {name:"C · Reflections-first",idea:"Concevoir d’abord les réflexions sur vitres et carrosserie, puis ajuster la peau autour de ce dessin.",tradeoff:"Excellent pour publicité / stylisé, plus exigeant en répétabilité."}
      ],
      ask:["Quel est le niveau minimal de peau acceptable ?","Les interactions doivent-elles raconter une géographie réelle ?","Que veux-tu voir dans le pare-brise : sujet ou ville ?"]
    },
    {
      id:"case-product-metal",
      title:"Produit métal poli + main dans le cadre",
      setup:"Petit objet chromé manipulé en macro. La forme est lisible mais les reflets deviennent vite sales et la main paraît plate.",
      constraints:["Métal miroir","Macro","Mouvement de main","Fond sombre"],
      approaches:[
        {name:"A · Light by reflection",idea:"Construire d’abord les grandes formes blanches/noires reflétées dans le métal, sans chercher à ‘éclairer’ directement l’objet.",tradeoff:"Très propre, mais demande surfaces de contrôle proches."},
        {name:"B · Source longue et étroite",idea:"Créer un trait spéculaire continu qui décrit le volume, plus un petit négatif pour séparer l’arête.",tradeoff:"Graphique et précis, moins naturel."},
        {name:"C · Deux systèmes séparés",idea:"Un environnement de réflexion pour le produit, une petite key indépendante pour la main.",tradeoff:"Contrôle maximum, mais risque de directions contradictoires."}
      ],
      ask:["Quelle forme veux-tu lire dans le reflet ?","Le chrome doit-il paraître noir, blanc ou dégradé ?","Peux-tu séparer le travail peau et produit ?"]
    },
    {
      id:"case-exterior-noon",
      title:"Extérieur midi, dialogue de 4 pages",
      setup:"Deux acteurs dans un décor ouvert, plein soleil, scène longue. Couverture large + gros plans, horaire peu flexible.",
      constraints:["Soleil qui tourne","Vent","Fond très lumineux","Temps plateau limité"],
      approaches:[
        {name:"A · Backlight sun + passive/negative",idea:"Placer la scène pour garder le soleil arrière, ouvrir les faces par bounce et densifier le côté caméra par négatif.",tradeoff:"Rapide, mais dépend de la trajectoire solaire."},
        {name:"B · Grand overhead",idea:"Créer une zone contrôlée pour toute la scène, puis reconstruire un soleil / edge si nécessaire.",tradeoff:"Raccord stable, mais rigging lourd et fond toujours au soleil."},
        {name:"C · Exploiter le soleil comme changement",idea:"Découper le blocking pour que les variations deviennent narratives plutôt que des erreurs de raccord.",tradeoff:"Élégant si assumé, difficile au montage classique."}
      ],
      ask:["Quel plan doit établir la direction du soleil ?","Combien de temps la couverture va-t-elle réellement prendre ?","Le fond peut-il être 2–3 stops plus haut sans casser le look ?"]
    },
    {
      id:"case-low-ceiling",
      title:"Nuit intérieure, plafond bas, 4 acteurs autour d’une table",
      setup:"Décor réel, plafond à 2,35 m, aucun axe ne permet un gros pied. Caméra tourne autour de la table.",
      constraints:["360° partiel","Lunettes","Table brillante","Plafond visible"],
      approaches:[
        {name:"A · Overhead juponné asymétrique",idea:"Petite surface mince au plafond, décentrée, avec jupe pour conserver une direction.",tradeoff:"Couverture efficace, mais risque de reflets et orbites."},
        {name:"B · Practicals + hidden bounces",idea:"Utiliser suspensions / lampes comme motivation et cacher des bounces bas ou latéraux hors angles.",tradeoff:"Très intégré, mais nécessite beaucoup de micro-ajustements."},
        {name:"C · Cross-key au-delà des acteurs",idea:"Deux sources latérales croisées servant alternativement de key et edge.",tradeoff:"Bon modelé, mais doubles ombres possibles sur table / fond."}
      ],
      ask:["Peux-tu accepter une direction différente selon chaque côté de table ?","Quel élément du décor peut devenir la motivation principale ?","Le plafond doit-il rester sombre ou participer à l’ambiance ?"]
    },
    {
      id:"case-window-dialogue",
      title:"Dialogue près d’une fenêtre : conserver la géographie sur les deux champs",
      setup:"Deux acteurs se font face près d’une fenêtre latérale. La fenêtre est hors champ dans un axe et visible dans l’autre.",
      constraints:["Champ/contrechamp serré","Large fenêtre réelle","Peaux différentes","Raccord exposition fenêtre"],
      approaches:[
        {name:"A · Une seule direction fenêtre",idea:"Conserver la même motivation et accepter que l’un soit plus far-side que l’autre.",tradeoff:"Géographie très solide, beauté moins symétrique."},
        {name:"B · Cross augmentation discrète",idea:"Fenêtre comme base, petit renfort opposé pour le second champ sans inverser visiblement la logique.",tradeoff:"Plus flatteur, mais attention à la seconde ombre."},
        {name:"C · Blocking / eyelines",idea:"Modifier légèrement orientation des corps et regards pour que la même source travaille mieux les deux visages.",tradeoff:"Solution élégante mais dépend de la mise en scène."}
      ],
      ask:["Le raccord de direction vaut-il plus que la symétrie des visages ?","Quelle différence de contraste entre personnages est acceptable ?","Peux-tu résoudre par le blocking avant d’ajouter une source ?"]
    },
    {
      id:"case-beauty-skin",
      title:"Beauty / peau : source très douce mais visage sans volume",
      setup:"Grande diffusion proche, peau magnifique mais visage trop uniforme. Le client veut garder la douceur.",
      constraints:["Beauty close-up","Maquillage précis","Reflets yeux importants","Peu de contraste autorisé"],
      approaches:[
        {name:"A · Déplacer la grande source",idea:"Garder la taille mais décentrer la surface pour recréer une direction plutôt que réduire sa taille.",tradeoff:"Conserve la douceur, change le dessin du catchlight."},
        {name:"B · Negative fill très proche",idea:"Retirer localement le retour caméra sans toucher à la key.",tradeoff:"Très efficace, mais peut apparaître dans les reflets ou gêner l’axe."},
        {name:"C · Shape the source",idea:"Masquer une partie de la diffusion ou utiliser un eggcrate / skirt pour rendre la surface asymétrique.",tradeoff:"Contrôle fin, mais peut créer un gradient visible sur mouvement."}
      ],
      ask:["Le problème est-il la douceur ou l’absence de direction ?","Quel catchlight veux-tu conserver ?","Peut-on modifier la surface sans modifier la peau ?"]
    }
  ],

  vocabulary:[
    {term:"Ambient floor",family:"LIGHTING",definition:"Niveau de base présent dans les ombres avant la contribution principale.",nuance:"Très utile pour raisonner contraste dans un décor clair ou une ambiance overhead."},
    {term:"Far-side key",family:"LIGHTING",definition:"Key placée du côté du visage opposé à la caméra.",nuance:"Souvent aussi appelée upstage key selon le contexte de mise en scène."},
    {term:"Near-side key",family:"LIGHTING",definition:"Key du côté caméra du visage.",nuance:"Peut aplatir davantage si le fill et le décor sont élevés, mais reste un choix stylistique valide."},
    {term:"Upstage key",family:"LIGHTING",definition:"Key venant du côté ‘fond de scène’ / opposé caméra dans une géographie de dialogue.",nuance:"Terminologie surtout anglo-saxonne ; se recoupe souvent avec far-side."},
    {term:"Passive fill",family:"LIGHTING",definition:"Fill obtenu par réflexion d’une source existante plutôt que par une source active dédiée.",nuance:"Muslin, poly, mur, sol ou showcard."},
    {term:"Negative fill",family:"LIGHTING",definition:"Réduction du fill ambiant par surface absorbante.",nuance:"L’efficacité dépend surtout de la taille apparente du noir depuis le sujet."},
    {term:"Shadow transfer",family:"LIGHTING",definition:"Zone de transition entre partie éclairée et ombre ; lecture de la pénombre et de sa densité.",nuance:"Terme utile pour comparer des qualités de source au-delà de ‘hard/soft’."},
    {term:"Umbra",family:"OPTICS",definition:"Partie de l’ombre où la source est entièrement occultée.",nuance:"Sa densité réelle dépend aussi des autres contributions lumineuses."},
    {term:"Penumbra",family:"OPTICS",definition:"Zone de transition où la source n’est que partiellement occultée.",nuance:"Sa largeur augmente avec la taille angulaire de la source."},
    {term:"Wrap",family:"LIGHTING",definition:"Sensation qu’une source enveloppe le volume au-delà du côté directement exposé.",nuance:"Souvent liée à taille de source, proximité et fill environnant."},
    {term:"Carry",family:"SET SLANG",definition:"Capacité pratique d’une source à conserver un niveau utile sur une distance ou une zone.",nuance:"Terme de plateau, pas une grandeur photométrique normalisée."},
    {term:"Spill",family:"LIGHTING",definition:"Lumière qui atteint une zone non désirée.",nuance:"À distinguer du fall-off : on peut avoir peu de spill et beaucoup de fall-off."},
    {term:"Feather",family:"LIGHTING",definition:"Utiliser le bord du faisceau / de la source plutôt que son centre.",nuance:"Permet d’égaliser, réduire un hotspot ou éviter de frapper le fond."},
    {term:"Book light",family:"METHOD",definition:"Dispositif combinant bounce et diffusion pour créer une grande source indirecte.",nuance:"L’ordre et les distances peuvent varier ; le nom décrit une famille, pas une recette unique."},
    {term:"Double break",family:"GRIP / LIGHTING",definition:"Deux niveaux successifs de contrôle ou diffusion dans le trajet lumineux.",nuance:"Le sens exact peut varier selon équipes ; préciser le dispositif."},
    {term:"Dead light",family:"ATTRIBUTED SLANG",definition:"Grande lumière très diffuse donnant peu de sensation de provenance.",nuance:"Terme rencontré dans certaines équipes, notamment autour de Janusz Kamiński ; pas universel."},
    {term:"Low glow",family:"ATTRIBUTED SLANG",definition:"Faible contribution diffuse et basse, souvent par rebond au sol.",nuance:"Terme attribué dans des retours d’équipe de Robert Richardson / Ian Kincaid."},
    {term:"Interactive light",family:"LIGHTING",definition:"Variation lumineuse synchronisée ou motivée par une action visible ou hors champ.",nuance:"Feu, écran, passage véhicule, enseigne, explosion, etc."},
    {term:"Practical",family:"SET",definition:"Source lumineuse visible dans le décor et faisant partie de la scène.",nuance:"Elle peut motiver une source hors champ plus performante."},
    {term:"Eye light",family:"PORTRAIT",definition:"Petite contribution destinée au reflet dans l’œil et/ou à ouvrir légèrement l’orbite.",nuance:"Ne doit pas forcément modifier sensiblement l’exposition du visage."},
    {term:"Topper",family:"GRIP",definition:"Drapeau utilisé pour couper la partie haute d’un faisceau.",nuance:"Le terme décrit la fonction de la coupe."},
    {term:"Sider",family:"GRIP",definition:"Drapeau placé latéralement pour contenir un faisceau.",nuance:"Souvent associé à topper/bottomer dans le langage grip."},
    {term:"Teaser",family:"GRIP / STAGE",definition:"Coupe supérieure suspendue destinée à limiter la lumière vers le décor ou l’objectif.",nuance:"Très courant en studio / plateau."},
    {term:"Floppy",family:"GRIP",definition:"Drapeau noir avec extension rabattable permettant de doubler rapidement la surface.",nuance:"Souvent utilisé pour negative fill ou contrôle de spill."},
    {term:"Wag flag",family:"GRIP",definition:"Petit drapeau léger et rapide à repositionner pour corriger une fuite ou un reflet.",nuance:"Terme surtout anglo-saxon."},
    {term:"Single / Double net",family:"GRIP",definition:"Filet réduisant partiellement le niveau sans créer une coupure opaque.",nuance:"Single ≈ réduction plus faible ; double plus forte. Tester le moiré / focus selon distance."},
    {term:"Duv",family:"COLOR",definition:"Distance au locus de Planck sur l’axe vert–magenta pour un blanc donné.",nuance:"Deux sources à même CCT peuvent avoir des Duv différents."},
    {term:"TM-30 Rf / Rg",family:"COLOR",definition:"Rf décrit la fidélité moyenne ; Rg la tendance globale de gamut / saturation.",nuance:"Indicateurs utiles mais non spécifiques à un capteur cinéma."},
    {term:"Metamerism",family:"COLOR",definition:"Deux objets ou sources peuvent sembler correspondre sous une condition et diverger sous une autre.",nuance:"Important avec LED, textiles, maquillage et caméras différentes."},
    {term:"Source effective",family:"LIGHTING",definition:"Surface qui contribue réellement comme émetteur depuis le point de vue du sujet.",nuance:"Une diffusion 12×12 partiellement remplie n’est pas une source effective 12×12."},
    {term:"Hot edge",family:"LIGHTING",definition:"Edge / rim volontairement plus haut que la key pour créer une séparation marquée.",nuance:"À surveiller sur peau, oreilles, cheveux clairs et surfaces brillantes."},
    {term:"Pockets of light",family:"STAGING",definition:"Zones lumineuses distinctes dans lesquelles les acteurs entrent et sortent.",nuance:"Approche utile pour plans longs et décors à forte profondeur."}
  ],

  materials:[
    {id:"mat-gridcloth",title:"Grid Cloth — Full / Half / Quarter",type:"DIFFUSION",summary:"Famille de textiles diffusion robustes, souvent utilisés en grands cadres.",use:"Choisir le grade selon perte, homogénéisation et niveau de shadow transfer recherché.",watch:"Le grade ne remplace pas la taille apparente ni le remplissage du cadre."},
    {id:"mat-magiccloth",title:"Magic Cloth",type:"DIFFUSION",summary:"Diffusion très dense donnant une surface homogène lorsque correctement remplie.",use:"Book lights, grands softs, caissons.",watch:"Perte importante ; vérifier puissance et hotspot réel derrière la toile."},
    {id:"mat-muslin",title:"Muslin bleached / unbleached",type:"BOUNCE",summary:"Surface de bounce très utilisée ; l’unbleached apporte généralement une chaleur perceptible.",use:"Grand bounce, passive fill, overhead indirect.",watch:"La teinte réelle dépend du textile et du vieillissement : tester caméra."},
    {id:"mat-ultrabounce",title:"UltraBounce",type:"BOUNCE / CONTROL",summary:"Face blanche très réfléchissante, revers noir utile pour contrôle et négatif.",use:"Grand bounce extérieur, solids réversibles, grands cadres.",watch:"Surface très efficace : surveiller le niveau de fill et les réflexions."},
    {id:"mat-silver",title:"Silver / Soft Silver",type:"REFLECTOR",summary:"Réflexion plus directionnelle et spéculaire qu’un bounce blanc.",use:"Reprendre du soleil, envoyer à distance, créer un accent.",watch:"Hotspots, éblouissement, texture de peau et variation d’angle très sensibles."},
    {id:"mat-solids",title:"Solids / Duvetyne / Black",type:"SUBTRACTIVE",summary:"Surfaces absorbantes destinées à supprimer spill ou retour ambiant.",use:"Negative fill, tenting, protection objectif, découpe.",watch:"La distance au sujet détermine fortement leur efficacité comme négatif."},
    {id:"mat-nets",title:"Single / Double Nets",type:"CONTROL",summary:"Réduisent partiellement une zone sans bord opaque lorsqu’ils sont assez loin du plan de netteté.",use:"Fenêtres, fond, partie de visage, soleil.",watch:"Moiré / texture possible si trop proche du plan de netteté ou sur certaines optiques."},
    {id:"mat-eggcrate",title:"Eggcrate / SnapGrid",type:"CONTROL",summary:"Réduit les angles de sortie d’une source diffuse pour contenir le spill.",use:"Softbox, LiteMat, overhead, interview.",watch:"Ne transforme pas la source en spot et n’augmente pas sa douceur ; il réduit surtout le champ angulaire."},
    {id:"mat-crls",title:"CRLS Cine Reflectors",type:"REFLECTOR SYSTEM",summary:"Réflecteurs de précision avec plusieurs grades de diffusion pour rediriger la lumière avec peu de spill.",use:"Relay, key réfléchie, petites pièces, interviews, produits.",watch:"Raisonner angle et sécurité de rigging ; ce n’est pas un bounce blanc générique.",source:{label:"Lightbridge",url:"https://www.thelightbridge.com/faq/"}},
    {id:"mat-haze",title:"Haze",type:"ATMOSPHERE",summary:"Rend le trajet lumineux visible et réduit le contraste global en ajoutant de la diffusion volumétrique.",use:"Faisceaux, profondeur, séparation de plans.",watch:"Dose très faible et homogène ; continuité, ventilation, sécurité et autorisations."},
    {id:"mat-216",title:"216 / Full White Diffusion",type:"DIFFUSION",summary:"Diffusion blanche dense très courante pour cadres et petites sources.",use:"Homogénéiser une source, créer une surface plus large si le cadre est rempli.",watch:"La référence de diffusion ne dit rien à elle seule de la taille apparente finale."},
    {id:"mat-opal",title:"Opal / light frost",type:"DIFFUSION",summary:"Diffusion légère servant davantage à homogénéiser / casser une dureté extrême qu’à créer une grande source.",use:"Petits fixtures, réduction de multiples ombres LED, légère diffusion.",watch:"Si le matériau reste collé à une petite source, la taille apparente change peu."}
  ],

  sources:[
    {label:"American Cinematographer — Shot Craft: Diffusion Confusion",url:"https://theasc.com/article/shot-craft-diffusion-confusion-part-2-alternative-diffusion/"},
    {label:"American Cinematographer — Django Unchained",url:"https://theasc.com/article/django-unchained-richardson-tarantino/"},
    {label:"American Cinematographer — Happyend",url:"https://theasc.com/article/happyend-capturing-a-confrontation-in-dystopian-tokyo/"},
    {label:"ARRI — Lighting handbook",url:"https://www.arri.com/en/learn/lighting/lighting-handbook"},
    {label:"ARRI — ALEXA Modes / color fidelity",url:"https://www.arri.com/en/learn/lighting/arri-alexa-modes"},
    {label:"ARRI — Photometrics",url:"https://www.arri.com/en/software/lighting-software/arri-photometrics"},
    {label:"Lightbridge — CRLS",url:"https://www.thelightbridge.com/faq/"}
  ]
};