import type { Metadata } from "next";
import { Geist, Geist_Mono, Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eduAustralia = Edu_AU_VIC_WA_NT_Hand({
  variable: "--font-edu-australia",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QR MENUM",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eduAustralia.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarTrigger />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
