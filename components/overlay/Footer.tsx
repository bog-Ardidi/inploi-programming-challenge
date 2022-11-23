import { StyledFooter } from "../../styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2022 Jobberinio. All rights reserved</p>
      <SocialIcons />
    </StyledFooter>
  );
}
