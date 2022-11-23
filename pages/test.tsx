import JobCard from "../components/JobCard";
import Layout from "../components/Layout";
import { BackgroundGradient } from "../styles/Background.styled";
import { Container } from "../styles/HomeComponents.styled";

export default function Test() {
  return (
    <BackgroundGradient>
      <Layout>
        <Container>
          <JobCard />
        </Container>
      </Layout>
    </BackgroundGradient>
  );
}
