import { Rubik } from "next/font/google";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${rubik.variable} font-rubik  min-h-screen relative overflow-x-hidden`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
