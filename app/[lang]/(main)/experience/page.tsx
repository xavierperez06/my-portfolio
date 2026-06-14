import NextImage from "next/image";
import Timeline3, {
  TimelineEvent,
} from "@/components/ui/8bit/blocks/timeline3";
import PageCard from "@/components/ui/common/page-card";
import { getDictionary } from "../../dictionaries";
import perficientImage from "@/public/8bit-perficient.png";
import kubikwareImage from "@/public/8bit-kubikware.png";
import nextiraImage from "@/public/8bit-nextira.png";
import agrofyImage from "@/public/8bit-agrofy.png";
import praxysImage from "@/public/8bit-praxys.png";
import qmasImage from "@/public/8bit-qmas.jpg";
import elipsysImage from "@/public/8bit-elipsysit.png";

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
      role: dictionary.experience.perficient.role,
    },
    {
      icon: <NextImage src={kubikwareImage} alt="Kubikware" />,
      title: "Kubikware",
      description: dictionary.experience.kubikware.description,
      tooltip: dictionary.experience.kubikware.tooltip,
      badge: `${dictionary.months.aug} 2023-${dictionary.months.oct} 2024`,
      role: dictionary.experience.kubikware.role,
    },
    {
      icon: <NextImage src={nextiraImage} alt="Nextira" />,
      title: "Nextira",
      description: dictionary.experience.nextira.description,
      tooltip: dictionary.experience.nextira.tooltip,
      badge: `${dictionary.months.dec} 2021 - ${dictionary.months.jun} 2023`,
      role: dictionary.experience.nextira.role,
    },
    {
      icon: <NextImage src={agrofyImage} alt="Agrofy - Lead" />,
      title: "Agrofy",
      description: dictionary.experience.agrofy.lead.description,
      tooltip: dictionary.experience.agrofy.lead.tooltip,
      badge: `${dictionary.months.aug} 2020 - ${dictionary.months.nov} 2021`,
      role: dictionary.experience.agrofy.lead.role,
    },
    {
      icon: <NextImage src={agrofyImage} alt="Agrofy" />,
      title: "Agrofy",
      description: dictionary.experience.agrofy.description,
      tooltip: dictionary.experience.agrofy.tooltip,
      badge: `${dictionary.months.may} 2019 - ${dictionary.months.aug} 2020`,
      role: dictionary.experience.agrofy.role,
    },
    {
      icon: <NextImage src={praxysImage} alt="Praxys" />,
      title: "Praxys",
      description: dictionary.experience.praxys.description,
      tooltip: dictionary.experience.praxys.tooltip,
      badge: `${dictionary.months.nov} 2018 - ${dictionary.months.apr} 2019`,
      role: dictionary.experience.praxys.role,
    },
    {
      icon: <NextImage src={qmasImage} alt="Qmas" />,
      title: "Qmas",
      description: dictionary.experience.qmas.description,
      tooltip: dictionary.experience.qmas.tooltip,
      badge: `${dictionary.months.jun} 2018 - ${dictionary.months.nov} 2018`,
      role: dictionary.experience.qmas.role,
    },
    {
      icon: <NextImage src={elipsysImage} alt="Elipsys IT" />,
      title: "Elipsys IT",
      description: dictionary.experience["elipsys-it"].description,
      tooltip: dictionary.experience["elipsys-it"].tooltip,
      badge: `${dictionary.months.apr} 2014-${dictionary.months.jun} 2018`,
      role: dictionary.experience["elipsys-it"].role,
    },
  ];

  return (
    <PageCard
      title={dictionary.experience.title}
      description={dictionary.experience.description}
    >
      <Timeline3
        events={events}
        title={dictionary.experience.timeline.title}
        description={dictionary.experience.timeline.description}
      />
    </PageCard>
  );
};

export default ExperiencePage;
