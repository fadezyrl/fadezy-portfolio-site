import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Fadezy — Websites for barbershops, salons & grooming brands",
  description:
    "Fadezy builds websites for barbershops, beauty salons and grooming brands — so the first click feels like walking into your shop. Remote-first, worldwide.",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    title:
      "Fadezy — Your craft deserves a digital presence that feels just as good.",
    description:
      "Websites for barbershops, salons and grooming brands. Built so the first click feels like walking into your shop.",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement => {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
