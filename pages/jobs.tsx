import { accordionData } from "../content";
import Accordion from "../components/Accordion";
import { Container, HomeTitle } from "../styles/HomeComponents.styled";
import Layout from "../components/Layout";
import { Background } from "../styles/Background.styled";
import { JobsTitle } from "../styles/JobsComponents.styled";

interface JobsProps {
  query: string;
}

export default function Jobs({ query = "software engineer" }: JobsProps) {
  return (
    <Background>
      <Layout>
        <Container>
          <JobsTitle>
            Job openings for 💼
            <div>"{query}"</div>
          </JobsTitle>
          {accordionData.map(({ title, content }, index) => (
            <Accordion key={index} title={title} content={content} />
          ))}
        </Container>
      </Layout>
    </Background>
  );
}
