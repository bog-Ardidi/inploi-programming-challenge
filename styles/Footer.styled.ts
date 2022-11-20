import styled from "styled-components";

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

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
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
    height: 40px;
    width: 30px;
    text-decoration: none;
  }
`;
