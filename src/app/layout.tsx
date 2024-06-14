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
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider } from "@/components/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <ReactQueryClientProvider>

            <AuthHandler>
              <AppHandler>
                <Toaster richColors />
                <div className="flex-col bg-gradient-to-r from-cyan-50 to-cyan-200 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">
                  <AppBar />
                  {children}
                </div>
              </AppHandler>
            </AuthHandler>

          </ReactQueryClientProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}

