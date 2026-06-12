import NextImage from "next/image";
import Timeline3, {
  TimelineEvent,
} from "@/components/ui/8bit/blocks/timeline3";
import PageCard from "@/components/ui/common/page-card";
import { getDictionary } from "../../dictionaries";
import perficientImage from "@/public/8bit-perficient.png";
import kubikwareImage from "@/public/8bit-kubikware.png";
import nextiraImage from "@/public/8bit-nextira.png";

const ExperiencePage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "es");

  const events: TimelineEvent[] = [
    {
      icon: <NextImage src={perficientImage} alt="Perficient" />,
      title: "Perficient",
      description: dictionary.experience.perficient.description,
      tooltip: dictionary.experience.perficient.tooltip,
      badge: `${dictionary.months.oct} 2024 - NOW`,
    },
    {
      icon: <NextImage src={kubikwareImage} alt="Kubikware" />,
      title: "Kubikware",
      description: dictionary.experience.kubikware.description,
      tooltip: dictionary.experience.kubikware.tooltip,
      badge: `${dictionary.months.aug} 2023-${dictionary.months.oct} 2024`,
    },
    {
      icon: <NextImage src={nextiraImage} alt="Nextira" />,
      title: "Nextira",
      description: dictionary.experience.nextira.description,
      tooltip: dictionary.experience.nextira.tooltip,
      badge: `${dictionary.months.dec} 2021 - ${dictionary.months.jun} 2023`,
    },
    {
      icon: "Q4",
      title: "Animation Pack",
      description:
        "Pixel transitions, sprite animations, and retro loading screens.",
    },
    {
      icon: "Q5",
      title: "Game UI Kit",
      description:
        "Inventory systems, dialogue boxes, battle UIs. Full game interface toolkit.",
    },
  ];

  return (
    <PageCard
      title={dictionary.experience.title}
      description={dictionary.experience.description}
    >
      <Timeline3 events={events} />
    </PageCard>
  );
};

export default ExperiencePage;
