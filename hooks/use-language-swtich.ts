// hooks/use-language-switch.ts
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const useLanguageSwitch = (currentLang: string) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(
    (newLang: string) => {
      if (!newLang || !pathname || currentLang === newLang) return;

      const segments = pathname.split("/");
      segments[1] = newLang; // Replaces the [lang] segment in the URL
      const newPath = segments.join("/");

      router.push(newPath);
    },
    [pathname, router, currentLang],
  );

  return switchLanguage;
};

export default useLanguageSwitch;
