# BOS — LIGHTING GUIDE · V3.0

Bibliothèque professionnelle de la lumière au cinéma, pensée pour un chef opérateur expérimenté. Application autonome, statique et installable (PWA) : lecture, révision technique, cas de plateau et inspiration, en français avec le vocabulaire professionnel anglais lorsqu'il est pertinent.

## Accès / déploiement

- **GitHub** : BrunoOnSet/LIGHTING-GUIDE
- **Hébergement prévu** : Cloudflare Pages lié au dépôt
- **Branche de production** : main
- **Build command** : vide
- **Build output directory** : racine du dépôt

L'application fonctionne en ouvrant directement index.html depuis un serveur statique. Le déploiement Cloudflare dépend de la connexion existante au dépôt : une modification GitHub ne permet pas, à elle seule, de certifier le site publié.

## Les huit rubriques de la V3

1. **Principes** — lois physiques, optique, photométrie, réflectance, taille angulaire, qualité des ombres, spectres, phénomènes temporels.
2. **Méthodes** — bounce, book light, cove, negative fill, CRLS, cross-key, faux jour, zones de jeu, projection.
3. **Situations** — cinq tournages documentés, chacun avec plan de feu original, photo BTS et image finale ; analyses attribuées à leur auteur.
4. **Cas de plateau** — contraintes de tournage et trois pistes concrètes à confronter.
5. **Vocabulaire** — définitions concises avec nuances techniques, notamment beam/field, BRDF, gobo, Duv, SSI, grip.
6. **Accessoires** — matières de diffusion, réflexion, coupe, contrôle optique et matériel de grip.
7. **Projecteurs** — premier catalogue de 13 modèles/familles, avec photo réelle sourcée, fonction, particularités, limites et lien externe vers le fabricant ou la documentation.
8. **Dossiers** — neuf chapitres de lecture approfondie, articulant physique, méthode de plateau et arbitrages, dont sept avec schémas pédagogiques originaux.

Les fiches sont repliables. La recherche parcourt toutes les rubriques ; « Fiche au hasard » ouvre une entrée aléatoire de la rubrique en cours. Le mode clair/sombre et le bouton d'installation restent disponibles.

## Exigence éditoriale

- Distinguer **lois physiques**, **conventions de mesure**, **pratiques courantes** et **choix artistiques**.
- Décrire une méthode par **ses effets réels sur le trajet lumineux** : couverture, direction, douceur, rendement, spill, contraintes de plateau, et non par des recettes génériques.
- Les **schémas BOS** sont des modèles spatiaux simplifiés, explicitement signalés comme tels. Ils ne sont jamais présentés comme un plan réel de film.
- Les **situations documentées** conservent leurs liens directs vers les sources : même tournage pour plan/BTS/frame, sans mélanger les productions.
- Les **photographies de projecteurs** restent chargées depuis les sites où elles sont publiées, avec crédit visible, sans être recopiées dans le dépôt. Ces URL externes peuvent changer ou être bloquées ; vérifier les droits et les autorisations avant une diffusion publique plus large.
- Ne pas inventer de caractéristiques : renvoyer à la documentation de la configuration **exacte** pour photométrie, angle, masse, puissance, flicker et modes couleur.
- Les fiches d'accessoires ne disposent pas encore toutes d'un visuel documentaire : c'est un chantier éditorial distinct.

## Fichiers

- index.html : navigation des huit rubriques
- style.css : styles responsive et lecteur de dossiers
- data-v2.js : bibliothèque professionnelle initiale
- data-library.js : approfondissements V3 (principes, cas, vocabulaire, accessoires, projecteurs, dossiers)
- data-visual-cases.js : cinq études de tournage documentées et leurs 15 visuels distincts
- app.js : rendu, schémas pédagogiques, recherche globale, PWA et navigation
- sw.js, manifest.webmanifest : installation et cache versionné
- tests/verify.mjs : cohérence des fiches, sources, photos, schémas et présence de la bibliothèque dans la PWA

## Vérification locale

Avec Node.js, depuis la racine du dépôt :

    node tests/verify.mjs

## Suite éditoriale envisageable

Étendre la photothèque des accessoires, détailler les courbes optiques et tableaux de photométrie exacts, constituer davantage de vrais dossiers de tournage documentés et construire des chapitres plus avancés sur la lumière extérieure, l'exposition et le spectre. Ces ajouts doivent privilégier qualité et traçabilité plutôt que le volume pour le volume.
