import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import type { CSSProperties } from "react";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div style={styles.projectList}>

        <ProjectCard
          title="Wordle Game"
          description="A TypeScript-based Wordle clone with a clean UI, global leaderboard, and persistent game state—backed by a Spring Boot API with JWT-based authentication (login/signup). Deployed on AWS EC2 with ALB."
          techStack={["React", "TypeScript", "CSS Modules", "Spring Boot", "JWT", "AWS EC2", "Nginx"]}
          link="https://tongcai618.github.io/Wordle-Game-TypeScript/"
          image="../../src/assets/wordle-photo.png"
        />


        <ProjectCard
          title="Husky Life"
          description="A student-focused campus companion app designed to help Northeastern students explore campus facilities and manage their daily schedules. Features include interactive campus maps, class and event scheduling, and personalized daily planning."
          techStack={["Swift", "Firebase"]}
          link="https://github.com/ZeehanXu/HuskyLife"
          image="../../src/assets/huskylife-photo.png"
        />

      </div>
    </Section>
  );
}

const styles: { [key: string]: CSSProperties } = {
  projectList: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  },
};
