import type { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Muhammad Faizan',
  shortName: 'Faizan',
  initials: 'FZ',
  title: 'Software Engineer & Full-Stack Developer',
  subtitle: 'BS Computer Science Graduate | AI & Web Developer',
  tagline: 'I build modern web applications, practical software solutions, and intelligent digital experiences using contemporary web technologies.',
  email: 'muhammadfaizan25092003@gmail.com',
  phone: '+92 325 6839601',
  location: 'Sharaqpur Sharif, District Sheikhupura, Pakistan',
  cvPath: '/CV.pdf',
  portraitPath: '/faizan-portrait.png',
  social: {
    github: 'https://github.com/Faizan-Saeed-hub',
    linkedin: 'https://www.linkedin.com/in/muhammad-faizan-966b36261/',
  },
  stats: [
    { label: 'Degree & CGPA', value: 'BS CS (3.24 / 4.0)' },
    { label: 'Live Applications', value: '4+ Deployed' },
    { label: 'Public Repositories', value: '8+ Projects' },
    { label: 'Core Specialization', value: 'React & AI Integration' },
  ]
};

export const aboutContent = {
  intro: 'I am a Software Engineer and Computer Science graduate from the University of Sargodha with a passion for architecting clean, responsive web applications and practical AI-assisted software.',
  bio1: 'Throughout my academic journey and practical work, I have focused on full-stack development, combining modern frontend frameworks like React.js and TypeScript with reliable backend workflows and machine learning integration.',
  bio2: 'From building UniPortal (an AI-assisted university discovery and admission guidance system) to developing client-side zero-upload privacy tools like PDF Editor and Faizan Vault, I value software that is intuitive, secure, and genuinely solves problems for users.',
  disciplines: [
    {
      title: 'Full-Stack Architecture',
      description: 'Engineering responsive, accessible single-page web applications with modern component architectures, state management, and seamless API integrations.',
      icon: 'Layers'
    },
    {
      title: 'Applied AI & ML Integration',
      description: 'Hands-on experience with Python, Scikit-learn, Pandas, AI chatbots, and intelligent recommendation systems that enhance user capabilities.',
      icon: 'Cpu'
    },
    {
      title: 'Privacy & Client-Side Engineering',
      description: 'Building zero-server-upload utilities and client-side document processing where data privacy and rapid local execution are paramount.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Responsive & Accessible Design',
      description: 'Crafting fluid, mobile-first interfaces adhering to WCAG standards with carefully balanced dark modes, micro-interactions, and fast load times.',
      icon: 'Layout'
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    subtitle: 'Building modern, responsive user interfaces',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5', iconKey: 'html5' },
      { name: 'CSS3', iconKey: 'css3' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'React.js', iconKey: 'react' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'Vite', iconKey: 'vite' },
    ]
  },
  {
    title: 'Backend',
    subtitle: 'Server logic, APIs, and relational databases',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', iconKey: 'node' },
      { name: 'Express.js', iconKey: 'express' },
      { name: 'MySQL', iconKey: 'mysql' },
      { name: 'REST APIs', iconKey: 'restapi' },
    ]
  },
  {
    title: 'Programming & AI',
    subtitle: 'Machine learning, data analytics, and neural architectures',
    iconName: 'Cpu',
    skills: [
      { name: 'Python', iconKey: 'python' },
      { name: 'C++', iconKey: 'cpp' },
      { name: 'Machine Learning', iconKey: 'ai' },
      { name: 'NumPy', iconKey: 'numpy' },
      { name: 'Pandas', iconKey: 'pandas' },
      { name: 'Scikit-learn', iconKey: 'scikit' },
    ]
  },
  {
    title: 'Tools',
    subtitle: 'Dev environments, tooling, and cloud deployment',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', iconKey: 'git' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'VS Code', iconKey: 'vscode' },
      { name: 'Vercel', iconKey: 'vercel' },
      { name: 'Netlify', iconKey: 'netlify' },
      { name: 'Postman', iconKey: 'postman' },
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'morphlabs-intern',
    role: 'AI/ML Intern',
    organization: 'MorphLabs',
    period: 'Jun 2026 – Sep 2026',
    location: 'Pakistan',
    type: 'Internship',
    description: 'Contributed to machine learning and AI-focused software development, gaining practical experience in data processing, model experimentation, and intelligent software workflows.',
    achievements: [
      'Worked on machine-learning and AI-related project modules using Python.',
      'Gained exposure to data analysis, model development, and feature evaluation.',
      'Explored practical integration of data-driven methods into application interfaces.'
    ],
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Model Development']
  },
  {
    id: 'independent-work',
    role: 'Full-Stack & Systems Developer',
    organization: 'Selected Projects & Open Source',
    period: '2023 – Present',
    location: 'Pakistan',
    type: 'Independent Work',
    description: 'Architected, coded, and deployed production-ready web applications, interactive portals, and client-side software utilities with an emphasis on modern UI and privacy.',
    achievements: [
      'Developed and launched UniPortal (Final Year Project) for university admissions guidance with AI assistance and merit calculations.',
      'Engineered PDF Editor, a client-side document processing tool enabling PDF merging, splitting, and conversion with zero server uploads.',
      'Created Faizan Vault, a personal document and media management portal with 3D flip card interactions.',
      'Maintained 8+ public repositories with clean TypeScript, React, and Python code.'
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Netlify']
  }
];

