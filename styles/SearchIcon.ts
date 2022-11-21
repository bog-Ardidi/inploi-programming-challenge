import styled, { css } from "styled-components";

export const Flip = styled.div`
  background-color: transparent;
  width: 42px;
  height: 42px;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const FlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const cardSides = css`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const FlipFront = styled.div`
  background-color: transparent;
  ${cardSides}
`;

export const FlipBack = styled.div`
  background-color: transparent;
  transform: rotateY(180deg);
  ${cardSides}
`;
