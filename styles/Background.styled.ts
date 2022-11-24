import styled, { css } from "styled-components";
import theme from "./theme";
import { hex2rgba } from "../utils/hex2rgba";

interface BackgroundProps {
  home?: Boolean;
}

const homeGr = css`
  background: radial-gradient(
    farthest-corner at 40px 200px,
    ${theme.colors.lavender_blush},
    ${theme.colors.light_periwinkle},
    ${theme.colors.pink_lavender},
    ${theme.colors.kobi},
    ${theme.colors.glossy_grape}
  );
`;

const pageGr = css`
  background: linear-gradient(
    120deg,
    ${hex2rgba(theme.colors.glossy_grape)},
    ${hex2rgba(theme.colors.lavender_blush, 0.8)} 50%,
    ${hex2rgba(theme.colors.glossy_grape, 0.6)} 90%
  );
`;

export const BackgroundGradient = styled.main<BackgroundProps>`
  display: grid;
  grid-template-rows: min-content auto 45px;

  ${({ home = false }) => (home ? homeGr : pageGr)};

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-rows: min-content auto 83px;
  }
`;
