import styled from "styled-components";
import { hex2rgba } from "../utils/hex2rgba";

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  background: ${({ theme }) => hex2rgba(theme.colors.gray, 0.1)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: small;
    margin-left: 1rem;
    user-select: none;
  }
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.gray};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
    height: 30px;
    width: 30px;
    text-decoration: none;
  }

  p {
    margin-right: 0.5rem;
    user-select: none;
  }
`;
