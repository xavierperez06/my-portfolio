import PortalTransition from "@/components/ui/8bit/blocks/portal-transition";
import portalImage from "@/public/8bit-portal.webp";
import { getDictionary } from "../dictionaries";
import CheatCodeInput from "@/components/ui/common/cheat-code-input";

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "es");

  return (
    <div className="w-full max-w-full flex flex-col min-h-screen overflow-x-hidden">
      <div className="px-6 mt-4 box-border sm:px-0 sm:ml-6 w-96 md:w-lg max-w-full">
        <CheatCodeInput
          placeholder={dictionary.portal.cheat_code}
          message={dictionary.cheat_activated}
        />
      </div>

      <div className="flex flex-1 items-center justify-center overflow-y-hidden">
        <PortalTransition
          badge={dictionary.portal.badge}
          description={dictionary.portal.description}
          title={dictionary.portal.title}
          primaryLabel={dictionary.portal.primary_button}
          secondaryLabel={dictionary.portal.secondary_button}
          travelingText={dictionary.portal.traveling}
          note={dictionary.portal.note}
          openingText={dictionary.portal.opening}
          href={`/${lang}/overview`}
          hrefSecondary="/docs/blocks"
          imageSrc={portalImage.src}
        />
      </div>
    </div>
  );
};

export default Home;
