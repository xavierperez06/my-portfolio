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
import { SettingsMenuItems } from "./settings-menu-items";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/8bit/menubar";

interface SideMenuProps {
  dictionary: Record<string, any>;
  lang: string;
}

export default function SideMenu({ dictionary, lang }: SideMenuProps) {
  const MENU_ITEMS = [
    { label: dictionary.settings.items.overview, path: "/overview" },
    { label: dictionary.settings.items.experience, path: "/experience" },
    { label: dictionary.settings.items.education, path: "/education" },
    { label: dictionary.settings.items.skills, path: "/skills" },
  ];

  return (
    <div className="flex flex-col bg-background w-full max-w-80 md:h-screen text-foreground shrink-0">
      <Card className="hidden md:flex bg-background h-full">
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
      <div className="w-dvw md:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>{dictionary.explore}</MenubarTrigger>
            <MenubarContent>
              {MENU_ITEMS.map((item) => (
                <MenubarItem key={item.path}>
                  <Link href={`/${lang}${item.path}`}>{item.label}</Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{dictionary.settings.name}</MenubarTrigger>
            <MenubarContent>
              <SettingsMenuItems
                lightText={dictionary.settings.theme.light}
                darkText={dictionary.settings.theme.dark}
                currentLang={lang}
                englishText={dictionary.settings.language.english}
                spanishText={dictionary.settings.language.spanish}
              />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
