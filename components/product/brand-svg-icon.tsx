import { BRAND_ICON_MAP } from "@/lib/product-brand-icons";

interface Props {
  productId: string;
  /** Display size in px — icon fills a square of this size */
  size?: number;
  className?: string;
}

/**
 * Renders a crisp vector logo from simple-icons when available.
 * Returns null if the product has no entry in BRAND_ICON_MAP.
 */
export default function BrandSvgIcon({ productId, size = 64, className = "" }: Props) {
  const icon = BRAND_ICON_MAP[productId];
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label={icon.title}
      className={className}
      style={{ fill: `#${icon.hex}` }}
    >
      <path d={icon.path} />
    </svg>
  );
}
