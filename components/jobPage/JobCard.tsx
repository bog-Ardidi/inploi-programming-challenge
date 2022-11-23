import { JobCardContainer, JobCardInfo } from "../../styles/JobCard.styled";

export default function JobCard() {
  return (
    <JobCardContainer>
      <h2>Software engineer</h2>

      <JobCardInfo>
        <img
          src="https://via.placeholder.com/640x480.png/009988?text=corrupti"
          alt=""
        />
        <div>
          <li>
            Company name: <p>White Label Resources</p>
          </li>
          <li>
            <strong> Industry: </strong>
            Financial services
          </li>
          <li>
            <strong> Status: </strong>
            Available
          </li>
        </div>
      </JobCardInfo>
    </JobCardContainer>
  );
}
