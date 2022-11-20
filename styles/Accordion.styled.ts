import styled from "styled-components";

interface AccordionTitleProps {
  active: Boolean;
}

export const AccordionCard = styled.div`
  padding: 2rem;
`;

export const AccordionTitle = styled.div<AccordionTitleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  // border when closed
  border: 1px solid black;
  border-radius: 10px;
  border-color: white;

  //border open
  border-bottom-left-radius: ${(props: any) => props.active && 0};
  border-bottom-right-radius: ${(props: any) => props.active && 0};
  border-bottom-color: ${(props: any) => props.active && "black"};

  &:hover {
    background-color: #333;
  }
`;

export const AccordionContent = styled.div`
  background-color: white;
  padding: 1rem;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  transition: 2s;
`;
