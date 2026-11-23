// Single source of truth for all site content.
// To update the site, edit this file only — sections render whatever is here.

export interface Link {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  context?: string; // e.g. "HPE", "Personal project"
  highlights: string[];
  tech: string[];
  links?: Link[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail?: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  status?: string; // availability line shown in the hero; remove to hide
  summary: string;
  links: {
    email: string;
    github: string;
    linkedin: string;
    resume: string; // URL of the resume PDF
  };
  stats: Stat[];
  experience: Experience[];
  projects: Project[];
  skills: Record<string, string[]>;
  education: Education[];
}

export const PROFILE: Profile = {
  name: 'Aditya Vupparige Savitha Mowneshappa',
  title: 'Software Engineer · MS CS at Texas A&M',
  location: 'College Station, TX',
  status: 'Open to Summer 2027 software engineering internships',
  summary:
    'Full stack engineer with 3 years at Hewlett Packard Enterprise, now pursuing a Master’s in Computer Science at Texas A&M. ' +
    'I build with Java, Spring Boot, TypeScript and React, with a focus on REST APIs, API security and CI/CD automation, ' +
    'and have applied AI experience with RAG and Transformer models.',
  links: {
    email: 'adityavsm55@gmail.com',
    github: 'https://github.com/AdityaVSM',
    linkedin: 'https://www.linkedin.com/in/aditya-vsm-9ba29a1b2',
    resume: 'https://raw.githubusercontent.com/AdityaVSM/vsm_portfolio/main/public/resume.pdf',
  },
  stats: [
    { value: '3 yrs', label: 'Full stack at HPE' },
    { value: '~60%', label: 'Less deployment downtime' },
    { value: '~30%', label: 'Faster API responses' },
    { value: '10+', label: 'Critical security findings resolved' },
  ],
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Hewlett Packard Enterprise',
      location: 'Bangalore, India',
      period: 'Aug 2023 – Aug 2026',
      highlights: [
        'Built and maintained a global cloud configuration platform used by thousands of HPE pre-sales professionals to design and generate customized HPE GreenLake cloud configurations, contributing across the full lifecycle from design to CI/CD deployment.',
        'Designed and delivered 5 end-to-end workflows across HPE GreenLake solutions using React/TypeScript interfaces, Java Spring Boot REST APIs and backend integrations; added role-based access control, admin pages and solution management features.',
        'Resolved 10+ critical security findings from Sonar and penetration testing, strengthening API authentication and authorization and implementing load-balancer-level rate limiting.',
        'Migrated legacy Spring MVC modules to Spring Boot with Hibernate ORM, improving API response times by ~30% and reducing large record fetch latency.',
        'Migrated Jenkins pipelines to GitHub Actions and optimized end-to-end CI/CD, cutting production deployment downtime by ~60% (40 to ~15 minutes).',
        'Designed and optimized SQL schemas to improve data organization, storage efficiency and query performance.',
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'React', 'TypeScript', 'SQL', 'GitHub Actions', 'Jenkins', 'CI/CD', 'REST APIs', 'API Authentication'],
    },
    {
      role: 'Research Intern',
      company: 'Taproots.AI',
      location: 'Bangalore, India',
      period: 'Mar 2022 – Jun 2022',
      highlights: [
        'Built a computer vision tennis analytics tool, including backend modules for video processing pipelines and model inference, delivering a working POC.',
        'Implemented posture detection and shot classification with MediaPipe and OpenCV, evaluating Cosine Similarity, SSIM and ORB to improve accuracy.',
      ],
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'ML', 'SSIM', 'ORB', 'Cosine Similarity'],
    },
    {
      role: 'Research Intern',
      company: 'Samsung Research Institute',
      location: 'Bangalore, India',
      period: 'Jun 2021 – Nov 2021',
      highlights: [
        'Fine-tuned a Transformer-based encoder–decoder model (BERT/mBART) with TensorFlow and Keras for real-time on-screen language translation, achieving a BLEU score of ~60.',
        'Deployed the model in an Android app (Java) that reads on-screen text and displays translations in real time.',
      ],
      tech: ['TensorFlow', 'Keras', 'Transformers', 'Android', 'Kotlin', 'BLEU', 'NLP', 'BERT', 'mBART'],
    },
  ],
  projects: [
    {
      title: 'Intelligent Recommendation of Sustainable Cloud Modules',
      context: 'HPE',
      highlights: [
        'RAG- and LLM-based recommendation framework that analyzes historical customer data and the latest cloud configurations to recommend sustainable, cost-efficient cloud setups.',
        'Selected among the top papers from India for HPE TechCon, HPE’s global innovation conference, and presented at HPE Headquarters in Houston, USA.',
      ],
      tech: ['RAG', 'LLMs'],
    },
    {
      title: 'LeetCode 75 & System Design Study Trackers',
      context: 'Personal project',
      highlights: [
        'Full-stack spaced-repetition trackers for data structures & algorithms and system design prep, with configurable review schedules.',
        'Deployed on Vercel with Neon serverless PostgreSQL.',
      ],
      tech: ['React', 'TypeScript', 'PostgreSQL', 'Vercel', 'Neon'],
      // TODO: replace with the public repo / live URL once published
      links: [{ label: 'GitHub', href: 'https://github.com/AdityaVSM' }],
    },
    {
      title: 'Chatur – Virtual Query Assistant',
      highlights: [
        'NLP chatbot with intent recognition and named entity recognition, plus an active learning feedback loop for continuous improvement.',
      ],
      tech: ['NLP', 'Intent Recognition', 'NER'],
    },
  ],
  skills: {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    'Backend & Frontend': ['Spring Boot', 'Hibernate ORM', 'REST APIs', 'API Authentication', 'React', 'HTML', 'CSS'],
    'Databases & DevOps': ['MariaDB', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Firebase', 'Jenkins', 'GitHub Actions', 'CI/CD'],
    'ML / AI': ['NLP', 'Computer Vision', 'Transformers', 'RAG', 'LLMs', 'TensorFlow', 'Keras'],
    Tools: ['Git', 'Android development (Java)', 'JUnit', 'Linux', 'Docker', 'Kubernetes', 'Microsoft Copilot', 'AI-assisted coding'],
  },
  education: [
    {
      degree: 'Master’s in Computer Science',
      school: 'Texas A&M University',
      location: 'College Station, TX',
      period: 'Aug 2026 – May 2028 (expected)',
    },
    {
      degree: 'B.E. in Information Science and Engineering',
      school: 'BMS College of Engineering',
      location: 'Bangalore, India',
      period: 'Aug 2019 – Aug 2023',
      detail: 'GPA 3.8 / 4.0',
    },
  ],
};
