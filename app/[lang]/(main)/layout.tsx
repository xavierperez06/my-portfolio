import SideMenu from "@/components/ui/common/side-menu";
import { getDictionary } from "../dictionaries";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "es");

  return (
    <>
      <SideMenu dictionary={dictionary} lang={lang} />
      {children}
    </>
  );
}
