import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Travel With Hiren | Next js 15",
  description: "Travel Landing page using next js 15",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Responsive/>
        {children}
        </body>
    </html>
  );
}
