import styled from "styled-components";
import { hex2rgba } from "../utils/hex2rgba";

export const StyledHeader = styled.header`
  background: ${({ theme }) => hex2rgba(theme.colors.gray, 0.6)};
  padding: 1rem 2rem;
  height: 117px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-width: 5rem;
`;

export const AccountContainer = styled.div`
  button {
    margin-left: 1rem;
  }
`;
