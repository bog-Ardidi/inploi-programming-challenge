import styled from "styled-components";

export const JobCardContainer = styled.div`
  margin: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  min-height: 85%;

  // text-color: #272343;

  h2 {
    text-decoration: underline;
    margin-bottom: 3rem;
  }

  p {
    display: inline;
  }
`;

export const JobCardInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin: 2rem;

  img {
    max-width: 12rem;
    border-radius: 20px;
    margin-right: 2rem;
    user-select: none;
  }
`;
