import {
  HrDot,
  JobCardContainer,
  JobCardInfo,
} from "../../styles/JobCard.styled";
import { JobDataType } from "../../types/jobs";
import { exists } from "../../utils/exists";
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
        <img src={hit.company_logo ?? "logo.png"} alt="" />
        <AccordionList
          li={true}
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
        li={true}
        items={[
          { key: "Company", value: "White label resources" },
          { key: "Industry", value: "Financial services" },
          { key: "Status", value: "Live" },
          {
            key: "Job posted",
            value: new Date().toLocaleTimeString("en-GB"),
          },
        ]}
      />
    </JobCardContainer>
  );
}
