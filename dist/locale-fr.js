window.I18N = window.I18N || {};
window.I18N.fr = {
  profiles: {
    yaoli: {
      firstName: 'Yaoli',
      lastName: 'Ma',
      fullName: 'Yaoli Ma',
      email: 'yaoli33ma@gmail.com',
      accent: '#a8c7ff',
      discipline: 'Robotique et apprentissage automatique',
      location: 'Munich, Allemagne',
      role: 'Étudiant en master · Robotique, cognition et intelligence',
      bio: 'J’étudie la manière dont les robots perçoivent et comprennent le monde physique. À l’Université technique de Munich, mes travaux associent apprentissage automatique, détection de gaz et systèmes intelligents.',
      portrait: 'assets/yaoli-architecture.jpg',
      portraitAlt: 'Yaoli levant les yeux vers l’architecture intérieure d’une cathédrale',
      imagePosition: '50% 65%',
      focus: ['Perception robotique', 'Capteurs intelligents', 'Adaptation de domaine'],
      stats: [
        { value: 'TUM', label: 'Université technique de Munich' },
        { value: 'M.Sc.', label: 'Robotique, cognition et intelligence' },
        { value: 'ROS 2', label: 'Détection et simulation robotiques' }
      ],
      projects: [
        {
          number: '01',
          title: 'Apprendre aux robots à sentir',
          category: 'Apprentissage automatique · Mémoire de licence',
          date: 'Mars – oct. 2026',
          description: 'Adapter les modèles aux capteurs de gaz dont les réponses évoluent dans le temps. Une étude sur la robustesse des représentations apprises face à la dérive des capteurs.',
          tags: ['PyTorch', 'Adaptation de domaine', 'Nez électronique'],
          details: [
            'Mise en œuvre d’un apprentissage adversarial de domaine avec alignement des centres de classes dans l’espace latent, pour compenser sans supervision la dérive des capteurs de gaz.',
            'Évaluation sur des données de nez électronique collectées en propre et sur un jeu de référence public, avec des dérives à court, moyen et long terme et différents niveaux d’accès aux données cibles.',
            'Étude de la fiabilité des pseudo-étiquettes, de la pondération des pertes d’alignement et de la moyenne des prédictions obtenues avec plusieurs graines aléatoires pour évaluer la robustesse.'
          ],
          visual: 'olfaction',
          result: 'Munich Institute of Robotics and Machine Intelligence · Chaire de perception pour les systèmes intelligents'
        },
        {
          number: '02',
          title: 'Suivre une piste invisible',
          category: 'Robotique · Détection et cartographie des gaz',
          date: 'Avr. – juil. 2026',
          description: 'Une exploration de bout en bout de la détection de gaz, de leur cartographie et de la localisation de leur source, des capteurs MOX physiques à la simulation robotique.',
          tags: ['ROS 2', 'Raspberry Pi', 'ACP / SVM', 'Cartographie des gaz'],
          details: [
            'Développement d’un système d’acquisition pour capteurs MOX avec Raspberry Pi et ROS 2 ; prétraitement, ACP et SVM pour distinguer l’éthanol de l’acétone.',
            'Simulation de la dispersion des gaz sous l’effet du vent et des délais de réponse des capteurs, avec intégration à ROS 2 et visualisation dans RViz.',
            'Développement du suivi de points de passage et de l’échantillonnage en simulation ; cartographie par Kernel DM+V et modèle de panache gaussien, exploration de trajectoires en zigzag et localisation de source par maximum de vraisemblance.'
          ],
          visual: 'mapping',
          result: 'Détection de gaz → cartographie de l’environnement → localisation de la source'
        }
      ],
      experience: [
        {
          company: 'Une usine de fabrication de semi-conducteurs non nommée',
          role: 'Stage en semi-conducteurs et capteurs',
          date: 'Août – oct. 2025',
          description: 'Expérience pratique en fabrication de semi-conducteurs, recherche sur les capteurs et conception de composants.',
          points: [
            'Participation aux expériences sur les MOSFET et à la validation des composants, en lien avec les procédés et équipements de fabrication des semi-conducteurs.',
            'Étude de la fabrication des capteurs optoélectroniques et MEMS et de l’influence des variations de procédé sur la stabilité des mesures.',
            'Conception d’une diode TVS avec un encadrant dans Sentaurus TCAD ; utilisation de modèles de régression pour prédire les performances et analyser la sensibilité aux procédés. Le composant a passé les validations statique et dynamique.'
          ]
        }
      ],
      education: [
        {
          institution: 'Université technique de Munich',
          degree: 'M.Sc. Robotique, cognition et intelligence',
          date: 'Oct. 2026 – aujourd’hui',
          description: 'Études de master en robotique, cognition et systèmes intelligents.'
        },
        {
          institution: 'Université technique de Munich',
          degree: 'B.Sc. Génie électrique et informatique',
          date: 'Sept. 2023 – oct. 2026',
          description: 'Moyenne : 2,2 · Parmi les 15 % les mieux classés',
          detail: 'Principaux enseignements : apprentissage automatique, commande robotique, intelligence artificielle, technologies des semi-conducteurs et des capteurs.'
        },
        {
          institution: 'Schloss Schule Kirchberg',
          degree: 'Abitur du Bade-Wurtemberg',
          date: 'Sept. 2020 – juin 2023',
          description: 'Obtention de l’Abitur du Bade-Wurtemberg en 2023.',
          detail: 'Matières principales : mathématiques, physique et musique.'
        }
      ],
      skills: [
        { label: 'Programmation et apprentissage', items: ['Python', 'PyTorch', 'C / C++', 'MATLAB'] },
        { label: 'Robotique et matériel', items: ['ROS 2', 'Arduino IDE'] },
        { label: 'Simulation de composants', items: ['Sentaurus TCAD', 'LTspice'] }
      ],
      honors: [
        'Tag der Mathematik 2022 — 4e place au concours individuel ; 3e place au concours par équipes',
        'Informatik-Biber 2022 — 3e rang'
      ],
      languages: ['Mandarin · Langue maternelle', 'Chinois wu · Langue maternelle', 'Anglais · B2', 'Allemand · Abitur', 'Espagnol · A2'],
      offDutyTitle: 'Au-delà du laboratoire.',
      offDutyText: 'Mon parcours a commencé par les mathématiques, la physique et la musique à Schloss Schule Kirchberg. Ces photos offrent un autre regard sur la personne derrière les projets.',
      gallery: [
        { src: 'assets/yaoli-barcelona.jpg', alt: 'Yaoli surplombant Barcelone et la mer', caption: 'Un autre point de vue' },
        { src: 'assets/yaoli-architecture.jpg', alt: 'Yaoli sous les hautes colonnes et les vitraux d’une cathédrale', caption: 'Lever les yeux' },
        { src: 'assets/couple.jpg', alt: 'Yaoli et Yihan ensemble au-dessus d’une surface réfléchissante', caption: 'Mieux ensemble' }
      ],
      github: null
    },
    yihan: {
      firstName: 'Yihan',
      lastName: 'Zhang',
      fullName: 'Yihan Zhang',
      email: 'zhangyihan226@gmail.com',
      accent: '#c4afff',
      discipline: 'Finance quantitative et science des données',
      location: 'Paris, France',
      role: 'Étudiante en double diplôme X-HEC Data & Finance',
      bio: 'J’explore les marchés financiers à travers les données, les modèles et une recherche rigoureuse. Mes travaux portent sur les facteurs actions, la prévision de volatilité et l’apprentissage automatique, avec une expérience en recherche sectorielle et en stratégie d’entreprise.',
      portrait: 'assets/yihan-coast.jpg',
      portraitAlt: 'Yihan souriant au bord de la mer, près des falaises',
      imagePosition: '55% 57%',
      focus: ['Recherche quantitative', 'Marchés financiers', 'Apprentissage automatique'],
      stats: [
        { value: 'X-HEC', label: 'Double diplôme Data & Finance' },
        { value: 'Top 5 %', label: 'Promotion de licence à CUHK' },
        { value: '3,7 / 4,0', label: 'Moyenne en licence' }
      ],
      projects: [
        {
          number: '01',
          title: 'Que reste-t-il après le backtest ?',
          category: 'Recherche actions · Investissement factoriel',
          date: 'Échantillon d’étude : 2001–2020',
          description: 'Un examen du momentum, du retournement et de la faible volatilité : distinguer les rendements apparents de l’exposition au marché, de la rotation du portefeuille et des coûts de transaction.',
          tags: ['Python', 'pandas', 'statsmodels', 'Recherche factorielle'],
          details: [
            'Backtest de trois facteurs sur les composants historiques du S&P 500, avec classement mensuel en quintiles, nettoyage des prix selon des règles définies et traitement explicite du biais de survivance.',
            'Les rendements bruts des portefeuilles acheteurs-vendeurs étaient dominés par le bêta de marché ; celui du facteur de faible volatilité était de −1,1.',
            'Une couverture ex ante du bêta estimé sur fenêtre glissante a porté le ratio de Sharpe de la stratégie de faible volatilité à 0,62 (t = 2,6). La rotation mensuelle de 80 % de la stratégie de retournement la rendait non rentable au-delà de 20 points de base de coûts de transaction.'
          ],
          visual: 'factors',
          result: 'Ratio de Sharpe de 0,62 pour la faible volatilité après couverture du bêta sur fenêtre glissante'
        },
        {
          number: '02',
          title: 'Un modèle plus fin fait-il la différence ?',
          category: 'Apprentissage automatique · Sélection d’actions',
          date: 'Évaluation hors échantillon : 2008–2020',
          description: 'Comparaison de LightGBM et de modèles factoriels linéaires à variables, protocole d’entraînement et contraintes de négociation identiques.',
          tags: ['LightGBM', 'scikit-learn', 'SHAP', 'Validation chronologique'],
          details: [
            'Classement des rendements du mois suivant à partir de 17 variables de prix et de volume, avec entraînement chronologique à fenêtres successives, normalisation des rangs en coupe transversale et arrêt anticipé fondé sur le coefficient d’information de validation.',
            'LightGBM a surpassé la régression Ridge avec les mêmes variables (t = 2,0 pour la différence d’IC) ; SHAP a mis en évidence des effets non linéaires de momentum et de retournement.',
            'Le modèle ne présentait aucun avantage significatif par rapport à un modèle linéaire à trois facteurs après couverture du bêta et prise en compte des coûts de transaction.'
          ],
          visual: 'ml',
          result: 'Aucun avantage significatif sur le modèle linéaire à trois facteurs après couverture et coûts'
        },
        {
          number: '03',
          title: 'Quand le risque change de visage',
          category: 'Séries temporelles · Volatilité et risque',
          date: 'Projet de recherche quantitative',
          description: 'Prévoir la volatilité du S&P 500 et vérifier la résistance des modèles de risque aux changements de régime des marchés.',
          tags: ['GARCH', 'Valeur en risque', 'arch', 'statsmodels'],
          details: [
            'Prévision de la volatilité quotidienne avec GARCH, GJR-GARCH et EGARCH, des distributions de Student et une réestimation sur fenêtre glissante.',
            'Comparaison des prévisions avec l’EWMA et la volatilité historique à l’aide de la fonction de perte QLIKE et des tests de Diebold-Mariano.',
            'Validation rétrospective des VaR à 95 % et 99 % avec les tests de Kupiec et de Christoffersen. Les modèles gaussiens dépassaient la VaR à 99 % environ deux fois plus souvent que prévu, avec des dépassements concentrés autour des changements brusques de régime.'
          ],
          visual: 'volatility',
          result: 'Dépassements de la VaR gaussienne à 99 % : environ deux fois la fréquence attendue'
        }
      ],
      experience: [
        {
          company: 'Baidu',
          role: 'Stagiaire en stratégie de recherche par IA et études sectorielles',
          date: 'Juin – août 2026',
          description: 'Étude des investissements en IA, des performances des entreprises et des transformations des moteurs de recherche.',
          points: [
            'Rédaction d’une étude de 18 pages sur les résultats du deuxième trimestre 2026 d’Alphabet : Search, Cloud et dépenses d’investissement, avec vérification des chiffres dans les publications officielles.',
            'Analyse de la qualité des résultats, de la rentabilité opérationnelle et des flux de trésorerie pour évaluer les liens entre investissements en IA et rendements financiers.',
            'Comparaison des outils de recherche par IA et extension du cadre d’analyse à la recherche d’informations financières.'
          ]
        },
        {
          company: 'Meituan',
          role: 'Stagiaire en analyse d’activité et conseil en stratégie',
          date: 'Juil. – sept. 2025',
          description: 'Budgétisation des subventions et suivi des performances fondés sur les données dans plus de 30 villes.',
          points: [
            'Analyse des commandes, du volume d’affaires (GMV), des dépenses de subvention et du retour sur investissement (ROI) avec SQL et Python.',
            'Création d’un dispositif de suivi du ROI et de détection d’anomalies pour repérer les dépenses de subvention s’écartant des références de croissance du GMV.',
            'Automatisation des chaînes d’analyse SQL et des tableaux de bord, améliorant d’environ 30 % l’efficacité des rapports quotidiens et hebdomadaires.'
          ]
        },
        {
          company: 'Guolian Minsheng Securities',
          role: 'Stagiaire en recherche actions',
          date: 'Juin – août 2024',
          description: 'Analyse fondamentale d’entreprises de l’électronique et des technologies.',
          points: [
            'Compilation de plus de 5 000 données financières et opérationnelles issues de Wind, Bloomberg, de publications réglementaires et de rapports annuels.',
            'Contribution aux notes d’entreprise et aux rapports sectoriels hebdomadaires : rentabilité, trésorerie, structure du capital, liquidité et risque de crédit.',
            'Application des méthodes DCF, P/E, DDM et CAPM pour étayer les objectifs de cours, avec suivi des événements macroéconomiques, des taux et du sentiment de marché.'
          ]
        }
      ],
      education: [
        {
          institution: 'École Polytechnique et HEC Paris',
          degree: 'Double diplôme Data & Finance',
          date: 'Sept. 2026 – juil. 2028 · Prévisionnel',
          description: 'MSc&T à l’École Polytechnique + Master in International Finance à HEC Paris.',
          detail: 'Statistiques, probabilités, apprentissage automatique, apprentissage profond et optimisation ; deuxième année à HEC Paris.'
        },
        {
          institution: 'Université chinoise de Hong Kong',
          degree: 'Licence en finance quantitative',
          date: 'Sept. 2022 – juil. 2026',
          description: 'Moyenne : 3,7/4,0 · Parmi les 5 % les mieux classés',
          detail: 'Vice-présidente aux relations extérieures de la New Asia Mainland Student Association : événements, recherche de sponsors et communication entre campus.'
        },
        {
          institution: 'HEC Paris',
          degree: 'Programme d’échange',
          date: 'Sept. 2024 – janv. 2025',
          description: 'Échange international pendant les études de licence à CUHK.'
        }
      ],
      educationAchievement: {"date":"2022","title":"Gaokao du Jiangsu","description":"Classée dans les 0,1 % de tête au Gaokao 2022 dans la province du Jiangsu."},
      skills: [
        { label: 'Programmation et données', items: ['Python', 'SQL', 'R', 'Excel', 'pandas', 'NumPy'] },
        { label: 'Modèles et méthodes', items: ['statsmodels', 'arch', 'scikit-learn', 'LightGBM', 'ARIMA / GARCH', 'Backtests factoriels'] },
        { label: 'Finance et recherche', items: ['DCF et comparables', 'Analyse de crédit', 'Analyse de la qualité des résultats', 'Macroéconomie et taux', 'Bloomberg BMC', 'Wind', 'CEIC', 'Tableau'] }
      ],
      honors: [
        'CUHK Dean’s List — Liste d’honneur du doyen, 2023–2024',
        'CUHK Head’s List (mérite) — 2022–2023',
        'Valorisation et crédit de Novo Nordisk — Note A ; DCF sur flux de trésorerie disponibles pour l’entreprise, WACC fondé sur le CAPM, comparaisons sectorielles et analyse de crédit par scénarios'
      ],
      languages: ['Mandarin · Langue maternelle', 'Chinois wu · Langue maternelle', 'Anglais · Courant / IELTS 7,5', 'Cantonais · Courant', 'Français · Débutant'],
      offDutyTitle: 'Un peu au-delà des chiffres.',
      offDutyText: 'En dehors des modèles financiers, j’aime la plongée, le badminton, la randonnée et la photographie. Titulaire de la certification de plongée Advanced Open Water, j’aime aussi découvrir de nouveaux points de vue derrière un objectif.',
      gallery: [
        { src: 'assets/yihan-museum.jpg', alt: 'Yihan dans la lumière du soleil, près d’une haute fenêtre de musée', caption: 'Lumière et sérénité' },
        { src: 'assets/yihan-harbour.jpg', alt: 'Yihan assise au bord de l’eau, avec une ville à l’horizon', caption: 'Au bord de l’eau' },
        { src: 'assets/yihan-venice.jpg', alt: 'Yihan profitant du soleil au bord de la lagune de Venise', caption: 'Un instant au soleil' },
        { src: 'assets/yihan-stone.jpg', alt: 'Yihan assise près d’un ancien bâtiment en pierre', caption: 'Un autre lieu, une autre histoire' }
      ],
      github: 'https://github.com/zhangyihan226-gif'
    }
  },
  ui: {
    'Created by our lovely GPT-6 Astra Ultra': 'Créé par notre adorable GPT-6 Astra Ultra',
    'Yaoli and Yihan home': 'Accueil de Yaoli et Yihan',
    'Page sections': 'Sections de la page',
    'Research': 'Recherche',
    'Journey': 'Parcours',
    'Off duty': 'En dehors',
    'Contact': 'Contact',
    'Meet Yihan': 'Découvrir Yihan',
    'Meet Yaoli': 'Découvrir Yaoli',
    'TWO PERSPECTIVES. ONE SHARED SPACE.': 'DEUX REGARDS. UN ESPACE COMMUN.',
    'Meet us': 'Nous découvrir',
    'Pause ambient animation': 'Mettre l’animation d’ambiance en pause',
    'Enable ambient animation': 'Activer l’animation d’ambiance',
    'Motion on': 'Animation activée',
    'Motion off': 'Animation désactivée',
    'STAY CURIOUS. KEEP EXPLORING.': 'GARDER LA CURIOSITÉ. CONTINUER À EXPLORER.',
    'A LITTLE OF US. A WORLD TO EXPLORE.': 'UN PEU DE NOUS. TOUT UN MONDE À EXPLORER.',
    'Two minds.': 'Deux esprits.',
    'One': 'Une',
    'orbit': 'orbite',
    'From intelligent machines to financial markets.': 'Des machines intelligentes aux marchés financiers.',
    'Different perspectives. A shared curiosity.': 'Des regards différents. Une curiosité commune.',
    'You want to learn about': 'Qui souhaitez-vous découvrir ?',
    'ROBOTICS · PERCEPTION · MACHINE LEARNING': 'ROBOTIQUE · PERCEPTION · APPRENTISSAGE AUTOMATIQUE',
    'QUANTITATIVE FINANCE · DATA SCIENCE': 'FINANCE QUANTITATIVE · SCIENCE DES DONNÉES',
    'Yaoli and Yihan together, reflected in the water': 'Yaoli et Yihan ensemble, se reflétant dans l’eau',
    'A SHARED HORIZON': 'UN HORIZON COMMUN',
    '01 / TOGETHER': '01 / ENSEMBLE',
    'MUNICH ↔ PARIS': 'MUNICH ↔ PARIS',
    'SOURCE DOMAIN': 'DOMAINE SOURCE',
    'TARGET DOMAIN': 'DOMAINE CIBLE',
    'ALIGNMENT': 'ALIGNEMENT',
    'ROBOT PATH': 'TRAJET DU ROBOT',
    'SOURCE': 'SOURCE',
    'SENSE → MAP → LOCALIZE': 'DÉTECTER → CARTOGRAPHIER → LOCALISER',
    'FACTOR SIGNALS / BETA / COSTS': 'SIGNAUX FACTORIELS / BÊTA / COÛTS',
    '17 FEATURES': '17 VARIABLES',
    'NONLINEAR SIGNALS': 'SIGNAUX NON LINÉAIRES',
    'UNCERTAINTY, MODELLED.': 'MODÉLISER L’INCERTITUDE.',
    'VOLATILITY / TAIL RISK / REGIME SHIFTS': 'VOLATILITÉ / RISQUE EXTRÊME / RÉGIMES',
    'CONCEPT VISUALIZATION': 'ILLUSTRATION DU CONCEPT',
    'Inside the research': 'Au cœur de la recherche',
    'EXPERIENCE': 'EXPÉRIENCE',
    'EDUCATION': 'FORMATION',
    'Enlarge photo:': 'Agrandir la photo :',
    'Explore my work': 'Découvrir mes travaux',
    'Get in touch': 'Me contacter',
    'A WORK IN PROGRESS. ALWAYS.': 'TOUJOURS EN ÉVOLUTION.',
    'THE PERSON BEHIND THE WORK': 'LA PERSONNE DERRIÈRE LES PROJETS',
    'SELECTED RESEARCH': 'TRAVAUX CHOISIS',
    '/ SELECTED RESEARCH': '/ TRAVAUX CHOISIS',
    'Curiosity, in practice.': 'La curiosité en pratique.',
    'Teaching machines to make sense of the physical world.': 'Apprendre aux machines à comprendre le monde physique.',
    'Looking for signal. Questioning the assumptions.': 'Chercher le signal. Interroger les hypothèses.',
    'Explore my GitHub': 'Explorer mon GitHub',
    'THE JOURNEY': 'LE PARCOURS',
    '/ THE JOURNEY': '/ LE PARCOURS',
    'Always moving forward.': 'Toujours aller de l’avant.',
    'The places, people, and problems that shape my perspective.': 'Les lieux, les rencontres et les défis qui façonnent mon regard.',
    'LEARNING BY DOING': 'APPRENDRE PAR LA PRATIQUE',
    'Experience': 'Expérience',
    'BUILDING FOUNDATIONS': 'POSER LES BASES',
    'Education': 'Formation',
    'TOOLS & PERSPECTIVES': 'OUTILS ET PERSPECTIVES',
    '/ TOOLS & PERSPECTIVES': '/ OUTILS ET PERSPECTIVES',
    'What I work with.': 'Mes outils au quotidien.',
    'A toolkit that keeps growing.': 'Des compétences qui continuent de s’enrichir.',
    'LANGUAGES': 'LANGUES',
    'RECOGNITION': 'DISTINCTIONS',
    'BEYOND THE DESK': 'AU-DELÀ DU BUREAU',
    '/ BEYOND THE DESK': '/ AU-DELÀ DU BUREAU',
    'GOOD CONVERSATIONS START SOMEWHERE.': 'TOUTE RENCONTRE COMMENCE PAR UN ÉCHANGE.',
    'Let’s connect': 'Faisons connaissance',
    'Ideas, research, or just a hello.': 'Une idée, un projet de recherche ou simplement un bonjour.',
    'Copy email': 'Copier l’adresse',
    'Print profile': 'Imprimer le profil',
    'ONE MORE PERSPECTIVE': 'UN AUTRE REGARD',
    'Enter Yihan’s world': 'Entrer dans l’univers de Yihan',
    'Enter Yaoli’s world': 'Entrer dans l’univers de Yaoli',
    'Photo viewer': 'Visionneuse de photos',
    'Close photo viewer': 'Fermer la visionneuse',
    'Previous photo': 'Photo précédente',
    'Next photo': 'Photo suivante',
    'Email copied. Say hello when you’re ready.': 'Adresse copiée. Au plaisir de vous lire.',
    'You can copy the address above or click it to open your email app.': 'Vous pouvez copier l’adresse ci-dessus ou cliquer dessus pour ouvrir votre messagerie.',
    'of': 'sur',
    'Choose language': 'Choisir la langue',
    'Language': 'Langue',
    'Skip to content': 'Aller au contenu',
    'Yaoli Ma & Yihan Zhang — Two minds. One orbit.': 'Yaoli Ma et Yihan Zhang — Deux esprits. Une orbite.',
    'A shared space for two curious minds. Explore robotics and machine learning with Yaoli Ma, and quantitative finance and data science with Yihan Zhang.': 'Un espace commun pour deux esprits curieux. Découvrez la robotique et l’apprentissage automatique avec Yaoli Ma, la finance quantitative et la science des données avec Yihan Zhang.',
    'Yaoli Ma — Robotics, Perception & Machine Learning': 'Yaoli Ma — Robotique, perception et apprentissage automatique',
    'Yaoli Ma, M.Sc. student at the Technical University of Munich. Exploring robot olfaction, sensor drift compensation, and machine learning.': 'Yaoli Ma, étudiant en master à l’Université technique de Munich. Recherche en olfaction robotique, compensation de dérive des capteurs et apprentissage automatique.',
    'Yihan Zhang — Quantitative Finance & Data Science': 'Yihan Zhang — Finance quantitative et science des données',
    'Yihan Zhang, X-HEC Data & Finance student. Exploring quantitative research, machine learning, equity factors, and financial risk.': 'Yihan Zhang, étudiante en Data & Finance à X-HEC. Recherche quantitative, apprentissage automatique, facteurs actions et risque financier.',
    'Robotics, machine learning, quantitative finance, and a shared curiosity.': 'Robotique, apprentissage automatique, finance quantitative et curiosité commune.',
    'Please enable JavaScript to explore our personal websites.': 'Veuillez activer JavaScript pour découvrir nos sites personnels.',
    'Email Yaoli': 'Écrire à Yaoli',
    'Email Yihan': 'Écrire à Yihan'
  }
};

