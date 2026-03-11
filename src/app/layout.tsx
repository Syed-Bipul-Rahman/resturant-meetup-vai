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
  title: "Restaurant Meetup | Find Your Perfect Dining Partner",
  description: "Experience the magic of a restaurant meetup at the city's finest restaurants. Connect over exquisite cuisine and unforgettable atmospheres.",
  keywords: ["restaurant meetup", "food community", "dining events", "foodies", "local restaurants", "social dining", "meet food lovers"],
  authors: [{ name: "Restaurant Meetup Team" }],
  creator: "Restaurant Meetup Team",
  publisher: "Restaurant Meetup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Restaurant Meetup — Discover Restaurants & Join Exclusive Food Meetups",
    description: "Connect with food lovers, explore top restaurants, and join exclusive dining events. The #1 social dining community.",
    url: "https://restaurant-meetup.com",
    siteName: "Restaurant Meetup",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Meetup Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Meetup — Discover Restaurants & Join Exclusive Food Meetups",
    description: "Join the #1 social dining community and meet food lovers near you.",
    images: ["/hero-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/fav-icon.ico",
    shortcut: "/fav-icon.ico",
    apple: "/fav-icon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
