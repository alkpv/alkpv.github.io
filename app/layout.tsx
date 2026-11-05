import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { PageIntro } from "@/components/page-intro";
import { introScript } from "@/lib/page-intro";

import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
  title: "Alisa Kopanieva",
  description: "Product designer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${robotoFlex.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <PageIntro />
        {children}
      </body>
    </html>
  );
}
