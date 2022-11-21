import styled from "styled-components";

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  background: rgba(51, 51, 51, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: small;
    margin-left: 1rem;
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
  }
`;
