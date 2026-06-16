"use client";

import { useState } from "react";
import Image from "next/image";
import BrandSvgIcon from "./brand-svg-icon";
import { BRAND_ICON_MAP } from "@/lib/product-brand-icons";

interface Props {
  id: string;
  name: string;
  logoEmoji: string;
  logoColor: string;
}

export default function ProductDetailLogo({ id, name, logoEmoji, logoColor }: Props) {
  const [err, setErr] = useState(false);

  if (BRAND_ICON_MAP[id]) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 sm:p-14">
        <BrandSvgIcon productId={id} size={180} className="drop-shadow-sm" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-6 sm:p-10">
      {err ? (
        <div
          className="w-44 h-44 rounded-3xl flex items-center justify-center"
          style={{ backgroundColor: logoColor + "22", border: `1px solid ${logoColor}30` }}
        >
          <span className="text-[5rem] leading-none">{logoEmoji}</span>
        </div>
      ) : (
        <div
          className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)",
          }}
        >
          <Image
            src={`/images/products/${id.toLowerCase()}.png`}
            alt={name}
            width={200}
            height={200}
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
            onError={() => setErr(true)}
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
