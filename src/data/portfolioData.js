export const portfolioData = {
  personal: {
    username: "H1t3X",
    name: "S Hitesh Borha",
    title: "Cybersecurity Enthusiast",
    bio: [
      "Motivated and detail-oriented tech professional with hands-on experience in software development, cybersecurity, and project coordination. Proficient in React JS, HTML5, CSS3, Linux, and API integration. Successfully developed a customizable website framework at EappZ, focusing on reusable components and responsive design.",
      "Key cybersecurity projects include a DDoS detection model for IoT networks and a smart voting system to ensure data integrity. Certified in Google Foundations of Cybersecurity, with strong skills in software testing, debugging, and cross-functional collaboration.",
    ],
    avatar: {
      type: "image",
      src: "assets/images/avatar1.png",
      alt: "Hitesh Borha Profile Picture",
    },
    stats: [],
  },
  experience: [
    {
      title: "Junior Software Engineer",
      company: "EappZ",
      duration: "2024 - 2025",
      location: "Remote",
      description: [
        "Assisted in building a customizable website framework, contributing to both front-end structure and UI logic.",
        "Engineered 15+ reusable React components with HTML and CSS, integrated into the existing website framework, enhancing user interface consistency and reducing front-end development time by approximately 10 hours per week.",
        "Conducted manual testing and debugging, identifying and reporting software bugs to ensure code quality and reliability.",
        "Collaborated with senior developers to implement new features and maintain project consistency with development standards.",
        "Participated in code reviews, improving understanding of clean code practices and team collaboration workflows.",
        "Worked in agile development sprints, contributing to planning, stand-ups, and retrospectives alongside senior engineers.",
      ],
      technologies: [
        "Problem Solving",
        "React.JS",
        "Team Collaboration",
        "CSS3",
        "HTML5",
      ],
    },
    {
      title: "City Lead",
      company: "Viral Fisson",
      duration: "2023 - 2024",
      location: "Remote",
      description: [
        "Led a city-wide team of 200+ student creators to execute brand promotion campaigns for top national and international brands.",
        "Strategized and coordinated digital and on-ground marketing campaigns, driving high engagement and ROI for partner brands.",
        "Managed campaign logistics, creator communication, and performance tracking using tools like Microsoft Excel, ensuring seamless execution.",
        "Recognized with the Best Performing City Award for outstanding leadership, team coordination, and campaign success.",
        "Built and nurtured a strong creator community, fostering collaboration, creativity, and measurable impact in the youth marketing space.",
      ],
      technologies: [
        "Communication",
        "Leadership",
        "Public Speaking",
        "Easily Adaptable",
        "Social Media Marketing",
      ],
    },
  ],
  certifications: [
    {
      name: "Networking Basics",
      organization: "CISCO",
      dateObtained: "2025",
      expirationDate: "",
      badge: {
        type: "img",
        src: "assets/images/Networking_Basics_Badge.png",
        alt: "Networking_Basics_Badge",
      },
      certificationLink:
        "https://www.credly.com/badges/e591fa8f-8900-4783-9210-b4820a63aed3/public_url",
    },
    {
      name: "Introduction to Cybersecurity",
      organization: "Cisco",
      dateObtained: "2025",
      expirationDate: "",
      badge: {
        type: "img",
        src: "assets/images/Intro_cs.png",
        alt: "Cybersecurity Certification Badge",
      },
      certificationLink:
        "https://www.credly.com/badges/d1af2823-f9f5-47b3-b3d5-a3916716bd9f",
    },
    {
      name: "Foundation to Cybersecurity",
      organization: "Google",
      dateObtained: "2024",
      expirationDate: "",
      badge: {
        type: "img",
        src: "assets/images/Google_icon.jpg",
        alt: "Cybersecurity Certification Badge",
      },
      certificationLink:
        "https://coursera.org/share/14de7bae28321dc256ac108a1b4d6f94",
    },
    {
      name: "Domain 2: Incident Response, ",
      organization: "ISC2",
      dateObtained: "2024",
      expirationDate: "",
      badge: {
        type: "img",
        src: "assets/images/IS2.jpg",
        alt: "Cybersecurity Certification Badge",
      },
      certificationLink:
        "https://coursera.org/share/14de7bae28321dc256ac108a1b4d6f94",
    },
    {
      name: "Domain 1: ISecurity Principles, ",
      organization: "ISC2",
      dateObtained: "2024",
      expirationDate: "",
      badge: {
        type: "img",
        src: "assets/images/IS2.jpg",
        alt: "Cybersecurity Certification Badge",
      },
      certificationLink:
        "https://coursera.org/share/14de7bae28321dc256ac108a1b4d6f94",
    },
  ],
  terminalCommands: [
    "cat /etc/passwd",
    "nmap -sS target.com",
    'sqlmap -u "http://target.com"',
    "hydra -l admin -P passwords.txt ssh://target",
    "msfconsole",
    "burpsuite --professional",
  ],
  projects: [
    {
      title: "Smart Voting Machine",
      description:
        "Developed a Smart Voting System using Python, AI tools, and pre-defined models to enhance data confidentiality, integrity, and voter verification—achieving 0% data breaches and reducing voter fraud risk by 40%.",
      image: {
        type: "icon",
        src: "fa-solid fa-square-poll-vertical",
        alt: "DDoS Detection System",
      },
      technologies: ["Python", "AI Tools", "Pre-Defined Models"],
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      title: "DDoS Detection System",
      description:
        "Developed a Context Correlation-Aware ML model using Python and AI tools for IoT-based DDoS detection, achieving 95% accuracy, 30% fewer false positives, and 25% faster response time.",
      image: {
        type: "icon",
        src: "fa-solid fa-shield-virus",
        alt: "DDoS Detection System",
      },
      technologies: ["Python", "IoT", "ML Models", "AI Tools"],
      links: {
        live: "https://drive.google.com/drive/folders/10zlsmamrjbKo8lbKd04r1yjOCsbYGxfc",
        github: "https://github.com/hitesh114/ddos-detection-system.git",
      },
    },
    {
      title: "Customizable Website Framework",
      description:
        "Developed a responsive, reusable website framework using React JS, HTML5, and CSS3, collaborating in an Agile team via Slack and Bitbucket for version control, testing, and debugging to ensure high-quality code.",
      image: {
        type: "icon",
        src: "fa-regular fa-window-restore",
        alt: "Customizable Website Framework",
      },
      technologies: ["React JS", "HTML5", "CSS3"],
      links: {
        live: "",
        github: "https://github.com/hitesh114/Customizable-Website-Framework",
      },
    },
    {
      title: "H1t3x",
      description:
        "As part of my work in front-end development, I designed and built H1t3x, an interactive web application focused on delivering responsive and user-friendly experiences. Leveraging React.js, I implemented modular components and maintained clean code architecture to ensure scalability and maintainability.",
      image: {
        type: "img",
        src: "assets/images/Logo_1.png",
        alt: "Customizable Website Framework",
      },
      technologies: ["React JS", "HTML5", "CSS3"],
      links: {
        live: "https://hitesh114.github.io/h1t3x/",
        github: "https://github.com/hitesh114/h1t3x.git",
      },
    },
  ],
  skills: {
    categoryTitle: "Top Skills",
    technical: [
      { name: "Cybersecurity", level: 75 },
      { name: "Security Information and Event Management (SIEM)", level: 68 },
      { name: "Network Vulnerabilities", level: 85 },
      { name: "HTML5 & CSS3", level: 78 },
    ],
    tags: [
      "React.JS",
      "HTML5",
      "CSS3",
      "Linux",
      "API Integration",
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Leadership",
      "Public Speaking",
      "Easily Adaptable",
      "Social Media Marketing",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "Wireshark",
      "OWASP",
    ],
  },
  contact: {
    description:
      "Ready to secure your digital assets? Let's connect and discuss how I can help protect your organization.",
    email: "borhahitesh@gmail.com",
    social: [
      {
        name: "LinkedIn",
        icon: "fab fa-linkedin",
        url: "https://linkedin.com/in/hitesh-borha-s-1a1703194",
        display: "LinkedIn",
      },
      {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/hitesh114",
        display: "GitHub",
      },
      {
        name: "Instagram",
        icon: "fab fa-instagram",
        url: "https://instagram.com/hiteshjain._",
        display: "Instagram",
      },
    ],
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
  footer: {
    copyright: "2025 S Hitesh Borha. Built with passion for cybersecurity.",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
};
