import styled, { css } from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  text-align: center;
  width: 70%;
  flex: 1;
  overflow: scroll;

  li {
    list-style: none;
  }

  ul {
    padding: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const HomeTitle = styled.h1`
  padding: 4rem;
  font-size: calc(18px + 2vw);
  white-space: pre-line;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 2rem;
  }
`;

const searchBorder = css`
  border-radius: 10px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  padding: 2rem;
  font-size: large;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    font-size: medium;
  }
`;

export const HomeSearchBox = styled.input`
  width: 90%;

  ${searchBorder};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &: focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  justify-content: "center",
  align-items: "center";
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.cyan};
  color: ${({ theme }) => theme.colors.white};

  ${searchBorder}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0; 
`;

export const JobInputForm = styled.form`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 1rem;
  }
`;
