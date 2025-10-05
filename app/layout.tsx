import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ロマンス詐欺 - 防止教材",
  description: "ロマンス詐欺（Pig Butchering）の手口を学び、被害を防ぐためのインタラクティブ教材",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
