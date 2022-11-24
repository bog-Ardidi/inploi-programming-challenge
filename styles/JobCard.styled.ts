import styled from "styled-components";

export const JobCardContainer = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.light_gray};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  min-height: 85%;
  text-align: left;

  h2 {
    text-decoration: underline;
    margin-bottom: 3rem;
    text-align: center;
  }

  p {
    display: inline;
  }
`;

export const JobCardInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  img {
    max-width: 13rem;
    border-radius: 5px;
    margin-right: 2rem;
    user-select: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    img {
      margin-bottom: 2rem;
    }
  }
`;

export const HrDot = styled.hr`
  border-width: 4px 0 0 0;
  border-style: dotted;
  border-color: ${({ theme }) => theme.colors.light_periwinkle};
  margin-bottom: 1rem;
`;

export const JobCardFooter = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark_red};
`;
