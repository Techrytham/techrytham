'use client';

import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Techrytham Logo"
        width={240}
        height={60}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}
