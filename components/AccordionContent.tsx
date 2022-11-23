import {
  StyledAccordionContent,
  AccordionContentFooter,
} from "../styles/Accordion.styled";
import { Button } from "../styles/Button.styled";
import { Hit } from "../types/jobs";
import { useRouter } from "next/router";

interface AccordionContentProps {
  isActive: Boolean;
  hit: Hit;
}

export default function AccordionContent({
  isActive,
  hit,
}: AccordionContentProps) {
  const router = useRouter();

  const relocate = () => {
    router.push(`/jobs/${hit.id}`);
  };

  return (
    <StyledAccordionContent active={isActive}>
      <p>{hit.description}</p>

      <AccordionContentFooter>
        <p>
          <strong>Location: </strong>
          {hit.city}, {hit.country}
        </p>
        <Button scale={0.8} primary onClick={relocate}>
          More info
        </Button>
      </AccordionContentFooter>
    </StyledAccordionContent>
  );
}
