"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MenubarItem } from "@/components/ui/8bit/menubar";
import useLanguageSwitch from "@/hooks/use-language-swtich";

interface SettingsMenuItemsProps {
  lightText: string;
  darkText: string;
  currentLang: string;
  englishText: string;
  spanishText: string;
}

export function SettingsMenuItems({
  lightText,
  darkText,
  currentLang,
  englishText,
  spanishText,
}: SettingsMenuItemsProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const switchLanguage = useLanguageSwitch(currentLang);

  // Prevent hydration mismatch by ensuring we only check the theme after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // During Server-Side Rendering, return the items without any checkmarks
  if (!mounted) {
    return (
      <>
        <MenubarItem className="cursor-pointer">{lightText}</MenubarItem>
        <MenubarItem className="cursor-pointer">{darkText}</MenubarItem>
        <MenubarItem className="cursor-pointer">{englishText}</MenubarItem>
        <MenubarItem className="cursor-pointer">{spanishText}</MenubarItem>
      </>
    );
  }

  return (
    <>
      <MenubarItem
        className="cursor-pointer flex items-center justify-between"
        onClick={() => setTheme("light")}
      >
        <span>{lightText}</span>
        {resolvedTheme === "light" && <span className="ml-2">✓</span>}
      </MenubarItem>

      <MenubarItem
        className="cursor-pointer flex items-center justify-between"
        onClick={() => setTheme("dark")}
      >
        <span>{darkText}</span>
        {resolvedTheme === "dark" && <span className="ml-2">✓</span>}
      </MenubarItem>

      <MenubarItem
        className="cursor-pointer flex items-center justify-between"
        onClick={() => switchLanguage("en")}
      >
        <span>{englishText}</span>
        {currentLang === "en" && <span className="ml-2">✓</span>}
      </MenubarItem>

      <MenubarItem
        className="cursor-pointer flex items-center justify-between"
        onClick={() => switchLanguage("es")}
      >
        <span>{spanishText}</span>
        {currentLang === "es" && <span className="ml-2">✓</span>}
      </MenubarItem>
    </>
  );
}
