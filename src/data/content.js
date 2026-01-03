export const content = {
  profile: {
    name: "Mohd Shadab",
    title: "Backend Software Engineer",
    tagline: "Architecting Scalable Backend Systems & Cloud Solutions",
    about: "Backend Software Engineer with 2.5+ years of experience building scalable backend systems using Node.js, Express.js, AWS, and modern API architectures. Skilled in designing RESTful and GraphQL services, microservices, and event-driven workflows with a focus on clean, maintainable code. Passionate about solving real engineering challenges and improving backend performance and reliability.",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d622ca?fit=crop&w=600&h=600",
    social: {
      github: "https://github.com/shaad82663",
      linkedin: "https://www.linkedin.com/in/shadab-mohd/",
      email: "mailto:shaad82665@gmail.com"
    }
  },
  contact: {
    email: "shaad82665@gmail.com",
    phone: "+91 7302946970",
    location: "India, Remote"
  },
  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "Cropsly",
      period: "March 2023 – Present",
      description: "Designed scalable serverless backend systems using AWS Lambda and API Gateway, improving system reliability by 25%. Developed secure RESTful APIs reducing integration errors by 30%. Implemented event-driven workflows using Kafka. Led Agile sprints, mentored junior developers, and optimized PostgreSQL/MongoDB schemas enhancing query performance by 35%.",
      tags: ["Node.js", "Express.js", "AWS Lambda", "Kafka", "PostgreSQL", "MongoDB", "TypeScript", "JavaScript", "Docker", "Git"]
    }
  ],
  projects: [
    {
      id: 0,
      title: "TrafikAlarm",
      description: "Real-Time Traffic Alert Application serving 10,000+ users. Engineered Serverless Backend reducing latency by 30%. Integrated Redis caching and Dockerized services improving response times by 70%.",
      tech: ["Node.js", "AWS Lambda", "Redis", "Docker", "MySQL", "JavaScript", "TypeScript"],
      link: "https://trafikalarm.dk/",
      github: null,
      image: "/assets/projects/trafikalarm.png"
    },
    {
      id: 1,
      title: "ParkOne",
      description: "Scalable Parking Management Application processing 50,000+ monthly transactions. Developed dynamic pricing module and integrated MobilePay payment gateway streamlining 70% of user payments.",
      tech: ["Node.js", "PostgreSQL", "JWT", "REST API", "Docker", "JavaScript", "TypeScript", "Express.js"],
      link: "https://parkone.dk/",
      github: null,
      image: "/assets/projects/parkone.png"
    },
    {
      id: 2,
      title: "DriveOne",
      description: "Enhanced Traffic Prediction Application supporting 80,000 MAU. Optimized MongoDB schemas accelerating data retrieval by 25%. Built push notification services using Firebase Cloud Messaging.",
      tech: ["NestJS", "MongoDB", "GraphQL", "Firebase", "Kafka", "Docker", "JavaScript", "TypeScript", "Node.js", "AWS"],
      link: "https://driveone.eu/",
      github: null,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "BookMe - AI Agent",
      description: "An AI-driven movie ticket booking system using Agentic Patterns. Built with LangChain and Local LLMs to autonomously find shows, check availability, and book tickets via tool calling.",
      tech: ["LangChain", "LangSmith", "OpenAI", "Ollama", "Node.js", "JavaScript"],
      link: "https://www.linkedin.com/posts/shadab-mohd_langchain-agent-agenticprogramming-activity-7398295216560058368-ZTNl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEQQ3wBqjoPlMybTl3v4ZWRQFKlwgW-30A",
      github: "https://github.com/shaad82663/BookMe",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?fit=crop&w=800&q=80"
    }
  ],
  education: [
     {
        id: 1,
        degree: "Bachelor of Technology in Information Technology",
        institution: "Uttar Pradesh Technical University, Lucknow",
        period: "August 2019 – December 2023",
        description: "GATE 2025 Qualified: Scored in the top percentile on the Graduate Aptitude Test in Engineering."
     }
  ],
  skills: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
  ]
};
