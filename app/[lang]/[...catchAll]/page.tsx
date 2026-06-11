import { headers } from "next/headers";
import NotFound1 from "@/components/ui/8bit/blocks/not-found1";
import ogreImage from "@/public/8bit-ogre.webp";
import { getDictionary } from "../dictionaries";

export default async function NotFoundPage() {
  const headersList = await headers();
  const lang = headersList.get("x-next-locale") || "en";
  const dictionary = await getDictionary(lang as "en" | "es");

  return (
    <div className="flex flex-1 items-center justify-center overflow-auto">
      <NotFound1
        title={dictionary.not_found.title}
        description={dictionary.not_found.description}
        cta={dictionary.not_found.go_back}
        href="/"
        imageSrc={ogreImage.src}
      />
    </div>
  );
}
