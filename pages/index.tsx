import styled from "styled-components";
import Layout from "../components/Layout";
import { BackgroundGradient } from "../styles/BackgroundGradient.styled";
import { TestContainer } from "../styles/test";

export default function Home() {
  return (
    <BackgroundGradient>
      <Layout>
        <TestContainer>
          <h1>hello worldss</h1>
          <h1>goodbye universe</h1>
          <h1>ave maria</h1>
        </TestContainer>
      </Layout>
    </BackgroundGradient>
  );
}
