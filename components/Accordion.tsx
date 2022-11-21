import React, { useState } from "react";
import {
  AccordionCard,
  AccordionTitle,
  AccordionContent,
} from "../styles/Accordion.styled";
import { IoIosArrowDown } from "react-icons/io";
import { RotateIcon } from "../styles/Accordion.styled";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <AccordionCard>
      <AccordionTitle active={isActive} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <RotateIcon active={isActive}>
          <IoIosArrowDown />
        </RotateIcon>
      </AccordionTitle>
      <AccordionContent active={isActive}>{content}</AccordionContent>
    </AccordionCard>
  );
};

export default Accordion;
