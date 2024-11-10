import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Superior Open Library",
    template: "%s | Superior Open Library"
  },
  description: "A modern digital library platform powered by AI",
  keywords: ["library", "digital library", "education", "research", "Superior University"],
  authors: [{ name: "Superior University" }],
  verification: {
    google: "ox0SaptCRGAIvBOAhzonmCLyjlAummM1S_Xm5_DiZ7I",
  },
  openGraph: {
    type: "website",
    title: "Superior Open Library",
    description: "A modern digital library platform",
    siteName: "Superior Open Library",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body 
        suppressHydrationWarning={true} 
        className="min-h-screen bg-white dark:bg-gray-900 antialiased font-sans"
      >
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}