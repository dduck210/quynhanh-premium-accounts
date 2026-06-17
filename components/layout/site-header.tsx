import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";

export default function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative z-50">
        <AnnouncementBar />
      </div>
      <Navbar />
    </div>
  );
}
