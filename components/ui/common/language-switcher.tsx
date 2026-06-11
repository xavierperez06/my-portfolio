"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/8bit/select";
import useLanguageSwitch from "@/hooks/use-language-swtich";

interface LanguageSwitcherProps {
  lang: string;
  dictionary: Record<string, any>;
}

const LanguageSwitcher = ({ lang, dictionary }: LanguageSwitcherProps) => {
  const switchLanguage = useLanguageSwitch(lang);

  return (
    <Select
      defaultValue={lang}
      onValueChange={(value) => switchLanguage(value as string)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">
          {dictionary.settings.language.spanish}
        </SelectItem>
        <SelectItem value="en">
          {dictionary.settings.language.english}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
