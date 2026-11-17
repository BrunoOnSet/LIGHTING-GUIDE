# BOS LIGHTING GUIDE — Sources, méthode et limites de la V1

Dernière vérification documentaire : **17 novembre 2026**.

## Philosophie

L'application distingue :
1. **Méthodes** : qualités, directions et dispositifs de lumière (direct, bounce, book light, cove, fill, contrôle).
2. **Situations** : problèmes concrets de mise en scène (faux jour, déplacements, nuit, voiture, 360°, plan-séquence).
3. **Projecteurs** : familles et références des parcs de cinéma, pas seulement matériel acheté neuf.
4. **Accessoires** : vocabulaire professionnel français / anglais, fonctions et précautions.

Les schémas sont des **dessins SVG originaux, pédagogiques, vus de dessus, non à l'échelle**. Ils ne simulent ni lux, ni effets photométriques, ni distances de sécurité. Les mots « classique » et « historique » permettent de distinguer des générations de matériel toujours rencontrées des sorties récentes sans prétendre que tous les modèles sont encore vendus neufs.

## Fabricants et sources primaires

- [ARRI — éclairage](https://www.arri.com/en/lighting) : gammes LED, M-Series et tungstène.
- [ARRI — données SkyPanel X](https://www.arri.com/en/lighting/led-panel-lights/skypanel-x/tech-data) : X21 800 W, X22 1600 W, X23 2400 W, angles natifs et CCT.
- [ARRI — M18](https://www.arri.com/en/lighting/daylight-tungsten/daylight/m-series/m18) : 1 800 W, 20–60°, nominal 6 000 K.
- [Aputure — STORM](https://aputure.com/EN-US/product-families/storm) : STORM 80c, 400x, 700x, 1000c, 1200x, CS32, XT52.
- [Aputure — STORM 1200x](https://aputure.com/EN-US/products/storm-1200x) : consommation max 1550 W / puissance nominale 1200 W / CCT 2500–10000 K.
- [Impact Événement — Nanlux en location](https://impact-even.com/en/marques/nanlux/) : Evoke 1200B, 2400B, 5000B.
- [Astera](https://astera-led.com/), [Kino Flo](https://kinoflo.com/), [Creamsource](https://creamsource.com/), [LiteGear](https://www.litegear.com/), [Dedolight](https://www.dedolight.com/), [K5600](https://www.k5600.com/) : catalogues de familles. Certaines fiches ne comportent **aucune valeur chiffrée**, volontairement, faute de spécification produit exacte recoupée.

## Références d'éclairage et grip

- [Roger Deakins — discussion cove lighting](https://www.rogerdeakins.com/forums/topic/cove-lightning/)
- [Shane Hurlbut ASC / No Film School — Book light](https://nofilmschool.com/2012/11/build-book-light-shane-hurlbut)
- [HSM University — Lighting People for Motion](https://hsmuniversity.org/us/course/cine-220-lighting-for-the-moving-image-i/lesson-9-lighting-people-for-motion)
- [Lighting Technicians Handbook — principes et matériaux](https://nosotrasaudiovisuales.cl/noa/wp-content/uploads/2025/04/set_lighting_technicians_handbook_film_lighting_equipment_practice_and_electrical_distribution.pdf)
- [Rosco — Butterflies & Overheads](https://emea.rosco.com/sites/default/files/content/resource/2023-08/Rosco_Butterflies_and_Overheads_data_sheet_0.pdf)
- [Expressway Cine — comparatif diffusion](https://blog.expresswaycine.com/diffusion-101/)
- [Matthews — C-stands](https://www.msegrip.com/collections/c-stands)
- [CineMechanics — drapeaux, nets et floppies](https://cinemechanics.com/stories/lighting-grip/stands)
- [Serious Grippage — inventaire grip](https://www.seriousgrippage.com/grip-equipment/)

Une discussion de forum, un article pédagogique et une page fabricant ne sont pas équivalents : les **caractéristiques chiffrées ne sont reprises que depuis les documents constructeurs ou des catalogues techniques crédibles** et avec leur contexte.

## Photographies

La V1 **ne contient aucune image IA**. Les images intégrées sont des références distantes vers des photographies réelles de fabricants, de loueurs et de publications (voir `BOS_MEDIA` dans `data.js`), accompagnées de leur source. Les images distantes peuvent bloquer le hotlink ou disparaître ; dans ce cas la fiche donne accès au site source. Lorsque rien n'est vérifié, l'application propose une recherche en images Wikimedia Commons, puis n'affiche un fichier libre **que si son nom correspond aux mots discriminants du modèle ou de l'objet**, avec auteur, licence et lien d'origine. Elle ne substitue jamais une image ressemblante à une photographie du vrai modèle.

**Important — droits d'image :** l'existence publique d'une photo ou d'une URL ne vaut pas autorisation de réutilisation. Avant toute publication ou diffusion externe durable, obtenir les autorisations nécessaires pour les photos de fabricants/photographes non sous licence libre ou remplacer ces images par des médias explicitement licenciés. Les liens sources peuvent être conservés. Les photos Wikimedia sont présentées avec leurs conditions de licence sur la page fichier ; vérifier ces conditions avant toute copie ou modification.

Il n'est pas encore possible de garantir une photographie vérifiée pour chacune des nombreuses références. Cette limite est volontairement signalée dans les fiches plutôt que comblée par une fausse illustration de matériel.

## Sécurité

Les grands cadres au vent, accroches suspendues, élingues, alimentations de puissance, HMI à arc et lampes chaudes requièrent une équipe habilitée et des conditions d'exploitation validées. Aucun schéma pédagogique de cette application ne remplace les notices, normes applicables et procédures du plateau.

## Limites techniques

- Site statique utilisable sur Cloudflare Pages (aucune base de données ni clé privée).
- Les contenus, fonctions de recherche, liens et schémas sont disponibles hors ligne après mise en cache PWA. **Les photographies distantes et leur recherche Wikimedia nécessitent Internet**.
- Les favoris et le thème sont conservés localement dans le navigateur (non synchronisés).
- Un lien profond vers une fiche utilise `#fiche/identifiant`.
- Le service worker met en cache l'interface, mais pas les photos distantes.
- La version complète d'une base de données de projecteurs actualisée automatiquement, les mesures photométriques exhaustives et les licences d'images par modèle sont **hors périmètre V1**.

## Pour enrichir

Chaque fiche peut recevoir : photo officielle/licenciée, photo de montage plateau, rendu sur l'image, plan SVG plus spécifique, vidéo démonstrative autorisée, mesures sous conditions, et liens vers des configurations dans BOS PLAN.


## Mise à jour V1.1 — dossiers DP et fausse nuit

La V1.1 ajoute des dossiers techniques (fichiers data-pro-xxx.js) comprenant plusieurs configurations possibles, un contrôle caméra, des diagnostics de colorimétrie et des exemples de matériel. Ces implantations sont **des propositions techniques éditoriales**, pas des copies de plans de feu originaux ni des configurations attribuées sans preuve aux professionnels cités.

### Sources complémentaires pour la nuit et les carnations

- [American Cinematographer — Walking Dead and Loving It](https://theasc.com/article/walking-dead-and-loving-it-part-ii-of-ii/) : difficultés du contraste bleu lunaire / orange de feu et traitement des carnations.
- [American Cinematographer — Color Fidelity in LED Volumes, part 1](https://theasc.com/article/color-fidelity-in-led-volumes/) et [part 2](https://theasc.com/article/color-fidelity-in-led-volumes-part-two/) : spectres des LEDs, rendu de peau et erreurs métamériques dans certaines conditions. Ne pas extrapoler directement aux moteurs LED modernes à spectre plus complet.
- [American Cinematographer — Outlander, Love is a Battlefield](https://theasc.com/article/outlander-love-is-a-battlefield/) : rendu de peau en nuit intérieure, sources de décor et clair de lune.
- [B&H — Day for Night](https://www.bhphotovideo.com/explora/video/tips-and-solutions/lighting-tips-the-basics-of-day-for-night-cinematography) : ciel, ombres, balance des blancs et exposition.
- [Noam Kroll — Creating a Day for Night Look](https://noamkroll.com/color-grading-tutorial-creating-a-day-for-night-look/) et [5 Easy Tips For Achieving Excellent Day For Night Shots](https://noamkroll.com/5-easy-tips-for-achieving-excellent-day-for-night-shots-on-set-and-in-post/) : articulation tournage et étalonnage.
- [Color Finale — Day into night](https://www.api.colorfinale.com/blog/post/cf-day-into-night-08-25) : développement du look en postproduction.
- [ARRI — SkyPanel X : Applications](https://www.arri.com/en/lighting/led-panel-lights/skypanel-x/applications) : éclairage extérieur nuit, fenêtres et différents montages hard / soft.
- [ARRI — Thomas Garreau : Emilia Pérez et SkyPanel X](https://www.arri.com/news-fr/gaffer-thomas-garreau-lights-up-emilia-perez-with-arri) : retour professionnel sur éclairage de façade de nuit et entrant de soleil.
- [ARRI — Guillaume Lemerle](https://www.arri.com/news-en/gaffer-guillaume-lemerle-passion-for-lighting-with-arri-tools) : sources couleur et découpes pour créer de la nuit.
- [ARRI — Victoria Panero et Orbiter](https://www.arri.com/news-en/dp-victoria-panero-working-with-arri-orbiter) : construction d'une ambiance lunaire diffuse.
- [ARRI — Modes de rendu capteur](https://www.arri.com/en/learn/lighting/arri-alexa-modes) : moteur de couleur et mélanges de sources.
- [Aputure — STORM XT52](https://aputure.com/en-US/products/storm-xt52) et [STORM CS32](https://aputure.com/en-US/products/storm-cs32) : caractéristiques et accessoires à vérifier sur les références exactes.

### À ne pas confondre

**Day for night** = tourner de jour pour produire une nuit à l'image. **Nuit filmée réellement de nuit** = éclairer un décor sombre à la prise de vues. **Nuit intérieure recréée en journée** = occulter les entrées de jour puis fabriquer des sources nocturnes. Les contraintes de lumière, de peau et de postproduction sont différentes.

**Rouge / magenta sur les peaux** : diagnostic plurifactoriel, jamais attribué par défaut à un Kelvin incorrect. Évaluer les sources une par une, le mode de l'appareil, le rendu spectral, le mélange des couleurs, les peaux dans une LUT de monitoring, les canaux RGB, les costumes et les corrections de postproduction.

### Interprétation des données matériel

- La puissance électrique d'un projecteur ne doit pas être assimilée à sa sortie LED ni à ses lux.
- Une valeur photométrique n'est comparable qu'à **même distance, angle, optique, CCT et mode**.
- Un exemple de projecteur sur une configuration montre son **usage possible**, pas une recommandation exclusive ni une preuve qu'il a été employé sur un film précis.
- Les caractéristiques peuvent changer avec une version, un firmware ou un accessoire. Toujours confirmer la documentation correspondant au matériel loué.



## Atlas des Situations — V1.2 (photographies et plans de tournages)

**Règle de provenance :** on n'associe jamais un plan de feu, un BTS et un photogramme appartenant à trois productions différentes comme s'ils appartenaient au même tournage. Pour chaque étude, le lecteur distingue les pièces réellement publiées par un directeur photo, les vues du même décor mais d'une autre prise et, lorsque nécessaire, un **schéma pédagogique BOS explicitement signalé**. La description de la position et de l'impact des sources est une analyse éditoriale fondée sur les explications et le plan publiés ; aucun lux ni distance inconnue ne sont inventés.

### Références originales des études

- [Josh White, DP — Feature Lighting Breakdown: Bar](https://josh-white.co.uk/feature-lighting-breakdown-bar/) : deux configurations (large/serré) du même tournage, plans de feu, BTS et photogrammes. Sources LiteMat, Aputure MC, practicals.
- [Grant MacAllister, DP — Nights Crawling](https://www.grantmacallister.com/blog/lighting-breakdown-nights-crawling) : plan de feu, BTS, photogrammes et photos complémentaires de projecteurs à la fenêtre. Aputure 600C/300X, InfiniBars, LiteMat, Titan, B7C.
- [Grant MacAllister, DP — On a Razor's Edge](https://www.grantmacallister.com/blog/cinematography-lighting-breakdown-on-a-razors-edge-short-film) : cas de ciel couvert après pluie, Nanlite Pavo Tubes, DMG Dash et négatif. **Pas de plan de feu original identifié**.
- [Michael Helenek, DP — Monster in a House / Prep](https://www.michaelhelenek.com/prep) : plan de lumière publié pour plan-séquence de 12 minutes et BTS. **Pas de photogramme final identique identifié**.
- [American Cinematographer — Jess Hall ASC, 3 Lighting Diagrams from Fantastic Four](https://theasc.com/article/3-lighting-diagrams-from-the-fantastic-four-first-steps/) : plans de lumière originaux, BTS et images finales des scènes Times Square (54) et Worldship (83). Images de films sous droits des ayants droit ; ne pas republier sans autorisation.
- [American Cinematographer — Stephen Burum ASC, Lighting a Set](https://theasc.com/article/lighting-a-set/) : plan lumière et deux photogrammes de la même démonstration (sans fill / fill 3:1). **La deuxième image n'est pas un BTS.**
- [Grant MacAllister, DP — Gibson Songbook / Fantastic Negrito](https://www.grantmacallister.com/blog/2023/05/05/cinematography-breakdown-songbook) : prévisualisation Set.A.Light, BTS et photogramme d'interview, avec modification des couleurs sur le tournage.
- [Nathaniel Kohfield, DP — Lighting a Car Interior](https://nathanielkohfield.com/journal/2016/1/17/lighting-a-night-car-interior-scene) : voiture sous la pluie, T1 gélatiné et rebond 4x4 blanc, BTS et images finales. **Pas de plan de feu original publié**.
- [fxguide — Mad Max: Fury Road, day-for-night](https://www.fxguide.com/fxfeatured/a-graphic-tale-the-visual-effects-of-mad-max-fury-road/) et [Eric Whipp — entretien FilmLight](https://www.filmlight.ltd.uk/customers/meet-the-colourist/eric_whipp.php) : John Seale et l'équipe ont testé un signal capturé plus exposé avant de l'assombrir très fortement en post ; les hautes lumières ne doivent pas être coupées. Étude citée dans la fiche Nuit américaine, sans prétendre disposer du plan lumière original.

### Droits / visibilité

Les images distantes sont affichées avec crédits et liens vers les documents d'origine ; elles **ne sont pas copiées dans le dépôt**, mais l'intégration visuelle par hotlink peut également relever des droits d'exploitation ou être techniquement bloquée par le site source. Il ne faut pas considérer cette V1.2 comme disposant d'une autorisation de reproduction des images de l'ASC, de Disney, des réalisateurs ou des photographes. Pour une diffusion publique durable, demander la permission ou substituer des photos sous licence adéquate ; sinon privilégier les liens externes vers les études.

En cas de hotlink bloqué, l'application affiche un lien vers l'image chez son auteur. Un plan reconstruit est **un schéma original** et doit toujours être identifié comme tel, pas présenté comme le plan de feu d'une production.

Les Situations sans véritable ensemble documentaire complet conservent leur fiche technique et leurs schémas BOS, accompagnés d'un avertissement explicite. L'absence d'une vraie photo ne doit jamais être dissimulée avec une image IA ou une photo de plateau sans rapport.
