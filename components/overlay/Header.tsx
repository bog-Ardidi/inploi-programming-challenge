import {
  StyledHeader,
  Nav,
  AccountContainer,
} from "../../styles/Header.styled";
import { Button } from "../../styles/Button.styled";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link href="/">
          <Image src="/logo.png" alt="" width={80} height={80} />
        </Link>
        <AccountContainer>
          <Button primary={false}>Login</Button>
          <Button primary>Register</Button>
        </AccountContainer>
      </Nav>
    </StyledHeader>
  );
}
