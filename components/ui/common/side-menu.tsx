import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";
import { RetroModeSwitcher } from "@/components/ui/retro-mode-switcher";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

interface SideMenuProps {
  dictionary: Record<string, any>;
  lang: string;
}

const MENU_ITEMS = [
  { label: "Overview", path: "/overview" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
];

export default function SideMenu({ dictionary, lang }: SideMenuProps) {
  return (
    <Card className="w-full max-w-80 h-screen bg-background text-foreground flex flex-col rounded-none border-y-0 border-l-0">
      <CardHeader>
        <CardTitle>{dictionary.menu.title}</CardTitle>
        <CardDescription className="my-2 text-justify">
          {dictionary.menu.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between">
        <nav className="flex flex-col gap-8">
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.path}
              className="w-full justify-start cursor-pointer"
            >
              <Link href={`/${lang}${item.path}`}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="border-t border-muted-foreground pt-4">
          <LanguageSwitcher lang={lang} dictionary={dictionary} />
          <div className="flex items-center justify-between gap-2 mt-3">
            <span className="text-sm font-medium">{dictionary.menu.theme}</span>
            <RetroModeSwitcher />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
