import styled from "styled-components";

export const JobsTitle = styled.h1`
  padding: 1rem;
  user-select: none;
`;

export const JobsSearchBox = styled.input`
  width: 50%;
  padding: 0.5rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  font-size: large;
`;

export const SearchContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};

  p {
    margin-top: 0rem;
    font-size: small;
  }
`;
