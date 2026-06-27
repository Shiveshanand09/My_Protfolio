import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shivesh Anand — AI/ML Engineer, Data Scientist & Data Analyst",
  description: "Portfolio of Shivesh Anand — AI/ML Engineer, Data Scientist and Data Analyst building predictive models, RAG/LLM systems, and end-to-end data pipelines.",
  openGraph: {
    title: "Shivesh Anand — AI/ML Engineer, Data Scientist & Data Analyst",
    description: "Predictive models, GenAI/RAG systems, and data analysis pipelines.",
    type: "website",
    images: [
      {
        url: "/assets/img/profile.jpg",
        width: 900,
        height: 900,
        alt: "Portrait of Shivesh Anand",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} antialiased bg-[#050505] text-white`}>
        {children}
      </body>
    </html>
  );
}
