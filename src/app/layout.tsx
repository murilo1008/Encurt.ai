import "@/styles/globals.css";

import { Nunito } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";

const fontFamily = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Encurt.ai",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="br">
      <body className={fontFamily.className}>
        <TRPCReactProvider>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
                {children}
            </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
