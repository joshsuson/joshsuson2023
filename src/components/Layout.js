import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav setOpen={setOpen} open={open} />
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col lg:justify-between">
        <Header setOpen={setOpen} />
        {children}
        <Footer />
      </div>
    </>
  );
}
