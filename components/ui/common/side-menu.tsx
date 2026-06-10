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
    <div className="flex flex-col bg-background w-full max-w-80 h-screen text-foreground shrink-0">
      <Card className="bg-background h-full">
        <CardHeader>
          <CardTitle>{dictionary.menu.title}</CardTitle>
          <CardDescription className="my-2 text-justify">
            {dictionary.menu.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 justify-between">
          <nav className="flex flex-col gap-8">
            {MENU_ITEMS.map((item) => (
              <Button
                key={item.path}
                className="justify-start w-full cursor-pointer"
              >
                <Link href={`/${lang}${item.path}`}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="pt-4 border-muted-foreground border-t">
            <LanguageSwitcher lang={lang} dictionary={dictionary} />
            <div className="flex justify-between items-center gap-2 mt-3">
              <span className="font-medium text-sm">
                {dictionary.menu.theme}
              </span>
              <RetroModeSwitcher />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
