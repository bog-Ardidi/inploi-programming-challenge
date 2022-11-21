import styled from "styled-components";
import theme from "./theme";

export const BackgroundGradient = styled.div`
  background: radial-gradient(
    farthest-corner at 40px 200px,
    ${theme.colors.lavender_blush},
    ${theme.colors.light_periwinkle},
    ${theme.colors.pink_lavender},
    ${theme.colors.kobi},
    ${theme.colors.glossy_grape}
  );
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.light_brown};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
`;
