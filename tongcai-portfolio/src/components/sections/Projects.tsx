import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built or contributed to">
      <div className="project-list">
        <ProjectCard
          title="Ti¢ker App"
          description="A stock trading social app that allows users to follow, post, and track real-time trading data."
          techStack={["React Native", "Spring Boot", "MongoDB", "Redis", "RabbitMQ"]}
          link="https://ticker.com"
        />

        <ProjectCard
          title="Wordle Game"
          description="A TypeScript-based clone of Wordle with clean design, leaderboard, and state persistence."
          techStack={["React", "TypeScript", "CSS Modules"]}
          link="https://tongcai618.github.io/Wordle-Game-TypeScript/"
        />
      </div>
    </Section>
  );
}
