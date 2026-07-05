import { useEffect, useMemo, useState } from "react";
import {
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Bio, education, experiences, projects } from "./data/constants";
import profileImage from "./images/Profile.jpg.jpg";
import "./App.css";

const marketSeed = [
  ["NIFTY50", 25571.8],
  ["BANKNIFTY", 57312.4],
  ["SENSEX", 83748.1],
  ["NASDAQ", 20186.6],
  ["S&P500", 6321.9],
  ["BTC", 109420.2],
  ["ETH", 3218.4],
  ["USDINR", 83.51],
  ["GOLD", 7248.8],
];

const skills = [
  { name: "Golang", level: 4, years: "2+", projects: "Matching engine services", experience: "Concurrent APIs, channels, profiling" },
  { name: "C++", level: 3, years: "2+", projects: "Low-latency data paths", experience: "Memory, STL, performance tuning" },
  { name: "Java", level: 4, years: "3+", projects: "AI code review platform", experience: "Spring services, REST, JVM" },
  { name: "Spring Boot", level: 4, years: "2+", projects: "Reviewer automation", experience: "Microservices, auth, SQL" },
  { name: "Kafka", level: 3, years: "1+", projects: "Event pipelines", experience: "Topics, consumers, backpressure" },
  { name: "Docker", level: 3, years: "2+", projects: "Service deployments", experience: "Images, compose, runtime" },
  { name: "AWS", level: 3, years: "1+", projects: "Cloud deployments", experience: "EC2, S3, IAM basics" },
  { name: "PostgreSQL", level: 3, years: "2+", projects: "Trading records store", experience: "Indexes, queries, schema design" },
  { name: "Redis", level: 3, years: "1+", projects: "Hot cache layers", experience: "TTL, queues, leaderboards" },
  { name: "React", level: 4, years: "3+", projects: "Trading dashboards", experience: "SPA, state, responsive UI" },
  { name: "System Design", level: 3, years: "2+", projects: "Distributed workflows", experience: "Queues, scaling, reliability" },
  { name: "DSA", level: 4, years: "4+", projects: "LeetCode practice", experience: "Graphs, DP, heaps, arrays" },
];

const metrics = [
  ["API Latency", "0.8", "ms", [32, 18, 26, 14, 18, 10, 16]],
  ["Orders/sec", "250", "K", [18, 24, 20, 34, 28, 38, 45]],
  ["Kafka msgs/sec", "12", "K", [12, 18, 28, 24, 35, 31, 40]],
  ["CPU", "38", "%", [28, 32, 24, 38, 30, 34, 26]],
  ["Memory", "52", "%", [42, 44, 47, 45, 51, 48, 52]],
  ["Availability", "99.98", "%", [50, 50, 51, 50, 52, 51, 53]],
];

const architecture = [
  "Users",
  "Load Balancer",
  "API Gateway",
  "Kafka",
  "Matching Engine",
  "Redis",
  "PostgreSQL",
];

const certs = [
  ["AWS", FaAws, "Cloud foundations, IAM, compute"],
  ["Docker", FaDocker, "Images, containers, reproducible builds"],
  ["SQL", SiPostgresql, "Indexes, query plans, relational modeling"],
  ["Spring", SiSpringboot, "REST APIs, dependency injection, services"],
];

