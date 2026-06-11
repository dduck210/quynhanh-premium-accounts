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
    <div className="w-full h-full flex items-center justify-center p-12">
      {err ? (
        <div
          className="w-40 h-40 rounded-3xl flex items-center justify-center"
          style={{ backgroundColor: logoColor + "22" }}
        >
          <span className="text-[5rem] leading-none">{logoEmoji}</span>
        </div>
      ) : (
        <Image
          src={`/images/products/${id.toLowerCase()}.png`}
          alt={name}
          width={240}
          height={240}
          className="w-full h-full object-contain drop-shadow-md"
          onError={() => setErr(true)}
          unoptimized
        />
      )}
    </div>
  );
}
