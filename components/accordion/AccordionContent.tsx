import {
  StyledAccordionContent,
  AccordionContentFooter,
} from "../../styles/Accordion.styled";
import { Button } from "../../styles/Button.styled";
import { Hit } from "../../types/jobs";
import { useRouter } from "next/router";
import { exists } from "../../utils/exists";
import AccordionList from "./AccordionList";

interface AccordionContentProps {
  isActive: Boolean;
  hit: Hit;
}

// this component represents the card that is shown when
// an accordion open
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
      <AccordionList
        items={[
          { key: "👲 Position", value: exists(hit.title) },
          { key: "🏢 Company", value: exists(hit.company_name) },
          { key: "🏭 Industry", value: exists(hit.industry) },
          {
            key: "📆 Job posted",
            value: exists(
              new Date(hit.published_at).toLocaleDateString("en-GB")
            ),
          },
          { key: "💷 Payment", value: exists(hit.pay) },
        ]}
      />

      <AccordionContentFooter>
        <p>
          <>
            Location: &ensp;
            {exists(hit.city)}, {exists(hit.country)}
          </>
        </p>
        <Button scale={0.8} primary onClick={relocate}>
          More info
        </Button>
      </AccordionContentFooter>
    </StyledAccordionContent>
  );
}