export const projects: Project[] = [
  {
    id: 'uniportal',
    title: 'UniPortal',
    subtitle: 'University Admission Support System (Final Year Project)',
    description: 'AI-assisted university discovery and admission guidance platform featuring university recommendations, merit and eligibility calculation, an AI chatbot, document uploads, and an admin management panel.',
    highlights: [
      'Real-time merit and admission eligibility calculation engine',
      'AI chatbot to guide prospective students through requirements',
      'University program exploration and document upload portal',
      'Deployed live on Vercel with high performance'
    ],
    image: '/projects/uniportal.png',
    category: 'Full-Stack',
    tags: ['React.js', 'Tailwind CSS', 'AI Chatbot', 'Merit Engine', 'Vercel'],
    liveUrl: 'https://uniportal-uos.vercel.app/',
    githubUrl: 'https://github.com/Faizan-Saeed-hub/university-portal',
    featured: true
  },
  {
    id: 'credit-loan-approval',
    title: 'Credit Loan Approval Prediction',
    subtitle: 'Supervised Machine Learning System (From CV)',
    description: 'Machine-learning pipeline focused on analyzing financial applicant data, handling class imbalances, and predicting loan approval outcomes with supervised classification algorithms.',
    highlights: [
      'Data preprocessing, feature encoding, and outlier management',
      'Trained and evaluated Scikit-learn classification models',
      'Feature importance analysis for applicant risk assessment'
    ],
    image: '',
    category: 'AI & ML',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Classification', 'Data Analysis'],
    githubUrl: 'https://github.com/Faizan-Saeed-hub',
    featured: true
  },
  {
    id: 'smartcart-clustering',
    title: 'SmartCart Clustering System',
    subtitle: 'Customer Segmentation & Analytics (From CV)',
    description: 'Unsupervised clustering analytics system aimed at grouping customer purchase behavior, frequency, and shopping transaction data to identify actionable market segments.',
    highlights: [
      'K-Means & hierarchical clustering on customer shopping patterns',
      'Dimensionality reduction and cluster silhouette validation',
      'Visualized behavioral segments for targeted retail strategies'
    ],
    image: '',
    category: 'AI & ML',
    tags: ['Python', 'Unsupervised ML', 'Clustering', 'NumPy', 'Data Visualization'],
    githubUrl: 'https://github.com/Faizan-Saeed-hub',
    featured: false
  },
  {
    id: 'text-summarizer-transformers',
    title: 'Text Summarizer Using Transformers',
    subtitle: 'Natural Language Processing Pipeline (From CV)',
    description: 'NLP system leveraging transformer-based sequence-to-sequence language models to generate accurate, concise abstracts and extractive summaries from extensive technical documents.',
    highlights: [
      'Hugging Face transformer tokenization and sequence modeling',
      'Abstractive and extractive text compression workflows',
      'Evaluated summary fidelity using ROUGE metrics'
    ],
    image: '',
    category: 'AI & ML',
    tags: ['Python', 'NLP', 'Transformers', 'LLMs', 'PyTorch'],
    githubUrl: 'https://github.com/Faizan-Saeed-hub',
    featured: false
  },
  {
    id: 'image-generation-gan',
    title: 'Image Generation Using GAN',
    subtitle: 'Generative Adversarial Network (From CV)',
    description: 'Deep generative artificial intelligence project exploring Generative Adversarial Networks (GANs) for high-fidelity synthetic image generation and adversarial training stability.',
    highlights: [
      'Generator and Discriminator minimax architecture',
      'Convolutional layers with batch normalization and LeakyReLU',
      'Synthetic image sampling and latent space interpolation'
    ],
    image: '',
    category: 'AI & ML',
    tags: ['Python', 'Generative AI', 'GANs', 'Deep Learning', 'Computer Vision'],
    githubUrl: 'https://github.com/Faizan-Saeed-hub',
    featured: false
  },
  {
    id: 'ai-personal-assistant',
    title: 'AI Personal Assistant (Aura)',
    subtitle: 'Conversational AI System (From CV)',
    description: 'Conversational assistant concept designed in Python to process natural language queries, execute automated system workflows, and assist users with automated tasks.',
    highlights: [
      'Natural language query parsing and intent extraction',
      'System automation and desktop command orchestration',
      'Modular Python architecture for extensible capabilities'
    ],
    image: '',
    category: 'AI & ML',
    tags: ['Python', 'Conversational AI', 'NLP', 'Automation'],
    githubUrl: 'https://github.com/Faizan-Saeed-hub/aura.assistant.ai',
    featured: false
  },
  {
    id: 'faizan-vault',
    title: 'Faizan Vault',
    subtitle: 'Personal Document & Media Vault',
    description: 'Personal document & media gallery web application designed to securely organize, view, and manage identification cards (Front & Back with 3D flip effect), photos, videos, and PDFs.',
    highlights: [
      'Interactive 3D flip cards for front & back ID document inspection',
      'Categorized gallery for photos, PDFs, and multimedia resources',
      'Responsive dark-mode interface with smooth transitions',
      'Deployed live on Vercel'
    ],
    image: '/projects/faizan-vault.png',
    category: 'Web Apps',
    tags: ['JavaScript', 'CSS3', '3D Flip Cards', 'Document Vault', 'Vercel'],
    liveUrl: 'https://faizan-vault.vercel.app/',
    githubUrl: 'https://github.com/Faizan-Saeed-hub/Faizan-Vault',
    featured: true
  },
  {
    id: 'pdf-editor',
    title: 'PDF Editor (PDF Faiz)',
    subtitle: 'Privacy-First Web PDF Utility',
    description: 'Open-source, privacy-first PDF utility running 100% locally in your browser. Merge, split, compress, convert, edit, and protect sensitive PDFs with zero server uploads.',
    highlights: [
      'Zero server uploads — all document processing executes client-side',
      'Modular PDF actions: merge, split, compress, convert, sign, and edit',
      'Responsive, distraction-free modern interface with drag-and-drop',
      'Built with TypeScript and deployed on Netlify'
    ],
    image: '/projects/pdf-editor.png',
    category: 'Web Apps',
    tags: ['TypeScript', 'React', 'PDF.js', 'Client-Side Privacy', 'Netlify'],
    liveUrl: 'https://pdf-editor1.netlify.app/',
    githubUrl: 'https://github.com/Faizan-Saeed-hub/pdf-editor',
    featured: true
  },
  {
    id: 'fashion-world',
    title: 'Fashion World',
    subtitle: 'Clothing & Accessories Retail Showcase',
    description: 'Responsive online apparel and fashion e-commerce showcase featuring curated men\'s, women\'s, and kids\' clothing collections, promotional discounts, and interactive shopping features.',
    highlights: [
      'Structured catalog navigation across Men, Women, and Kids categories',
      'Interactive cart management and promotional banner carousels',
      'Fluid, mobile-first responsive design across all screen sizes',
      'Deployed live on Netlify'
    ],
    image: '/projects/fashion-world.png',
    category: 'Web Apps',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce', 'Netlify'],
    liveUrl: 'https://fashion-world-cloth.netlify.app/',
    githubUrl: 'https://github.com/Faizan-Saeed-hub/faizan-tech',
    featured: true
  }
];

