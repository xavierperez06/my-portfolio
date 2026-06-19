import PageCard from "@/components/ui/common/page-card";
import { getDictionary } from "../../dictionaries";
import GameFeatures1, {
  Skill,
} from "@/components/ui/8bit/blocks/game-features1";

const SkillsPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "es");

  const skills: Skill[] = [
    {
      title: dictionary.skills.skill_tree.dot_net.name,
      description: dictionary.skills.skill_tree.dot_net.description,
      unlocked: true,
      level: 100,
      maxLevel: 100,
    },
    {
      title: dictionary.skills.skill_tree.react.name,
      description: dictionary.skills.skill_tree.react.description,
      unlocked: true,
      level: 100,
      maxLevel: 100,
    },
  ];

  return (
    <PageCard
      title={dictionary.skills.title}
      description={dictionary.skills.description}
    >
      <GameFeatures1
        title={dictionary.skills.skill_tree.title}
        description={dictionary.skills.skill_tree.description}
        skills={skills}
      />
    </PageCard>
  );
};

export default SkillsPage;
