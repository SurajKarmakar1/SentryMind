import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentry Mind - New Page",
  description: "This is the page after transition",
};

export default function TransitionedPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
