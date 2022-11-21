import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 60%;
  height: calc(100% - 117px);
  overflow: scroll;
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
  border-color: #adb5bd;
  font-size: large;
`;
