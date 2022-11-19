import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}
