import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SEO Services | Engineering Crawl Efficiency & Speed",
  description: "Optimize the technical foundation that drives search rankings. From Core Web Vitals to server-side rendering architecture, we ensure your site is perfectamente optimized.",
};

export default function TechnicalSEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
