import type { Metadata } from "next";
import "@/styles/globals.scss";
import HmnHeader from "@/components/HmnHeader";

export const metadata: Metadata = {
  title: "HUMANims",
  description: "HUMANims",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="light">
        <div id="ims-page">
          <HmnHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
