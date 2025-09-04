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
          techStack={["React", "TypeScript", "Spring Boot", "JWT Authentication", "AWS EC2", "Nginx", "REST API"]}
          link="https://tongcai618.github.io/Wordle-Game-TypeScript/"
          image="../../src/assets/wordle-photo.png"
        />


        <ProjectCard
          title="Husky Life"
          description="A student-focused campus companion app designed to help Northeastern students explore campus facilities and manage their daily schedules. Features include interactive campus maps, class and event scheduling, and personalized daily planning."
          techStack={["Swift (SwiftUI)", "Firebase Firestore", "Firebase Auth"]}
          link="https://github.com/ZeehanXu/HuskyLife"
          image="../../src/assets/huskylife-photo.png"
        />

        <ProjectCard
          title="A Bagging Long Short-term Memory Network for Financial Transmission Rights Forecasting"
          description="Proposed a new bagging method to improve financial transmission rights (FTRs) forecasting using long short-term memory (LSTM) networks. Served as the first author of the paper 'A Bagging Long Short-term Memory Network for Financial transmission Rights Forecasting,' which was accepted by IEEE eGrid 2022."
          techStack={["Python", "TensorFlow", "LSTM", "Time Series Forecasting"]}
          link="https://ieeexplore.ieee.org/document/9990015"
          image="../../src/assets/paper-photo.png"
        />

        <ProjectCard
          title="Goblin Mode -- A 3D Stealth Game"
          description="A fully immersive 3D stealth game where players take on the role of a mischievous goblin tasked with stealing treasures, evading intelligent enemy AI, and solving environmental puzzles. Features dynamic lighting for stealth mechanics, customizable enemy patrol behaviors, and engaging level design built to challenge problem-solving and strategy."
          techStack={["Unity Engine", "C# Scripting", "NavMesh AI", "Lighting & Shader Graph", "Git"]}
          link="https://www.youtube.com/watch?v=fojG9m1u6gw"
          image="../../src/assets/goblin-photo.png"
        />

      </div>
    </Section>
  );
}

const styles: { [key: string]: CSSProperties } = {
  projectList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // ⬅️ always 2 per row
    gap: "32px",
    marginTop: "24px",
    alignItems: "stretch",
  },
};
