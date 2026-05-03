import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormSave — Never Lose Form Data Again",
  description: "Auto-saves form inputs and restores them after crashes or accidental closes. Works across browser sessions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a156745d-c31f-4551-b88c-56a51efebe6b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
