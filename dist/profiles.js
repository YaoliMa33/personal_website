window.PROFILES = {
  yaoli: {
    firstName: 'Yaoli',
    lastName: 'Ma',
    fullName: 'Yaoli Ma',
    email: 'yaoli33ma@gmail.com',
    accent: '#a8c7ff',
    discipline: 'Robotics & machine learning',
    location: 'Munich, Germany',
    role: 'M.Sc. student · Robotics, Cognition, Intelligence',
    bio: 'I study how robots perceive and understand the physical world. At the Technical University of Munich, my work connects machine learning, gas sensing and intelligent systems.',
    portrait: 'assets/yaoli-architecture.jpg',
    portraitAlt: 'Yaoli looking up at the architecture inside a cathedral',
    imagePosition: '50% 65%',
    focus: ['Robot perception', 'Sensor intelligence', 'Domain adaptation'],
    stats: [
      { value: 'TUM', label: 'Technical University of Munich' },
      { value: 'M.Sc.', label: 'Robotics, Cognition, Intelligence' },
      { value: 'ROS 2', label: 'Robotic sensing & simulation' }
    ],
    projects: [
      {
        number: '01',
        title: 'Teaching robots to smell',
        category: 'Machine learning · Bachelor thesis',
        date: 'Mar – Oct 2026',
        description: 'Domain adaptation for gas sensors whose responses change over time. A study of how learned representations can remain useful under sensor drift.',
        tags: ['PyTorch', 'Domain adaptation', 'Electronic nose'],
        details: [
          'Implemented domain-adversarial learning with latent class-center alignment for unsupervised gas sensor drift compensation.',
          'Evaluated self-collected electronic nose data and a public benchmark across short-, medium- and long-term drift under different target-data access settings.',
          'Examined pseudo-label reliability, alignment loss weights and multi-seed prediction averaging to assess robustness.'
        ],
        visual: 'olfaction',
        result: 'Munich Institute of Robotics and Machine Intelligence · Chair of Perception for Intelligent Systems'
      },
      {
        number: '02',
        title: 'Following an invisible trail',
        category: 'Robotics · Gas sensing & mapping',
        date: 'Apr – Jul 2026',
        description: 'An end-to-end exploration of gas sensing, mapping and source localization, from physical MOX sensors to robot simulation.',
        tags: ['ROS 2', 'Raspberry Pi', 'PCA / SVM', 'Gas mapping'],
        details: [
          'Built Raspberry Pi and ROS 2 data acquisition for MOX sensors, using preprocessing, PCA and SVM to distinguish ethanol from acetone.',
          'Simulated wind-driven gas dispersion and sensor response delays, with ROS 2 integration and RViz visualization.',
          'Developed waypoint control and sampling in simulation; applied Kernel DM+V and Gaussian plume mapping, and explored zig-zag search and maximum likelihood source localization.'
        ],
        visual: 'mapping',
        result: 'Gas sensing → environmental mapping → source localization'
      }
    ],
    experience: [
      {
        company: 'An unnamed semiconductor wafer fab',
        role: 'Semiconductor & sensor internship',
        date: 'Aug – Oct 2025',
        description: 'Hands-on work across semiconductor fabrication, sensor research and device design.',
        points: [
          'Assisted in MOSFET experiments and device validation, working with semiconductor fabrication processes and equipment.',
          'Explored optoelectronic and MEMS sensor fabrication and how process variations affect measurement stability.',
          'Co-designed a TVS diode with a mentor in Sentaurus TCAD; used regression models to predict performance and analyze process sensitivity. The device passed static and dynamic validation.'
        ]
      }
    ],
    education: [
      {
        institution: 'Technical University of Munich',
        degree: 'M.Sc. Robotics, Cognition, Intelligence',
        date: 'Oct 2026 – Present',
        description: 'Graduate study in robotics, cognition and intelligent systems.'
      },
      {
        institution: 'Technical University of Munich',
        degree: 'B.Sc. Electrical and Computer Engineering',
        date: 'Sep 2023 – Oct 2026',
        description: 'GPA 2.2 · Top 15%',
        detail: 'Core coursework: Machine Learning, Robotics Control, Artificial Intelligence, Semiconductor and Sensor Technology.'
      },
      {
        institution: 'Schloss Schule Kirchberg',
        degree: 'Baden-Württemberg Abitur',
        date: 'Sep 2020 – Jun 2023',
        description: 'Completed the Baden-Württemberg Abitur in 2023.',
        detail: 'Advanced subjects: Mathematics, Physics and Music.'
      }
    ],
    skills: [
      { label: 'Code & learning', items: ['Python', 'PyTorch', 'C / C++', 'MATLAB'] },
      { label: 'Robotics & hardware', items: ['ROS 2', 'Raspberry Pi', 'VHDL', 'Arduino IDE'] },
      { label: 'Device simulation', items: ['Sentaurus TCAD', 'LTspice'] }
    ],
    honors: [
      'Tag der Mathematik 2022 — 4th place individual competition; 3rd place group competition',
      'Informatik-Biber 2022 — 3rd rank'
    ],
    languages: ['Mandarin · Native', 'Shanghainese · Native', 'English · B2', 'German · Abitur', 'Spanish · A2'],
    offDutyTitle: 'Beyond the lab.',
    offDutyText: 'My studies began with mathematics, physics and music at Schloss Schule Kirchberg. These photographs offer another view of the person behind the projects.',
    gallery: [
      { src: 'assets/yaoli-barcelona.jpg', alt: 'Yaoli overlooking Barcelona and the sea', caption: 'A different perspective' },
      { src: 'assets/yaoli-architecture.jpg', alt: 'Yaoli beneath a cathedral’s tall columns and stained glass', caption: 'Looking up' },
      { src: 'assets/couple.jpg', alt: 'Yaoli and Yihan together above a reflective surface', caption: 'Better together' }
    ],
    github: null
  },
  yihan: {
    firstName: 'Yihan',
    lastName: 'Zhang',
    fullName: 'Yihan Zhang',
    email: 'zhangyihan226@gmail.com',
    accent: '#c4afff',
    discipline: 'Quantitative finance & data science',
    location: 'Paris, France',
    role: 'X-HEC Data & Finance double-degree student',
    bio: 'I explore financial markets through data, models and careful research. My work spans equity factors, volatility forecasting and machine learning, with experience in industry research and business strategy.',
    portrait: 'assets/yihan-coast.jpg',
    portraitAlt: 'Yihan smiling beside the sea and coastal cliffs',
    imagePosition: '55% 57%',
    focus: ['Quantitative research', 'Financial markets', 'Machine learning'],
    stats: [
      { value: 'X-HEC', label: 'Data & Finance double degree' },
      { value: 'Top 5%', label: 'CUHK undergraduate cohort' },
      { value: '3.7 / 4.0', label: 'Undergraduate GPA' }
    ],
    projects: [
      {
        number: '01',
        title: 'What survives the backtest?',
        category: 'Equity research · Factor investing',
        date: '2001–2020 research sample',
        description: 'A closer look at momentum, reversal and low volatility: separating apparent returns from market exposure, turnover and trading costs.',
        tags: ['Python', 'pandas', 'statsmodels', 'Factor research'],
        details: [
          'Backtested three factors on point-in-time S&P 500 constituents with monthly quintile sorts, rule-based price cleaning and explicit treatment of survivorship bias.',
          'Found that raw long-short returns were dominated by market beta; low-volatility beta was −1.1.',
          'An ex-ante rolling beta hedge lifted the low-volatility strategy to a Sharpe ratio of 0.62 (t = 2.6). Reversal’s 80% monthly turnover made it unprofitable above 20 basis points of trading costs.'
        ],
        visual: 'factors',
        result: 'Low-volatility Sharpe 0.62 after rolling beta hedging'
      },
      {
        number: '02',
        title: 'Can a smarter model find an edge?',
        category: 'Machine learning · Stock selection',
        date: '2008–2020 out-of-sample evaluation',
        description: 'LightGBM versus linear factor models under the same features, training discipline and practical trading constraints.',
        tags: ['LightGBM', 'scikit-learn', 'SHAP', 'Walk-forward'],
        details: [
          'Ranked next-month returns using 17 price and volume features, walk-forward training, cross-sectional rank normalization and early stopping on validation information coefficient.',
          'LightGBM outperformed Ridge on identical features (IC difference t = 2.0); SHAP revealed nonlinear momentum and reversal effects.',
          'The model showed no significant advantage over a linear three-factor model after beta hedging and transaction costs.'
        ],
        visual: 'ml',
        result: 'No significant edge over the linear three-factor model after hedging and costs'
      },
      {
        number: '03',
        title: 'When risk changes its shape',
        category: 'Time series · Volatility & risk',
        date: 'Quantitative research project',
        description: 'Forecasting S&P 500 volatility and testing whether risk models hold up when market regimes change.',
        tags: ['GARCH', 'Value at Risk', 'arch', 'statsmodels'],
        details: [
          'Forecast daily volatility with GARCH, GJR-GARCH and EGARCH using Student-t distributions and rolling re-estimation.',
          'Compared forecasts against EWMA and historical volatility using QLIKE loss and Diebold-Mariano tests.',
          'Backtested 95% and 99% VaR with Kupiec and Christoffersen tests. Gaussian models breached 99% VaR about twice as often as expected, with breaches clustering around abrupt regime shifts.'
        ],
        visual: 'volatility',
        result: 'Gaussian 99% VaR breaches were approximately twice the expected frequency'
      }
    ],
    experience: [
      {
        company: 'Baidu',
        role: 'AI Search Strategy & Industry Research Intern',
        date: 'Jun – Aug 2026',
        description: 'Research into AI investment, business performance and the changing search landscape.',
        points: [
          'Produced an 18-page study of Alphabet’s Q2 2026 results across Search, Cloud and capital expenditure, tracing key figures to primary disclosures.',
          'Analyzed earnings quality, operating profitability and cash flow to assess the relationship between AI investment and financial returns.',
          'Benchmarked AI search products and extended the research framework to financial information search.'
        ]
      },
      {
        company: 'Meituan',
        role: 'Business Analysis / Strategy Consulting Intern',
        date: 'Jul – Sep 2025',
        description: 'Data-driven subsidy budgeting and performance monitoring across more than 30 cities.',
        points: [
          'Analyzed orders, GMV, subsidy spending and ROI with SQL and Python.',
          'Built an ROI monitoring and anomaly-detection framework to flag subsidy spending that deviated from GMV-growth benchmarks.',
          'Automated SQL analysis pipelines and dashboards, improving daily and weekly reporting efficiency by approximately 30%.'
        ]
      },
      {
        company: 'Guolian Minsheng Securities',
        role: 'Equity Research Intern',
        date: 'Jun – Aug 2024',
        description: 'Fundamental research into electronics and technology companies.',
        points: [
          'Compiled more than 5,000 financial and operating data points from Wind, Bloomberg, filings and annual reports.',
          'Contributed to company notes and weekly industry reports, examining profitability, cash flow, capital structure, liquidity and credit risk.',
          'Applied DCF, P/E, DDM and CAPM methods to support target-price estimates, while tracking macroeconomic, rate and sentiment events.'
        ]
      }
    ],
    education: [
      {
        institution: 'École Polytechnique & HEC Paris',
        degree: 'Double Degree in Data & Finance',
        date: 'Sep 2026 – Jul 2028 · Expected',
        description: 'MSc&T at École Polytechnique + Master in International Finance at HEC Paris.',
        detail: 'Statistics, Probability, Machine Learning, Deep Learning and Optimization; second year at HEC Paris.'
      },
      {
        institution: 'The Chinese University of Hong Kong',
        degree: 'Bachelor in Quantitative Finance',
        date: 'Sep 2022 – Jul 2026',
        description: 'GPA 3.7/4.0 · Top 5%',
        detail: 'External Vice President, New Asia Mainland Student Association — events, sponsorship outreach and cross-campus communication.'
      },
      {
        institution: 'HEC Paris',
        degree: 'Exchange programme',
        date: 'Sep 2024 – Jan 2025',
        description: 'International exchange during undergraduate study at CUHK.'
      }
    ],
    skills: [
      { label: 'Code & data', items: ['Python', 'SQL', 'R', 'Excel', 'pandas', 'NumPy'] },
      { label: 'Models & methods', items: ['statsmodels', 'arch', 'scikit-learn', 'LightGBM', 'ARIMA / GARCH', 'Factor backtesting'] },
      { label: 'Finance & research', items: ['DCF & comparables', 'Credit analysis', 'Earnings-quality analysis', 'Macro & rates', 'Bloomberg BMC', 'Wind', 'CEIC', 'Tableau'] }
    ],
    honors: [
      'CUHK Dean’s List — 2023–2024',
      'CUHK Head’s List (Merit) — 2022–2023',
      'Novo Nordisk Valuation & Credit — Grade A; FCFF DCF, CAPM WACC, peer comparisons and scenario credit analysis'
    ],
    languages: ['Mandarin · Native', 'English · Fluent / IELTS 7.5', 'Cantonese · Fluent', 'French · Beginner'],
    offDutyTitle: 'A little beyond the numbers.',
    offDutyText: 'Away from financial models, I enjoy scuba diving, badminton, hiking and photography. I hold an Advanced Open Water diving qualification and like finding new perspectives through a camera.',
    gallery: [
      { src: 'assets/yihan-museum.jpg', alt: 'Yihan standing in sunlight beside a tall museum window', caption: 'Light & stillness' },
      { src: 'assets/yihan-harbour.jpg', alt: 'Yihan sitting beside the water with a city skyline in the distance', caption: 'By the water' },
      { src: 'assets/yihan-venice.jpg', alt: 'Yihan enjoying the sunshine beside the Venetian lagoon', caption: 'A moment in the sun' },
      { src: 'assets/yihan-stone.jpg', alt: 'Yihan sitting beside an old stone building', caption: 'Another place, another story' }
    ],
    github: 'https://github.com/zhangyihan226-gif'
  }
};
