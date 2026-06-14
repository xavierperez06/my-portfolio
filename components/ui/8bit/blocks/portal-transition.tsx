"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";

import "@/components/ui/8bit/styles/retro.css";

interface PortalTransitionProps {
  badge?: string;
  className?: string;
  description?: string;
  href?: string;
  hrefSecondary?: string;
  imageSrc?: string;
  onEnter?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  title?: string;
  travelingText?: string;
  note?: string;
  openingText?: string;
}

export default function PortalTransition({
  title = "Click to go through the portal",
  description = "The gateway is open. One step and you're in the next realm.",
  badge = "FAST TRAVEL",
  primaryLabel = "Enter Portal",
  secondaryLabel = "Choose Destination",
  travelingText = "Traveling...",
  note = "No cooldown required.",
  openingText = "Opening portal...",
  href = "/docs",
  hrefSecondary = "/docs/blocks",
  imageSrc = "/images/8bit-portal.png",
  onEnter,
  className,
}: PortalTransitionProps) {
  const [traveling, setTraveling] = useState(false);
  const router = useRouter();

  const handleEnter = useCallback(
    (destination?: string) => {
      setTraveling(true);

      setTimeout(() => {
        if (onEnter) {
          onEnter();
        }
        // Push to the new route after the animation completes
        if (destination) {
          router.push(destination);
        }
        setTraveling(false);
      }, 3000);
    },
    [onEnter, router],
  );

  return (
    <div
      className={cn(
        "retro flex w-full flex-col items-center gap-6 bg-background px-4 py-16 text-center md:py-24",
        className,
      )}
    >
      {badge && (
        <Badge variant="secondary" className="uppercase">
          {traveling ? travelingText : badge}
        </Badge>
      )}

      <h2 className="retro max-w-md font-bold text-2xl tracking-tight sm:text-3xl">
        {title}
      </h2>

      <p className="retro max-w-sm text-muted-foreground text-[9px]">
        {description}
      </p>

      {/* Portal image */}
      {imageSrc && (
        <button
          className={cn(
            "group relative cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300",
            traveling ? "scale-110" : "hover:scale-105",
          )}
          onClick={() => handleEnter(href)}
          disabled={traveling}
          type="button"
        >
          <Image
            alt="Portal"
            className={cn(
              "pixelated transition-opacity duration-300",
              traveling && "animate-pulse",
            )}
            height={220}
            src={imageSrc}
            width={220}
          />
        </button>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-6">
        {href ? (
          <Link
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleEnter(href);
            }}
          >
            <Button disabled={traveling} className="cursor-pointer">
              {traveling ? travelingText : primaryLabel}
            </Button>
          </Link>
        ) : (
          <Button disabled={traveling} onClick={() => handleEnter()}>
            {traveling ? travelingText : primaryLabel}
          </Button>
        )}

        {secondaryLabel && hrefSecondary && (
          <Link
            href={hrefSecondary}
            onClick={(e) => {
              e.preventDefault();
              handleEnter(hrefSecondary);
            }}
          >
            <Button
              variant="outline"
              disabled={traveling}
              className="cursor-pointer"
            >
              {traveling ? travelingText : secondaryLabel}
            </Button>
          </Link>
        )}
      </div>

      <p className="retro text-muted-foreground text-[8px]">
        {traveling ? openingText : note}
      </p>
    </div>
  );
}
