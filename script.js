/* =========================================================
 * Kai Sheng — personal site
 * All bilingual content lives in `content` below. Edit text
 * here; index.html only holds layout and data-i18n hooks.
 * ========================================================= */

const content = {
  en: {
    pageTitle: "Kai Sheng · Software Engineer",
    brand: "Kai Sheng",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      beyond: "Beyond Code",
      contact: "Contact",
    },
    hero: {
      badge: "Seeking Summer 2027 Internships",
      hello: "Hi, I'm Kai Sheng",
      altName: "盛开",
      tagline:
        "M.S. CSE student at the <strong>University of Michigan</strong>. I build <strong>LLM agents</strong>, <strong>retrieval systems</strong>, and the <strong>backend services</strong> that run them.",
      location: "Ann Arbor, MI",
      school: "University of Michigan · M.S. CSE, Dec 2027",
      photoAlt: "Kai Sheng at Michigan Stadium commencement",
    },
    cta: { resume: "Resume (PDF)", email: "Email me" },
    resumeFile: "assets/Kai_Sheng_Resume_EN.pdf",
    stats: [
      { num: "~2d → ~1d", label: "Requirement-handoff cycle cut by an LLM agent at Meituan" },
      { num: "1,596 → 445 ms", label: "End-to-end latency after KV-cache multi-agent redesign" },
      { num: "627M", label: "Relationships in the GLKB biomedical knowledge graph" },
      { num: "~12% → ~6%", label: "Out-of-spec agent changes after adding human-in-the-loop gates" },
    ],
    about: [
      "I'm a Master's student in Computer Science & Engineering at the University of Michigan (expected Dec 2027), where I also earned my B.S. in Computer Science.",
      "My work sits where large language models meet production systems. At <b>Meituan</b> I built an enterprise-IM agent that automates the data-development pipeline end-to-end — from a PM's vague idea to reviewed ETL code. At <b>UMich</b> I engineer the retrieval, graph and serving stack behind <a href=\"https://glkb.org/\" target=\"_blank\" rel=\"noopener\">GLKB</a>, a biomedical knowledge graph built from 33M PubMed articles. On the research side, I've been exploring <b>cross-modal KV-cache transfer</b> — letting a text-only LLM answer questions about documents it never sees.",
      "<span class=\"muted\">I'm currently looking for a <b>Summer 2027 internship</b> in <b>software engineering</b>, <b>AI agents</b>, <b>machine learning engineering</b>, or <b>backend</b> development. Feel free to reach out!</span>",
    ],
    experience: [
      {
        org: "Meituan",
        role: "Software Development Engineer Intern · Data Platform",
        date: "May 2026 – Aug 2026",
        place: "Beijing, China",
        bullets: [
          "<b>End-to-end data-dev agent.</b> Built an enterprise-IM agent for the food-delivery flow team that automates the full pipeline — PM requirement intake → metric-definition alignment → validation → ETL development → testing → review.",
          "<b>Less PM ↔ dev back-and-forth.</b> Multi-turn elicitation turns a vague idea into scope, background and metric dimensions, then auto-generates the requirement doc, files a multica issue and spins up a cross-functional group — cutting the handoff cycle from ~2 days to ~1 day.",
          "<b>Developers review, not write.</b> The agent lands code changes and new-table DDLs on the XT platform, runs platform tests and verifies action SQL end-to-end.",
          "<b>Hybrid retrieval + eval.</b> Fused BM25 and HNSW vector search with a resident cross-encoder reranker; an LLM-driven eval pipeline hit 100% routing accuracy on 189 sampled questions and found 0 conflicts across 2,300 segments.",
          "<b>Metric verification.</b> Auto-traverses Hive schemas, lineage and upstream/downstream dependencies to check that a metric is realizable and matches the PM-signed definition.",
          "<b>Guard-railed orchestration.</b> Three-phase relay (orchestrator → plan-and-execute + ReAct leader → kb-search) with human-in-the-loop gates and a red-line rule; out-of-spec changes dropped from ~12% to ~6%.",
        ],
        tags: ["LLM Agents", "LangGraph", "ReAct", "BM25 + HNSW", "Cross-encoder", "Hive", "ETL"],
      },
      {
        org: "University of Michigan — GLKB",
        link: "https://glkb.org/",
        role: "Research Assistant · Software Engineer, Genomic Literature Knowledge Base",
        date: "Sep 2025 – Present",
        place: "Ann Arbor, MI",
        bullets: [
          "<b>Agent-facing APIs.</b> Designed RESTful tool APIs (entity retrieval, literature search, relation/ontology queries, subgraph extraction) over a graph of 33M articles, 263M terms and 627M relationships, powering citation-backed GraphRAG Q&A.",
          "<b>Multi-layer semantic retrieval.</b> ANN recall over 100M sentence embeddings with Faiss, then Neo4j graph traversal to join entity relations and context, fused as LLM context.",
          "<b>Streaming chat.</b> Built an SSE streaming LLM interface with inline literature citations; KV-cache-based multi-agent interaction cut latency from 1,596 ms to 445 ms.",
          "<b>Graph database layer.</b> Neo4j layer serving 55M nodes / 627M relationships with a Router → Schema → Service → Neo4jManager architecture and async I/O.",
          "<b>AWS deployment.</b> Agent inference resident on EC2; Lambda as the serverless entry point handling auth and rate limiting against PostgreSQL, autoscaling to absorb burst traffic.",
        ],
        tags: ["GraphRAG", "Neo4j", "Faiss", "FastAPI", "SSE", "AWS Lambda", "EC2", "PostgreSQL"],
      },
      {
        org: "Haiyu (Shanghai) Medical Technology",
        role: "Back-end Developer Intern",
        date: "May 2024 – Aug 2024",
        place: "Shanghai, China",
        bullets: [
          "<b>Supplier management platform.</b> Developed a supplier-information management platform for hospital administrators; wrote and optimized Oracle SQL queries to retrieve business data efficiently and back the UI.",
          "<b>Search & pagination.</b> Implemented core modules with multi-field search/filtering and paginated queries over supplier records, improving retrieval efficiency and the browsing experience.",
          "<b>Data maintenance & status management.</b> Built SMS delivery-status updates, record editing and supplier creation/deletion, improving admin usability and long-term maintainability.",
        ],
        tags: ["Java", "Spring MVC", "Maven", "Oracle", "SQL", "Vue"],
      },
    ],
    projects: [
      {
        title: "Multimodal KV-Cache Transfer",
        sub: "Research Assistant, University of Michigan · Jan – Jun 2026",
        wide: true,
        desc: "Can a text-only LLM answer questions about a document image it never sees? This project lets Qwen2.5-14B read the internal representations of the vision model DeepSeek-OCR2 through its KV cache.",
        bullets: [
          "<b>Dual-projector architecture.</b> Converts the vision model's per-layer KV cache into a visual prefix Qwen can attend to, while fusing both models' cached representations of the question text.",
          "<b>Training & eval pipeline.</b> Built on PyTorch, Hugging Face Transformers and multi-GPU SLURM, with support for variable-length visual tokens, rotary position embeddings and layer-wise cache injection into a frozen LLM.",
          "<b>Systematic ablations.</b> Added OCR pretraining plus image-swap, visual-prefix-removal and text-fusion-removal ablations to measure how much the receiver actually relies on visual information.",
          "<b>Shared-backbone projector.</b> Shrank the vision projection module from 630M to 112M parameters while improving image reliance and DocVQA ANLS.",
        ],
        metrics: [
          { v: "630M → 112M", k: "projector parameters" },
          { v: "14B", k: "frozen text-only receiver" },
          { v: "DocVQA", k: "evaluated with ANLS" },
        ],
        tags: ["PyTorch", "Hugging Face", "Qwen2.5-14B", "DeepSeek-OCR2", "KV Cache", "RoPE", "SLURM"],
      },
      {
        title: "Distributed Search Engine",
        sub: "Two-stage retrieval + Learning-to-Rank · Aug – Dec 2025",
        desc: "End-to-end document search engine built from scratch: Hadoop MapReduce indexing over a 200K-document corpus, BERT-generated query expansion, multi-signal features (TF-IDF, BM25, bi-/cross-encoder, PageRank/HITS), and an L2R model re-ranking the top-100. React frontend with a Flask REST API.",
        metrics: [
          { v: "0.51", k: "NDCG@10" },
          { v: "0.36", k: "MAP@10" },
          { v: "13,555", k: "labeled samples" },
        ],
        tags: ["Python", "Hadoop", "BERT", "Learning-to-Rank", "React", "Flask"],
      },
      {
        title: "GLKB — GraphRAG Q&A",
        link: "https://glkb.org/",
        sub: "Biomedical knowledge graph · Sep 2025 – Present",
        desc: "Citation-backed question answering over 33M PubMed articles. Vector recall with Faiss feeds Neo4j subgraph expansion; results stream to the user over SSE with inline references, served by an EC2 + Lambda split architecture.",
        metrics: [
          { v: "100M", k: "sentence embeddings" },
          { v: "55M", k: "graph nodes" },
          { v: "445 ms", k: "end-to-end latency" },
        ],
        tags: ["Neo4j", "Faiss", "LLM", "SSE", "AWS"],
      },
    ],
    moreProjectsTitle: "More projects",
    moreProjects: [
      {
        title: "Thread Library",
        sub: "Intro to Operating Systems · Jan – Mar 2026",
        desc: "Completed the core of a thread library in C++ on top of a simulated CPU and interrupt layer: thread create, join and yield with getcontext/makecontext/swapcontext context switching, a FIFO ready queue, Mesa-style mutexes and condition variables, atomicity via interrupt disable/enable, timer-interrupt preemption, and suspending idle CPUs.",
        tags: ["C++", "Linux", "Concurrency", "Operating Systems"],
      },
      {
        title: "Deep Learning Image Classifier",
        sub: "Mar – May 2025",
        desc: "CNN built from scratch in PyTorch to tell Golden Retrievers from Collies, with custom architecture, training loop, early stopping and checkpointing. Pretrained on eight auxiliary breeds for transfer learning, compared freezing strategies, and used stratified sampling and augmentation against overfitting.",
        metric: "AUROC 90.12%",
        tags: ["PyTorch", "CNN", "Transfer Learning", "Pandas"],
      },
      {
        title: "Instagram Clone",
        sub: "Jan – Mar 2025",
        desc: "Rebuilt Instagram's core features: secure sign-up/login and account management, creating, editing and deleting users, posts, comments and likes, server-side dynamic pages, a responsive UI and database integration.",
        tags: ["Python", "Flask", "React", "JavaScript", "HTML", "CSS"],
      },
      {
        title: "Stock Market Simulation",
        sub: "Sep – Oct 2024",
        desc: "Simulated a market of virtual buyers and sellers. Priority queues rank offers for price matching; each round reports per-stock median prices, the day closes with trade and earnings summaries, and the run ends by finding each stock's best buy/sell times.",
        tags: ["C++", "Priority Queue", "Linux"],
      },
    ],
    education: [
      {
        deg: "M.S. Computer Science and Engineering",
        school: "University of Michigan – Ann Arbor · College of Engineering",
        date: "Sep 2026 – Dec 2027",
        note: "In progress",
      },
      {
        deg: "B.S. Computer Science",
        school: "University of Michigan – Ann Arbor · College of LSA",
        date: "Sep 2022 – May 2026",
        note: "Graduated",
      },
    ],
    skills: [
      { k: "Languages", v: ["Python", "SQL", "JavaScript", "Java", "C++", "R", "HTML/CSS"] },
      { k: "AI / ML", v: ["LangChain", "LangGraph", "Hugging Face Transformers", "PyTorch", "scikit-learn", "Pandas", "NumPy"] },
      { k: "Frameworks", v: ["Flask", "FastAPI", "Spring MVC", "React", "Vue", "Spark", "Hadoop"] },
      { k: "Databases", v: ["Neo4j", "PostgreSQL", "MySQL", "MongoDB", "Hive", "Oracle"] },
      { k: "Cloud & Tools", v: ["AWS Lambda", "AWS EC2", "AWS Amplify", "Linux", "SLURM", "Maven"] },
    ],
    hobbies: [
      {
        icon: "baseball",
        title: "Baseball",
        desc: "Baseball has been a big part of my life. I played on my school's varsity team through both middle school and high school.",
        badges: ["Varsity team · middle & high school", "China National Second-Class Athlete"],
      },
    ],
    contact: {
      title: "Let's talk about Summer 2027",
      body: "I'm open to SWE, AI Agent, MLE and backend internship roles. The fastest way to reach me is email.",
    },
    footer: "Built with plain HTML & JavaScript",
  },

  zh: {
    pageTitle: "盛开 · 软件工程师",
    brand: "盛开",
    nav: {
      about: "关于我",
      experience: "经历",
      projects: "项目",
      education: "教育",
      skills: "技能",
      beyond: "课外生活",
      contact: "联系",
    },
    hero: {
      badge: "正在寻找 2027 年暑期实习",
      hello: "你好，我是盛开",
      altName: "Kai Sheng",
      tagline:
        "<strong>密歇根大学</strong>计算机科学与工程硕士在读，专注于 <strong>LLM 智能体</strong>、<strong>检索系统</strong>以及支撑它们的<strong>后端服务</strong>。",
      location: "美国 密歇根州 安娜堡",
      school: "密歇根大学 · 计算机科学与工程硕士（2027 年 12 月毕业）",
      photoAlt: "盛开在密歇根体育场毕业典礼",
    },
    cta: { resume: "下载简历（PDF）", email: "发送邮件" },
    resumeFile: "assets/Kai_Sheng_Resume_ZH.pdf",
    stats: [
      { num: "约 2 天 → 约 1 天", label: "美团智能体将需求交接周期缩短一半" },
      { num: "1,596 → 445 ms", label: "引入 KV-cache 多智能体交互后的端到端延迟" },
      { num: "6.27 亿", label: "GLKB 生物医学知识图谱中的关系数" },
      { num: "约 12% → 约 6%", label: "引入人机协同校验门后智能体越权改动比例" },
    ],
    about: [
      "我目前在密歇根大学安娜堡分校攻读计算机科学与工程硕士（预计 2027 年 12 月毕业），本科同样毕业于密歇根大学计算机科学专业。",
      "我的工作聚焦在大语言模型与生产系统的结合点。在<b>美团</b>，我打造了一个企业级 IM 智能体，把数据开发全流程自动化——从 PM 的一个模糊想法，一直到可评审的 ETL 代码。在<b>密歇根大学</b>，我负责 <a href=\"https://glkb.org/\" target=\"_blank\" rel=\"noopener\">GLKB</a> 背后的检索、图数据库与服务部署，这是一个基于 3300 万篇 PubMed 文献构建的生物医学知识图谱。在研究方面，我在探索<b>跨模态 KV-Cache 传递</b>——让纯文本大模型无需“看到”文档图片，也能回答关于文档的问题。",
      "<span class=\"muted\">我正在寻找 <b>2027 年暑期实习</b>，方向包括<b>软件开发（SWE）</b>、<b>AI Agent</b>、<b>机器学习工程（MLE）</b>与<b>后端开发</b>，欢迎联系我！</span>",
    ],
    experience: [
      {
        org: "美团（Meituan）",
        role: "软件开发工程师实习生 · 数据平台",
        date: "2026.05 – 2026.08",
        place: "中国 北京",
        bullets: [
          "<b>端到端数据开发智能体。</b>为外卖流量团队打造企业级 IM 智能体，自动化数据开发全流程：PM 需求接入 → 指标定义对齐 → 校验 → ETL 开发 → 测试 → 评审。",
          "<b>降低 PM 与开发沟通成本。</b>通过多轮交互从模糊想法中逐步挖掘需求背景、范围与指标维度，自动生成需求文档、在 multica 创建 issue 并拉起协作群，取代排期会议；需求交接周期从约 2 天缩短至约 1 天。",
          "<b>开发者只需评审代码。</b>智能体将代码改动与新表 DDL 直接落至 XT 平台，运行平台测试并端到端校验 action SQL。",
          "<b>混合检索与评测。</b>融合 BM25 与 HNSW 语义向量召回，再经常驻 cross-encoder 重排；LLM 驱动的评测流水线在 189 道采样题上检索路由匹配率 100%，对 2,300 个段落做 Pairwise 检测，0 对矛盾。",
          "<b>指标定义校验。</b>自动遍历 Hive 表 schema、血缘及上下游依赖，核查指标是否可实现且与 PM 签署定义一致。",
          "<b>带护栏的编排。</b>三阶段接力流水线（编排器 → 规划执行 + ReAct 主导 → kb-search 检索），引入人机协同校验门与红线规则；越权改动从约 12% 降至约 6%。",
        ],
        tags: ["LLM 智能体", "LangGraph", "ReAct", "BM25 + HNSW", "Cross-encoder", "Hive", "ETL"],
      },
      {
        org: "密歇根大学 — GLKB",
        link: "https://glkb.org/",
        role: "科研助理 · 软件工程师，基因组学文献知识库",
        date: "2025.09 – 至今",
        place: "美国 安娜堡",
        bullets: [
          "<b>面向智能体的 API。</b>在覆盖 3300 万篇文献、2.63 亿术语、6.27 亿关系的知识图谱之上，设计并开放 RESTful 工具 API（实体检索、文献检索、关系/本体查询、子图抽取），支撑带引用溯源的 GraphRAG 问答。",
          "<b>多层语义检索。</b>基于 Faiss 对 1 亿条句子向量做 ANN 召回，再经 Neo4j 图遍历连接实体关系与上下文，融合为 LLM 上下文。",
          "<b>流式对话。</b>基于 SSE 开发流式 LLM 对话界面并内嵌文献引用；引入 KV-cache 多智能体交互，端到端延迟从 1,596 ms 降至 445 ms。",
          "<b>图数据库层。</b>设计支撑 5,500 万节点、6.27 亿关系的 Neo4j 数据层，采用 Router → Schema → Service → Neo4jManager 分层架构与 async/await 高并发 I/O。",
          "<b>AWS 部署。</b>Agent 推理常驻 EC2；Lambda 作为无服务器入口，先经 PostgreSQL 校验密钥与限流再转发，按请求量自动扩缩以消化高并发。",
        ],
        tags: ["GraphRAG", "Neo4j", "Faiss", "FastAPI", "SSE", "AWS Lambda", "EC2", "PostgreSQL"],
      },
      {
        org: "海遇（上海）医疗科技有限公司",
        role: "后端开发实习生",
        date: "2024.05 – 2024.08",
        place: "中国 上海",
        bullets: [
          "<b>供应商信息管理平台。</b>为医院管理人员开发供应商信息管理平台；编写并优化 Oracle SQL 查询，高效检索业务数据并支撑前端展示。",
          "<b>搜索与分页。</b>实现平台核心模块，支持供应商信息的多字段搜索/筛选与分页查询，提升检索效率与浏览体验。",
          "<b>数据维护与状态管理。</b>构建供应商数据维护与状态管理功能（如短信发送状态更新、记录编辑、供应商新增/删除），提升管理端易用性与长期可维护性。",
        ],
        tags: ["Java", "Spring MVC", "Maven", "Oracle", "SQL", "Vue"],
      },
    ],
    projects: [
      {
        title: "Multimodal KV-Cache Transfer",
        sub: "密歇根大学 科研助理 · 2026.01 – 2026.06",
        wide: true,
        desc: "探索跨模型、跨模态的 KV-Cache 传递：让纯文本模型 Qwen2.5-14B 无需直接查看文档图片，即可读取视觉模型 DeepSeek-OCR2 的内部表示并回答文档问题。",
        bullets: [
          "<b>双投影器架构。</b>设计并实现双投影器，将视觉模型的逐层 KV Cache 转换为 Qwen 可读取的视觉前缀，同时融合两种模型对问题文本的缓存表示。",
          "<b>训练与评估流程。</b>基于 PyTorch、Hugging Face Transformers 和多 GPU SLURM 搭建完整流程，支持可变长度视觉 token、旋转位置编码及冻结大模型的分层缓存注入。",
          "<b>系统化消融实验。</b>引入 OCR 预训练，并进行图像替换、视觉前缀移除及文本融合移除等消融，衡量接收模型对文档视觉信息的实际利用程度。",
          "<b>共享主干投影器。</b>将视觉投影模块从 6.3 亿参数压缩至 1.12 亿，并提升模型的图像依赖度和 DocVQA ANLS 表现。",
        ],
        metrics: [
          { v: "6.3 亿 → 1.12 亿", k: "投影器参数量" },
          { v: "14B", k: "冻结的纯文本接收模型" },
          { v: "DocVQA", k: "以 ANLS 评估" },
        ],
        tags: ["PyTorch", "Hugging Face", "Qwen2.5-14B", "DeepSeek-OCR2", "KV Cache", "RoPE", "SLURM"],
      },
      {
        title: "分布式系统搜索引擎",
        sub: "两阶段检索 + 排序学习 · 2025.08 – 2025.12",
        desc: "从零搭建端到端文档搜索引擎：基于 Hadoop MapReduce 为 20 万文档构建倒排索引，用 BERT 生成潜在查询做文档扩展，设计 TF-IDF、BM25、Bi-/Cross-encoder、PageRank/HITS 等多信号特征，并用 L2R 模型对 Top-100 重排。前端 React，后端 Flask REST API。",
        metrics: [
          { v: "0.51", k: "NDCG@10" },
          { v: "0.36", k: "MAP@10" },
          { v: "13,555", k: "条标注样本" },
        ],
        tags: ["Python", "Hadoop", "BERT", "排序学习", "React", "Flask"],
      },
      {
        title: "GLKB — GraphRAG 问答",
        link: "https://glkb.org/",
        sub: "生物医学知识图谱 · 2025.09 – 至今",
        desc: "面向 3300 万篇 PubMed 文献的带引用问答系统。Faiss 向量召回后经 Neo4j 子图扩展，结果通过 SSE 流式返回并内嵌文献引用，采用 EC2 + Lambda 计算与接口分离架构部署。",
        metrics: [
          { v: "1 亿", k: "句子向量" },
          { v: "5,500 万", k: "图节点" },
          { v: "445 ms", k: "端到端延迟" },
        ],
        tags: ["Neo4j", "Faiss", "LLM", "SSE", "AWS"],
      },
    ],
    moreProjectsTitle: "其他项目",
    moreProjects: [
      {
        title: "线程库",
        sub: "操作系统导论 · 2026.01 – 2026.03",
        desc: "基于模拟的 CPU 与中断层，用 C++ 补全线程库核心：通过 getcontext/makecontext/swapcontext 实现线程创建、join、yield 与上下文切换，维护 FIFO 就绪队列，实现 Mesa 语义的互斥锁与条件变量，以关/开中断保证原子性，并支持定时器中断抢占与空闲 CPU 挂起。",
        tags: ["C++", "Linux", "并发", "操作系统"],
      },
      {
        title: "深度学习图像分类器",
        sub: "2025.03 – 2025.05",
        desc: "用 PyTorch 从零实现 CNN 区分金毛与柯利犬，包含自定义网络结构、训练循环、早停与模型检查点。先在 8 个辅助犬种上预训练再迁移微调，比较冻结不同卷积层的效果，并用分层采样与数据增强缓解过拟合。",
        metric: "AUROC 90.12%",
        tags: ["PyTorch", "CNN", "迁移学习", "Pandas"],
      },
      {
        title: "Instagram 克隆",
        sub: "2025.01 – 2025.03",
        desc: "复刻 Instagram 核心功能：安全的注册、登录与账户管理，用户、帖子、评论、点赞的完整增删改查，服务端动态页面渲染、响应式界面与数据库集成。",
        tags: ["Python", "Flask", "React", "JavaScript", "HTML", "CSS"],
      },
      {
        title: "股票市场模拟",
        sub: "2024.09 – 2024.10",
        desc: "模拟虚拟买卖双方的撮合交易：用优先队列对买卖报价排序撮合，每轮输出各股票的中位成交价，日终汇总交易与收益，模拟结束时找出每只股票的最佳买入与卖出时机。",
        tags: ["C++", "优先队列", "Linux"],
      },
    ],
    education: [
      {
        deg: "计算机科学与工程 工学硕士",
        school: "密歇根大学安娜堡分校 · 工程学院",
        date: "2026.09 – 2027.12",
        note: "在读",
      },
      {
        deg: "计算机科学 理学学士",
        school: "密歇根大学安娜堡分校 · 文学、科学与艺术学院",
        date: "2022.09 – 2026.05",
        note: "已毕业",
      },
    ],
    skills: [
      { k: "编程语言", v: ["Python", "SQL", "JavaScript", "Java", "C++", "R", "HTML/CSS"] },
      { k: "AI / 机器学习", v: ["LangChain", "LangGraph", "Hugging Face Transformers", "PyTorch", "scikit-learn", "Pandas", "NumPy"] },
      { k: "框架", v: ["Flask", "FastAPI", "Spring MVC", "React", "Vue", "Spark", "Hadoop"] },
      { k: "数据库", v: ["Neo4j", "PostgreSQL", "MySQL", "MongoDB", "Hive", "Oracle"] },
      { k: "云平台与工具", v: ["AWS Lambda", "AWS EC2", "AWS Amplify", "Linux", "SLURM", "Maven"] },
    ],
    hobbies: [
      {
        icon: "baseball",
        title: "棒球",
        desc: "我热爱棒球，初中和高中一直是学校棒球校队的成员。",
        badges: ["初中、高中校队成员", "国家二级运动员"],
      },
    ],
    contact: {
      title: "期待与你聊聊 2027 暑期实习",
      body: "我对软件开发（SWE）、AI Agent、机器学习工程（MLE）与后端方向的实习机会都很感兴趣，邮件是联系我最快的方式。",
    },
    footer: "使用原生 HTML 与 JavaScript 构建",
  },
};

