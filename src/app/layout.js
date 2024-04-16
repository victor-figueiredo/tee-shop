import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Footer from "@/components/Footer";
import { AppWrapper } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tee Shop",
  description: "Tee Shop - Dress your taste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <HeaderTop />
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
