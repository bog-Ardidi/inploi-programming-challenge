import styled from "styled-components";
import theme from "./theme";

interface AccordionProps {
  active: Boolean;
}

export const AccordionCard = styled.div`
  padding: 2rem;
`;

export const AccordionTitle = styled.div<AccordionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  // border when closed
  border: 1px solid black;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.white};

  //border open
  border-bottom-left-radius: ${(props: any) => props.active && 0};
  border-bottom-right-radius: ${(props: any) => props.active && 0};
  border-bottom-color: ${(props: any) => props.active && theme.colors.brown};

  &:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }
`;

export const AccordionContent = styled.div<AccordionProps>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
