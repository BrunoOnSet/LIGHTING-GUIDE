/* Compléments au carnet DP : choix de plateau documentés, à adapter au décor. */
(function(){
const B=window.BOS_PRO;
B["window-sun"]={
 headline:"Faux soleil : angles, parallélisme, fenêtre et rebonds",
 level:"Jour intérieur / faux soleil",depth:"Fiche avancée",
 intent:"Simuler une direction solaire cohérente à travers un châssis sans qu'un projecteur trop proche se révèle dans les variations d'intensité ou la géométrie des ombres.",
 variants:[
  {title:"Entrant de soleil dur à longue portée",when:"Décor avec fenêtre et recul extérieur.",setup:"Une source de forte intensité à distance, hauteur et azimut fixés selon la progression narrative, à travers une vitre nettoyée ou retirée. Vérifier l'empreinte au sol et aux montants avant d'ajouter l'ambiance.",camera:"Filmer un axe large avec murs et fenêtre ; contrôler les reflets de l'optique et le flare.",why:"La distance limite la divergence du faisceau et les écarts d'éclairement dans la zone.",kit:["storm-xt52","storm-cs32","arri-m18","skypanel-x21"]},
  {title:"Soleil plus doux à fenêtre haute",when:"Une tache solaire trop dure n'est pas souhaitée.",setup:"Conserver une seule direction extérieure ; passer par une diffusion placée assez loin de l'acteur ou un grand cadre extérieur si l'architecture le permet. Protéger le faisceau au-dessus de l'embrasure.",camera:"Contrôler direction des ombres et texture sur le visage.",why:"Une grande source peut évoquer un soleil filtré plutôt qu'un deuxième soleil.",kit:["storm-1200x","skypanel-x21","frame8x8"]}
 ],
 camera:["Prévoir un repère d'azimut et de hauteur sur le plan de feu ; la hauteur du projecteur détermine l'empreinte sur le sol.","Un gobo de feuillage doit correspondre à la perspective et à la taille d'arbres plausibles.","La puissance seule ne suffit pas : photométrie à l'angle optique réel, transmission des vitres et de la diffusion.","Pour plusieurs axes, noter où tombent les ombres et les limites du cadre avant chaque déplacement d'appareil."],
 color:["Choisir un blanc cohérent avec le ciel fictif et la balance caméra. Un soleil artificiel très jaune + ciel très bleu peut devenir cliché.","Sur peaux claires, vérifier le niveau des hautes lumières ; sur peaux foncées, observer l'emplacement et la qualité des reflets spéculaires."],
 traps:[{symptom:"Faux soleil trop près du châssis",cause:"Fort gradient entre haut/bas de la fenêtre et ombres divergentes.",fix:"Accroître le recul ou employer une optique moins ouverte ; mesurer plusieurs points."},{symptom:"Fenêtre brûlée et personnage sombre",cause:"Rapport d'exposition extérieur/intérieur non défini.",fix:"Décider si la fenêtre peut clipper ; sinon construire séparément un niveau de ciel et une key douce."},{symptom:"Faisceau de soleil devenu faux soft",cause:"Diffusion trop proche du projecteur et trop petite apparente.",fix:"Travailler taille apparente et position du dernier diffuseur, pas seulement la référence de gélatine."}],
 kit:[{id:"storm-xt52",role:"Soleil lointain LED",reason:"Très forte puissance, réflecteurs précis, câble et alimentation à calculer."},{id:"arri-m18",role:"Soleil HMI de moyenne portée",reason:"Réflecteur MAX 20–60°, ballast HMI spécialisé."},{id:"skypanel-x21",role:"Entrant directionnel sans grosse distribution",reason:"Optique HyPer et alimentation relativement légère, portée à vérifier selon taille de l'ouverture."}],
 controls:["Test de course de lumière de la première à la dernière marque.","Mesures au fond de la pièce et sous la fenêtre.","Faux soleil seul, puis ciel seul, puis ensemble."],
 refs:["arriSet","arriX","aputureXT","aputureCS"]
};
B["window-sky"]={
 headline:"Faux ciel : homogénéité d'une baie et modelé du visage",
 level:"Jour intérieur / faux ciel",depth:"Fiche avancée",
 intent:"Créer une entrée de ciel large, stable et sans hotspot pour une scène pouvant varier du plan large au gros plan.",
 variants:[
 {title:"Cadre diffus extérieur",when:"Baie assez large et espace devant la façade.",setup:"Diffusion 8×8, 12×12 ou dimension adaptée, éclairée assez uniformément par plusieurs sources ou un gros appareil réparti. Vérifier que le cadre déborde visuellement de la fenêtre sur tous les axes.",camera:"Contrôler la différence de niveau entre bord et centre du cadre.",why:"La dernière surface diffusante est la source apparente.",kit:["skypanel-x23","storm-1200x","gridcloth","frame12x12"]},
 {title:"Bounce de ciel latéral",when:"Fenêtre partielle, peu de recul direct derrière.",setup:"Éclairer un grand ultrabounce ou muslin hors champ, qui renvoie dans la pièce. Garder la direction de fenêtre et ajouter du noir côté opposé.",camera:"Regarder les reflets colorés venant de la façade et du décor.",why:"Le bounce peut éviter le point lumineux du projecteur visible au travers du verre.",kit:["ultrabounce","storm-700x","floppy"]}
 ],
 camera:["Faire la mesure sur un visage aux marques extrêmes plutôt qu'au seul centre du décor.","Distinguer uniformité du cadre et uniformité de l'éclairage final : les deux sont liés mais non identiques.","Si l'on voit l'extérieur par la vitre, réfléchir au backing, à la luminance dehors et à son exposition."],
 color:["Ne pas rendre systématiquement le ciel cyan : ajuster à la balance scène et au décor.","Attention au bounce sur mur coloré : il peut donner des dominantes vertes ou chaudes à la peau."],
 traps:[{symptom:"Hotspot lumineux visible dans la baie",cause:"Émetteur trop proche ou diffusion trop légère.",fix:"Reculer la source, doubler la diffusion si nécessaire, élargir la zone remplie."},{symptom:"Un visage plat malgré la grande source",cause:"Retours massifs côté caméra.",fix:"Ajouter du negative fill ou couper le bounce des murs."}],
 kit:[{id:"skypanel-x23",role:"Grande surface LED",reason:"Assemblage X modulable, RGBACL, contrôle à distance."},{id:"storm-1200x",role:"Alimentation d'un grand bounce",reason:"Source ponctuelle puissante à optique appropriée."}],
 controls:["Regarder la baie en plan large.","Vérifier plusieurs points de mesure sur toute la trajectoire du comédien."],
 refs:["arriX","arriApps","rosco"]
};
B["window-sun-sky"]={
 headline:"Ciel + soleil : séparer les deux composantes",
 level:"Jour intérieur / faux soleil",depth:"Fiche avancée",
 intent:"Deux systèmes distincts : une composante directionnelle pour le soleil et une autre large pour le ciel.",
 variants:[{title:"Fenêtre de studio à double système",when:"Intérieur jour avec lumière naturelle remplacée.",setup:"Positionner le projecteur « soleil » en amont à angle cohérent. Placer la composante de ciel comme une grande surface moins contrastée qui ne mange pas la direction solaire. Installer des noirs pour que le fill ne rebondisse pas sur tout le décor.",camera:"Fixer une seule référence d'exposition et comparer le visage avec chaque système isolé.",why:"Le paysage lumineux devient riche sans inventer deux soleils.",kit:["storm-xt52","skypanel-x23","frame12x12","floppy"]}],
 camera:["Tester l'empreinte solaire sans ciel.","Augmenter la composante ciel progressivement selon le ratio de contraste recherché ; aucun ratio universel.","Documenter l'état des dimmers et l'angle solaire pour reprendre après une pause."],
 color:["La couleur du ciel et celle du soleil doivent être cohérentes avec la météo fictive.","Éviter un ciel cyan très fort dans les ombres sur peau."],
 traps:[{symptom:"Ombres effacées",cause:"Composante de ciel trop haute et rebonds incontrôlés.",fix:"Baisser le ciel ou ajouter du négatif."},{symptom:"Deux directions principales",cause:"Appareils de ciel trop focalisés.",fix:"Agrandir la source apparente et la rendre plus diffuse."}],
 kit:[{id:"skypanel-x23",role:"Ciel LED",reason:"Grand panneau et possibilité de contrôler la surface."},{id:"storm-xt52",role:"Soleil concentré",reason:"Puissance et optiques longue portée."}],
 controls:["Mesures et photos séparées soleil / ciel / ensemble.","Raccord visage en gros plan."],
 refs:["arriApps","arriX","aputureXT"]
};
B["moving-soft"]={
 headline:"Acteur mobile : couverture, gradient de niveau et direction",
 level:"Mouvement / intérieur",depth:"Fiche avancée",
 intent:"Laisser l'acteur libre sans imposer des marques trop serrées, tout en conservant relief et cohérence dans un plan vivant.",
 variants:[
 {title:"Grande key latérale continue",when:"Déplacement parallèle à un mur ou une fenêtre.",setup:"Construire un long light wall ou une succession de bounces hors cadre. Disposer les surfaces pour couvrir le parcours et garder un côté sombre avec des pans noirs.",camera:"Mesurer aux marques A, milieu, B, et tourner l'acteur pour contrôler le portrait frontal et profil.",why:"Une surface longue homogénéise la trajectoire sans supprimer la direction.",kit:["skypanel-x23","infinimat","ultrabounce","floppy"]},
 {title:"Plusieurs zones en fondu DMX",when:"Déplacement à travers plusieurs pièces ou un plan-séquence.",setup:"Attribuer un groupe à chaque zone. Programmer une rampe de transition selon les déplacements puis répéter l'ensemble pour éviter que la lumière suive visiblement l'acteur.",camera:"Tester le délai des fades, y compris les changements de cadence et de vitesse de jeu.",why:"Permet de préserver les intentions lumineuses localement plutôt qu'éclairer uniformément toutes les pièces.",kit:["skypanel-x21","vortex8","titan","dmx"]},
 {title:"Overhead de couverture",when:"Les axes de caméra balayent une large part du décor.",setup:"Placer des panneaux larges en hauteur, juponnés, avec une direction dominante et une base faible. Vérifier les ombres sous les yeux.",camera:"Revoir les reflets au sol et sur les têtes.",why:"Dégage le plateau et couvre plusieurs positions.",kit:["infinimat","litemat-spectrum4","skirt"]}
 ],
 camera:["Ne pas supposer que la loi inverse du carré suffit à prédire une grande source diffusante proche : mesurer le dispositif entier.","Noter le niveau relatif aux trois marques et la transition entre les zones.","Observer la rotation du visage : le key change de côté, même si l'éclairement reste identique.","Garder une version plan large du plan de feu avec champ caméra et parcours."],
 color:["Le changement de dominante entre deux positions se voit souvent plus que le changement de niveau.","Vérifier une scène avec le costume définitif, car les surfaces claires augmentent le fill quand l'acteur se rapproche."],
 traps:[{symptom:"Visage passe d'une ombre à un autre niveau sans motivation",cause:"Recouvrement trop faible entre surfaces ou projecteurs trop localisés.",fix:"Agrandir couverture, retravailler recouvrement ou programmer le cue."},{symptom:"Ambiance devenue plate",cause:"Sources des deux côtés à la même puissance.",fix:"Privilégier un key dominant et du negative fill mobile/fixe sur les zones utiles."}],
 kit:[{id:"infinimat",role:"Grande surface proche",reason:"Distribution étendue en hauteur ou sur un mur."},{id:"skypanel-x23",role:"Sources en zone",reason:"Découpage en modules, réglage DMX et reflets contrôlables."},{id:"litemat-spectrum4",role:"Complément intégré",reason:"Format fin pour les passages étroits."}],
 controls:["Démarrage, position intermédiaire, arrivée, demi-tour, rythme réel.","Vérifier le plan le plus large et les surfaces réfléchissantes."],
 refs:["arriApps","arriX","arriLemerle","roger"]
};
B["moving-pools"]={
 headline:"Déplacement par poches lumineuses motivées",
 level:"Mouvement / narration",depth:"Fiche avancée",
 intent:"Assumer un changement de lumière durant le déplacement sans perdre une information narrative décisive.",
 variants:[{title:"Entrée de pièce, fenêtre puis practical",when:"Passage d'une zone de jour vers une zone éclairée de lampe.",setup:"Dessiner deux centres lumineux, laisser une zone de transition plus sombre, puis déplacer les couches de lumière sans suivre artificiellement l'acteur.",camera:"Tester les passages aux vitesses et axes réels.",why:"La lumière accompagne la dramaturgie et n'éclaire pas uniformément un espace.",kit:["orbiter","titan","skypanel-x21"]}],
 camera:["Fixer une exposition cible pour les moments narratifs, puis laisser des variations maîtrisées.","Prévoir contrôle des ombres du steadicam/gimbal."],
 color:["Les deux poches peuvent être différentes en CCT, mais la peau ne doit pas subir des dominantes surprises.","Tester la transition sur la durée et non sur une seule image."],
 traps:[{symptom:"Le visage disparaît lors d'une phrase importante",cause:"La transition sombre ne correspond pas au mouvement dramatique.",fix:"Déplacer une poche, adoucir le passage ou faire une courte rampe DMX."}],
 kit:[{id:"orbiter",role:"Poche précise",reason:"Faisceau optique, projection de motif."},{id:"titan",role:"Practical motivée",reason:"Source discrète intégrée au décor."}],
 controls:["Répétition avec les dialogues et rythme réel.","Contrôle de la continuité entre raccords."],
 refs:["arriLemerle"]
};
B["scene-360"]={
 headline:"Scène 360° : masquer les machines, pas la logique de lumière",
 level:"Mise en scène / caméra libre",depth:"Fiche avancée",
 intent:"Garantir des axes multiples sans lumières visibles ou variations arbitraires de direction.",
 variants:[
 {title:"Sources intégrées + plafond",when:"Décor construit ou intérieur avec faux plafond.",setup:"Placer des LED intégrées dans architecture, des lanternes juponnées et des faces légèrement asymétriques. Coordonner les réflexions de fenêtres et miroirs.",camera:"Simuler le tour caméra complet avec focale la plus large.",why:"Sources hors du volume cadrable.",kit:["litemat-spectrum4","titan","infinimat","skirt"]},
 {title:"Source de décor dominante",when:"Une grande practical ou fenêtre demeure visible.",setup:"Conserver une key motivée par cette direction et des débouchages très faibles cachés. Remplacer les pieds par rigging validé.",camera:"Contrôle du champ et du contrechamp au même niveau de contraste.",why:"La motivation reste intelligible quelle que soit l'orientation.",kit:["luna","skypanel-x21","floppy"]}
 ],
 camera:["Lister toutes les surfaces réfléchissantes.","Exiger un plan de rigging et une validation de charge, ne pas inventer de suspension improvisée.","Dégager allées et chemins de caméra."],
 color:["Éviter que les sources intégrées de marques différentes créent des bandes de couleur.","Tester ensemble à basse intensité pour dérive chromatique."],
 traps:[{symptom:"Source apparaît dans le reflet au deuxième axe",cause:"Prélight validé uniquement sur le plan large initial.",fix:"Test de rotation caméra et nettoyage des reflets sur tous les axes."},{symptom:"Visages plats de tous côtés",cause:"Ambiance plafond égale partout.",fix:"Créer une motivation latérale, segments de source et panneaux noirs hors champ."}],
 kit:[{id:"litemat-spectrum4",role:"Panneaux intégrés",reason:"Installation fine, adaptée à rigging."},{id:"titan",role:"Lignes de décor",reason:"Pilotables et discrètes."}],
 controls:["Balayage caméra 360° à plusieurs focales.","Rotation du visage pour les acteurs principaux.","Checklist grip et élingues."],
 refs:["arriLemerle","matte"]
};
B["plan-sequence"]={
 headline:"Plan-séquence : prélight par positions et états de caméra",
 level:"Mise en scène / long plan",depth:"Fiche avancée",
 intent:"Concevoir un éclairage avec une géographie claire qui supporte un parcours complexe et répétable.",
 variants:[
 {title:"Prélight continu sans cues",when:"Caméra traverse une grande pièce mais ne change pas d'ambiance.",setup:"Créer une source principale longue ou un overhead de couverture, protéger les fonds de l'uniformité, tester les changements d'orientation.",camera:"Mesurer progression du début à fin et contrôler les reflets selon panoramiques.",why:"Fiabilité et simplicité d'exploitation.",kit:["infinimat","skypanel-x23","ultrabounce"]},
 {title:"Cues locaux DMX",when:"Caméra entre dans plusieurs espaces de luminosités distinctes.",setup:"Cartographier zones, groupes et durées de fade. Définir déclencheurs humains, sécuriser les communications, prévoir fallback manuel.",camera:"Répéter à l'image sur plusieurs vitesses de comédien.",why:"Chaque lieu garde sa lumière motivée.",kit:["skypanel-x21","orbiter","dmx","crmx"]}
 ],
 camera:["Dessiner simultanément champs caméra, déplacements acteurs, trajectoire équipe et lignes de visée vers fenêtres/reflets.","Noter les points où l'assistant ou l'opérateur risque de couper un faisceau.","Faire une prise test intégrale au monitoring final."],
 color:["Vérifier raccord d'ambiance dans les transitions de pièce et les demi-tours.","Attention aux mélanges de lumière colorée sur peau mobile."],
 traps:[{symptom:"Cues décalés du jeu",cause:"Déclenchement au chronomètre plutôt qu'au mouvement.",fix:"Utiliser des repères visuels et adapter les timings au comédien."}],
 kit:[{id:"skypanel-x21",role:"Cues DMX",reason:"Contrôle intégré et pixel zones."},{id:"titan",role:"Effets cachés",reason:"LED en décor et CRMX selon système."}],
 controls:["Au moins une répétition filmée complète.","Étalonnage test avec l'entièreté du mouvement.","Plan de secours en cas de perte DMX / changement de vitesse de jeu."],
 refs:["arriApps","arriX"]
};
B["dialogue"]={
 headline:"Champ / contrechamp : cross-key, far-side et continuité",
 level:"Dialogue / multi-axes",depth:"Fiche avancée",
 intent:"Faire deux visages avec des directions cohérentes, sans voir deux sources contraires dans les gros plans.",
 variants:[
 {title:"Cross key latéral arrière",when:"Deux personnages se font face à table.",setup:"Deux sources latérales-arrière, chacune sert de key pour l'acteur opposé. Ajouter des noirs proches pour contrôler le fill et ajuster la hauteur des keys.",camera:"Tester les deux gros plans et les regards vers le partenaire.",why:"Économe en matériel, modelé croisé.",kit:["skypanel-x21","vortex4","floppy"]},
 {title:"Une grande source motivée",when:"Fenêtre latérale commune aux personnages.",setup:"Grande surface de fenêtre dominatrice ; ajuster chaque contrechamp avec un bounce / négatif indépendant plutôt que rajouter des keys en conflit.",camera:"Le sens de direction reste lié au décor.",why:"Le raccord semble naturel.",kit:["skypanel-x23","ultrabounce","net-single"]}
 ],
 camera:["Tracer le 180° et la source hors champ sur une vue en plan.","Garder l'axe de la fenêtre malgré les changements de regard.","Mesurer la peau réelle dans chaque axe, pas seulement une charte."],
 color:["Ne pas réchauffer arbitrairement un seul visage si les deux partagent la même motivation.","Tester si le costume d'un acteur renvoie une dominante sur l'autre."],
 traps:[{symptom:"Ombre dans un sens au large et inverse au serré",cause:"Key déplacée au changement de caméra sans motivation.",fix:"Références en photo et placement en plan."}],
 kit:[{id:"vortex4",role:"Key doux maîtrisable",reason:"Grand panneau contrôlable, grille si disponible."},{id:"skypanel-x21",role:"Key ou rebond",reason:"Choix soft/hard selon look."}],
 controls:["Large, champs, contrechamps, inserts mains.","Photo référence de chaque axis / position."],
 refs:["arriLemerle","arriX"]
};
B["table"]={
 headline:"Scène de table : overhead, reflets et ombres sous les yeux",
 level:"Dialogue / plusieurs acteurs",depth:"Fiche avancée",
 intent:"Éclairer plusieurs visages avec une structure de niveaux cohérente et peu de matériel au sol.",
 variants:[
 {title:"Overhead juponné",when:"Table ronde, axes larges et déplacements limités.",setup:"Suspendre une source douce au-dessus du groupe, juponner sur les côtés, créer un second accent latéral depuis une fenêtre ou practical. Vérifier le rebond sur nappe/plateau.",camera:"Contrôler ombre des yeux et reflets sur verre.",why:"Couverture et plateau dégagé.",kit:["infinimat","litemat-spectrum4","skirt"]},
 {title:"Cross keys par personnages",when:"Rapports de contraste importants entre convives.",setup:"Éviter la nappe blanche comme bounce non contrôlé. Deux clés latérales en opposition sur les principaux visages.",camera:"Vérifier la géographie et les ombres sur partenaires.",why:"Plus de modelé mais davantage de préparation.",kit:["skypanel-x21","floppy","net-single"]}
 ],
 camera:["Tester chaque place avec les costumes et les props réels.","Faire bouger les verres et couverts pendant le test.","Anticiper les axes plus larges et éventuellement le dessus du luminaire en reflet."],
 color:["Une nappe colorée modifie le fill par-dessous.","Practical centrale peut rendre peau trop chaude si elle est la seule source proche."],
 traps:[{symptom:"Œil du comédien noir sous top light",cause:"Source trop verticale ou trop petite apparente.",fix:"Décaler et élargir, ajouter un bounce faible sous caméra."}],
 kit:[{id:"infinimat",role:"Grande source overhead",reason:"Largeur et finesse de montage."},{id:"skypanel-x21",role:"Key latéral complémentaire",reason:"Faisceau maîtrisable."}],
 controls:["Vérifier tous les sièges.","Tester objets brillants en prise réelle."],
 refs:["arriLemerle","rosco"]
};
B["candle"]={
 headline:"Bougie : rendu flamme, température et renfort invisible",
 level:"Intérieur / faible lumière",depth:"Fiche avancée",
 intent:"Faire croire qu'une petite flamme éclaire des visages sans avoir un effet de projecteur caché trop puissant.",
 variants:[
 {title:"Bougie réelle + bounce chaud caché",when:"Petit plan serré, flamme visible.",setup:"Respecter position et distance à la flamme, ajouter un bounce très faible dans sa direction. Ajuster le niveau du visage et vérifier la flamme en hautes lumières.",camera:"Tester flamme, peau, costume et décor à l'exposition prévue.",why:"La key semble naître de l'objet.",kit:["luna","titan","ultrabounce"]},
 {title:"Flicker faible depuis source LED",when:"Scène plus large avec plusieurs bougies.",setup:"Grouper les sources DMX autour des zones de flamme ; variations modestes et irrégulières, ne pas changer toute la pièce en même temps.",camera:"Tester shutter/frame rate et éviter clignotement trop constant.",why:"L'effet reste crédible sans distraire de la scène.",kit:["titan","skypanel-x21","dmx"]}
 ],
 camera:["Exposer la flamme comme une practical brillante ; elle n'a pas à conserver tous ses détails au détriment des peaux.","Choisir balance de blanc selon relation bougie / lune / décor.","Ne pas mettre de LED très près d'une flamme sans validation thermique."],
 color:["La couleur des flammes et le rouge de peau se renforcent ; surveiller la chroma des rouges/oranges au LUT final.","Une bougie seule rend souvent les ombres très chaudes ; introduire une source neutre/faible si les peaux se saturent."],
 traps:[{symptom:"Clignotement artificiel",cause:"FX régulier et synchronisé à une seule fréquence.",fix:"Réduire l'amplitude et augmenter l'irrégularité, ou supprimer l'effet."},{symptom:"Peau rouge saturée et flamme blanche",cause:"Température de balance et luminance mal équilibrées.",fix:"Réduire la key chaude, préserver le détail de peau, tester la transform."}],
 kit:[{id:"luna",role:"Practical LED",reason:"Ampoule pilotable pour lampes du décor."},{id:"titan",role:"Renfort caché",reason:"Tube placé loin des sources chaudes."}],
 controls:["Contrôle sécurité incendie.","Filmer la scène entière et les gros plans.","Étalonnage test avec une source à faible niveau."],
 refs:["ascOutlander","arriMoon"]
};
B["day-continuity"]={
 headline:"Continuité de jour : soleil réel, ciel et contrôles artificiels",
 level:"Extérieur / continuité",depth:"Fiche avancée",
 intent:"Raccorder des prises sur plusieurs heures de lumière naturelle en séparant ce qui est contrôlable de ce qui ne l'est pas.",
 variants:[
 {title:"Fenêtre bloquée, ciel fabriqué",when:"Intérieur filmé sur plusieurs heures.",setup:"Réduire l'entrée variable du soleil puis recréer un niveau contrôlé avec grande diffusion/bounce et direction constante.",camera:"Noter la WB, niveau du key, fenêtre, motif d'ombre et heure solaire.",why:"Le raccord se fonde sur des appareils reproductibles.",kit:["skypanel-x23","storm-1200x","frame12x12","floppy"]},
 {title:"Extérieur diffusé au-dessus du jeu",when:"Plan extérieur sur un personnage proche.",setup:"Placer un butterfly avec grade choisi, ajouter fill/negative fill selon le fond. Vérifier mouvement du soleil sur l'ensemble de la scène.",camera:"Comparer arrière-plan qui reste non diffusé.",why:"On peut stabiliser la peau sans stabiliser toute la météo.",kit:["butterfly","halfgrid","ultrabounce"]}
 ],
 camera:["Prendre une série de photos/mesures sur un sujet étalon au début de la journée.","Un décalage de couleur du ciel réel change plus qu'un simple niveau d'exposition.","Tenir compte des nuages rapides, des flaques et des réflexions."],
 color:["Noter WB et ambiance pour éviter d'empiler les corrections au fil de la journée.","Ne pas multiplier des sources de technologies différentes sans vérification colorimétrique."],
 traps:[{symptom:"Fond plus dur que le visage sous la diffusion",cause:"Le cadre contrôle seulement la zone de jeu.",fix:"Rapprocher cadre et réorganiser l'axe ou accepter la différence comme motif."}],
 kit:[{id:"skypanel-x23",role:"Compensation de ciel",reason:"Contrôle et puissance modulables."},{id:"storm-1200x",role:"Renfort ponctuel",reason:"Key en rebond ou diffusion."}],
 controls:["Références à plusieurs heures.","Cadres et fixation validés par l'équipe grip en extérieur."],
 refs:["arriApps","arriX","rosco"]
};
B["studio-day"]={
 headline:"Jour de studio : une fenêtre et un soleil qui n'existent pas",
 level:"Studio / jour",depth:"Fiche avancée",
 intent:"Construire une architecture solaire complète dans un espace sans entrée de lumière naturelle.",
 variants:[{title:"Faux ciel + faux soleil sur décor",when:"Décor construit, fenêtres hors façade ou façades accessibles.",setup:"Dessiner les ouvertures d'abord, installer grande ambiance ciel derrière une diffusion ou discovery, puis une source directionnelle plus lointaine pour le soleil et enfin des retours sélectifs.",camera:"Valider les ombres visibles à travers les plans successifs.",why:"La lumière est motivée par l'architecture fictive.",kit:["skypanel-x23","storm-xt52","gridcloth","floppy"]}],
 camera:["Décider des fonds visibles, réflectances du décor et emplacements imaginaires des fenêtres.","Voir séparément ciel/soleil pour faciliter la reprise.","Éviter les sources trop proches des vitres, visibles en reflexion."],
 color:["Ciel et soleil ne devraient pas avoir des familles chromatiques incohérentes.","Les matériaux de la découverte peuvent changer la couleur des reflets."],
 traps:[{symptom:"Décor studio sans profondeur",cause:"Ambiance très uniforme et aucun rayon motivé.",fix:"Définir une direction avant d'augmenter le niveau global."}],
 kit:[{id:"storm-xt52",role:"Soleil",reason:"Sortie élevée, angle resserré."},{id:"skypanel-x23",role:"Ambiance ciel",reason:"Grande source modulable."}],
 controls:["Plan large avec plafonds et fenêtres.","Mêmes mesures à toutes les marques d'acteur."],
 refs:["arriApps","arriLemerle","arriX"]
};
B["green-screen"]={
 headline:"Fond vert : séparer exposition fond / personnage et spill",
 level:"VFX / studio",depth:"Fiche avancée",
 intent:"Préparer un fond homogène pour l'incrustation tout en conservant une direction crédible sur le premier plan.",
 variants:[{title:"Fond distinct + key indépendante",when:"Sujet éloignable du fond.",setup:"Éclairer le vert de manière homogène avec des appareils dédiés et contrôler les bords ; key du sujet séparée, éventuellement du côté du futur décor.",camera:"Demander la cible d'exposition et le profil de key au superviseur VFX.",why:"L'indépendance permet une correction précise sans contaminer la peau.",kit:["skypanel-x21","vortex8","floppy"]}],
 camera:["Éviter saturation et clipping du canal vert.","Mesurer uniformité sur la zone cadrée.","Tester la couleur du vêtement et les bords de cheveux.","Demander un fond test avec VFX avant le tournage principal."],
 color:["Une peau contaminée par rebond vert demandera une correction complexe ; supprimer du spill au plateau.","Ne pas ajouter un rim vert pour corriger un key de peau ; la direction doit être motivée par le futur fond."],
 traps:[{symptom:"Bords de peau verdâtres",cause:"Rebond du fond trop proche ou trop lumineux.",fix:"Augmenter distance, négatif et neutralisation des retours."}],
 kit:[{id:"skypanel-x21",role:"Fond uniforme",reason:"Panneaux de couleur et contrôle pixel."},{id:"vortex8",role:"Grande surface de fond",reason:"Source puissante en diffusion."}],
 controls:["Voir un premier détourage test.","Consigner WB, exposition, position sujet / fond."],
 refs:["ascSkin","arriSensor"]
};
B["interview"]={
 headline:"Entretien : key stable, yeux, peau et fond naturel",
 level:"Portrait / documentaire",depth:"Fiche avancée",
 intent:"Obtenir une texture de peau et un fond cohérents sur une interview longue, sans dépendre des variations d'une fenêtre.",
 variants:[{title:"Grande key hors axe + négatif",when:"Pièce avec du recul et des murs blancs.",setup:"Key large à 30–60° de la ligne regard-caméra selon modelé souhaité ; négatif opposé et séparation douce du fond si nécessaire. Une fenêtre peut servir de motivation.",camera:"Tester le front, le profil, les lunettes et les changements de regard.",why:"La direction existe sans key dure agressive.",kit:["skypanel-x21","storm-400x","floppy","ultrabounce"]}],
 camera:["Protéger l'exposition sur front/peau brillante tout en gardant un œil lisible.","Le sujet peut se pencher : prévoir un gradient d'éclairement tolérant.","Référencer la WB et la place de la chaise."],
 color:["Tester les peaux sous vrais appareils, ne pas considérer CCT identiques comme spectres identiques.","Practical décor peut s'emballer en saturation au dimming."],
 traps:[{symptom:"Visage devient plat en plan serré",cause:"Key trop axiale ou trop de rebonds blancs.",fix:"Décaler la key et installer du noir côté caméra."}],
 kit:[{id:"skypanel-x21",role:"Large key",reason:"Dome pour source douce, grille pour contenir le spill."},{id:"storm-400x",role:"Bounce ou softbox",reason:"Projecteur compact modifiable."}],
 controls:["Tester plusieurs teintes de peau.","Lire le fond sur monitor avant et après installation."],
 refs:["arriLemerle","ascSkin"]
};
})();