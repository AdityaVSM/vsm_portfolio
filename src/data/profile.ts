// Single source of truth for all site content.
// To update the site, edit this file only — pages render whatever is here.

export interface Link {
  label: string;
  href: string;
}

// A photograph shown on the page. `source` is "client" for your own photos,
// "stand-in" / "library-…" for licensed photos credited in /credits.html.
export interface Photo {
  src: string; // a file in public/assets/img — replace the file (same name) to change the photo
  width: number;
  height: number;
  alt: string;
  source: string;
  subject: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Experience {
  slug: string; // detail page: src/content/experience/<slug>.md
  role: string;
  company: string;
  shortCompany: string;
  location: string;
  period: string;
  years: string;
  summary: string; // two lines on the home page
  photo: Photo;
  highlights: string[];
  tech: string[];
}

export interface Project {
  slug: string; // detail page: src/content/projects/<slug>.md
  title: string;
  context?: string;
  summary: string; // one or two lines on the home page card
  photo: Photo;
  highlights: string[];
  tech: string[];
  links?: Link[];
}

export interface Post {
  slug: string; // src/content/writing/<slug>.md
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
}

export interface Tool {
  name: string;
  kind: string;
  icon: string; // file in public/assets/icons
  width: number;
  height: number;
  shape?: 'tall' | 'land';
}

export interface Education {
  slug: string; // its own page at /education/<slug>; longer write-up in src/content/education/<slug>.md
  degree: string;
  school: string;
  location: string;
  period: string;
  detail?: string;
  photo?: Photo;
  courses?: Course[]; // listed on the school's own page
}

export interface Course {
  code: string;
  name: string;
}

export interface Profile {
  name: string;
  fullName: string;
  headline: string;
  lead: string;
  location: string;
  status: string;
  statement: { before: string; strong: string; after: string };
  links: { email: string; github: string; linkedin: string; resume: string };
  facts: Fact[];
  experience: Experience[];
  projects: Project[];
  writing: Post[];
  tools: Tool[];
  alsoSkills: string;
  skills: Record<string, string[]>;
  education: Education[];
  educationPhoto: Photo;
}

const photo = (file: string, w: number, h: number, alt: string, subject: string, source = 'stand-in'): Photo => ({
  src: `/assets/img/${file}`,
  width: w,
  height: h,
  alt,
  source,
  subject,
});

export const PROFILE: Profile = {
  name: 'Aditya VSM',
  fullName: 'Aditya Vupparige Savitha Mowneshappa',
  headline: 'Aditya VSM, software engineer',
  lead: 'Three years building web apps and backend services at Hewlett Packard Enterprise. Now a Master’s student in computer science at Texas A&M, open to Summer 2027 internships.',
  location: 'College Station, Texas',
  status: 'Open to Summer 2027 software engineering internships in the United States.',
  statement: {
    before: 'For three years I built and shipped the configuration platform that thousands of HPE pre-sales engineers use to price cloud setups. Before that, two research internships taught me to make',
    strong: 'machine learning models',
    after: 'run outside a notebook.',
  },
  links: {
    email: 'adityavsm55@gmail.com',
    github: 'https://github.com/AdityaVSM',
    linkedin: 'https://www.linkedin.com/in/aditya-vsm-9ba29a1b2',
    resume: 'https://raw.githubusercontent.com/AdityaVSM/vsm_portfolio/main/public/resume.pdf',
  },
  facts: [
    { label: 'Industry experience', value: '3 years at HPE' },
    { label: 'Research internships', value: '2, at AI research labs' },
    { label: 'HPE TechCon 2025', value: 'Paper presented in Houston' },
    { label: 'Texas A&M', value: 'MS CS, 2026 to 2028' },
  ],
  experience: [
    {
      slug: 'hpe',
      role: 'Full Stack Developer',
      company: 'Hewlett Packard Enterprise',
      shortCompany: 'HPE',
      years: '2023 to 2026',
      summary: 'Built workflows for HPE’s GreenLake configuration platform in React and Spring Boot, secured its APIs and cut deployment downtime from 40 to about 15 minutes.',
      photo: photo('hpe.jpg', 960, 636, 'Rows of server racks lit blue in a data centre', 'data centre'),
      location: 'Bangalore, India',
      period: 'Aug 2023 – Aug 2026',
      highlights: [
        'Built and maintained a global cloud configuration platform used by **thousands of HPE pre-sales professionals** to design and generate customized HPE GreenLake cloud configurations, contributing across the full lifecycle from design to CI/CD deployment.',
        'Designed and delivered **5 end-to-end workflows** across HPE GreenLake solutions using React/TypeScript interfaces, Java Spring Boot REST APIs and backend integrations; added role-based access control, admin pages and solution management features.',
        'Resolved **10+ critical security findings** from Sonar and penetration testing, strengthening API authentication and authorization and implementing load-balancer-level rate limiting.',
        'Migrated legacy Spring MVC modules to Spring Boot with Hibernate ORM, improving API response times by **~30%** and reducing large record fetch latency.',
        'Migrated Jenkins pipelines to GitHub Actions and optimized end-to-end CI/CD, cutting production deployment downtime by **~60%** (40 to ~15 minutes).',
        'Designed and optimized SQL schemas to improve data organization, storage efficiency and query performance.',
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'React', 'TypeScript', 'SQL', 'GitHub Actions', 'Jenkins', 'CI/CD', 'REST APIs', 'API Authentication'],
    },
    {
      slug: 'taproots-ai',
      role: 'Research Intern',
      company: 'Taproots.AI',
      shortCompany: 'Taproots.AI',
      years: '2022',
      summary: 'Built a tennis analytics tool that compares a player’s joint angles, ball and racquet position with how professionals play the same shot.',
      photo: photo('taproots.jpg', 1280, 853, 'A professional tennis player mid-forehand on a hard court', 'tennis forehand'),
      location: 'Bangalore, India',
      period: 'Mar 2022 – Jun 2022',
      highlights: [
        'Built a computer vision tennis analytics tool, including backend modules for video processing pipelines and model inference, delivering a working POC.',
        'Implemented posture detection and shot classification with MediaPipe and OpenCV, replacing image-similarity methods (Cosine Similarity, SSIM, ORB) that failed across different court surroundings.',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'ML', 'SSIM', 'ORB', 'Cosine Similarity'],
    },
    {
      slug: 'samsung-research',
      role: 'Research Intern',
      company: 'Samsung Research Institute',
      shortCompany: 'Samsung Research',
      years: '2021',
      summary: 'Fine-tuned a Transformer that translates Indian-language text on a phone screen into English, small enough to run on the device. BLEU score about 60.',
      photo: photo('samsung.jpg', 1280, 960, 'A printed notice in Bangalore repeating one line in Kannada, Hindi, Telugu, Tamil and English', 'multilingual notice'),
      location: 'Bangalore, India',
      period: 'Jun 2021 – Nov 2021',
      highlights: [
        'Fine-tuned a Transformer-based encoder–decoder model (BERT/mBART) with TensorFlow and Keras for real-time on-screen language translation, achieving a **BLEU score of ~60**.',
        'Deployed the model in an Android app (Java) that reads on-screen text and displays translations in real time.',
      ],
      tech: ['TensorFlow', 'Keras', 'Transformers', 'Android', 'Kotlin', 'BLEU', 'NLP', 'BERT', 'mBART'],
    },
  ],
  projects: [
    {
      slug: 'sustainable-cloud-recommendations',
      title: 'Intelligent Recommendation of Sustainable Cloud Modules',
      context: 'HPE TechCon 2025',
      summary: 'Presented at HPE TechCon 2025: a RAG recommender that picks the lowest-carbon servers for a customer’s compute needs, shown at HPE headquarters in Houston.',
      photo: photo('techcon.jpg', 960, 480, 'The downtown Houston skyline above the trees of Buffalo Bayou', 'Houston skyline'),
      highlights: [
        'RAG- and LLM-based recommendation framework that analyzes historical customer data and the latest cloud configurations to recommend sustainable, cost-efficient cloud setups.',
        'Selected among the **top papers from India for HPE TechCon**, HPE’s global innovation conference, and presented at HPE Headquarters in Houston, USA.',
      ],
      tech: ['RAG', 'LLMs'],
      links: [{ label: 'Read my TechCon post on LinkedIn', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7304730869032701954/' }],
    },
    {
      slug: 'study-trackers',
      title: 'LeetCode 75 & System Design Study Trackers',
      context: 'Personal project',
      summary: 'A personal project: spaced-repetition trackers for LeetCode 75 and system design prep that schedule each problem’s next review. I use them every day.',
      photo: photo('study-trackers.jpg', 1280, 853, 'A stack of books seen side-on, page edges in soft focus', 'stacked books', 'library-057'),
      highlights: [
        'Full-stack spaced-repetition trackers for data structures & algorithms and system design prep, with configurable review schedules.',
        'Deployed on Vercel with Neon serverless PostgreSQL.',
      ],
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Vercel', 'Neon'],
      // TODO: replace with the public repo / live URL once published
      links: [{ label: 'See the code on GitHub', href: 'https://github.com/AdityaVSM' }],
    },
    {
      slug: 'chatur',
      title: 'Chatur – Virtual Query Assistant',
      context: 'Final-year project',
      summary: 'My final-year project: a chatbot that answers students’ questions about professors, class schedules, office hours and fees from a college website’s own data.',
      photo: photo('chatur.jpg', 1280, 960, 'The postgraduate block of BMS College of Engineering behind a lawn', 'college campus'),
      highlights: [
        'Chatbot that helps students find information scattered across college websites: professors and their research, class schedules, office hours and fees.',
        'Custom intent recognition model with spaCy for named entity recognition, plus an active learning feedback loop; works on any website by swapping the data behind it.',
      ],
      tech: ['Python', 'NLP', 'spaCy', 'NER', 'Intent Recognition'],
      links: [{ label: 'See the code on GitHub', href: 'https://github.com/AdityaVSM/Chatur' }],
    },
  ],
  // Add a post: create src/content/writing/<slug>.md and list it here.
  writing: [],
  tools: [
    { name: 'Java', kind: 'Language', icon: 'java.svg', width: 30, height: 40, shape: 'tall' },
    { name: 'Python', kind: 'Language', icon: 'python.svg', width: 40, height: 40 },
    { name: 'TypeScript', kind: 'Language', icon: 'typescript-icon.svg', width: 40, height: 40 },
    { name: 'JavaScript', kind: 'Language', icon: 'javascript.svg', width: 40, height: 40 },
    { name: 'C++', kind: 'Language', icon: 'c-plusplus.svg', width: 36, height: 40 },
    { name: 'Kotlin', kind: 'Language', icon: 'kotlin-icon.svg', width: 40, height: 40 },
    { name: 'Spring Boot', kind: 'Backend', icon: 'spring-icon.svg', width: 40, height: 40 },
    { name: 'Hibernate', kind: 'Backend', icon: 'hibernate.svg', width: 38, height: 40 },
    { name: 'React', kind: 'Frontend', icon: 'react.svg', width: 40, height: 36 },
    { name: 'Android', kind: 'Mobile', icon: 'android-icon.svg', width: 40, height: 23, shape: 'land' },
    { name: 'PostgreSQL', kind: 'Database', icon: 'postgresql.svg', width: 39, height: 40 },
    { name: 'MySQL', kind: 'Database', icon: 'mysql-icon.svg', width: 40, height: 39 },
    { name: 'MariaDB', kind: 'Database', icon: 'mariadb-icon.svg', width: 40, height: 27, shape: 'land' },
    { name: 'MongoDB', kind: 'Database', icon: 'mongodb-icon.svg', width: 19, height: 40, shape: 'tall' },
    { name: 'Redis', kind: 'Cache', icon: 'redis.svg', width: 40, height: 34 },
    { name: 'Firebase', kind: 'Backend', icon: 'firebase-icon.svg', width: 32, height: 40, shape: 'tall' },
    { name: 'Jenkins', kind: 'CI/CD', icon: 'jenkins.svg', width: 25, height: 40, shape: 'tall' },
    { name: 'GitHub Actions', kind: 'CI/CD', icon: 'github-actions.svg', width: 40, height: 40 },
    { name: 'Docker', kind: 'Containers', icon: 'docker-icon.svg', width: 40, height: 29, shape: 'land' },
    { name: 'Kubernetes', kind: 'Containers', icon: 'kubernetes.svg', width: 40, height: 39 },
    { name: 'Git', kind: 'Version control', icon: 'git-icon.svg', width: 40, height: 40 },
    { name: 'Linux', kind: 'OS', icon: 'linux-tux.svg', width: 34, height: 40 },
    { name: 'TensorFlow', kind: 'ML', icon: 'tensorflow.svg', width: 37, height: 40 },
    { name: 'OpenCV', kind: 'Vision', icon: 'opencv.svg', width: 32, height: 40 },
  ],
  alsoSkills: 'Also NLP, Transformers, RAG and LLMs, Keras, JUnit, REST API design and API authentication.',
  skills: {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    'Backend & Frontend': ['Spring Boot', 'Hibernate ORM', 'REST APIs', 'API Authentication', 'React', 'HTML', 'CSS'],
    'Databases & DevOps': ['MariaDB', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Firebase', 'Jenkins', 'GitHub Actions', 'CI/CD'],
    'ML / AI': ['NLP', 'Computer Vision', 'Transformers', 'RAG', 'LLMs', 'TensorFlow', 'Keras'],
    Tools: ['Git', 'Android development (Java)', 'JUnit', 'Linux', 'Docker', 'Kubernetes', 'Microsoft Copilot', 'AI-assisted coding'],
  },
  education: [
    {
      slug: 'texas-am',
      degree: 'Master’s in Computer Science',
      school: 'Texas A&M University',
      location: 'College Station, TX',
      period: '2026 to 2028',
      detail: 'graduating May 2028',
      photo: photo('texas-am.jpg', 960, 756, 'The domed Academic Building at Texas A&M University framed by trees', 'Texas A&M campus'),
      courses: [
        { code: 'CSCE 606', name: 'Software Engineering' },
        { code: 'CSCE 625', name: 'Artificial Intelligence' },
        { code: 'CSCE 629', name: 'Analysis of Algorithms' },
      ],
    },
    {
      slug: 'bmsce',
      degree: 'B.E. in Information Science and Engineering',
      school: 'BMS College of Engineering',
      location: 'Bangalore, India',
      period: '2019 to 2023',
      detail: 'GPA 3.8 / 4.0',
      photo: photo('chatur.jpg', 1280, 960, 'The postgraduate block of BMS College of Engineering behind a lawn', 'college campus'),
    },
  ],
  educationPhoto: photo('texas-am.jpg', 960, 756, 'The domed Academic Building at Texas A&M University framed by trees', 'Texas A&M campus'),
};
