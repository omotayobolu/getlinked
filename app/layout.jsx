import Nav from "@components/Nav";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "getlinked",
  description: "getlinked Tech Hackathon 1.0",
  keywords: "hackathon",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
