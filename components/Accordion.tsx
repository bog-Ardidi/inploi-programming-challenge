import React, { useState } from "react";
import {
  AccordionCard,
  AccordionTitle,
  AccordionContent,
} from "../styles/Accordion.styled";

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
        <div>{isActive ? "-" : "+"}</div>
      </AccordionTitle>
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </AccordionCard>
  );
};

export default Accordion;