export const educationItems: EducationItem[] = [
  {
    id: 'uos-bs',
    degree: 'BS Computer Science',
    institution: 'University of Sargodha',
    period: '2022 – 2026',
    result: 'CGPA: 3.24 / 4.00',
    location: 'Sargodha, Pakistan',
    details: [
      'Graduating with a strong foundation in computer science and software development.',
      'Core coursework: Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Artificial Intelligence, Web Engineering.',
      'Developed Final Year Project: UniPortal — University Admission Support System.'
    ]
  },
  {
    id: 'bise-fsc',
    degree: 'F.Sc. Pre-Medical',
    institution: 'BISE Lahore',
    period: '2019 – 2021',
    result: '1083 / 1100 (98.4%)',
    location: 'Lahore, Pakistan',
    details: [
      'Achieved exceptional academic results in pre-medical and foundational science courses.',
      'Developed disciplined analytical and problem-solving skills.'
    ]
  },
  {
    id: 'bise-matric',
    degree: 'Matriculation (Science)',
    institution: 'BISE Lahore',
    period: '2017 – 2019',
    result: '1028 / 1100 (93.4%)',
    location: 'Lahore, Pakistan',
    details: [
      'Completed secondary education with distinction in science and mathematics.'
    ]
  }
];

export const certificationItems: CertificationItem[] = [
  {
    id: 'cert-python-google',
    name: 'Hello, Python!',
    issuer: 'Google (Coursera)',
    issueDate: 'January 9, 2026',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/OBQARE49HBAK',
    credentialId: 'OBQARE49HBAK',
    description: 'Official Coursera course certificate by Google verifying core proficiency in Python syntax, programming logic, data structures, and practical software scripting.'
  },
  {
    id: 'cert-ml-mathworks',
    name: 'Machine Learning Onramp',
    issuer: 'MathWorks',
    issueDate: '2025',
    description: 'Comprehensive foundational training in machine learning workflows, data preprocessing, feature selection, supervised classification algorithms, and model validation.'
  },
  {
    id: 'cert-ip-mathworks',
    name: 'Image Processing Onramp',
    issuer: 'MathWorks',
    issueDate: '2025',
    description: 'Practical training covering computer vision and image processing techniques including image segmentation, spatial filtering, and feature enhancement.'
  },
  {
    id: 'cert-morphlabs',
    name: 'AI/ML Internship Certification',
    issuer: 'MorphLabs',
    issueDate: '2026',
    description: 'Practical professional internship verification demonstrating work on machine learning workflows, data analysis, and applied AI software engineering.'
  }
];
