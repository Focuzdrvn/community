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
  title: "Focuzdrvn — Community in Focus",
  description:
    "Focuzdrvn is a community-built space for inclusive hackathons, maker nights, and mentorship.",
  metadataBase: new URL("https://focuzdrvn.local"),
  openGraph: {
    title: "Focuzdrvn",
    description:
      "Dark-mode community hub for inclusive hackathons, meetups, and creative collaboration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focuzdrvn",
    description:
      "Join the most welcoming hackerspace you will ever meet. Nightly build sessions, global collabs, and safe mentorship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
