import styled from "styled-components";
import theme from "./theme";

interface AccordionProps {
  active: Boolean;
}

export const AccordionCard = styled.div`
  padding: 1rem;
`;

export const AccordionTitle = styled.div<AccordionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  // border when closed
  border: ${(props: any) => (props.active ? "1px solid" : "none")};
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.white};

  //border open
  border-bottom-left-radius: ${(props: any) => props.active && 0};
  border-bottom-right-radius: ${(props: any) => props.active && 0};
  border-bottom-color: ${(props: any) => props.active && theme.colors.brown};
  transition: border 0.3s;

  &:hover {
    background-color: rgba(51, 51, 51, 0.5);
  }

  div {
    margin: 0 1rem;
  }
`;

export const AccordionContent = styled.div<AccordionProps>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  // open animation
  opacity: ${(props) => (props.active ? "1" : "0")};
  max-height: ${(props) => (props.active ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.active ? "15px" : "0 15px")};
  transition: all 0.3s;
`;

export const RotateIcon = styled.div<AccordionProps>`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.6s ease-out;
  transform: ${(props) => (props.active ? `rotate(180deg)` : "")};
`;
