import { StyledHeader, Nav, Logo } from "../styles/Header.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link href="/">
          <Logo src="logo.png" alt="" />
        </Link>
        <div>
          <Link href={`/jobs`}>
            <Button primary={false}>Login</Button>
          </Link>
        </div>
      </Nav>
    </StyledHeader>
  );
}
