import { StaggerContainer } from "../ui/StaggerContainer";
import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";
import { FadeInUp } from "../animations/FadeInUp";

const skillCategories = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C#", "C"],
  Frontend: ["React", "React Native", "HTML", "CSS", "Vite", "Expo"],
  Backend: ["Spring Boot", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ"],
  "DevOps & Tools": ["Git", "Docker", "Postman", "AWS EC2", "Kubernetes"],
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <StaggerContainer
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 60,
        }}
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <FadeInUp key={category}>
            <SkillCard key={category} category={category} skills={skills} />
          </FadeInUp>

        ))}
      </StaggerContainer>
    </Section>
  );
}
