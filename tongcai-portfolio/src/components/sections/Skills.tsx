import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";

const skillCategories = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  Frontend: ["React", "React Native", "HTML", "CSS", "Vite", "Expo"],
  Backend: ["Spring Boot", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ"],
  "DevOps & Tools": ["Git", "Docker", "Postman", "AWS EC2"],
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px",
        }}
      >
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </Section>
  );
}
