import Footer from "@/components/Footer/footer";
import Header from "../components/Header/header";
import "./globals.css";

export const metadata = {
  title: "Ecommerce Website",
  description: "Generated by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
