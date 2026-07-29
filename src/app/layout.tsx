import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "itelligenceCX | Performance CX by Design",
    template: "%s | itelligenceCX",
  },
  description:
    "Intelligence-led nearshore CX delivery. We shape each interaction across the customer lifecycle with managed intelligence and influential delivery.",
  metadataBase: new URL("https://itelligencecx.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "itelligenceCX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
