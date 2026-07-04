import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Lessons",
  description: "One-on-one high-performance tennis coaching and personalized training programs.",
};

export default function PrivateLessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
