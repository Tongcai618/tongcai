import Section from "../ui/Section";
import type { CSSProperties } from "react";
import ExperienceItem from "../ui/ExperienceItem";


const experienceItems = [
    {
      role: "Full Stack Engineer",
      company: "Ti¢ker",
      location: "Boston, MA",
      date: "Jan 2025 - Aug 2025",
      points: [
        "Led mobile initiatives and mentored 5 junior developers via weekly tech talks and 1:1s, improving delivery quality and velocity.",
        "Designed a ticket management workflow that reduced assignment time by ~50% through clearer ownership and SLA rules.",
        "Built scalable backend services in Spring Boot + MongoDB + Redis using a layered (Controller–Service–Repository) architecture.",
        "Developed reusable React Native components and shared type definitions, standardizing UI and reducing duplication across features.",
      ],
      href: "https://www.linkedin.com/company/ti-kerapp/",
      logoSrc: "../../src/assets/ticker-logo.jpeg",
    },
    {
      role: "Automation Developer",
      company: "China Securities Credit Investment",
      location: "Shenzhen, China",
      date: "Jun 2022 - Sep 2022",
      points: [
        "Built a document-splitting pipeline that converts Excel master sheets into department-specific sub-tables aligned to company standards.",
        "Authored automation documentation and delivered staff training; improved onboarding and reduced support requests.",
        "Automated repetitive workflows, saving ~2 hours per run for the operations team.",
        "Implemented an automated email delivery tool with HTML-based templates, cutting manual dispatch time by ~1 hour per batch.",
      ],
      logoSrc: "../../src/assets/csci-logo.jpeg",
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
      logoSrc: "../../src/assets/gf-logo.jpg",
    },
  ];
  
export default function Experience() {
    return (
        <Section id="experience" title="Professional Experience">
            <div style={styles.timeline}>
                {experienceItems.map((item, i) => (
                    <ExperienceItem key={i} {...item} />
                ))}
            </div>
        </Section>
    );
}

const styles: { [k: string]: CSSProperties } = {
    timeline: {
        display: "flex",
        flexDirection: "column",
        gap: "32px",
    },
};
