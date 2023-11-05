"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "./utils/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./Provider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} !bg-white dark:bg-primary dark:from-grey dark:to-primary duration-300`}>
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster position="top-center" reverseOrder={false} />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
