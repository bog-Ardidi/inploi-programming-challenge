import styled from "styled-components";
import Layout from "../components/Layout";
import { BackgroundGradient } from "../styles/Background.styled";
import {
  HomeContainer,
  HomeTitle,
  HomeSearchBox,
} from "../styles/HomeComponents.styled";

export default function Home() {
  return (
    <BackgroundGradient>
      <Layout>
        <HomeContainer>
          <HomeTitle>
            Find a job you love 🐸 <br /> with Jobberinio.
          </HomeTitle>
          <HomeSearchBox
            type="text"
            required
            placeholder="Find your next job.."
          />
        </HomeContainer>
      </Layout>
    </BackgroundGradient>
  );
}
