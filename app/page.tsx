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
      className={`flex flex-col items-center justify-center min-h-screen font-sans bg-black transition-opacity duration-500 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-sans antialiased px-4 w-full max-w-4xl">
        <h1 className="text-neutral-100 text-3xl md:text-4xl text-center">
          Sentry Mind
        </h1>
        <h2 className="mt-4 text-center text-neutral-400 text-sm md:text-base">
          <TextEffect per="char" preset="fade">
            Let the Sentry Guide you ...
          </TextEffect>
        </h2>

        <div className="mt-6 md:mt-10 w-full max-w-md mx-auto group relative border border-dashed border-neutral-600 hover:p-4">
          <div className="transition-all duration-300 group-hover:blur-sm">
            <ProgressiveBlur
              blurLayers={8}
              blurIntensity={0.1}
              className="rounded-[inherit] w-full"
            >
              <Image
                height={300}
                width={400}
                src="/dithered-image-2025-11-22T08-41-42.png"
                alt="Sentry Mind dithered image"
                className="transition-all duration-300 group-hover:blur-none w-full h-auto"
              />
            </ProgressiveBlur>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center font-bold text-lg md:text-xl bg-transparent px-4 py-2 rounded-lg">
              Have you lost your mind to brainrot?
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-8 flex justify-center w-full">
          <div className="w-full max-w-xs">
            <ShimmerButton onClick={handleClick} className="w-full">
              I can fix that
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}
