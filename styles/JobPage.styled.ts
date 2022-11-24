import styled from "styled-components";

export const JobsTitle = styled.h1`
  padding: 1rem;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0rem;
  }
`;

export const JobsSearchBox = styled.input`
  width: 45%;
  padding: 0.5rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  font-size: large;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }
`;

export const SearchContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  backdrop-filter: blur(10px);
  z-index: 10000;

  p {
    margin-top: 0rem;
    font-size: small;
  }
`;
