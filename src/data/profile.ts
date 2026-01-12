export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  cgpa: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
  education: Education;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const PROFILE: Profile = {
  name: 'Aditya VSM',
  title: 'Full Stack Developer',
  location: 'Bangalore, India',
  bio: 'Full Stack Developer with a strong foundation in building scalable, user-focused solutions. Passionate about using technology to create meaningful experiences and leveraging AI-driven approaches to build smarter products. Collaborative, curious, and committed to continuous growth.',
  skills: {
    backend: ['Java', 'Spring Boot', 'Python'],
    frontend: ['React', 'TypeScript', 'HTML', 'CSS'],
    database: ['MariaDB', 'MySQL', 'MongoDB'],
    ai: ['NLP', 'Computer Vision', 'LLMs', 'RAG', 'AI Agents'],
    other: ['Android (Java)', 'Jenkins', 'GitHub Actions'],
  },
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Hewlett Packard Enterprise',
      period: 'Aug 2023 - Present',
      highlights: [
        'Developed REST APIs with Spring Boot and reusable React UI components',
        'Led onboarding of new workflows with end-to-end functionality',
        'Resolved security findings and implemented rate limiting',
        'Migrated CI/CD from Jenkins to GitHub Actions',
        'Reduced deployment downtime from 40 to ~15 minutes',
      ],
    },
    {
      role: 'R&D Intern',
      company: 'Taproots AI',
      period: 'Mar 2022 - Jun 2022',
      highlights: [
        'Built computer vision–based sports analytics for tennis players',
        'Implemented posture detection using MediaPipe and OpenCV',
      ],
    },
    {
      role: 'R&D Intern',
      company: 'Samsung Research Institute',
      period: 'Jun 2021 - Nov 2021',
      highlights: [
        'Developed live on-screen language translation for Android',
        'Built encoder-decoder Transformer model with ~60 BLEU score',
      ],
    },
  ],
  projects: [
    {
      title: 'Intelligent Cloud Recommendations (HPE)',
      description: 'RAG-based framework recommending sustainable cloud setups. Selected among top papers from India for HPE TechCon and presented at HPE HQ in Houston, USA.',
    },
    {
      title: 'Chatur - Virtual Query Assistant',
      description: 'NLP chatbot with intent recognition, NER, and active learning feedback loop for continuous improvement.',
    },
  ],
  education: {
    degree: 'BE in Information Science & Engineering',
    school: 'BMS College of Engineering',
    period: '2019 - 2023',
    cgpa: '8.9 / 10',
  },
  links: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com/in/aditya-vsm',
    email: 'mailto:adityavsm55@gmail.com',
  },
};
