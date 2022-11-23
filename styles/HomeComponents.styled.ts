import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 65%;
  height: calc(100% - 117px);
  overflow: scroll;

  li {
    list-style: none;
  }
`;

export const HomeTitle = styled.h1`
  padding: 4rem;
  font-size: 3vw;
  white-space: pre-line;
  user-select: none;
`;

export const HomeSearchBox = styled.input`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  font-size: large;
`;
