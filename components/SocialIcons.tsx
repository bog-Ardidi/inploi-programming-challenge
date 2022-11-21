import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "../styles/Footer.styled";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <p>Find us on:</p>
      <li>
        <a href="https://twitter.com">
          <FaTwitter size="2x" />
        </a>
      </li>

      <li>
        <a href="https://facebook.com">
          <FaFacebook size="2x" />
        </a>
      </li>

      <li>
        <a href="https://linkedin.com">
          <FaLinkedin size="2x" />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
