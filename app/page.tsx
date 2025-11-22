"use client";

import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    // Navigate to the new page after a short delay to allow the transition to start
    setTimeout(() => {
      router.push("/Starterkit");
    }, 300);
  };

  return (
    <div
      className={`flex h-lvh items-center justify-center  font-sans bg-black transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className=" font-sans antialiased">
        <h1 className="text-neutral-100 text-4xl text-center">Sentry Mind</h1>
        <h2 className="mt-4 ml-3 text-center text-neutral-400 ">
          <TextEffect per="char" preset="fade">
            Let the Sentry Guide you ...
          </TextEffect>
        </h2>

        <div className="mt-10 align-middle border border-dashed border-neutral-300 ml-6 group relative hover:p-4">
          <div className="transition-all duration-300 group-hover:blur-sm">
            <ProgressiveBlur
              blurLayers={8}
              blurIntensity={0.1}
              className="rounded-[inherit]"
            >
              <Image
                height={400}
                width={600}
                src="/dithered-image-2025-11-22T08-41-42.png"
                alt="Sentry Mind dithered image"
                className="transition-all duration-300 group-hover:blur-none hover:p-4 "
              />
            </ProgressiveBlur>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-bold text-xl bg-transparent px-4 py-2 rounded-lg">
              Have you lost your mind to brainrot?
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center ">
          <ShimmerButton onClick={handleClick}>I can fix that</ShimmerButton>
        </div>
      </div>
    </div>
  );
}
