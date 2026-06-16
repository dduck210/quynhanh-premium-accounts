import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-sm font-light flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="select-none" style={{ color: "var(--lux-gold-border)" }}>/</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-200 text-[var(--lux-silver)] hover:text-[var(--lux-gold)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-normal" style={{ color: "var(--lux-cream)" }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
