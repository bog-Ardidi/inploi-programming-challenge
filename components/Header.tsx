import { StyledHeader, Nav, Logo } from "../styles/Header.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="logo.png" alt="" />
        <div>
          <Link href={`/jobs`}>
            <Button primary={false}>Login</Button>
          </Link>
          <Button primary={true}>register</Button>
        </div>
      </Nav>
    </StyledHeader>
  );
}
