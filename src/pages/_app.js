import { Rubik } from "next/font/google";
import "@/styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${rubik.variable} font-rubik  min-h-screen relative overflow-x-hidden`}
    >
      <Component {...pageProps} />
    </main>
  );
}
