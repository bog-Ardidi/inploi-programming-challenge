import styled from "styled-components";
import theme from "./theme";

export const BackgroundGradient = styled.div`
  background: radial-gradient(
    farthest-corner at 40px 200px,
    #f0e6ef,
    #b8bedd,
    #efc3e6,
    #f0a6ca,
    #9c89b8
  );
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const Background = styled.div`
  background: #f0f2ea;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;
