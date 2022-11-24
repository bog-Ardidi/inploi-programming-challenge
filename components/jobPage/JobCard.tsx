import { Button } from "../../styles/Button.styled";
import {
  HrDot,
  JobCardContainer,
  JobCardInfo,
  JobCardFooter,
} from "../../styles/JobCard.styled";
import { JobDataType } from "../../types/jobs";
import { exists } from "../../utils/exists";
import { SanitizeHTML } from "../../utils/sanitize";
import AccordionList from "../accordion/AccordionList";

interface JobCardProps {
  data: JobDataType;
}

export default function JobCard({ data: { hits } }: JobCardProps) {
  const hit = hits[0];

  return (
    <JobCardContainer>
      <h2>{hit.title}</h2>
      <JobCardInfo>
        <img src={hit.company_logo ?? "/logo.png"} alt="" />
        <AccordionList
          li
          items={[
            { key: "Company", value: exists(hit.company_name) },
            { key: "Industry", value: "Financial services" },
            { key: "Status", value: "Live" },
            {
              key: "Job posted",
              value: new Date().toLocaleTimeString("en-GB"),
            },
          ]}
        />
      </JobCardInfo>
      <HrDot />
      <AccordionList
        li
        items={[
          { key: "Employment", value: exists(hit.employment_type) },
          { key: "Location", value: exists(hit.location_type) },
          { key: "Address 1", value: exists(hit.address_1) },
          { key: "Address 2", value: exists(hit.address_2) },
          { key: "Postcode", value: exists(hit.postcode) },
          { key: "Pay", value: exists(hit.pay) },
          {
            key: "Job posted",
            value: exists(
              new Date(hit.published_at).toLocaleDateString("en-GB")
            ),
          },
          { key: "Description", value: "" },
        ]}
      />
      <SanitizeHTML html={hit.description} />

      <JobCardFooter>
        {hit.apply_url ? (
          <a href={hit.apply_url}>
            <Button primary={false}>Apply now!</Button>
          </a>
        ) : (
          <>No application link provided.</>
        )}
      </JobCardFooter>
    </JobCardContainer>
  );
}
