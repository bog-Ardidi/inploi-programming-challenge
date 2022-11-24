import React, { useState } from "react";
import { AccordionCard, AccordionTitle } from "../../styles/Accordion.styled";
import AccordionContent from "./AccordionContent";
import { IoIosArrowDown } from "react-icons/io";
import { RotateIcon } from "../../styles/Accordion.styled";

// this component represents a single accordion item
const Accordion = (hit: any) => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  const { id } = hit;

  return (
    <AccordionCard>
      <AccordionTitle active={isActive} onClick={() => setIsActive(!isActive)}>
        <div>
          {hit.title} - {hit.company_name}
        </div>
        <RotateIcon active={isActive}>
          <IoIosArrowDown />
        </RotateIcon>
      </AccordionTitle>
      <AccordionContent isActive={isActive} hit={hit} />
    </AccordionCard>
  );
};

export default Accordion;
