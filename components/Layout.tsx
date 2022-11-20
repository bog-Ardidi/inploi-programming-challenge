import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      {children}
    </>
  );
}
