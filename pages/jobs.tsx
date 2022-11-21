import { accordionData } from "../content";
import Accordion from "../components/Accordion";
import { HomeContainer } from "../styles/HomeComponents.styled";
import Layout from "../components/Layout";
import { Background } from "../styles/Background.styled";

export default function Jobs() {
  return (
    <Background>
      <Layout>
        <HomeContainer>
          <h1>React Accordion</h1>
          <div className="accordion">
            {accordionData.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </HomeContainer>
      </Layout>
    </Background>
  );
}
