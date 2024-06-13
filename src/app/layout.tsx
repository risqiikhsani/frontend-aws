import "./globals.css";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import AppBar from "@/components/appbar";
import LeftAppBar from "@/components/left-app-bar";
import RightAppBar from "@/components/right-app-bar";
import { Toaster } from 'sonner'
import { AuthHandler } from "@/context/auth";
import ReactQueryClientProvider from "@/context/react-query-client-provider";
import { AppHandler } from "@/context/app";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Health4us",
  description: "Your community forum for healthcare related topic",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ReactQueryClientProvider>

          <AuthHandler>
          <AppHandler>
          <Toaster richColors />
          <div className="flex-col ">
            <AppBar />
            {children}
          </div>
          </AppHandler>
          </AuthHandler>

        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

