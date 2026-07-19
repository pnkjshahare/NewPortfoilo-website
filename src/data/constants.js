import RocketResumeImg from "../images/RocketResume.png";
import BoardImg from "../images/BoardImage.jpeg";
import holteImg from "../images/holtec-asia.png";
import bluestockImg from "../images/bluestock.jpeg";
import connecticusImg from "../images/ConnecticusTech.jpg";
import FyersImg from "../images/Fyers.jpg";
import fixProtocolImg from "../images/FIX_ENGINE_PROTOCOL.png";

const createBadgeImage = (
  label,
  background = "#111827",
  foreground = "#ffffff",
) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="28" fill="${background}" />
      <circle cx="64" cy="64" r="44" fill="${foreground}" fill-opacity="0.12" />
      <text x="64" y="72" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="${foreground}">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};

export const Bio = {
  name: "Pankaj Shahare ",
  roles: [
    "Low-Latency Systems",
    "Distributed Systems",
    "High-Performance Software",
  ],
  description:
    "Software Engineer focused on low-latency systems, distributed backend development, and high-performance software. Skilled in Golang, C++, Java, AWS, and system design.",
  github: "https://github.com/pnkjshahare/",
  leetcode: "https://leetcode.com/u/shahare_pnkj/",
  gfg: "https://www.geeksforgeeks.org/user/pankajsa6tmk/",
  resume:
    "https://drive.google.com/file/d/1m_xoHniWVS4BKMV31lidkDVidsilNMBX/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/pankaj-shahare/",
  twitter: "https://x.com/PankajShahare18",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Golang", image: "https://cdn.simpleicons.org/go" },
      { name: "C++", image: "https://cdn.simpleicons.org/cplusplus" },
      { name: "Java", image: "https://cdn.simpleicons.org/openjdk" },
      { name: "Python", image: "https://cdn.simpleicons.org/python" },
      { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript" },
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Spring Boot", image: createBadgeImage("SB", "#6db33f") },
      { name: "Gin", image: createBadgeImage("GIN", "#00add8") },
      { name: "REST APIs", image: createBadgeImage("API", "#0f766e") },
      { name: "Microservices", image: createBadgeImage("MS", "#be185d") },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React.js", image: "https://cdn.simpleicons.org/react" },
      { name: "HTML5", image: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", image: "https://cdn.simpleicons.org/css3" },
      {
        name: "Tailwind CSS",
        image: "https://cdn.simpleicons.org/tailwindcss",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", image: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", image: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb" },
      { name: "SQL Server", image: createBadgeImage("SQL", "#b91c1c") },
    ],
  },
  {
    title: "Distributed Systems",
    skills: [
      {
        name: "Concurrency",
        image: createBadgeImage("CON", "#0f172a"),
      },
      {
        name: "Low-Latency Systems",
        image: createBadgeImage("LL", "#0f172a"),
      },
      {
        name: "System Design",
        image: createBadgeImage("SD", "#0f172a"),
      },
      {
        name: "Scalability",
        image: createBadgeImage("SCL", "#0f172a"),
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3)", image: "https://cdn.simpleicons.org/amazonaws" },
      { name: "Docker", image: "https://cdn.simpleicons.org/docker" },
      { name: "Git", image: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", image: "https://cdn.simpleicons.org/github" },
      { name: "Linux", image: "https://cdn.simpleicons.org/linux" },
      { name: "CI/CD", image: createBadgeImage("CI/CD", "#334155") },
      { name: "Postman", image: "https://cdn.simpleicons.org/postman" },
    ],
  },

  {
    title: "Financial Technology",
    skills: [
      {
        name: "Trading Systems",
        image: createBadgeImage("TRD", "#0f172a"),
      },
      {
        name: "Market Data Processing",
        image: createBadgeImage("MDP", "#0f172a"),
      },
      {
        name: "Trade Reporting",
        image: createBadgeImage("TR", "#0f172a"),
      },
      {
        name: "Financial APIs",
        image: createBadgeImage("FA", "#0f172a"),
      },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "DSA", image: createBadgeImage("DSA", "#0f172a") },
      { name: "OOP's Concept", image: createBadgeImage("OOP", "#0f172a") },
      { name: "OS", image: createBadgeImage("OS", "#0f172a") },
      { name: "DBMS", image: createBadgeImage("DBMS", "#0f172a") },
      { name: "CN", image: createBadgeImage("CN", "#0f172a") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: FyersImg,
    role: "Software Engineer 1",
    company: "FYERS Securities Private Limited ",
    date: "Jan 2026 - Present",
    desc: "Contributed to the development of a low-latency brokerage platform using Golang, C++, Python, AWS, and distributed systems. Built high-performance trade processing pipelines, enhanced multi-strategy trading engine throughput through parallel processing, automated client trade reporting with Fyers APIs, developed a web-based trade validation dashboard, and deployed scalable cloud infrastructure on AWS—improving system reliability, operational efficiency, and order execution performance.",
    responsibilities: [
      "Built and optimized low-latency trade processing pipelines for a brokerage platform.",
      "Improved multi-strategy trading engine throughput using parallel processing techniques.",
      "Automated client trade reporting with Fyers APIs to reduce manual effort.",
      "Developed a web-based trade validation dashboard for internal operations.",
      "Deployed scalable AWS infrastructure to improve reliability and execution performance.",
    ],
    skills: [
      "Golang",
      "C++",
      "Python",
      "AWS",
      "Distributed Systems",
      "Concurrency",
      "Low-Latency Systems",
      "REST APIs",
      "CI/CD",
      "Data Processing Pipelines",
    ],
    doc: "",
  },
  {
    id: 1,
    img: connecticusImg,
    role: "Software Engineer Intern",
    company: "Connecticus Technologies",
    date: "Oct 2025 - Jan 2026",
    desc: "Built an AI-powered code review platform using Java, Spring Boot, React, and MySQL that automates PR reviews across 35+ repositories, integrates PRD/JIRA-based rules, SonarQube and Snyk scanning, automated GitHub comments, and AI-driven test generation—reducing vulnerabilities by 70%, manual review effort by 75%, and increasing code coverage by 38%. ",
    responsibilities: [
      "Built an AI-powered code review platform for 35+ repositories.",
      "Integrated PRD and JIRA-based rules into the review workflow.",
      "Added SonarQube and Snyk scanning with automated GitHub comments.",
      "Implemented AI-driven test generation to improve coverage.",
      "Reduced vulnerabilities and manual review effort through automation.",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "GitHub API Integration",
      "SonarQube",
      "AI/LLM-based Code Analysis",
      "Automated Code Review",
      "JIRA Integration",
    ],
    doc: "",
  },
  {
    id: 2,
    img: holteImg,
    role: "Software Engineer Intern",
    company: "Holtec Asia",
    date: "Jun 2025 - Oct 2025",
    desc: "Working on developing Web apps, Collaborating with the team to perform various Backend & Frontend Tasks, Engineering Tasks & Debug the code ",
    responsibilities: [
      "Developed and maintained web applications across frontend and backend layers.",
      "Collaborated with the team on engineering tasks and feature delivery.",
      "Worked on debugging and fixing application issues.",
      "Supported backend and frontend improvements in ongoing projects.",
    ],
    skills: [
      "C#",
      ".NET Framework",
      "ASP.NET MVC",
      "Entity Framework",
      "Blazor",
      "Microsoft SQL Server",
      "Javascript",
    ],
    doc: "",
  },
  {
    id: 3,
    img: bluestockImg,
    role: "Software Developer Intern",
    company: "Bluestock Fintech",
    date: "May 2025 - Jun 2025",
    desc: "Developed a full-stack IPO Management system with real-time data access, secure authentication, and dynamic features to enhance user experience and streamline IPO tracking for fintech clients.",
    responsibilities: [
      "Developed a full-stack IPO management system with real-time data access.",
      "Implemented secure authentication and role-aware access flows.",
      "Built dynamic features to improve user experience and IPO tracking.",
      "Worked on the React, Node.js, Express, and MongoDB stack.",
    ],
    skills: [
      "ReactJS",
      "NodeJs",
      "ExpresJs",
      "MongoDb",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://th.bing.com/th/id/OIP.4GQ5pRmUI4cxkEXsqMfUhgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    school:
      "Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded, Maharastra",
    date: "Dec 2021 - May 2025",
    grade: "8.43 CGPA",
    desc: "B.Tech in Information Technology from SGGSIET, Nanded (CGPA: 8.26), with a strong foundation in algorithms, data structures, operating systems, databases, and distributed systems.",
    degree: "Bachelor of Technology - B.Tech, Information Technology",
  },
  {
    id: 1,
    img: BoardImg,
    school: "Sudama Junior College Mohadi Bhandara, Maharastra",
    date: "Apr 2019 - Apr 2020",
    grade: "76.9%",
    desc: "I completed my class 12 high school education at Sudama Junior College Moahdi Bhandara, Maharastra, where I studied Science.",
    degree: " HSC(XII), Science",
  },
  {
    id: 2,
    img: BoardImg,
    school: "Sulochana Devi Paradhi Vidyalay Mohadi Bhandara, Mahrastra",
    date: "June 2017 - March 2018",
    grade: "91.2%",
    desc: "I completed my class 10 education at Sulochana Devi Paradhi Vidyalay Mohadi Bhandara, Maharastra, where I studied Science with Computer Application.",
    degree: "SSC(X),MH Board",
  },
];

export const projects = [
  {
    id: 10,
    title: "FIX Protocol Engine (FIX 4.4)",
    description:
      "A high-performance FIX 4.4 Protocol Engine built in C++ implementing FIX message encoding, parsing, validation, session management, and TCP-based client/server communication. Supports the complete order lifecycle including Logon, New Order Single, and Execution Report with BodyLength and CheckSum validation.",
    image: fixProtocolImg,
    tags: ["C++", "FIX 4.4", "TCP/IP", "WinSock", "CMake", "Networking"],
    category: "trading",
    github: "https://github.com/pnkjshahare/FIX-Protocol-Engine",
    webapp: "",
  },
  {
    id: 9,
    title: "LiveCodeHub-Collaborative Code Editor",
    description:
      "LiveCodeHub is a real-time collaborative code editor featuring unique room generation, dynamic syntax highlighting, and intelligent auto-suggestions. It empowers users to seamlessly edit, save, and download files while enhancing teamwork through an integrated group chat for instant collaboration.",
    image:
      "https://assets.wpdeveloper.com/2022/03/Best-Online-Code-Editor-To-Use-In-2022.png",
    tags: ["React", "Node", "Express", "Socket io"],
    category: "web app",
    github: "https://github.com/pnkjshahare/LiveCodeHub",
    webapp: "https://live-code-hub.vercel.app/",
  },
  {
    id: 2,
    title: "Concrete Strength Prediction",
    description:
      "Concrete Strength Prediction uses machine learning models to estimate the compressive strength of concrete based on input features like cement content, water-cement ratio, and curing time, aiding in efficient construction planning and quality control.",
    image:
      "https://media.gettyimages.com/id/941748918/photo/concrete-pouring-at-construction-site.jpg?s=612x612&w=0&k=20&c=gjrm52VyXqSLL8gBfzDN0RlMPV1foAzU2BLQcvEi8wc=",
    tags: ["Python", "Keras", "TensorFlow", "Regression Algo"],
    category: "machine learning",
    github:
      "https://github.com/pnkjshahare/ConcreateStrength-Prediction/tree/main",
    webapp:
      "https://github.com/pnkjshahare/ConcreateStrength-Prediction/tree/main",
    // member: [
    //   {
    //     name: "",
    //     img: "",
    //     linkedin: "",
    //     github:
    //       "https://github.com/pnkjshahare/ConcreateStrength-Prediction/tree/main",
    //   },
    // ],
  },
  // {
  //   id: 5,
  //   title: "Todo Web App",
  //   date: "Jun 2021",
  //   description:
  //     " A Todo Web App made with React JS, Vite, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
  //   image:
  //     "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/09/a-phone-with-a-to-do-list-next-to-a-notebook-with-a-handwritten-to-do-list-a-pen-and-some-sticky-notes-around.jpg",
  //   tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
  //   category: "web app",
  //   github: "https://github.com/pnkjshahare/ToDo-List",
  //   webapp: "https://to-do-list-4eq38a8pp-pankaj-shahares-projects.vercel.app/",
  // },
  {
    id: 8,
    title: "Apple Quality Classification",
    date: "June 2023",
    description:
      "Apple Quality Classification uses machine learning to evaluate the quality of apples based on features like color, texture, size, and defects, leveraging image processing and classification algorithms to ensure accurate grading for agricultural or retail purposes.",
    image:
      "https://cdn.pixabay.com/photo/2020/10/01/20/02/apples-5619618_1280.jpg",
    tags: [
      "Python",
      "Keras",
      "TensorFlow",
      "OpenCV",
      "PyTorch",
      "Classification Algo",
    ],
    category: "machine learning",
    github: "https://github.com/pnkjshahare/Apple-Quality-Classification",
    webapp: "https://github.com/pnkjshahare/Apple-Quality-Classification",
  },
  {
    id: 11,
    title: "ResumeRocket-Automated Bulk Email Sender ",
    description:
      "ResumeRocket is a Python tool that automates bulk email sending with personalized messages and resume attachments via Gmail SMTP—perfect for job seekers and recruiters to apply efficiently and professionally.",
    image: RocketResumeImg,
    tags: ["Python", "smtplib", "pandas", "openpyxl", "python-dotenv"],
    category: "web app",
    github: "https://github.com/pnkjshahare/ResumeRocket",
    webapp: "",
  },
];
