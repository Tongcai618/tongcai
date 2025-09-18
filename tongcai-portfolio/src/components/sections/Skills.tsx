import { StaggerContainer } from "../ui/StaggerContainer";
import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";
import { FadeInUp } from "../animations/FadeInUp";
import SkillsGrid from "../ui/SkillGrid";

const skillCategories = {
  Languages: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C#", "C"],
  Frontend: ["React", "React Native", "HTML", "CSS", "Vite", "Expo"],
  Backend: ["Spring Boot", "Node.js", "Express", "MongoDB", "Redis", "RabbitMQ"],
  "DevOps & Tools": ["Git", "Docker", "Postman", "AWS EC2", "Kubernetes"],
};

const skills = [
  { name: "Java", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Python", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "JavaScript", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "AWS", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "GCP", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Kubernetes", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "MongoDB", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Linux", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Redis", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "RabbitMQ", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
  { name: "C#", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Vite", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "Expo", iconSrc: "https://cdn.simpleicons.org/expo/000000" },
  { name: "PyTorch", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
];

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
      <SkillsGrid title="Skills" items={skills} />;
    </Section>
  );
}
