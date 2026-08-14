import type { Metadata } from "next";
import Link from "next/link";
import type { ReactElement } from "react";
import { SITE_TITLE } from "@/data/site";

export const metadata: Metadata = {
  title: `Page not found | ${SITE_TITLE}`,
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = (): ReactElement => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6vw",
        background: "#faf8f2",
        color: "#292928",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div style={{ maxWidth: "32rem", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.62,
            marginBottom: "1rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          This page isn&apos;t here.
        </h1>
        <p style={{ opacity: 0.62, lineHeight: 1.6, marginBottom: "2rem" }}>
          The link may be outdated, or the page may have moved.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "inherit",
          }}
        >
          Back to Fadezy →
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
