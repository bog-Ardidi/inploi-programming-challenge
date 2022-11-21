import styled from "styled-components";

export const StyledHeader = styled.header`
  background: rgba(51, 51, 51, 0.6);
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
