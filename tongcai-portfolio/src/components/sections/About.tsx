import Section from "../ui/Section";
import type { CSSProperties } from "react";
import { colors } from "../../styles/colors";
import Card from "../ui/Card";
import PhotoContainer from "../ui/PhotoContainer";

export default function About() {
    return (
        <Section id="about" title="About Me" layout="row" >
            <Card>
                <p style={styles.p}>
                    I am an aspiring software engineer and MS in Computer Science candidate at Northeastern University,
                    with a strong foundation in full-stack development, system design, and data-driven problem solving.
                    My technical expertise spans Java, Python, TypeScript, and
                    C#, complemented by a finance background that sharpens my ability to align technology solutions with business needs.
                </p>
                <p style={styles.p}>
                    At Ticker, I led backend and mobile initiatives in a fast-paced startup environment, building
                    scalable services with Spring Boot and MongoDB and shipping reusable components in React Native.
                    I containerized services with Docker and deployed them on Kubernetes (managed via Helm), enabling
                    rolling updates and horizontal scaling. I also introduced Redis for caching and session/state
                    management to reduce latency, and paired it with message queues (e.g., RabbitMQ) for reliable,
                    asynchronous workflows across the system.
                </p>

            </Card>
            <PhotoContainer
                src="/images/Me.png"
                alt="Tong Cai"
                size={400}
                rounded
                shadow
            />
        </Section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    paragraphs: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
    },
    p: {
        fontSize: "1rem",
        lineHeight: 1.7,
        color: colors.textSecondary,
        margin: 0,
    },
};
