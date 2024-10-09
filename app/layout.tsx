import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "fab paper proxies",
  description: "A site to generate some paper proxies for flesh & blood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${afacad.className} text-black dark:text-white bg-white dark:bg-slate-950 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