/* ---------------- helpers ---------------- */

const $ = (sel) => document.querySelector(sel);

function get(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const siteLink = (url) =>
  `<a class="site-link" href="${url}" target="_blank" rel="noopener">${esc(url.replace(/^https?:\/\//, "").replace(/\/$/, ""))} ↗</a>`;

const tagsHTML = (tags) => `<div class="tags">${tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;

/* ---------------- renderers ---------------- */

function renderStats(c) {
  $("#stats").innerHTML = c.stats
    .map((s) => `<div class="stat"><div class="num">${esc(s.num)}</div><div class="label">${esc(s.label)}</div></div>`)
    .join("");
}

function renderAbout(c) {
  // About paragraphs contain trusted inline markup authored above.
  $("#aboutBody").innerHTML = c.about.map((p) => `<p>${p}</p>`).join("");
}

function renderExperience(c) {
  $("#xpList").innerHTML = c.experience
    .map(
      (x) => `
      <article class="card">
        <div class="xp-top">
          <div>
            <div class="xp-org">${x.link ? `<a href="${x.link}" target="_blank" rel="noopener">${esc(x.org)} ↗</a>` : esc(x.org)}</div>
            <div class="xp-role">${esc(x.role)}</div>
            ${x.link ? siteLink(x.link) : ""}
          </div>
          <div class="xp-when"><div class="date">${esc(x.date)}</div><div>${esc(x.place)}</div></div>
        </div>
        <ul class="bullets">${x.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        ${tagsHTML(x.tags)}
      </article>`
    )
    .join("");
}

function renderProjects(c) {
  $("#projList").innerHTML = c.projects
    .map(
      (p) => `
      <article class="card proj${p.wide ? " wide" : ""}">
        <h3>${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${esc(p.title)} ↗</a>` : esc(p.title)}</h3>
        <div class="sub">${esc(p.sub)}</div>
        ${p.link ? siteLink(p.link) : ""}
        <p>${esc(p.desc)}</p>
        ${p.bullets ? `<ul class="bullets">${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
        <div class="metrics">${p.metrics.map((m) => `<div class="metric"><b>${esc(m.v)}</b>${esc(m.k)}</div>`).join("")}</div>
        ${tagsHTML(p.tags)}
      </article>`
    )
    .join("");

  $("#moreProjTitle").textContent = c.moreProjectsTitle;
  $("#moreProjList").innerHTML = c.moreProjects
    .map(
      (p) => `
      <article class="card proj mini">
        <h3>${esc(p.title)}</h3>
        <div class="sub">${esc(p.sub)}${p.metric ? ` · <span class="hl">${esc(p.metric)}</span>` : ""}</div>
        <p>${esc(p.desc)}</p>
        ${tagsHTML(p.tags)}
      </article>`
    )
    .join("");
}

function renderEducation(c) {
  $("#eduList").innerHTML = c.education
    .map(
      (e) => `
      <article class="card">
        <div class="deg">${esc(e.deg)}</div>
        <div class="school">${esc(e.school)}</div>
        <div class="row"><span class="date">${esc(e.date)}</span><span>${esc(e.note)}</span></div>
      </article>`
    )
    .join("");
}

function renderSkills(c) {
  $("#skillList").innerHTML = c.skills
    .map((s) => `<div class="skill-row"><div class="k">${esc(s.k)}</div>${tagsHTML(s.v)}</div>`)
    .join("");
}

const icons = {
  baseball: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M5.5 4.4c2.3 2 3.6 4.8 3.6 7.6s-1.3 5.6-3.6 7.6"/><path d="M18.5 4.4c-2.3 2-3.6 4.8-3.6 7.6s1.3 5.6 3.6 7.6"/><path d="m7.4 7.6 1.6-.5M8.6 10.6l1.6-.2M8.6 13.4l1.6.2M7.4 16.4l1.6.5M16.6 7.6l-1.6-.5M15.4 10.6l-1.6-.2M15.4 13.4l-1.6.2M16.6 16.4l-1.6.5"/></svg>`,
};

function renderHobbies(c) {
  $("#hobbyList").innerHTML = c.hobbies
    .map(
      (h) => `
      <article class="card hobby">
        <div class="hobby-icon">${icons[h.icon] || ""}</div>
        <div>
          <h3>${esc(h.title)}</h3>
          <p>${esc(h.desc)}</p>
          <div class="hobby-badges">${h.badges.map((b) => `<span class="hobby-badge">${esc(b)}</span>`).join("")}</div>
        </div>
      </article>`
    )
    .join("");
}

/* ---------------- language ---------------- */

const STORAGE_KEY = "ks-lang";

function detectLang() {
  // Priority: ?lang=zh|en in the URL > last choice > browser language.
  const param = new URLSearchParams(location.search).get("lang");
  if (param === "en" || param === "zh") return param;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "zh") return saved;
  } catch (_) {}
  return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
}

function setLang(lang) {
  const c = content[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = c.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = get(c, el.dataset.i18n);
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = get(c, el.dataset.i18nHtml);
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const v = get(c, el.dataset.i18nAlt);
    if (v != null) el.alt = v;
  });

  $("#resumeBtn").href = c.resumeFile;
  document.querySelectorAll(".lang-btn .opt").forEach((o) => o.classList.toggle("on", o.dataset.lang === lang));

  renderStats(c);
  renderAbout(c);
  renderExperience(c);
  renderProjects(c);
  renderEducation(c);
  renderSkills(c);
  renderHobbies(c);

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  currentLang = lang;
}

let currentLang = detectLang();

$("#langToggle").addEventListener("click", () => setLang(currentLang === "en" ? "zh" : "en"));

/* ---------------- init ---------------- */

$("#year").textContent = new Date().getFullYear();
setLang(currentLang);

// Fade sections in as they scroll into view.
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    )
  : null;
document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
