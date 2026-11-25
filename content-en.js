/* =========================================================
   英語版トップページ（en.html）の中身．書き方は content.js と同じです．
   - 英語版は「過去のお知らせ」ページを持たないので，全件をトップに表示します
   - link を入れるときは linkLabel（英語）も入れてください
   ========================================================= */

const NEWS = [
  {
    date: "2026.9.13",
    text: "Spoke as a panelist at the main symposium of the 51st Annual Conference of the Japanese Society for Information and Systems in Education (JSiSE).",
    link: "",
  },
  {
    date: "2026.6.25",
    text: "Published a feature article, “How Can Nursing Education Cultivate Ways of Thinking?”, in <i>Kango Kyoiku</i> (Japanese Journal of Nursing Education, Igaku-Shoin). (in Japanese)",
    link: "https://www.igaku-shoin.co.jp/journal/detail/42398",
    linkLabel: "Link",
  },
  {
    date: "2026.3.20",
    text: "Presented research at the 18th Annual Meeting of the Japan Society for Instructional Systems in Healthcare.",
    link: "",
  },
  {
    date: "2026.3.15",
    text: "Presented research at the 7th Annual Meeting of the Japanese Society of Simulation Learning in Nursing.",
    link: "",
  },
  {
    date: "2025.12.6",
    text: "Released the question list from our session at the 45th Academic Conference of the Japan Academy of Nursing Science (JANS). (in Japanese)",
    link: "問いのリスト.pdf",
    linkLabel: "Download",
  },
  {
    date: "2025.12.6",
    text: "Presented at Exchange Session 36 of the 45th Academic Conference of the Japan Academy of Nursing Science (JANS).",
    link: "",
  },
  {
    date: "2025.11.26",
    text: "Published a paper on emotion regulation strategies of expert oncology nurses in the <i>International Journal of Medical Education</i>.",
    link: "https://www.ijme.net/archive/16/emotion-regulation-strategies-of-oncology-nurses/",
    linkLabel: "Paper",
  },
];

const NEWS_ON_TOP = NEWS.length;

const PROJECTS = [
  {
    image: "project-interpreter.svg",
    title: "How Do Medical Sign Language Interpreters Learn Without Mentors? Reinterpreting Experience Through an Expert Cognition Model and VR (in planning)",
    body: "Medical sign language interpreters are often present when difficult diagnoses are delivered. Most are dispatched alone and bound by confidentiality, so they rarely have anyone to consult about their judgments. When no mentor is available, what can people rely on to learn from experience? This project models the judgment processes of expert interpreters and builds a 360-degree VR learning environment in which learners compare their own judgments with those of experts and explore why the experts decided as they did.",
  },
  {
    image: "images/project-vr.jpg",
    title: "A VR Simulation for Novice Visiting Nurses to Learn Anxiety-Regulating Thinking",
    body: "On a night visit, something seems wrong with the patient. Through live-action VR, learners experience a situation in which they must make judgments on their own, and learn ways of thinking that regulate anxiety, grounded in metacognition theory.",
  },
  {
    image: "images/project-smartm.jpg",
    title: "SMART-M: Developing and Evaluating a Metacognitive Reflection Tool to Build Military Nurses’ Resilience to Psychological Stress",
    body: "Military nurses are expected to serve on the front line in disaster relief and humanitarian missions, and train daily for those moments. Exposure to distressing situations, however, imposes psychological stress that can limit individual performance and, ultimately, the functioning of the whole unit. This project develops a learning tool that helps nurses build the resilience to regulate themselves in any situation.",
  },
];

const PORTFOLIO = [
  {
    image: "images/portfolio-metacog.jpg",
    title: "A Scenario-Based Program to Foster Metacognitive Anxiety-Regulating Thinking in Oncology Nurses (doctoral research)",
    body: "Developed a learning model that helps nurses regulate clinical anxiety through metacognition, implemented it as an educational program, and showed that nurses could construct their own anxiety-regulating thinking.",
    link: "",
  },
  {
    image: "images/portfolio-vr.jpg",
    title: "VR Simulation for Novice Visiting Nurses",
    body: "Recreates the tension of stepping into a home on a night on-call visit: a silent house at midnight, a patient in distress, and a family watching every move. With no backup on site, how will you read the situation and manage your own emotions? A practical simulation that captures the essence of home-visit nursing.<br><small>(A web version will be released publicly.)</small>",
    link: "",
  },
  {
    image: "images/portfolio-kanrenzu.jpg",
    title: "Nursing Care Concept Map Support Tool " WEAVE " (prototype)",
    body: "Concept maps are a major hurdle for nursing students and new nurses. Based on the PES format, this tool supports learners in grasping the whole picture of a patient and planning appropriate observation and care.<br><small>(To be released publicly.)</small>",
    link: "",
    linkLabel: "Open the tool",
  },
];

const LAST_UPDATED = "2026.11.25";
