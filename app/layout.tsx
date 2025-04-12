import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss"; // Import global styles
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import type { Metadata } from "next";

export const metadata = {
  title: "Yelvys Pet Projects",
  description: "This will house all my pet projects :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
