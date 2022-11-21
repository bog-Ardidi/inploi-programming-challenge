import {
  StyledHeader,
  Nav,
  Logo,
  AccountContainer,
} from "../styles/Header.styled";
import { Button } from "../styles/Button.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link href="/">
          <Logo src="logo.png" alt="" />
        </Link>
        <AccountContainer>
          <Link href={`/jobs`}>
            <Button primary={false}>Login</Button>
          </Link>
          <Button primary>Register</Button>
        </AccountContainer>
      </Nav>
    </StyledHeader>
  );
}
