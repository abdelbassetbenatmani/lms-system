"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeProvider from "./utils/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/Redux/Features/Api/ApiSlice";
import Loader from "@/components/Loader/Loader";
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
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>
              {children}
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

const Custom:React.FC<{children:React.ReactNode}> = ({ children }) => {
  const {isLoading} = useLoadUserQuery({})
  return (
    <>
      {
        isLoading ? (
          <Loader/>
        ):(<>{children}</>)
      }
    </>
  )
}