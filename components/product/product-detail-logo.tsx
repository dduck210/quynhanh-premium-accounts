"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  logoEmoji: string;
  logoColor: string;
}

export default function ProductDetailLogo({ id, name, logoEmoji, logoColor }: Props) {
  const [err, setErr] = useState(false);
  return (
    <div
      className="w-48 h-48 rounded-3xl flex items-center justify-center shadow-inner overflow-hidden"
      style={{ backgroundColor: logoColor + "18" }}
    >
      {err ? (
        <span className="text-[5rem]">{logoEmoji}</span>
      ) : (
        <Image
          src={`/images/products/${id.toLowerCase()}.png`}
          alt={name}
          width={128}
          height={128}
          className="w-32 h-32 object-contain"
          onError={() => setErr(true)}
          unoptimized
        />
      )}
    </div>
  );
}
