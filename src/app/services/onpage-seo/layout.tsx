import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Page SEO Services | Engineering Topical Authority",
  description: "Transform your website into a high-authority content engine. Through semantic optimization and intent-based architecture, we ensure your brand captures high-value search traffic.",
};

export default function OnPageSEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
