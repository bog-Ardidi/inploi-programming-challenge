import Header from "./Header";
import Footer from "./Footer";
import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
