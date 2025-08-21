import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE DRONE INDIA - Capturing Skies, Training Minds, Crafting Drones",
  description: "Professional aerial filming, drone training workshops, and custom drone builds across India. Capturing skies, training minds, and crafting drones tailored for you.",
  keywords: "drone, aerial filming, drone training, custom drones, property shoots, workshops, India, THE DRONE INDIA",
  authors: [{ name: "THE DRONE INDIA" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
