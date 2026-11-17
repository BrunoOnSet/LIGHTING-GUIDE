/* Derniers dossiers pour couvrir toutes les situations de la V1.1. */
(function(){
const B=window.BOS_PRO;
B["walk-and-talk"]={
 headline:"Walk and talk : key mobile ou prélight fixe ?",
 level:"Caméra / acteur en déplacement",depth:"Fiche avancée",
 intent:"Choisir un système de key qui accompagne le rythme du plan sans projeter les ombres de l'équipe et sans faire entrer les sources dans le champ.",
 variants:[
 {title:"Pré-éclairage de couloir en plusieurs bandes",when:"Long travelling avec champs larges.",setup:"Plusieurs sources fixes sur murs ou en plafond, coupes adaptées pour ne pas les voir. Compléments sur chaque zone et négatif quand le décor est blanc.",camera:"Tester les changements d'axe, panoramiques et vitres ; faire une prise réelle avec l'opérateur.",why:"Plus fiable qu'un technicien qui suit au milieu d'un champ large.",kit:["litemat-spectrum4","infinimat","skirt"]},
 {title:"Key mobile sur un plan serré",when:"Plan tenu en déplacement, source possible hors du cadre.",setup:"Source sur support mobile professionnel supervisé, ou dispositif à la main compatible avec charge et environnement. Anticiper synchronisation, reflets, câbles et obstacles.",camera:"Vérifier le niveau aux intersections, virages et arrêts.",why:"Le key peut conserver un angle relatif au visage pour certains plans.",kit:["storm-80c","helios","ultrabounce"]}
 ],
 camera:["Tracer les zones de champ pour tous les changements de focale.","Prévoir les pauses et les demi-tours où la caméra peut révéler les sources.","Le choix entre prélight et key mobile dépend plus de la mise en scène que de la puissance des appareils."],
 color:["Éviter de passer d'une LED à une autre de CCT nominale similaire mais de rendu de peau différent.","Filmer une répétition en LUT et conserver un plan témoin."],
 traps:[{symptom:"Le key « colle » au visage",cause:"Source mobile trop axiale ou trop constante.",fix:"Assumer des variations motivées par le décor et laisser des passages d'ombre."},{symptom:"Ombre de l'équipe visible",cause:"Trajet opérateur et source prévus séparément.",fix:"Repositionner la source ou augmenter sa taille apparente, refaire la marche avec toute l'équipe."}],
 kit:[{id:"litemat-spectrum4",role:"Key fixe discrète",reason:"Panneau de faible épaisseur."},{id:"storm-80c",role:"Petit renfort mobile",reason:"Format compact pour cadre serré et faible poids relatif."},{id:"skypanel-x21",role:"Prélight de zone",reason:"Contrôle et diffusion."}],
 controls:["Répétition complète à vitesse réelle.","Matériel hors champ sur tous les axes.","Coordination chef machiniste/électro pour mouvements."],
 refs:["arriApps","arriX","matte"]
};
B["low-ceiling"]={
 headline:"Plafond bas : fabriquer une grande source sans recul",
 level:"Intérieur exigu",depth:"Fiche avancée",
 intent:"Conserver une direction travaillée dans un décor où aucune grande softbox conventionnelle ne peut être déployée.",
 variants:[
 {title:"Bounce mur/plafond ciblé",when:"Murs assez neutres.",setup:"Éclairer une zone précise de mur ou plafond et utiliser un négatif côté opposé. Contrôler l'excès de lumière sur arrière-plan.",camera:"Vérifier la dominante réelle du mur et les transitions sur visage.",why:"La surface du décor devient la grande source.",kit:["storm-400x","orbiter","floppy"]},
 {title:"Sources LED intégrées",when:"Plafond ou meubles avec niches et autorisation de montage.",setup:"Panneau fin ou ruban sur diffuseur caché, câble sécurisé, jupe latérale si possible. Éviter le regard direct dans le moteur LED.",camera:"Contrôler les reflets et la chaleur dans l'espace fermé.",why:"La finesse de l'appareil remplace l'encombrement d'une source habituelle.",kit:["litemat-spectrum4","literibbon","titan"]}
 ],
 camera:["Faire le cadre le plus large avant de positionner l'appareil.","Rechercher les surfaces de bounce naturelles déjà présentes.","Mesurer les distances et dégagements thermiques de vrais matériels."],
 color:["Une peinture beige/verte peut contaminer le bounce sur peau.","Ne pas mélanger plusieurs petites LED sans essai spectral."],
 traps:[{symptom:"Lumière très plate partout",cause:"Bounce sur tous les murs.",fix:"Limiter la zone éclairée et installer du négatif."},{symptom:"Ombre sous les yeux",cause:"Source de plafond trop verticale.",fix:"Décaler sur un côté et ajouter un bounce faible frontal motivé."}],
 kit:[{id:"litemat-spectrum4",role:"Plafond mince",reason:"Surface finement intégrable."},{id:"orbiter",role:"Rebond précis",reason:"Optiques contrôlables."}],
 controls:["Vérification chaleur et accroche.","Test du visage à plusieurs positions."],
 refs:["arriLemerle","matte"]
};
B["sun-outdoor"]={
 headline:"Diffuser le vrai soleil : taille, transmission et vent",
 level:"Extérieur / soleil",depth:"Fiche avancée",
 intent:"Moduler la qualité du soleil sur un sujet sans transformer la grande surface de diffusion en risque mécanique.",
 variants:[
 {title:"Butterfly au-dessus de la zone de jeu",when:"Portrait ou dialogue en plein soleil.",setup:"Choisir le cadre et le tissu en fonction du soleil et du rendu souhaité. Orienter le textile pour que le sujet reste sous l'empreinte durant le plan ; ajouter un bounce ou du négatif.",camera:"Comparer sujet sous cadre et fond hors cadre pour éviter une incohérence importante.",why:"La taille du cadre et sa distance au sujet déterminent l'effet principal.",kit:["butterfly","halfgrid","quartergrid","ultrabounce"]},
 {title:"Déplacer l'axe plutôt qu'augmenter la diffusion",when:"Mise en scène adaptable.",setup:"Chercher un soleil arrière trois-quarts et utiliser un petit bounce côté visage ; parfois moins de rigging et plus de direction.",camera:"Contrôler les reflets et ombres à l'heure de tournage.",why:"Un bon angle peut résoudre davantage qu'une grande toile.",kit:["silver","poly","floppy"]}
 ],
 camera:["Observer l'heure solaire et la durée réelle de la scène.","Vérifier le rendu tissu par tissu avec mesure de lumière ; les grades ne garantissent pas une perte universelle.","Tout cadre extérieur exige préparation grip, ancrages appropriés et décision en fonction du vent."],
 color:["Diffusions et réflecteurs de différentes couleurs peuvent teinter les carnations.","Le soleil direct hors cadre peut générer des hautes lumières plus fortes que la face diffusée."],
 traps:[{symptom:"Sujet sombre devant fond éclatant",cause:"La diffusion réduit le key mais pas l'arrière-plan.",fix:"Complément de bounce ou choix d'axe différent."},{symptom:"Cadre dangereux au vent",cause:"Prise au vent sous-estimée.",fix:"Faire appliquer les procédures de suspension/vent de l'équipe grip ; interrompre si nécessaire."}],
 kit:[{id:"storm-1200x",role:"Renfort si nécessaire",reason:"Bounce ou diffusion pour prolonger la direction solaire."},{id:"skypanel-x21",role:"Key doux compensateur",reason:"Pour équilibre local après diffusion."}],
 controls:["Mesures sujet et fond.","Accord chef machiniste sur vent, surface et charges.","Recontrôler en cours de journée."],
 refs:["rosco","arriX","matte"]
};
B["reverse-window"]={
 headline:"Personnage dos fenêtre : choix d'exposition plutôt que compensation systématique",
 level:"Intérieur jour / contre-jour",depth:"Fiche avancée",
 intent:"Décider ce que la fenêtre doit montrer, puis répartir les niveaux entre extérieur, peau et décor, plutôt que tout égaliser.",
 variants:[
 {title:"Laisser la baie très claire",when:"Intention silhouette / intérieur clair.",setup:"Renforcer doucement le visage par un bounce ou une grande key latérale en gardant une direction proche de la fenêtre. Utiliser du négatif pour le modelé.",camera:"Protéger ce qui doit rester exploitable dans la baie mais accepter des zones clippées si elles sont intentionnelles.",why:"Le contraste fenêtre/sujet devient une intention.",kit:["ultrabounce","skypanel-x21","floppy"]},
 {title:"Conserver l'extérieur lisible",when:"Vue importante sur le paysage.",setup:"Contrôler l'extérieur par cadre ou voilage lorsque possible et adapter niveau de key intérieur. Tester si la puissance nécessaire reste réaliste.",camera:"Comparer les rapports de luminosité au waveform dans le rendu final.",why:"Le rapport d'exposition est conçu sur le terrain, pas uniquement au grade.",kit:["storm-1200x","skypanel-x23","gridcloth"]}
 ],
 camera:["Évaluer les hautes lumières en waveform plutôt que seulement à l'œil.","Surveiller halos, reflets, flare et costumes blancs.","Tester avec ISO/EI natifs adaptés à la caméra et diffusion de contrôle."],
 color:["Température extérieure variable ; choisir une balance globale et un écart chromatique intentionnel.","Le fill intérieur trop chaud rend la peau orange face à fenêtre froide."],
 traps:[{symptom:"Peau plate après compensation",cause:"Fill trop frontal et uniforme.",fix:"Grande key en direction de fenêtre avec négatif caméra."},{symptom:"Fenêtre sans détail",cause:"Clipping non récupérable.",fix:"Contrôler l'extérieur au plateau ou modifier l'intention d'exposition."}],
 kit:[{id:"skypanel-x23",role:"Compensation large",reason:"Grande surface contrôlable."},{id:"storm-1200x",role:"Bounce puissant",reason:"Pour relever la peau et le décor sans trop de sources."}],
 controls:["État fenêtre accepté en plan large et serré.","Détails du fond définis avant prélight."],
 refs:["arriX","arriApps"]
};
B["smoke"]={
 headline:"Rayons dans la brume : trajectoire du faisceau et cohérence atmosphérique",
 level:"Atmosphère / nuit",depth:"Fiche avancée",
 intent:"Rendre l'air visible en choisissant un faisceau, un angle de caméra et une densité de brume stables sur plusieurs prises.",
 variants:[
 {title:"Faisceau lointain dans un couloir",when:"Couloir sombre et profondeur importante.",setup:"Source assez directionnelle derrière la zone, cutter ou gobo pour dessiner le faisceau, brume distribuée de manière continue et contrôlée.",camera:"Tester dans l'axe et de trois-quarts, avec un fond suffisamment sombre.",why:"La diffusion sur particules dépend fortement de l'angle observé.",kit:["orbiter","storm-1200x","cucoloris","hazer"]},
 {title:"Moonlight volumétrique dans une forêt",when:"Extérieur nocturne avec arbres.",setup:"Placer une grande source dure à distance, faire couper le faisceau par les arbres et utiliser uniquement un haze autorisé si la météo et la sécurité le permettent.",camera:"Mesurer silhouette et fond pour éviter que le volume efface la profondeur.",why:"Les troncs créent un motif vraisemblable dans l'atmosphère.",kit:["storm-xt52","skypanel-x21","hazer"]}
 ],
 camera:["La brume évolue pendant la scène : faire des tests à plusieurs densités.","Contrôle de la continuité au niveau de l'opérateur caméra, pas seulement vue des électros.","Coordination sécurité, ventilation, équipe déco et premiers secours si exposition prolongée."],
 color:["Une brume dense peut créer un voile des noirs et une dominante généralisée.","Surveiller les peaux sous contre-jour très bleu et atmosphère saturée."],
 traps:[{symptom:"Rayon invisible malgré haze",cause:"Angle caméra-source défavorable ou fond trop clair.",fix:"Décaler caméra ou faisceau, réduire l'ambiance fond."},{symptom:"Voile uniforme sans rayons",cause:"Trop de haze et spill partout.",fix:"Réduire densité et couper les sources parasite."}],
 kit:[{id:"orbiter",role:"Faisceau précis",reason:"Optique directionnelle ou de projection."},{id:"storm-xt52",role:"Longue portée",reason:"Faisceau puissant dans un grand volume."}],
 controls:["Sécurité fluides et détecteurs.","Contrôle après chaque prise.","Photo référence des densités."],
 refs:["arriLemerle","arriApps"]
};
})();