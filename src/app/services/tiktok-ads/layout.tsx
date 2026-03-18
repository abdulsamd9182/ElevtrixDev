import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Ads Services | Engineering Viral Growth at Scale",
  description: "Transform vertical attention into compounding ROI. Using UGC-first frameworks and Spark Ads strategies to engineer viral growth for your brand.",
};

export default function TikTokAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
