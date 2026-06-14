"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import meImage from "@/public/me.jpeg";
import doomguyImage from "@/public/doomguy.png";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/8bit/avatar";

export function ThemeAvatar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDoomTheme = mounted && resolvedTheme === "doom";
  const currentSrc = isDoomTheme ? doomguyImage.src : meImage.src;

  return (
    <Avatar className="size-60" variant="pixel">
      <AvatarImage
        src={currentSrc}
        alt="Avatar image"
        className={
          isDoomTheme ? "object-contain p-6 bg-[#1c1a19]" : "object-cover"
        }
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
