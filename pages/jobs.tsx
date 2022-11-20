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
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>

          <details>
            <summary>Open Me</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, provident.
            </p>
          </details>
        </HomeContainer>
      </Layout>
    </Background>
  );
}
