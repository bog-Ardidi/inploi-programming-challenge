import styled from "styled-components";

export const JobsTitle = styled.h1`
  padding: 1rem;
  user-select: none;

  div {
    font-size: large;
    padding-top: 1rem;
    padding-bottom: 2rem;
    user-select: text;
  }
`;

export const JobsSearchBox = styled.input`
  width: 50%;
  padding: 0.5rem;
  border-style: solid;
  border-color: #adb5bd;
  font-size: large;
  margin-bottom: 2rem;
`;

export const SearchContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};

  p {
    margin: 0;
  }
`;
