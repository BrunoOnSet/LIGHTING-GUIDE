/* Le carnet DP est également disponible sur les méthodes majeures. */
(function(){
const B=window.BOS_PRO;
const create=(id,headline,intent,variants,camera,color,traps,kit,refs)=>B[id]={
 headline,level:"Méthode / pratique de plateau",depth:"Dossier avancé",intent,variants,camera,color,
 traps:traps.map(p=>({symptom:p[0],cause:p[1],fix:p[2]})),
 kit:kit.map(p=>({id:p[0],role:p[1],reason:p[2]})),
 controls:["Tester la source seule, puis les retours et le négatif, à exposition caméra constante.","Comparer le résultat sur un visage et sur le fond.","Noter positions, optiques, surfaces et niveaux pour les raccords."],
 refs
};
create("book",
 "Book light : transmission, rebond et taille apparente",
 "Créer une grande surface réfléchie puis diffusée avec une répartition uniforme et une direction maîtrisée. Un book light réussi n'est pas simplement deux cadres près d'une lampe.",
 [
 {title:"Book classique plié en V",when:"Portrait ou scène dont le décor offre assez de recul.",setup:"Orienter une source puissante vers une surface de bounce large (muslin/ultrabounce). Placer la diffusion sur le trajet de la lumière réfléchie, à un angle qui remplit le cadre. Ajouter des solives noires ou flags sur les fuites directes.",camera:"Observer directement la diffusion depuis la position du sujet : surface homogène, sans tache très brillante.",why:"La surface finale devient le key apparent ; la réflexion évite l'empreinte directe de l'appareil.",kit:["storm-1200x","ultrabounce","magiccloth","floppy"]},
 {title:"Grand book pour plusieurs marques",when:"Dialogue avec positions rapprochées.",setup:"Agrandir d'abord le bounce et la diffusion, pas seulement le nombre de watts. Mesurer chacune des marques et contrôler la retombée sur le décor.",camera:"Comparer la direction sur les deux visages et le gradient de niveau.",why:"L'homogénéité dépend autant du cadre utile que de la puissance.",kit:["skypanel-x23","muslin-bleached","gridcloth"]}
 ],
 ["La douceur dépend de la taille apparente du dernier diffuseur. Mesurer depuis le sujet, pas depuis la source initiale.","Le rendement du montage varie avec angle, textile, pertes de rebond et distribution ; éviter des valeurs de pertes fixes sans mesures.","Une diffusion trop proche du bounce peut rester inégalement remplie. Éloigner ou optimiser optiques/angles.","Une source directe non coupée peut traverser le diffuseur et produire une deuxième ombre : contrôler les fuites."],
 ["Bleached et unbleached muslin ne rendent pas la même couleur ; tester la vraie toile.","Éviter de comparer des LEDs à CCT identique sans vérifier le rendu peau/spectre."],
 [["Deux ombres malgré un book light","Fuite directe de projecteur ou deuxième source parasite.","Masquer le trajet direct, isoler les surfaces, éteindre les sources une par une."],["Visage plat / fond trop clair","Très grande surface et retours incontrôlés.","Ajouter negative fill côté caméra, diminuer la surface visible depuis le fond ou installer une grille."]],
 [["storm-1200x","Source du bounce","Puissance de key ; photométrie à tester après deux interactions lumineuses."],["skypanel-x23","Grand book modulable","Alimenter une diffusion ou un grand rebond avec contrôle."],["orbiter","Book compact précis","Faisceau et optiques pour ne pas déborder hors bounce."]],
 ["roger","arriX","aputure1200","rosco"]
);
create("bounce",
 "Bounce : matériaux, orientation et éclairement du réflecteur",
 "Prendre le contrôle de la source secondaire en éclairant une surface et non directement le visage.",
 [
 {title:"Bounce blanc large",when:"Portrait / petit intérieur.",setup:"Éclairer un grand panneau blanc hors cadre et orienter sa normale vers la zone de jeu. Chercher une zone de surface bien remplie. Contrôler le direct sur le sujet.",camera:"Mesurer avec le personnage à 2 ou 3 positions ; regarder les reflets dans les yeux.",why:"Éclairer par une surface étendue plutôt que par la sortie de l'optique.",kit:["storm-700x","ultrabounce","muslin-bleached"]},
 {title:"Bounce argent plus directionnel",when:"Reprendre du soleil ou obtenir un trait à distance.",setup:"Utiliser une surface réfléchissante plus spéculaire, avec orientation plus précise. Réduire les réflexions hors zone et sécuriser l'éblouissement.",camera:"Vérifier le hotspot, le regard et les reflets sur peau.",why:"Le rendu reste plus concentré selon finition de surface.",kit:["silver","softsilver","mirror"]}
 ],
 ["La surface utile est celle qui reçoit réellement le faisceau ; un 12×12 éclairé sur 2×2 se comporte comme un petit rebond.","Changer l'angle de bounce change la direction et la zone de jeu sans changer la source primaire.","Le matériau de rebond influe sur la couleur et la texture spéculaire.","Le retour du décor (murs, sol, costumes) est aussi du bounce, même sans réflecteur ajouté."],
 ["Muslin écru peut réchauffer la lumière.","Les surfaces argentées peuvent produire des hotspots et des reflets brillants difficiles à rééquilibrer."],
 [["Déficit de puissance inattendu","Angle inefficace, mauvais remplissage du bounce, pertes matériaux.","Repositionner le projecteur et mesurer sur surface avant d'augmenter la puissance."],["Tache vive sur la peau","Surface trop petite ou réfléchissante spéculaire.","Élargir, changer de matériau ou éloigner selon le rendu."]],
 [["storm-1200x","Key primaire","Source ponctuelle capable d'alimenter une grande réflexion."],["skypanel-x21","Bounce ou source diffusée","Mode ouvert ou Dome selon le dispositif final."]],
 ["arriX","roger"]
);
create("negatif",
 "Negative fill : soustraire le retour pour sculpter le visage",
 "Créer une direction dans une pièce blanche ou sous une grande source diffusante, sans ajouter de projecteur.",
 [
 {title:"Floppy en face latérale du sujet",when:"Portrait en grand soft / intérieur clair.",setup:"Placer le noir du côté caméra ou de la joue à assombrir, suffisamment près pour couvrir la famille d'angles reflétés. Avancer par petits déplacements.",camera:"Vérifier le contraste de la mâchoire et l'œil du côté noir.",why:"Le noir retire une partie de l'ambiance qui venait des murs.",kit:["floppy","black-solid","duvetyne"]},
 {title:"Negative fill mobile",when:"Acteur se déplace avec source large fixe.",setup:"Évaluer si un seul panneau peut travailler plusieurs positions ou si l'on doit fractionner en plusieurs panneaux hors champs. Prévoir l'équipe et le chemin de caméra.",camera:"Contrôler les passages sans saut abrupt de contraste.",why:"L'efficacité du négatif dépend de la distance et de la proportion de champ masqué.",kit:["black-solid","cstand"]}
 ],
 ["Comparer avant/après à exposition constante sur le moniteur.","Le négatif ne « baisse pas la key » si la source directe demeure sur le même axe ; il retire des retours et remplit moins les ombres.","Le gain dépend du matériau absorbant, de la proximité et de la réflectance du décor.","Utiliser le drapeau aussi pour limiter la lumière d'un bounce sur une zone précise."],
 ["Un panneau sombre peut encore renvoyer une teinte sous un éclairage coloré intense.","Les vêtements noirs proches du visage jouent également un rôle de négatif."],
 [["Négatif inefficace","Panneau trop loin ou lumière directe dominante.","Rapprocher, agrandir et identifier la véritable origine du fill."],["Fond assombri accidentellement","Panneau masque la source du fond ou entre dans le champ.","Changer angle, taille ou monter sur un support adapté."]],
 [["floppy","Grand contrôle rapide","Face noire de grande surface, souvent nécessaire dans un lieu blanc."],["cstand","Support","À installer suivant charge et prise au vent."]],
 ["arriLemerle","matte"]
);
create("diffusion",
 "Diffusion : distance, taille du cadre et hotspot",
 "Comprendre le changement de source apparente plutôt que croire qu'un grade de diffusion garantit une douceur donnée.",
 [
 {title:"Source derrière un cadre diffuseur",when:"Key doux pour portrait.",setup:"Placer un cadre assez grand entre source et sujet. Ajuster le recul de la source pour remplir le cadre ; couper les bords de la lumière et vérifier le spill.",camera:"Regarder la surface depuis la position de la peau, puis contrôler l'ombre sous le nez.",why:"Le cadre correctement rempli devient la surface émettrice.",kit:["storm-400x","216","frame4x4"]},
 {title:"Grand cadre extérieur soleil",when:"Extérieur jour avec soleil direct.",setup:"Choisir taille et grade puis couvrir la trajectoire de l'acteur, sécuriser selon météo et contraintes de vent.",camera:"Comparer zone diffusée et décor en soleil direct.",why:"Le soleil reste une seule source mais sa taille apparente vue du sujet augmente.",kit:["butterfly","halfgrid","quartergrid"]}
 ],
 ["Un 216 collé à une petite sortie de lampe n'a pas le même effet qu'un 216 tendu sur 8×8 près du sujet.","La diffusion réduit généralement le rendement et peut produire une dominante liée au matériau : tester.","Répartir la lumière sur toute la surface utile avant d'augmenter la puissance.","L'empreinte de la diffusion et les ombres peuvent changer si l'acteur sort de la zone."],
 ["Les textiles ne sont pas intrinsèquement neutres en toute situation ; confronter le réel à la caméra.","Une lumière diffuse avec très forte CCT ne résout pas seule les problèmes de peau."],
 [["Hotspot visible sur le cadre","Source trop proche ou faisceau trop resserré.","Recule la source et ouvrir l'optique, comparer au moniteur."],["Fuites directes en bord de diffusion","Projection primaire hors du cadre.","Élargir diffusion ou contrôler par drapeaux."]],
 [["storm-400x","Source de petite/moyenne diffusion","À travers un 4×4 ou softbox compatible."],["skypanel-x21","Source de diffusion large","Dome natif pour une surface douce, selon distance."],["arri-m18","Source HMI","Direction à travers grand cadre, avec procédures adaptées."]],
 ["rosco","arriX"]
);
create("overhead",
 "Overhead : surface de couverture et ombres des visages",
 "Construire une source en hauteur qui couvre le jeu sans éclairer involontairement tous les murs.",
 [
 {title:"Panneau souple au-dessus de la table",when:"Champ/contrechamp à table.",setup:"Suspendre une source LED étendue avec jupe. Décaler légèrement hors du centre pour conserver une direction ; vérifier le premier et dernier comédien.",camera:"Tester haut du front, yeux, plats, verres et table.",why:"La grande surface permet une couverture avec moins de pieds.",kit:["infinimat","skirt","litemat-spectrum4"]},
 {title:"Grand overhead de studio",when:"Zone de jeu large avec plans variés.",setup:"Grands cadres correctement suspendus et alimentés en lumière ; définir des sections plutôt qu'une surface parfaitement uniforme.",camera:"Mesurer par marque, vérifier les ombres sous les yeux et les contaminations de fond.",why:"Répétabilité à travers plusieurs axes.",kit:["frame12x12","gridcloth","skypanel-x23"]}
 ],
 ["La vue du dessus ne représente pas la hauteur : indiquer altitude et inclinaison dans un vrai plan de feu.","La key zénithale peut creuser orbites et pommettes ; un léger décentrement suffit parfois.","Jupon et grille contrôlent le spill mais peuvent créer des limites visibles.","Charge, suspension, élingues et conditions d'exploitation exigent validation des responsables de plateau."],
 ["Une toile blanche renvoie une couleur différente si un sol ou costume colore son fill.","Tester les basses intensités des LEDs sur le rendu de la peau."],
 [["Visage avec yeux noirs","Source trop verticale et manque de retour frontal.","Décaler, agrandir, ajouter bounce discret."],["Plafond de décor surexposé","Jupe absente ou source ouverte à 360°.","Juponner / choisir un appareil plus directionnel."]],
 [["infinimat","Surface zénithale","Panneau mince couvrant une zone."],["skypanel-x23","Grand ciel suspendu","Système modulable, rigging selon constructeur."]],
 ["rosco","matte","arriX"]
);
create("cross",
 "Cross key : dialogue, axes opposés et doubles ombres",
 "Faire travailler deux sources croisées sans perdre la géographie ni aplatir les personnages.",
 [
 {title:"Deux keys latérales arrière",when:"Deux acteurs face à face.",setup:"Placer les sources en opposé selon leurs positions. Chaque source peut être une key éloignée pour l'un et une séparation pour l'autre ; couper les fuites.",camera:"Tester les deux gros plans et les directions de nez.",why:"Une source peut avoir plusieurs fonctions.",kit:["skypanel-x21","vortex4","floppy"]},
 {title:"Cross key douce sur mouvement de groupe",when:"Deux positions alternées pendant une conversation.",setup:"Deux grandes surfaces décentrées avec niveaux asymétriques et un noir si la pièce renvoie trop.",camera:"Tester les positions intermédiaires, non uniquement A et B.",why:"Le croisement doit préserver la lecture de direction.",kit:["ultrabounce","storm-700x","floppy"]}
 ],
 ["Les doubles ombres deviennent visibles quand les deux keys ont des surfaces apparentes similaires mais des directions trop éloignées.","Une source utilisée en key pour A peut devenir rim pour B : mesurer les deux positions.","Sur champ/contrechamp, vérifier que le visage du même comédien conserve une direction plausible.","Varier intensités plutôt que doubler le niveau global."],
 ["Les deux keys doivent être harmonisées en couleur si elles représentent une même motivation.","Une pratique chaude présente au cadre peut expliquer une seule des deux directions."],
 [["Dialogue sans contraste","Keys trop égales et retours trop présents.","Différencier les niveaux et faire du négatif."],["Ombres inversées d'un plan à l'autre","Sources déplacées après raccord.","Photos de référence et plan des axes caméra."]],
 [["skypanel-x21","Key croisée","Hard/Dome selon angle."],["vortex4","Key latérale contrôlée","Panneau LED modulable."],["orbiter","Accent précis","Découpe pour limiter les ombres sur le second acteur."]],
 ["arriLemerle","arriX"]
);
create("practical",
 "Practical : valeur décor et source motivée ne sont pas identiques",
 "Utiliser les appareils visibles comme motivations sans forcément leur demander de fournir toute l'exposition sur la peau.",
 [
 {title:"Lampe de table + renfort hors cadre",when:"Nuit intérieure et visage près d'une practical.",setup:"Régler l'intensité de l'ampoule pour un niveau décor plausible, puis ajouter une key indirecte ou petite source de la même direction. Contrôler abat-jour, flare et ombre.",camera:"Comparer l'abat-jour et le visage à l'exposition définitive.",why:"La practical raconte la scène tandis que le renfort donne une texture de peau.",kit:["luna","storm-80c","ultrabounce"]},
 {title:"Practical comme accent coloré",when:"Bar, voiture, rue, enseigne.",setup:"Limiter la couleur saturée aux zones qui la motivent ; maintenir un key blanc de meilleure fidélité spectrale pour les peaux si nécessaire.",camera:"Tester face dans et hors de la couleur à deux positions.",why:"Une couleur de décor n'a pas à saturer tout le visage.",kit:["titan","luna","skypanel-x21"]}
 ],
 ["Distinguer luminance de source visible et éclairage effectivement reçu par le sujet.","Des LED de décor peuvent scintiller selon fréquence, gradateur et obturateur ; tester ralenti et dimming.","Une couleur saturée visible dans le cadre peut être rehaussée par coloriste mais ne doit pas contaminer l'ensemble.","Les ampoules et rubans dans un même objet peuvent varier en spectre."],
 ["Peaux rouges sous practical chaude contre une ambiance lunaire froide : diagnostiquer niveaux et mélange de sources.","Préférer une seule hiérarchie chromatique dominante pour une scène plutôt que trois couleurs fortes égales."],
 [["Abat-jour blanc brûlé","Ampoule décor trop forte relativement au visage.","Baisser la practical, dissocier renfort de visage, modifier abat-jour si possible."],["Flicker","Driver ou gradateur inadapté à l'obturateur.","Tester fréquences et mode dimmer, remplacer par matériel film adapté."]],
 [["luna","Ampoule pilotable","Practical en décor."],["titan","Renfort caché","Tube compact selon cadre."],["storm-80c","Key hors champ","Petite source ponctuelle avec diffusion."]],
 ["ascOutlander","ascNight"]
);
})();