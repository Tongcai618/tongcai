import Section from "../ui/Section";
import ExperienceItem from "../ui/ExperienceItem";
import { StaggerContainer } from "../ui/StaggerContainer";
import { FadeInUp } from "../animations/FadeInUp";

const experienceItems = [
  {
    role: "Software Developer",
    company: "Ti¢ker",
    location: "Boston, MA",
    date: "Jan 2025 - Aug 2025",
    points: [
      "Architected modular backend systems with Spring Boot, Express.js/Node.js and Flask, integrating MongoDB, PostgreSQL, Redis, and RabbitMQ. Designed onboarding, follow-logic, and JWT authentication, while optimizing data models to cut storage by 90%+ and improve query performance.",
      "Migrated 7 microservices to Kubernetes with Docker and Helm, adding HPA and health checks for scalability. Built a GitOps CI/CD pipeline on GCP, cutting deployment time from hours to minutes.",
      "Developed cross-platform apps with React Native and TypeScript, using modular components and shared types for consistent UI/UX. Improved load times by 40% with AsyncStorage, reducing redundant API calls.",
      "Enhanced Agile workflow management by introducing GitHub reviewer rules, leveraging Jira story points, and enforcing clear deadlines to optimize sprint planning, workload distribution, and delivery predictability.",
      "Led and mentored 5 junior developers and built a Jira-based ticket system that cut assignment time by 50%. Supported scaling to 1,000+ users, contributing to Top 200 recognition at TechCrunch Disrupt 2025."
    ],
    href: "https://www.linkedin.com/company/ti-kerapp/",
    logoSrc: "/images/ticker-logo.jpeg",
  },

  {
    role: "Teaching Assistant",
    company: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    date: "Jun 2024 - Dec 2024",
    points: [
      "Supported a class of undergraduate students in game design and development using C# and the Unity engine, providing guidance on programming, debugging, and gameplay mechanics.",
      "Collaborated with faculty to refine course materials, create sample code, and prepare tutorials that demonstrated best practices in game programming and software engineering.",
      "Strengthened leadership and communication skills by mentoring students with diverse programming backgrounds, fostering collaboration, and encouraging problem-solving."
    ],
    href: "https://www.khoury.northeastern.edu/",
    logoSrc: "/images/seal-red.svg",
  },
  {
    role: "Software Developer",
    company: "China Securities Credit Investment",
    location: "Shenzhen, China",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Designed and implemented data access layers for PostgreSQL and MySQL databases. Streamlined backend logic in Django to support dynamic queries and efficient data retrieval for APIs and internal dashboards.",
      "Automated Excel workflows with pandas/openpyxl and a Django API, cutting 2 hours of manual work per month and training colleagues through clear documentation.",
      "Built a lightweight Django tool using smtplib and HTML templates for dynamic emails. Added async scheduling via RabbitMQ, enabling colleagues to send campaigns 1 hour faster per cycle.",
      "Adopted Test-Driven Development, creating robust unit tests that reduced production issues and improved confidence in API and automation workflows.",
    ],
    logoSrc: "/images/csci-logo.jpeg",
  },
  {
    role: "Data Engineering Intern",
    company: "GF Fund Management",
    location: "Guangzhou, China",
    date: "Jul 2021 - Sep 2021",
    points: [
      "Optimized a fixed-income backtesting program, reducing compute time by ~99% via algorithmic and I/O improvements.",
      "Automated overseas index data ingestion from Bloomberg using Python, increasing reliability and reducing manual effort.",
      "Hardened the pipeline with validation checks and logging for faster failure detection and recovery.",
    ],
    logoSrc: "/images/gf-logo.jpg",
  },
];

export default function Experiences() {
  return (
    <Section id="experience" title="Professional Experiences">
      <StaggerContainer
        style={{
          display: "grid",
          gap: 28,
        }}
      >
        {experienceItems.map((item, i) => (
          <FadeInUp key={`${item.company}-${item.role}`}>
            <ExperienceItem key={i} {...item} />
          </FadeInUp>
        ))}
      </StaggerContainer>
    </Section>
  );
}
