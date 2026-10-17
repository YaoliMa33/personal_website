window.I18N = window.I18N || {};
window.I18N.de = {
  profiles: {
    yaoli: {
      firstName: "Yaoli",
      lastName: "Ma",
      fullName: "Yaoli Ma",
      email: "yaoli33ma@gmail.com",
      accent: "#a8c7ff",
      discipline: "Robotik & maschinelles Lernen",
      location: "München, Deutschland",
      role: "Masterstudent · Robotik, Kognition, Intelligenz",
      bio: "Ich erforsche, wie Roboter die physische Welt wahrnehmen und verstehen. An der Technischen Universität München verbinde ich maschinelles Lernen, Gassensorik und intelligente Systeme.",
      portrait: "assets/yaoli-architecture.jpg",
      portraitAlt: "Yaoli blickt in einer Kathedrale zur Architektur empor",
      imagePosition: "50% 65%",
      focus: ["Roboterwahrnehmung", "Intelligente Sensorik", "Domänenanpassung"],
      stats: [
        { value: "TUM", label: "Technische Universität München" },
        { value: "M.Sc.", label: "Robotik, Kognition, Intelligenz" },
        { value: "ROS 2", label: "Robotersensorik & Simulation" }
      ],
      projects: [
        {
          number: "01",
          title: "Robotern das Riechen beibringen",
          category: "Maschinelles Lernen · Bachelorarbeit",
          date: "März – Okt. 2026",
          description: "Domänenanpassung für Gassensoren, deren Reaktionen sich im Laufe der Zeit verändern. Eine Untersuchung dazu, wie gelernte Repräsentationen trotz Sensordrift nutzbar bleiben.",
          tags: ["PyTorch", "Domänenanpassung", "Elektronische Nase"],
          details: [
            "Implementierung von domänenadversariellem Lernen mit Ausrichtung latenter Klassenzentren zur unüberwachten Kompensation von Gassensordrift.",
            "Auswertung selbst erhobener Daten einer elektronischen Nase und eines öffentlichen Benchmark-Datensatzes bei kurz-, mittel- und langfristiger Drift unter verschiedenen Bedingungen für den Zugriff auf Zieldaten.",
            "Untersuchung der Zuverlässigkeit von Pseudolabels, der Gewichtung des Ausrichtungsverlusts und der Mittelung von Vorhersagen über mehrere Zufallsinitialisierungen zur Bewertung der Robustheit."
          ],
          visual: "olfaction",
          result: "Munich Institute of Robotics and Machine Intelligence · Lehrstuhl für Perzeption für intelligente Systeme"
        },
        {
          number: "02",
          title: "Einer unsichtbaren Spur folgen",
          category: "Robotik · Gassensorik & Kartierung",
          date: "Apr. – Juli 2026",
          description: "Gassensorik, Kartierung und Quellenlokalisierung als durchgängiger Prozess – von realen MOX-Sensoren bis zur Robotersimulation.",
          tags: ["ROS 2", "Raspberry Pi", "PCA / SVM", "Gaskartierung"],
          details: [
            "Aufbau einer Datenerfassung für MOX-Sensoren mit Raspberry Pi und ROS 2; Unterscheidung von Ethanol und Aceton durch Vorverarbeitung, PCA und SVM.",
            "Simulation windgetriebener Gasausbreitung und verzögerter Sensorreaktionen mit ROS-2-Integration und Visualisierung in RViz.",
            "Entwicklung einer Wegpunktsteuerung und Probenahme in der Simulation; Einsatz von Kernel DM+V und Gaußscher Fahnenmodellierung zur Kartierung sowie Untersuchung von Zickzacksuche und Maximum-Likelihood-Quellenlokalisierung."
          ],
          visual: "mapping",
          result: "Gassensorik → Umgebungskartierung → Quellenlokalisierung"
        }
      ],
      experience: [
        {
          company: "Ein nicht namentlich genanntes Halbleiterwerk",
          role: "Praktikum in Halbleitertechnik & Sensorik",
          date: "Aug. – Okt. 2025",
          description: "Praktische Arbeit in Halbleiterfertigung, Sensorforschung und Bauelemententwicklung.",
          points: [
            "Mitarbeit an MOSFET-Experimenten und der Validierung von Bauelementen unter Einsatz von Prozessen und Anlagen der Halbleiterfertigung.",
            "Untersuchung der Herstellung optoelektronischer und MEMS-Sensoren sowie des Einflusses von Prozessschwankungen auf die Messstabilität.",
            "Gemeinsame Entwicklung einer TVS-Diode mit einem Mentor in Sentaurus TCAD; Einsatz von Regressionsmodellen zur Leistungsvorhersage und Analyse der Prozessempfindlichkeit. Das Bauelement bestand die statische und dynamische Validierung."
          ]
        }
      ],
      education: [
        {
          institution: "Technische Universität München",
          degree: "M.Sc. Robotik, Kognition, Intelligenz",
          date: "Okt. 2026 – heute",
          description: "Masterstudium in Robotik, Kognition und intelligenten Systemen."
        },
        {
          institution: "Technische Universität München",
          degree: "B.Sc. Elektrotechnik und Informationstechnik",
          date: "Sept. 2023 – Okt. 2026",
          description: "Notendurchschnitt 2,2 · Beste 15 %",
          detail: "Schwerpunkte: Maschinelles Lernen, Roboterregelung, künstliche Intelligenz, Halbleiter- und Sensortechnik."
        },
        {
          institution: "Schloss Schule Kirchberg",
          degree: "Abitur in Baden-Württemberg",
          date: "Sept. 2020 – Juni 2023",
          description: "Abitur in Baden-Württemberg im Jahr 2023.",
          detail: "Leistungsfächer: Mathematik, Physik und Musik."
        }
      ],
      skills: [
        { label: "Programmierung & Lernen", items: ["Python", "PyTorch", "C / C++", "MATLAB"] },
        { label: "Robotik & Hardware", items: ["ROS 2", "Raspberry Pi", "VHDL", "Arduino IDE"] },
        { label: "Bauelementsimulation", items: ["Sentaurus TCAD", "LTspice"] }
      ],
      honors: [
        "Tag der Mathematik 2022 — 4. Platz im Einzelwettbewerb; 3. Platz im Gruppenwettbewerb",
        "Informatik-Biber 2022 — 3. Rang"
      ],
      languages: ["Mandarin · Muttersprache", "Shanghainesisch · Muttersprache", "Englisch · B2", "Deutsch · Abitur", "Spanisch · A2"],
      offDutyTitle: "Abseits des Labors.",
      offDutyText: "Mein Bildungsweg begann mit Mathematik, Physik und Musik an der Schloss Schule Kirchberg. Diese Fotos zeigen eine weitere Seite des Menschen hinter den Projekten.",
      gallery: [
        { src: "assets/yaoli-barcelona.jpg", alt: "Yaoli mit Blick auf Barcelona und das Meer", caption: "Eine andere Perspektive" },
        { src: "assets/yaoli-architecture.jpg", alt: "Yaoli unter den hohen Säulen und Buntglasfenstern einer Kathedrale", caption: "Den Blick nach oben" },
        { src: "assets/couple.jpg", alt: "Yaoli und Yihan gemeinsam über einer spiegelnden Fläche", caption: "Zusammen ist es schöner" }
      ],
      github: null
    },
    yihan: {
      firstName: "Yihan",
      lastName: "Zhang",
      fullName: "Yihan Zhang",
      email: "zhangyihan226@gmail.com",
      accent: "#c4afff",
      discipline: "Quantitative Finanzwirtschaft & Data Science",
      location: "Paris, Frankreich",
      role: "Studentin im X-HEC-Doppelabschluss Data & Finance",
      bio: "Ich untersuche Finanzmärkte mithilfe von Daten, Modellen und sorgfältiger Analyse. Meine Arbeit umfasst Aktienfaktoren, Volatilitätsprognosen und maschinelles Lernen, ergänzt durch Erfahrung in Branchenanalyse und Unternehmensstrategie.",
      portrait: "assets/yihan-coast.jpg",
      portraitAlt: "Yihan lächelt am Meer vor Küstenklippen",
      imagePosition: "55% 57%",
      focus: ["Quantitative Forschung", "Finanzmärkte", "Maschinelles Lernen"],
      stats: [
        { value: "X-HEC", label: "Doppelabschluss Data & Finance" },
        { value: "Beste 5 %", label: "CUHK-Bachelorjahrgang" },
        { value: "3,7 / 4,0", label: "Notendurchschnitt im Bachelor" }
      ],
      projects: [
        {
          number: "01",
          title: "Was besteht den Backtest?",
          category: "Aktienanalyse · Faktorinvestitionen",
          date: "Untersuchungszeitraum 2001–2020",
          description: "Momentum, Reversal und niedrige Volatilität genauer betrachtet: scheinbare Renditen von Marktexposition, Portfolioumschlag und Handelskosten trennen.",
          tags: ["Python", "pandas", "statsmodels", "Faktoranalyse"],
          details: [
            "Backtests für drei Faktoren auf Basis der jeweils historischen S&P-500-Zusammensetzung mit monatlicher Einteilung in Quintile, regelbasierter Kursbereinigung und expliziter Berücksichtigung des Survivorship Bias.",
            "Die unbereinigten Long-Short-Renditen wurden vom Markt-Beta dominiert; das Beta des Low-Volatility-Faktors betrug −1,1.",
            "Eine vorab bestimmte, rollierende Beta-Absicherung erhöhte die Sharpe Ratio der Low-Volatility-Strategie auf 0,62 (t = 2,6). Bei einem monatlichen Portfolioumschlag von 80 % war Reversal ab Handelskosten von mehr als 20 Basispunkten unrentabel."
          ],
          visual: "factors",
          result: "Low-Volatility-Sharpe-Ratio von 0,62 nach rollierender Beta-Absicherung"
        },
        {
          number: "02",
          title: "Bringt ein klügeres Modell mehr?",
          category: "Maschinelles Lernen · Aktienauswahl",
          date: "Out-of-Sample-Auswertung 2008–2020",
          description: "LightGBM im Vergleich zu linearen Faktormodellen – bei gleichen Merkmalen, konsequenter Trainingsmethodik und praxisnahen Handelsbedingungen.",
          tags: ["LightGBM", "scikit-learn", "SHAP", "Walk-Forward"],
          details: [
            "Rangfolge der Renditen des Folgemonats anhand von 17 Kurs- und Volumenmerkmalen, Walk-Forward-Training, querschnittlicher Rangnormalisierung und frühzeitigem Trainingsstopp anhand des Informationskoeffizienten im Validierungssatz.",
            "LightGBM übertraf Ridge bei identischen Merkmalen (IC-Differenz: t = 2,0); SHAP zeigte nichtlineare Momentum- und Reversal-Effekte.",
            "Nach Beta-Absicherung und Transaktionskosten zeigte das Modell keinen signifikanten Vorteil gegenüber einem linearen Dreifaktormodell."
          ],
          visual: "ml",
          result: "Kein signifikanter Vorteil gegenüber dem linearen Dreifaktormodell nach Absicherung und Kosten"
        },
        {
          number: "03",
          title: "Wenn Risiken ihre Form verändern",
          category: "Zeitreihen · Volatilität & Risiko",
          date: "Quantitatives Forschungsprojekt",
          description: "Prognose der S&P-500-Volatilität und Prüfung, ob Risikomodelle auch bei wechselnden Marktregimen Bestand haben.",
          tags: ["GARCH", "Value at Risk", "arch", "statsmodels"],
          details: [
            "Prognose der täglichen Volatilität mit GARCH, GJR-GARCH und EGARCH unter Verwendung von Student-t-Verteilungen und rollierender Neuschätzung.",
            "Vergleich der Prognosen mit EWMA und historischer Volatilität anhand des QLIKE-Verlusts und von Diebold-Mariano-Tests.",
            "Backtests des 95-%- und 99-%-VaR mit Kupiec- und Christoffersen-Tests. Bei Gaußschen Modellen wurde der 99-%-VaR etwa doppelt so häufig überschritten wie erwartet; die Überschreitungen häuften sich bei abrupten Regimewechseln."
          ],
          visual: "volatility",
          result: "Bei Gaußschen Modellen wurde der 99-%-VaR etwa doppelt so häufig überschritten wie erwartet"
        }
      ],
      experience: [
        {
          company: "Baidu",
          role: "Praktikum in KI-Suchstrategie & Branchenanalyse",
          date: "Juni – Aug. 2026",
          description: "Analyse von KI-Investitionen, Geschäftsentwicklung und Veränderungen im Suchmaschinenmarkt.",
          points: [
            "Erstellung einer 18-seitigen Studie zu Alphabets Ergebnissen im zweiten Quartal 2026 mit Schwerpunkt auf Suche, Cloud und Investitionsausgaben; Rückverfolgung zentraler Kennzahlen zu den Originalveröffentlichungen.",
            "Analyse von Ergebnisqualität, operativer Rentabilität und Cashflow zur Beurteilung des Zusammenhangs zwischen KI-Investitionen und finanziellen Erträgen.",
            "Vergleich von KI-Suchprodukten und Erweiterung des Analyseansatzes auf die Suche nach Finanzinformationen."
          ]
        },
        {
          company: "Meituan",
          role: "Praktikum in Geschäftsanalyse / Strategieberatung",
          date: "Juli – Sept. 2025",
          description: "Datenbasierte Budgetplanung für Zuschüsse und Leistungsüberwachung in mehr als 30 Städten.",
          points: [
            "Analyse von Bestellungen, Bruttowarenvolumen (GMV), Zuschussausgaben und ROI mit SQL und Python.",
            "Entwicklung eines Systems zur ROI-Überwachung und Anomalieerkennung, um Zuschussausgaben zu erkennen, die von den Vergleichswerten für das GMV-Wachstum abwichen.",
            "Automatisierung von SQL-Analysepipelines und Dashboards; Steigerung der Effizienz täglicher und wöchentlicher Berichte um etwa 30 %."
          ]
        },
        {
          company: "Guolian Minsheng Securities",
          role: "Praktikum in der Aktienanalyse",
          date: "Juni – Aug. 2024",
          description: "Fundamentalanalyse von Elektronik- und Technologieunternehmen.",
          points: [
            "Zusammenstellung von mehr als 5.000 Finanz- und Betriebsdatenpunkten aus Wind, Bloomberg, Unternehmensmeldungen und Geschäftsberichten.",
            "Mitarbeit an Unternehmensanalysen und wöchentlichen Branchenberichten mit Untersuchung von Rentabilität, Cashflow, Kapitalstruktur, Liquidität und Kreditrisiko.",
            "Einsatz von DCF-, KGV-, DDM- und CAPM-Verfahren zur Unterstützung von Kurszielschätzungen sowie Beobachtung makroökonomischer Ereignisse, Zinsentwicklungen und Marktstimmung."
          ]
        }
      ],
      education: [
        {
          institution: "École Polytechnique & HEC Paris",
          degree: "Doppelabschluss in Data & Finance",
          date: "Sept. 2026 – Juli 2028 · voraussichtlich",
          description: "MSc&T an der École Polytechnique + Master in International Finance an der HEC Paris.",
          detail: "Statistik, Wahrscheinlichkeitstheorie, maschinelles Lernen, Deep Learning und Optimierung; zweites Studienjahr an der HEC Paris."
        },
        {
          institution: "The Chinese University of Hong Kong",
          degree: "Bachelor in quantitativer Finanzwirtschaft",
          date: "Sept. 2022 – Juli 2026",
          description: "Notendurchschnitt 3,7/4,0 · Beste 5 %",
          detail: "Vizepräsidentin für Außenbeziehungen der New Asia Mainland Student Association — Veranstaltungen, Sponsorenansprache und campusübergreifende Kommunikation."
        },
        {
          institution: "HEC Paris",
          degree: "Austauschprogramm",
          date: "Sept. 2024 – Jan. 2025",
          description: "Internationaler Austausch während des Bachelorstudiums an der CUHK."
        }
      ],
      skills: [
        { label: "Programmierung & Daten", items: ["Python", "SQL", "R", "Excel", "pandas", "NumPy"] },
        { label: "Modelle & Methoden", items: ["statsmodels", "arch", "scikit-learn", "LightGBM", "ARIMA / GARCH", "Faktor-Backtesting"] },
        { label: "Finanzen & Analyse", items: ["DCF & Vergleichsbewertung", "Kreditanalyse", "Analyse der Ergebnisqualität", "Makroökonomie & Zinsen", "Bloomberg BMC", "Wind", "CEIC", "Tableau"] }
      ],
      honors: [
        "CUHK Dean’s List — Auszeichnung für herausragende Studienleistungen, 2023–2024",
        "CUHK Head’s List (Merit) — Auszeichnung des College-Leiters für gute Studienleistungen, 2022–2023",
        "Novo Nordisk: Bewertung & Kreditrisiko — Note A; FCFF-DCF, CAPM-WACC, Unternehmensvergleiche und szenariobasierte Kreditanalyse"
      ],
      languages: ["Mandarin · Muttersprache", "Englisch · Fließend / IELTS 7,5", "Kantonesisch · Fließend", "Französisch · Anfängerin"],
      offDutyTitle: "Mehr als nur Zahlen.",
      offDutyText: "Abseits der Finanzmodelle begeistere ich mich für Tauchen, Badminton, Wandern und Fotografie. Ich habe eine Advanced-Open-Water-Tauchqualifikation und entdecke gerne neue Perspektiven durch die Kamera.",
      gallery: [
        { src: "assets/yihan-museum.jpg", alt: "Yihan steht im Sonnenlicht neben einem hohen Museumsfenster", caption: "Licht & Stille" },
        { src: "assets/yihan-harbour.jpg", alt: "Yihan sitzt am Wasser mit einer Stadtsilhouette in der Ferne", caption: "Am Wasser" },
        { src: "assets/yihan-venice.jpg", alt: "Yihan genießt die Sonne an der Lagune von Venedig", caption: "Ein Moment in der Sonne" },
        { src: "assets/yihan-stone.jpg", alt: "Yihan sitzt neben einem alten Steingebäude", caption: "Ein anderer Ort, eine neue Geschichte" }
      ],
      github: "https://github.com/zhangyihan226-gif"
    }
  },
  ui: {
    'Created by our lovely GPT-6 Astra Ultra': 'Erstellt von unserem liebenswerten GPT-6 Astra Ultra',
    "Yaoli and Yihan home": "Startseite von Yaoli und Yihan",
    "Page sections": "Seitenbereiche",
    "Research": "Forschung",
    "Journey": "Werdegang",
    "Off duty": "Privat",
    "Contact": "Kontakt",
    "Meet Yihan": "Yihan kennenlernen",
    "Meet Yaoli": "Yaoli kennenlernen",
    "Meet us": "Über uns",
    "TWO PERSPECTIVES. ONE SHARED SPACE.": "ZWEI PERSPEKTIVEN. EIN GEMEINSAMER RAUM.",
    "Pause ambient animation": "Hintergrundanimation pausieren",
    "Enable ambient animation": "Hintergrundanimation aktivieren",
    "Motion on": "Animation an",
    "Motion off": "Animation aus",
    "STAY CURIOUS. KEEP EXPLORING.": "NEUGIERIG BLEIBEN. WEITER ENTDECKEN.",
    "A LITTLE OF US. A WORLD TO EXPLORE.": "EIN BLICK AUF UNS. EINE WELT ZUM ENTDECKEN.",
    "Two minds.": "Zwei Köpfe.",
    "One": "Ein",
    "orbit": "Orbit",
    "Two minds. One orbit.": "Zwei Köpfe. Ein Orbit.",
    "From intelligent machines to financial markets.": "Von intelligenten Maschinen bis zu Finanzmärkten.",
    "Different perspectives. A shared curiosity.": "Verschiedene Perspektiven. Eine gemeinsame Neugier.",
    "You want to learn about": "Wen möchtest du kennenlernen?",
    "ROBOTICS · PERCEPTION · MACHINE LEARNING": "ROBOTIK · WAHRNEHMUNG · MASCHINELLES LERNEN",
    "QUANTITATIVE FINANCE · DATA SCIENCE": "QUANTITATIVE FINANZWIRTSCHAFT · DATA SCIENCE",
    "Yaoli and Yihan together, reflected in the water": "Yaoli und Yihan zusammen, im Wasser gespiegelt",
    "A SHARED HORIZON": "EIN GEMEINSAMER HORIZONT",
    "01 / TOGETHER": "01 / ZUSAMMEN",
    "MUNICH ↔ PARIS": "MÜNCHEN ↔ PARIS",
    "SOURCE DOMAIN": "QUELLDOMÄNE",
    "TARGET DOMAIN": "ZIELDOMÄNE",
    "ALIGNMENT": "AUSRICHTUNG",
    "ROBOT PATH": "ROBOTERPFAD",
    "SOURCE": "QUELLE",
    "SENSE → MAP → LOCALIZE": "MESSEN → KARTIEREN → LOKALISIEREN",
    "FACTOR SIGNALS / BETA / COSTS": "FAKTORSIGNALE / BETA / KOSTEN",
    "17 FEATURES": "17 MERKMALE",
    "NONLINEAR SIGNALS": "NICHTLINEARE SIGNALE",
    "UNCERTAINTY, MODELLED.": "UNSICHERHEIT MODELLIEREN.",
    "VOLATILITY / TAIL RISK / REGIME SHIFTS": "VOLATILITÄT / EXTREMRISIKEN / REGIMEWECHSEL",
    "CONCEPT VISUALIZATION": "KONZEPTDARSTELLUNG",
    "Inside the research": "Einblick in die Forschung",
    "EXPERIENCE": "ERFAHRUNG",
    "EDUCATION": "BILDUNG",
    "Enlarge photo:": "Foto vergrößern:",
    "Enlarge photo": "Foto vergrößern",
    "Explore my work": "Meine Arbeit entdecken",
    "Get in touch": "Kontakt aufnehmen",
    "A WORK IN PROGRESS. ALWAYS.": "IMMER IN ENTWICKLUNG.",
    "THE PERSON BEHIND THE WORK": "DER MENSCH HINTER DER ARBEIT",
    "SELECTED RESEARCH": "AUSGEWÄHLTE FORSCHUNG",
    "/ SELECTED RESEARCH": "/ AUSGEWÄHLTE FORSCHUNG",
    "Curiosity, in practice.": "Neugier in der Praxis.",
    "Teaching machines to make sense of the physical world.": "Maschinen helfen, die physische Welt zu verstehen.",
    "Looking for signal. Questioning the assumptions.": "Signale finden. Annahmen hinterfragen.",
    "Explore my GitHub": "Mein GitHub entdecken",
    "THE JOURNEY": "DER WERDEGANG",
    "/ THE JOURNEY": "/ DER WERDEGANG",
    "Always moving forward.": "Immer weiter.",
    "The places, people, and problems that shape my perspective.": "Orte, Menschen und Fragen, die meine Perspektive prägen.",
    "LEARNING BY DOING": "LERNEN DURCH ERFAHRUNG",
    "Experience": "Erfahrung",
    "BUILDING FOUNDATIONS": "GRUNDLAGEN SCHAFFEN",
    "Education": "Bildung",
    "TOOLS & PERSPECTIVES": "WERKZEUGE & PERSPEKTIVEN",
    "/ TOOLS & PERSPECTIVES": "/ WERKZEUGE & PERSPEKTIVEN",
    "What I work with.": "Womit ich arbeite.",
    "A toolkit that keeps growing.": "Mein Werkzeugkasten wächst weiter.",
    "LANGUAGES": "SPRACHEN",
    "RECOGNITION": "AUSZEICHNUNGEN",
    "BEYOND THE DESK": "ABSEITS DES SCHREIBTISCHS",
    "/ BEYOND THE DESK": "/ ABSEITS DES SCHREIBTISCHS",
    "GOOD CONVERSATIONS START SOMEWHERE.": "GUTE GESPRÄCHE BEGINNEN MIT EINEM HALLO.",
    "Let’s connect": "Lass uns reden",
    "Ideas, research, or just a hello.": "Ideen, Forschung oder einfach ein Hallo.",
    "Copy email": "E-Mail kopieren",
    "Print profile": "Profil drucken",
    "ONE MORE PERSPECTIVE": "EINE WEITERE PERSPEKTIVE",
    "Enter Yihan’s world": "Yihans Welt entdecken",
    "Enter Yaoli’s world": "Yaolis Welt entdecken",
    "Photo viewer": "Fotoansicht",
    "Close photo viewer": "Fotoansicht schließen",
    "Previous photo": "Vorheriges Foto",
    "Next photo": "Nächstes Foto",
    "Email copied. Say hello when you’re ready.": "E-Mail-Adresse kopiert. Schreib mir, wenn du möchtest.",
    "You can copy the address above or click it to open your email app.": "Du kannst die Adresse oben kopieren oder anklicken, um dein E-Mail-Programm zu öffnen.",
    "of": "von",
    "Choose language": "Sprache wählen",
    "Skip to content": "Zum Inhalt springen",
    "Yaoli Ma & Yihan Zhang — Two minds. One orbit.": "Yaoli Ma & Yihan Zhang — Zwei Köpfe. Ein Orbit.",
    "A shared space for two curious minds. Explore robotics and machine learning with Yaoli Ma, and quantitative finance and data science with Yihan Zhang.": "Ein gemeinsamer Raum für zwei neugierige Köpfe. Entdecke Robotik und maschinelles Lernen mit Yaoli Ma sowie quantitative Finanzwirtschaft und Data Science mit Yihan Zhang.",
    "Yaoli Ma — Robotics, Perception & Machine Learning": "Yaoli Ma — Robotik, Wahrnehmung & maschinelles Lernen",
    "Yaoli Ma, M.Sc. student at the Technical University of Munich. Exploring robot olfaction, sensor drift compensation, and machine learning.": "Yaoli Ma, Masterstudent an der Technischen Universität München. Forschung zu Roboterolfaktion, Sensordriftkompensation und maschinellem Lernen.",
    "Yihan Zhang — Quantitative Finance & Data Science": "Yihan Zhang — Quantitative Finanzwirtschaft & Data Science",
    "Yihan Zhang, X-HEC Data & Finance student. Exploring quantitative research, machine learning, equity factors, and financial risk.": "Yihan Zhang, Studentin im X-HEC-Programm Data & Finance. Quantitative Forschung, maschinelles Lernen, Aktienfaktoren und Finanzrisiken.",
    "Robotics, machine learning, quantitative finance, and a shared curiosity.": "Robotik, maschinelles Lernen, quantitative Finanzwirtschaft und eine gemeinsame Neugier.",
    "Please enable JavaScript to explore our personal websites.": "Bitte aktiviere JavaScript, um unsere persönlichen Webseiten zu erkunden.",
    "Email Yaoli": "E-Mail an Yaoli",
    "Email Yihan": "E-Mail an Yihan"
  }
};