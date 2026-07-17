import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dariadoronina.com"),
  title: "Daria Doronina",
  description: "Senior Software Engineer based in Barcelona, Spain.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Daria Doronina",
    description: "Senior Software Engineer based in Barcelona, Spain.",
    url: "https://dariadoronina.com",
    siteName: "Daria Doronina",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daria Doronina",
    description: "Senior Software Engineer based in Barcelona, Spain.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
