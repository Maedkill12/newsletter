import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Newsletter sign-up form with success message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#36384D] min-h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
