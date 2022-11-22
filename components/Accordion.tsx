import React, { useState } from "react";
import {
  AccordionCard,
  AccordionTitle,
  AccordionContent,
} from "../styles/Accordion.styled";
import { IoIosArrowDown } from "react-icons/io";
import { RotateIcon } from "../styles/Accordion.styled";
import { useRouter } from "next/router";

interface AccordionProps {
  title: string;
  content: string;
}

// { title, content }: AccordionProps

const Accordion = ({ hit }: any) => {
  const [isActive, setIsActive] = useState<Boolean>(false);

  const id = hit.id;
  const router = useRouter();

  const relocate = () => {
    router.push(`/jobs/${id}`);
  };

  return (
    <AccordionCard>
      <AccordionTitle active={isActive} onClick={() => setIsActive(!isActive)}>
        <div>{hit.company_name}</div>
        <RotateIcon active={isActive}>
          <IoIosArrowDown />
        </RotateIcon>
      </AccordionTitle>
      <AccordionContent active={isActive}>{hit.id}</AccordionContent>
      <button onClick={relocate}>hello</button>
    </AccordionCard>
  );
};

export default Accordion;
