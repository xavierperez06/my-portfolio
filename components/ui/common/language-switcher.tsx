"use client"; // This is required for interactivity and hooks

import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";

interface LanguageSwitcherProps {
  lang: string;
  dictionary: Record<string, any>;
}

const LanguageSwitcher = ({ lang, dictionary }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!newLang || !pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <Select
      defaultValue={lang}
      onValueChange={(value) => switchLanguage(value as string)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">{dictionary.spanish}</SelectItem>
        <SelectItem value="en">{dictionary.english}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
