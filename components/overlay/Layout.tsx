import GlobalStyle from "../../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
}
