import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Services | ROI-Driven Search & Shopping Mastery",
  description: "Surgical precision in search, shopping, and performance ads. We dominate intent-driven traffic to scale your business profitably.",
};

export default function GoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
