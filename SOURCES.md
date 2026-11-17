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
