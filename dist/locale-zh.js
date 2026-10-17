window.I18N = window.I18N || {};
window.I18N.zh = {
  profiles: {
    yaoli: {
      firstName: 'Yaoli', lastName: 'Ma', fullName: 'Yaoli Ma',
      email: 'yaoli33ma@gmail.com', accent: '#a8c7ff',
      discipline: '机器人与机器学习', location: '德国，慕尼黑',
      role: '理学硕士在读 · 机器人、认知与智能',
      bio: '我研究机器人如何感知和理解物理世界。在慕尼黑工业大学，我将机器学习、气体传感与智能系统结合起来，探索更可靠的机器人感知。',
      portrait: 'assets/yaoli-architecture.jpg',
      portraitAlt: 'Yaoli 在教堂内仰望建筑', imagePosition: '50% 65%',
      focus: ['机器人感知', '智能传感', '领域自适应'],
      stats: [
        { value: 'TUM', label: '慕尼黑工业大学' },
        { value: 'M.Sc.', label: '机器人、认知与智能' },
        { value: 'ROS 2', label: '机器人传感与仿真' }
      ],
      projects: [
        {
          number: '01', title: '让机器人拥有嗅觉', category: '机器学习 · 本科毕业论文', date: '2026年3月—10月',
          description: '用领域自适应应对气体传感器随时间变化的响应，研究学习到的特征表示如何在传感器漂移下保持有效。',
          tags: ['PyTorch', '领域自适应', '电子鼻'],
          details: [
            '实现结合潜在空间类别中心对齐的领域对抗学习方法，用于无监督气体传感器漂移补偿。',
            '在自行采集的电子鼻数据和公开基准数据上开展评估，覆盖不同目标域数据可用条件下的短期、中期和长期漂移。',
            '分析伪标签可靠性、对齐损失权重和多随机种子预测平均，以评估模型的稳健性。'
          ],
          visual: 'olfaction', result: '慕尼黑机器人与机器智能研究所 · 智能系统感知教席'
        },
        {
          number: '02', title: '追踪看不见的气味', category: '机器人 · 气体传感与建图', date: '2026年4月—7月',
          description: '从真实的金属氧化物传感器到机器人仿真，探索气体传感、环境建图与气源定位的完整流程。',
          tags: ['ROS 2', 'Raspberry Pi', 'PCA / SVM', '气体建图'],
          details: [
            '基于 Raspberry Pi 和 ROS 2 搭建金属氧化物（MOX）传感器数据采集系统，运用预处理、PCA 和 SVM 区分乙醇与丙酮。',
            '模拟风驱动气体扩散和传感器响应延迟，并集成 ROS 2 与 RViz 可视化。',
            '在仿真中开发航点控制与采样，应用 Kernel DM+V 和高斯羽流建图，并探索之字形搜索与最大似然气源定位。'
          ],
          visual: 'mapping', result: '气体传感 → 环境建图 → 气源定位'
        }
      ],
      experience: [
        {
          company: '某不愿透漏名字的晶圆厂', role: '半导体与传感器实习', date: '2025年8月—10月',
          description: '参与半导体制造、传感器研发和器件设计的实践工作。',
          points: [
            '协助开展 MOSFET 实验与器件验证，接触半导体制造工艺和设备。',
            '研究光电和 MEMS 传感器制造工艺，以及工艺变化对测量稳定性的影响。',
            '在导师指导下使用 Sentaurus TCAD 共同设计 TVS 二极管，通过回归模型预测性能并分析工艺敏感性。器件通过静态与动态验证。'
          ]
        }
      ],
      education: [
        {
          institution: '慕尼黑工业大学', degree: '机器人、认知与智能 · 理学硕士', date: '2026年10月—至今',
          description: '攻读机器人、认知与智能系统方向研究生学位。'
        },
        {
          institution: '慕尼黑工业大学', degree: '电气与计算机工程 · 理学学士', date: '2023年9月—2026年10月',
          description: '平均成绩 2.2 · 前15%',
          detail: '核心课程：机器学习、机器人控制、人工智能、半导体与传感器技术。'
        },
        {
          institution: 'Schloss Schule Kirchberg（基希贝格城堡学校）', degree: '巴登-符腾堡州 Abitur 高中毕业资格', date: '2020年9月—2023年6月',
          description: '于2023年完成巴登-符腾堡州 Abitur 考试。', detail: '主修科目：数学、物理与音乐。'
        }
      ],
      skills: [
        { label: '编程与机器学习', items: ['Python', 'PyTorch', 'C / C++', 'MATLAB'] },
        { label: '机器人与硬件', items: ['ROS 2', 'Arduino IDE'] },
        { label: '器件仿真', items: ['Sentaurus TCAD', 'LTspice'] }
      ],
      honors: [
        '2022年 Tag der Mathematik 数学竞赛 — 个人赛第4名，团体赛第3名',
        '2022年 Informatik-Biber 信息学竞赛 — 第3名'
      ],
      languages: ['普通话 · 母语', '吴语 · 母语', '英语 · B2', '德语 · Abitur', '西班牙语 · A2'],
      offDutyTitle: '实验室之外。',
      offDutyText: '在 Schloss Schule Kirchberg，我以数学、物理与音乐开启了这段求学之旅。这些照片记录了项目之外的我。',
      gallery: [
        { src: 'assets/yaoli-barcelona.jpg', alt: 'Yaoli 俯瞰巴塞罗那与大海', caption: '换一个角度' },
        { src: 'assets/yaoli-architecture.jpg', alt: 'Yaoli 站在教堂高耸的立柱与彩色玻璃下', caption: '抬头之间' },
        { src: 'assets/couple.jpg', alt: 'Yaoli 与 Yihan 的合照及其倒影', caption: '一起更美好' }
      ],
      github: null
    },
    yihan: {
      firstName: 'Yihan', lastName: 'Zhang', fullName: 'Yihan Zhang',
      email: 'zhangyihan226@gmail.com', accent: '#c4afff',
      discipline: '量化金融与数据科学', location: '法国，巴黎',
      role: 'X-HEC 数据与金融双学位在读',
      bio: '我通过数据、模型和严谨研究探索金融市场。我的研究涉及股票因子、波动率预测与机器学习，也积累了行业研究和商业战略方面的实践经验。',
      portrait: 'assets/yihan-coast.jpg', portraitAlt: 'Yihan 在海边悬崖旁微笑', imagePosition: '55% 57%',
      focus: ['量化研究', '金融市场', '机器学习'],
      stats: [
        { value: 'X-HEC', label: '数据与金融双学位' },
        { value: '前5%', label: '香港中文大学本科排名' },
        { value: '3.7 / 4.0', label: '本科平均绩点' }
      ],
      projects: [
        {
          number: '01', title: '什么能经得起回测？', category: '股票研究 · 因子投资', date: '研究样本：2001—2020年',
          description: '深入研究动量、反转和低波动因子，辨别市场敞口、换手率与交易成本对表面收益的影响。',
          tags: ['Python', 'pandas', 'statsmodels', '因子研究'],
          details: [
            '基于标普500历史时点成分股回测三类因子，按月进行五分位分组，采用规则化价格清洗，并明确处理幸存者偏差。',
            '发现未经调整的多空收益主要由市场贝塔主导，其中低波动策略的贝塔为 −1.1。',
            '事前滚动贝塔对冲将低波动策略的夏普比率提升至 0.62（t = 2.6）。反转策略每月80%的换手率，使其在交易成本超过20个基点时无法盈利。'
          ],
          visual: 'factors', result: '滚动贝塔对冲后，低波动策略夏普比率为 0.62'
        },
        {
          number: '02', title: '更聪明的模型，能找到优势吗？', category: '机器学习 · 股票选择', date: '样本外评估：2008—2020年',
          description: '在相同特征、训练规则和实际交易约束下，比较 LightGBM 与线性因子模型。',
          tags: ['LightGBM', 'scikit-learn', 'SHAP', '滚动前向训练'],
          details: [
            '使用17个价量特征预测次月收益排序，采用滚动前向训练、截面排名归一化，并依据验证集信息系数提前停止训练。',
            '在相同特征下，LightGBM 优于岭回归（信息系数差异的 t 值为 2.0）；SHAP 揭示了非线性的动量与反转效应。',
            '在进行贝塔对冲并计入交易成本后，模型相较线性三因子模型没有显著优势。'
          ],
          visual: 'ml', result: '对冲并计入成本后，相较线性三因子模型没有显著优势'
        },
        {
          number: '03', title: '当风险改变形态', category: '时间序列 · 波动率与风险', date: '量化研究项目',
          description: '预测标普500波动率，并检验风险模型在市场状态转变时是否仍然可靠。',
          tags: ['GARCH', '风险价值（VaR）', 'arch', 'statsmodels'],
          details: [
            '使用采用 Student-t 分布的 GARCH、GJR-GARCH 和 EGARCH 模型，并通过滚动重新估计预测日度波动率。',
            '利用 QLIKE 损失与 Diebold-Mariano 检验，将预测结果与 EWMA 和历史波动率进行比较。',
            '通过 Kupiec 与 Christoffersen 检验回测95%和99%风险价值。高斯模型的99%风险价值突破频率约为预期的两倍，且集中发生在市场状态突然转变期间。'
          ],
          visual: 'volatility', result: '高斯模型的99%风险价值突破频率约为预期的两倍'
        }
      ],
      experience: [
        {
          company: '百度', role: 'AI 搜索战略与行业研究实习生', date: '2026年6月—8月',
          description: '研究 AI 投资、企业经营表现与搜索行业的变化。',
          points: [
            '完成一份18页的 Alphabet 2026年第二季度业绩研究，覆盖搜索、云业务与资本支出，并将关键数据追溯至一手披露。',
            '分析盈利质量、经营盈利能力和现金流，评估 AI 投资与财务回报之间的关系。',
            '对标 AI 搜索产品，并将研究框架延伸至金融信息搜索。'
          ]
        },
        {
          company: '美团', role: '商业分析／战略咨询实习生', date: '2025年7月—9月',
          description: '以数据支持30多个城市的补贴预算与绩效监测。',
          points: [
            '使用 SQL 和 Python 分析订单、商品交易总额（GMV）、补贴支出与投资回报率。',
            '搭建投资回报率监测与异常检测框架，识别偏离 GMV 增长基准的补贴支出。',
            '自动化 SQL 分析流程与仪表盘，使日常及每周报告效率提升约30%。'
          ]
        },
        {
          company: '国联民生证券', role: '股票研究实习生', date: '2024年6月—8月',
          description: '开展电子与科技公司的基本面研究。',
          points: [
            '从 Wind、Bloomberg、公司公告与年报中整理5,000多项财务及经营数据。',
            '参与公司研究和行业周报，分析盈利能力、现金流、资本结构、流动性与信用风险。',
            '运用 DCF、市盈率、DDM 和 CAPM 方法支持目标价估算，同时跟踪宏观经济、利率与市场情绪事件。'
          ]
        }
      ],
      education: [
        {
          institution: '巴黎综合理工学院与巴黎高等商学院', degree: '数据与金融双学位', date: '2026年9月—2028年7月（预计）',
          description: '巴黎综合理工学院 MSc&T + 巴黎高等商学院国际金融硕士。',
          detail: '统计学、概率论、机器学习、深度学习与优化；第二年在巴黎高等商学院学习。'
        },
        {
          institution: '香港中文大学', degree: '计量金融学士', date: '2022年9月—2026年7月',
          description: '平均绩点 3.7/4.0 · 前5%',
          detail: '新亚内地生联会外务副会长，负责活动、赞助拓展与跨校沟通。'
        },
        {
          institution: '巴黎高等商学院', degree: '交换项目', date: '2024年9月—2025年1月',
          description: '香港中文大学本科期间的国际交换学习。'
        }
      ],
      educationAchievement: {"date":"2022","title":"江苏省高考","description":"江苏省 2022 年高考：前千分之一"},
      skills: [
        { label: '编程与数据', items: ['Python', 'SQL', 'R', 'Excel', 'pandas', 'NumPy'] },
        { label: '模型与方法', items: ['statsmodels', 'arch', 'scikit-learn', 'LightGBM', 'ARIMA / GARCH', '因子回测'] },
        { label: '金融与研究', items: ['现金流折现与可比公司估值', '信用分析', '盈利质量分析', '宏观与利率', 'Bloomberg BMC', 'Wind', 'CEIC', 'Tableau'] }
      ],
      honors: [
        '香港中文大学院长荣誉录 — 2023—2024学年',
        '香港中文大学书院院长嘉许名单（优良成绩）— 2022—2023学年',
        '诺和诺德估值与信用分析 — A 等级；企业自由现金流折现、基于 CAPM 的加权平均资本成本、同业比较与情景信用分析'
      ],
      languages: ['普通话 · 母语', '吴语 · 母语', '英语 · 流利／雅思 7.5', '粤语 · 流利', '法语 · 初学'],
      offDutyTitle: '数字之外，还有生活。',
      offDutyText: '离开金融模型，我喜欢水肺潜水、羽毛球、徒步与摄影。我持有进阶开放水域潜水资格，也喜欢透过镜头发现新的视角。',
      gallery: [
        { src: 'assets/yihan-museum.jpg', alt: 'Yihan 站在博物馆高窗旁的阳光中', caption: '光与静谧' },
        { src: 'assets/yihan-harbour.jpg', alt: 'Yihan 坐在水边，远处是城市天际线', caption: '水岸时光' },
        { src: 'assets/yihan-venice.jpg', alt: 'Yihan 在威尼斯潟湖边享受阳光', caption: '阳光中的片刻' },
        { src: 'assets/yihan-stone.jpg', alt: 'Yihan 坐在古老的石砌建筑旁', caption: '另一处风景，另一段故事' }
      ],
      github: 'https://github.com/zhangyihan226-gif'
    }
  },
  ui: {
    'Created by our lovely GPT-6 Astra Ultra': '作者：我们可爱的 GPT-6 Astra Ultra',
    'Choose language': '选择语言',
    'Language': '语言',
    'English': '英语',
    'Chinese': '中文',
    'German': '德语',
    'French': '法语',
    'Yaoli and Yihan home': 'Yaoli 与 Yihan 的首页',
    'Page sections': '页面章节',
    'Research': '研究',
    'Journey': '经历',
    'Off duty': '生活',
    'Contact': '联系',
    'Meet Yihan': '认识 Yihan',
    'Meet Yaoli': '认识 Yaoli',
    'Meet': '认识',
    'TWO PERSPECTIVES. ONE SHARED SPACE.': '两种视角，同一片天地。',
    'Meet us': '认识我们',
    'Pause ambient animation': '暂停背景动画',
    'Enable ambient animation': '启用背景动画',
    'Motion on': '动态效果：开',
    'Motion off': '动态效果：关',
    'STAY CURIOUS. KEEP EXPLORING.': '保持好奇，继续探索。',
    'A LITTLE OF US. A WORLD TO EXPLORE.': '关于我们，关于值得探索的世界。',
    'Two minds.': '两种视角。',
    'One': '同一',
    '.': '。',
    'orbit': '轨道',
    'One orbit.': '同一轨道。',
    'Two minds. One orbit.': '两种视角，同一轨道。',
    'From intelligent machines to financial markets.': '从智能机器到金融市场。',
    'Different perspectives. A shared curiosity.': '视角不同，好奇心相通。',
    'From intelligent machines to financial markets. Different perspectives. A shared curiosity.': '从智能机器到金融市场。视角不同，好奇心相通。',
    'You want to learn about': '你想了解谁？',
    'ROBOTICS · PERCEPTION · MACHINE LEARNING': '机器人 · 感知 · 机器学习',
    'QUANTITATIVE FINANCE · DATA SCIENCE': '量化金融 · 数据科学',
    'Yaoli and Yihan together, reflected in the water': 'Yaoli 与 Yihan 的合照及水中倒影',
    'A SHARED HORIZON': '共同的远方',
    '01 / TOGETHER': '01 / 在一起',
    'MUNICH ↔ PARIS': '慕尼黑 ↔ 巴黎',
    'SOURCE DOMAIN': '源域',
    'TARGET DOMAIN': '目标域',
    'ALIGNMENT': '对齐',
    'ROBOT PATH': '机器人路径',
    'SOURCE': '气源',
    'SENSE → MAP → LOCALIZE': '感知 → 建图 → 定位',
    'FACTOR SIGNALS / BETA / COSTS': '因子信号 / 贝塔 / 成本',
    '17 FEATURES': '17个特征',
    'NONLINEAR SIGNALS': '非线性信号',
    'UNCERTAINTY, MODELLED.': '为不确定性建模。',
    'VOLATILITY / TAIL RISK / REGIME SHIFTS': '波动率 / 尾部风险 / 状态转变',
    'CONCEPT VISUALIZATION': '概念示意',
    'Inside the research': '研究详情',
    'EXPERIENCE': '实践经历',
    'EDUCATION': '教育背景',
    'Enlarge photo:': '放大照片：',
    'Enlarge photo': '放大照片',
    'Explore my work': '探索我的研究',
    'Get in touch': '联系我',
    'A WORK IN PROGRESS. ALWAYS.': '始终在成长。',
    'THE PERSON BEHIND THE WORK': '研究之外的我',
    'SELECTED RESEARCH': '精选研究',
    '/ SELECTED RESEARCH': '/ 精选研究',
    '01 / SELECTED RESEARCH': '01 / 精选研究',
    'Curiosity, in practice.': '让好奇心成为实践。',
    'Teaching machines to make sense of the physical world.': '让机器理解物理世界。',
    'Looking for signal. Questioning the assumptions.': '寻找信号，检验假设。',
    'Explore my GitHub': '查看我的 GitHub',
    'THE JOURNEY': '成长历程',
    '/ THE JOURNEY': '/ 成长历程',
    '02 / THE JOURNEY': '02 / 成长历程',
    'Always moving forward.': '始终向前。',
    'The places, people, and problems that shape my perspective.': '遇见的地方、人和问题，塑造了我的视角。',
    'LEARNING BY DOING': '在实践中学习',
    'Experience': '实践经历',
    'BUILDING FOUNDATIONS': '打好基础',
    'Education': '教育背景',
    'TOOLS & PERSPECTIVES': '工具与视角',
    '/ TOOLS & PERSPECTIVES': '/ 工具与视角',
    '03 / TOOLS & PERSPECTIVES': '03 / 工具与视角',
    'What I work with.': '我的工具箱。',
    'A toolkit that keeps growing.': '持续扩展的知识与技能。',
    'LANGUAGES': '语言',
    'RECOGNITION': '荣誉与认可',
    'BEYOND THE DESK': '书桌之外',
    '/ BEYOND THE DESK': '/ 书桌之外',
    '04 / BEYOND THE DESK': '04 / 书桌之外',
    'GOOD CONVERSATIONS START SOMEWHERE.': '每一次交流，都有一个开始。',
    'Let’s connect': '聊一聊',
    'Ideas, research, or just a hello.': '交流想法、讨论研究，或简单打个招呼。',
    'Copy email': '复制邮箱',
    'Print profile': '打印个人主页',
    'ONE MORE PERSPECTIVE': '另一种视角',
    'Enter Yihan’s world': '走进 Yihan 的世界',
    'Enter Yaoli’s world': '走进 Yaoli 的世界',
    'Photo viewer': '照片查看器',
    'Close photo viewer': '关闭照片查看器',
    'Previous photo': '上一张照片',
    'Next photo': '下一张照片',
    'Email copied. Say hello when you’re ready.': '邮箱已复制，随时欢迎联系。',
    'You can copy the address above or click it to open your email app.': '你可以复制上方邮箱地址，或点击它打开邮件应用。',
    'of': '/',
    'Skip to content': '跳转到正文',
    'Yaoli Ma & Yihan Zhang — Two minds. One orbit.': 'Yaoli Ma 与 Yihan Zhang — 两种视角，同一轨道。',
    'Yaoli Ma — Robotics, Perception & Machine Learning': 'Yaoli Ma — 机器人、感知与机器学习',
    'Yihan Zhang — Quantitative Finance & Data Science': 'Yihan Zhang — 量化金融与数据科学',
    'A shared space for two curious minds. Explore robotics and machine learning with Yaoli Ma, and quantitative finance and data science with Yihan Zhang.': '属于两颗好奇心的共同空间。与 Yaoli Ma 探索机器人和机器学习，与 Yihan Zhang 探索量化金融和数据科学。',
    'Yaoli Ma, M.Sc. student at the Technical University of Munich. Exploring robot olfaction, sensor drift compensation, and machine learning.': 'Yaoli Ma，慕尼黑工业大学理学硕士在读。研究机器人嗅觉、传感器漂移补偿与机器学习。',
    'Yihan Zhang, X-HEC Data & Finance student. Exploring quantitative research, machine learning, equity factors, and financial risk.': 'Yihan Zhang，X-HEC 数据与金融双学位在读。探索量化研究、机器学习、股票因子与金融风险。',
    'Robotics, machine learning, quantitative finance, and a shared curiosity.': '机器人、机器学习、量化金融，以及共同的好奇心。',
    'Please enable JavaScript to explore our personal websites.': '请启用 JavaScript，以浏览我们的个人网站。',
    'Email Yaoli': '给 Yaoli 发邮件',
    'Email Yihan': '给 Yihan 发邮件'
  }
};
Object.values(window.I18N.zh.profiles).forEach(function (profile) {
  profile.gallery.forEach(function (photo) {
    window.I18N.zh.ui['Enlarge photo: ' + photo.alt] = '放大照片：' + photo.alt;
  });
});

