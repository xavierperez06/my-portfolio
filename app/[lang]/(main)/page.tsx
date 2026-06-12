import PortalTransition from "@/components/ui/8bit/blocks/portal-transition";
import portalImage from "@/public/8bit-portal.webp";
import { getDictionary } from "../dictionaries";

const Home = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "es");

  // TODO: Add secondary to FAQ
  return (
    <div className="flex flex-1 items-center justify-center overflow-auto">
      <PortalTransition
        badge={dictionary.portal.badge}
        description={dictionary.portal.description}
        title={dictionary.portal.title}
        primaryLabel={dictionary.portal.primary_button}
        secondaryLabel={dictionary.portal.secondary_button}
        travelingText={dictionary.portal.traveling}
        note={dictionary.portal.note}
        openingText={dictionary.portal.opening}
        href="/overview"
        hrefSecondary="/docs/blocks"
        imageSrc={portalImage.src}
      />
    </div>
  );
};

export default Home;
