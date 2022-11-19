import { StyledHeader, Nav, Logo } from "../styles/Header.styled";
import { Button } from "../styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="logo.png" alt="" />
        <Button primary={false}>Login</Button>
        <Button primary={true}>register</Button>
      </Nav>
    </StyledHeader>
  );
}
