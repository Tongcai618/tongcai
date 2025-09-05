import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import { StaggerContainer } from "../ui/StaggerContainer";
import { FadeInUp } from "../animations/FadeInUp"; // optional

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Wordle Game",
    description:
      "A TypeScript-based Wordle clone with a clean UI, global leaderboard, and persistent game state—backed by a Spring Boot API with JWT-based authentication (login/signup). Deployed on AWS EC2 with ALB.",
    techStack: ["React", "TypeScript", "Spring Boot", "JWT Authentication", "AWS EC2", "Nginx", "REST API"],
    link: "https://tongcai618.github.io/Wordle-Game-TypeScript/",
    image: "/images/wordle-photo.png",
  },
  {
    title: "Husky Life",
    description:
      "A student-focused campus companion app designed to help Northeastern students explore campus facilities and manage their daily schedules. Features include interactive campus maps, class and event scheduling, and personalized daily planning.",
    techStack: ["Swift (SwiftUI)", "Firebase Firestore", "Firebase Auth"],
    link: "https://github.com/ZeehanXu/HuskyLife",
    image: "/images/huskylife-photo.png",
  },
  {
    title:
      "A Bagging Long Short-term Memory Network for Financial Transmission Rights Forecasting",
    description:
      "Proposed a new bagging method to improve financial transmission rights (FTRs) forecasting using long short-term memory (LSTM) networks. First author; accepted by IEEE eGrid 2022.",
    techStack: ["Python", "TensorFlow", "LSTM", "Time Series Forecasting"],
    link: "https://ieeexplore.ieee.org/document/9990015",
    image: "/images/paper-photo.png",
  },
  {
    title: "Goblin Mode — A 3D Stealth Game",
    description:
      "A fully immersive 3D stealth game with dynamic lighting for stealth mechanics, customizable enemy patrols (NavMesh), and puzzle-driven level design.",
    techStack: ["Unity Engine", "C# Scripting", "NavMesh AI", "Lighting & Shader Graph", "Git"],
    link: "https://www.youtube.com/watch?v=fojG9m1u6gw",
    image: "/images/goblin-photo.png",
  },
] as const;

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <StaggerContainer
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
        }}
      >
        {projects.map((p) => (
          <FadeInUp key={p.title}>
            <ProjectCard
              title={p.title}
              description={p.description}
              techStack={p.techStack}
              link={p.link}
              image={p.image}
            />
          </FadeInUp>
        ))}
      </StaggerContainer>
    </Section>
  );
}
