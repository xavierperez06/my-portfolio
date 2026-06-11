import { headers } from "next/headers";
import Link from "next/link";
import NotFound1 from "@/components/ui/8bit/blocks/not-found1";
import ogreImage from "@/public/8bit-ogre.webp";

export default async function NotFoundPage() {
  // Await the headers (Next 15+ requires headers() to be awaited, Next 14 does not, adjust as needed)
  const headersList = await headers();
  const lang = headersList.get("x-next-locale") || "en";

  const title = lang === "es" ? "Página no encontrada" : "Page Not Found";

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <NotFound1 imageSrc={ogreImage.src} />
    </div>
  );
}
