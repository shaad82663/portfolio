export const content = {
  profile: {
    name: "Mohd Shadab",
    title: "Backend Engineer",
    tagline: "Architecting the Digital Back-End of Tomorrow.",
    about: "I am a backend specialist focused on high-performance systems and scalable architectures. With deep expertise in Python, Data Engineering, and AI-driven solutions, I build the invisible engines that power modern applications.",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d622ca?fit=crop&w=600&h=600", // Dark aesthetic avatar
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in/mohd-shadab-7648071ab",
      email: "mailto:shaad82665@gmail.com"
    }
  },
  contact: {
    email: "shaad82665@gmail.com",
    phone: "+91 73029 46970",
    location: "India, Remote",
  },
  experience: [
    {
      id: 1,
      role: "Senior Backend Engineer",
      company: "DataFlow Systems",
      period: "2023 - Present",
      description: "Leading the migration to microservices, reducing deployment time by 40%. Architected a real-time data pipeline processing 1TB+ daily.",
      tags: ["Python", "Kubernetes", "Kafka"]
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "Innovate AI",
      period: "2022 - 2023",
      description: "Developed RESTful APIs for AI model serving. Optimized database queries, improving application response time by 30%.",
      tags: ["FastAPI", "PostgreSQL", "Docker"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Nebula Stream",
      description: "A high-throughput distributed event streaming platform designed for real-time analytics.",
      tech: ["Go", "gRPC", "Redis"],
      link: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "CyberGuard API",
      description: "AI-powered threat detection API that analyzes network traffic patterns in real-time.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      link: "#",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Quantum Ledger",
      description: "Immutable distributed ledger system for secure supply chain tracking.",
      tech: ["Rust", "Blockchain", "WASM"],
      link: "#",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?fit=crop&w=800&q=80"
    }
  ],
  skills: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ]
};