function LiveTicker() {
  const [items, setItems] = useState(
    marketSeed.map(([symbol, price]) => ({ symbol, price, change: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((current) =>
        current.map((item) => {
          const drift = (Math.random() - 0.46) * (item.price > 1000 ? 28 : 1.8);
          const next = Math.max(item.price + drift, 1);
          return { ...item, price: next, change: next - item.price };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tickerRows = [...items, ...items];

  return (
    <a className="market-ticker" href="https://www.tradingview.com/markets/" target="_blank" rel="noreferrer">
      <span className="live-dot">LIVE MARKET</span>
      <div className="ticker-mask">
        <div className="ticker-track">
          {tickerRows.map((item, index) => (
            <span className={`ticker-item ${item.change >= 0 ? "up" : "down"}`} key={`${item.symbol}-${index}`}>
              <strong>{item.symbol}</strong>
              {item.price.toLocaleString("en-US", { maximumFractionDigits: item.price > 1000 ? 1 : 2 })}
              <em>{item.change >= 0 ? "+" : ""}{item.change.toFixed(2)}</em>
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function NeonBull() {
  return (
    <div className="neon-bull" aria-hidden="true">
      <svg viewBox="0 0 180 120" role="img">
        <path className="bull-line" d="M22 72 C38 38 65 26 96 34 C124 41 141 58 154 83" />
        <path className="bull-line" d="M33 58 C21 44 18 29 24 18 C39 28 49 40 55 52" />
        <path className="bull-line" d="M122 51 C133 34 148 24 164 21 C162 39 153 51 139 62" />
        <path className="bull-line" d="M54 75 L42 108 M86 78 L80 109 M116 75 L126 109 M144 84 L155 108" />
        <path className="bull-line tail" d="M151 79 C170 76 174 62 161 54" />
        <circle className="bull-eye" cx="127" cy="56" r="3" />
        <path className="scratch" d="M25 111 L58 111" />
      </svg>
      <span className="particle p1" />
      <span className="particle p2" />
      <span className="particle p3" />
    </div>
  );
}

function Sidebar({ open, onToggle, onClose }) {
  const links = ["About", "Skills", "Experience", "Projects", "LeetCode", "Architecture", "Education", "Contact"];
  return (
    <>
      <button className="drawer-toggle" onClick={onToggle} aria-label={open ? "Close navigation" : "Open navigation"}>
        {open ? <FiX /> : <FiMenu />}
      </button>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="logo-mark">PS</div>
          <div>
            <span>Pankaj Shahare</span>
            <small>Financial Systems Engineer</small>
          </div>
        </div>
        <nav>
          {links.map((link) => (
            <a href={`#${link.toLowerCase()}`} onClick={onClose} key={link}>{link}</a>
          ))}
        </nav>
        <div className="sidebar-actions">
          <a href={Bio.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          <a href={Bio.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href={Bio.leetcode} target="_blank" rel="noreferrer"><SiLeetcode /> LeetCode</a>
          <a href={Bio.resume} target="_blank" rel="noreferrer"><FiDownload /> Resume</a>
        </div>
        <NeonBull />
      </aside>
    </>
  );
}

function ChartBackdrop() {
  const candles = useMemo(() => Array.from({ length: 34 }, (_, i) => ({
    left: i * 3,
    height: 18 + ((i * 13) % 38),
    top: 24 + ((i * 17) % 34),
    up: i % 3 !== 0,
  })), []);

  return (
    <div className="chart-backdrop">
      <svg viewBox="0 0 600 260" preserveAspectRatio="none">
        <polyline points="0,185 58,156 116,172 174,112 232,130 290,78 348,92 406,54 464,82 522,42 600,68" />
        <polyline className="blue-line" points="0,205 72,190 144,198 216,154 288,166 360,124 432,132 504,96 600,112" />
      </svg>
      {candles.map((candle, index) => (
        <i
          className={candle.up ? "candle up" : "candle down"}
          style={{ left: `${candle.left}%`, height: candle.height, top: candle.top }}
          key={index}
        />
      ))}
    </div>
  );
}

function Hero() {
  const pills = ["Golang", "Java", "C++", "Kafka", "Spring Boot", "AWS", "Docker", "PostgreSQL"];
  return (
    <section className="hero section" id="about">
      <div className="hero-copy">
        <span className="eyebrow">Hi, I'm</span>
        <h1>Pankaj Shahare</h1>
        <h2>Software Engineer</h2>
        <p>Building low-latency, high-performance systems for financial markets.</p>
        <div className="tech-pills">
          {pills.map((pill) => <span key={pill}>{pill}</span>)}
        </div>
        <div className="hero-actions">
          <a className="primary-btn" href={Bio.resume} target="_blank" rel="noreferrer"><FiDownload /> Download Resume</a>
          <a className="secondary-btn" href="#contact">Contact <FiArrowUpRight /></a>
        </div>
      </div>
      <div className="hero-visual">
        <ChartBackdrop />
        <div className="profile-orbit">
          <img src={profileImage} alt="Pankaj Shahare profile" />
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="section" id="metrics">
      <SectionTitle kicker="Runtime Signals" title="Engineering metrics" />
      <div className="metric-grid">
        {metrics.map(([label, value, suffix, points]) => (
          <article className="metric-card reveal" key={label}>
            <span>{label}</span>
            <strong style={{ "--target": value }}>{value}<small>{suffix}</small></strong>
            <div className="sparkline">
              {points.map((point, index) => <i style={{ height: `${point}%` }} key={index} />)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="section-title">
      <span>{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function SkillHeatmap() {
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  return (
    <section className="section" id="skills">
      <SectionTitle kicker="Capability Matrix" title="Skill heatmap" />
      <div className="heatmap">
        <div className="heat-head skill-name">Skill</div>
        {levels.map((level) => <div className="heat-head" key={level}>{level}</div>)}
        {skills.map((skill) => (
          <div className="heat-row" key={skill.name}>
            <div className="skill-name">{skill.name}</div>
            {levels.map((level, index) => (
              <div
                className={`heat-cell ${index < skill.level ? "active" : ""}`}
                data-tooltip={`${skill.experience} | ${skill.projects} | ${skill.years} years`}
                key={level}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function LeetCode() {
  const heat = useMemo(() => Array.from({ length: 84 }, (_, i) => (i * 7 + i) % 5), []);
  return (
    <section className="section" id="leetcode">
      <SectionTitle kicker="Problem Solving" title="LeetCode analytics" />
      <div className="leetcode-panel">
        <div className="lc-stats">
          {[
            ["Current Streak", "42 days"],
            ["Problems Solved", "520+"],
            ["Contest Rating", "1,720"],
            ["Acceptance Rate", "68%"],
          ].map(([label, value]) => (
            <article key={label}><span>{label}</span><strong>{value}</strong></article>
          ))}
        </div>
        <div className="difficulty">
          <span>Easy <b>190</b></span>
          <span>Medium <b>265</b></span>
          <span>Hard <b>65</b></span>
        </div>
        <div className="contribution-grid">
          {heat.map((value, index) => <i className={`lv-${value}`} key={index} />)}
        </div>
        <a className="secondary-btn" href={Bio.leetcode} target="_blank" rel="noreferrer">View Profile <FiArrowUpRight /></a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle kicker="Market Desk Ready" title="Experience timeline" />
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-card" key={item.id}>
            <img src={item.img} alt={`${item.company} logo`} />
            <div>
              <span>{item.date} | India</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.desc || "Building production-grade software for financial brokerage workflows, trading tools, and internal engineering platforms."}</p>
              <div className="badges">{(item.skills || ["Golang", "Kafka", "Java", "Trading Systems"]).slice(0, 7).map((skill) => <b key={skill}>{skill}</b>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle kicker="Build Record" title="Featured projects" />
      <div className="project-grid">
        {projects.slice(0, 5).map((project, index) => (
          <article className="project-card" key={project.id}>
            {index === 0 && <span className="featured">Featured</span>}
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="badges">{project.tags.slice(0, 5).map((tag) => <b key={tag}>{tag}</b>)}</div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a href={project.webapp || project.github} target="_blank" rel="noreferrer">Live Demo <FiArrowUpRight /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="section" id="architecture">
      <SectionTitle kicker="Distributed Trading Flow" title="System architecture" />
      <div className="architecture">
        <div className="packet packet-one" />
        <div className="packet packet-two" />
        {architecture.map((node, index) => (
          <div className="arch-step" key={node}>
            <div className="arch-node">{node}</div>
            {index < architecture.length - 1 && <div className="arch-line" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <SectionTitle kicker="Foundation" title="Education" />
      <div className="education-grid">
        {education.map((item) => (
          <article className="edu-card" key={item.id}>
            <img src={item.img} alt="" />
            <div>
              <span>{item.date}</span>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <strong>{item.grade}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section">
      <SectionTitle kicker="Signals" title="Certifications" />
      <div className="cert-grid">
        {certs.map(([name, Icon, text]) => (
          <article className="cert-card" key={name}>
            <Icon />
            <h3>{name}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const contact = [
    [FaEnvelope, "Email", "pankajshahare.dev@gmail.com", "mailto:pankajshahare.dev@gmail.com"],
    [FaPhoneAlt, "Phone", "+91 00000 00000", "tel:+910000000000"],
    [FaMapMarkerAlt, "Location", "India", "#contact"],
    [FaLinkedin, "LinkedIn", "pankaj-shahare", Bio.linkedin],
    [FaGithub, "GitHub", "pnkjshahare", Bio.github],
    [SiLeetcode, "LeetCode", "shahare_pnkj", Bio.leetcode],
  ];

  return (
    <section className="section contact-section" id="contact">
      <SectionTitle kicker="Open To Impact" title="Contact" />
      <div className="contact-grid">
        {contact.map(([Icon, label, value, href]) => (
          <a className="contact-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={label}>
            <Icon />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
      <a className="primary-btn resume-wide" href={Bio.resume} target="_blank" rel="noreferrer"><FiDownload /> Resume Button</a>
    </section>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="terminal-portfolio">
      <LiveTicker />
        <Sidebar
          open={drawerOpen}
          onToggle={() => setDrawerOpen((open) => !open)}
          onClose={() => setDrawerOpen(false)}
        />
      <main className="content-shell">
        <Hero />
        <Metrics />
        <SkillHeatmap />
        <LeetCode />
        <Experience />
        <Projects />
        <Architecture />
        <Education />
        <Certifications />
        <Contact />
        <footer>Designed & Built by Pankaj Shahare <span>© 2026</span></footer>
      </main>
    </div>
  );
}

export default App;
