import styled from "styled-components";
import { hex2rgba } from "../utils/hex2rgba";

export const StyledHeader = styled.header`
  background: ${({ theme }) => hex2rgba(theme.colors.gray, 0.6)};
  padding: 1rem 2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccountContainer = styled.div`
  button {
    margin-left: 1rem;
  }
`;
