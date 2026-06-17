"use client";
import { usePathname } from "next/navigation";
import SiteHeader from "@/components/layout/site-header";

export default function SiteHeaderWrapper() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <SiteHeader />;
}
