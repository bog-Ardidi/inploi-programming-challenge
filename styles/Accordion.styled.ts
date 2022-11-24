import styled, { css } from "styled-components";
import theme from "./theme";
import { hex2rgba } from "../utils/hex2rgba";

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

  // border closed
  border: ${({ active }) => (active ? "1px solid" : "none")};
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.white};

  //border open
  border-bottom-left-radius: ${({ active }) => active && 0};
  border-bottom-right-radius: ${({ active }) => active && 0};
  border-bottom-color: ${({ active }) => active && theme.colors.brown};
  transition: border 0.3s;

  &:hover {
    background-color: ${({ theme }) => hex2rgba(theme.colors.gray, 0.5)};
  }

  div {
    margin: 0 1rem;
  }
`;

export const StyledAccordionContent = styled.div<AccordionProps>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  // open animation
  opacity: ${({ active }) => (active ? "1" : "0")};
  max-height: ${({ active }) => (active ? "100%" : "0")};
  overflow: hidden;
  padding: ${({ active }) => (active ? "15px" : "0 15px")};
  transition: all 0.3s;
`;

export const AccordionContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  p {
    opacity: 1;
    font-size: medium;
  }
`;

export const RotateIcon = styled.div<AccordionProps>`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 0.6s ease-out;
  transform: ${({ active }) => (active ? `rotate(180deg)` : "")};
`;

interface ListProps {
  li?: Boolean;
}

const bulletPoint = css`
  border-width: 0 0 0 4px;
  border-style: solid;
  border-color: ${theme.colors.light_gray};
  padding-left: 0.5rem;
`;

export const ListEntry = styled.div<ListProps>`
  opacity: 0.8;

  div {
    user-select: none;
    display: inline-block;
    margin: 0.7rem 0;
    color: ${({ theme }) => theme.colors.dark_purple};
    ${({ li = false }) => li && bulletPoint}
  }
`;
