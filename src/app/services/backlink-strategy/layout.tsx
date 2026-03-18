import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backlink Strategy Services | Engineering Domain Authority",
  description: "We build the authority that search engines cannot ignore. Through elite outreach architectures and high-impact guest posting, we deliver irrefutable link equity.",
};

export default function BacklinkStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
