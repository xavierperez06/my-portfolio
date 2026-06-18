import Timeline1, { TimelineStep } from "@/components/ui/8bit/blocks/timeline1";
import PageCard from "@/components/ui/common/page-card";
import { getDictionary } from "../../dictionaries";

const EducationPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "es");

  const steps: TimelineStep[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-school-icon lucide-school"
        >
          <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <path d="M18 4.933V21" />
          <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
          <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
          <path d="M6 4.933V21" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
      title: dictionary.education.eet5.institution,
      description: dictionary.education.eet5.description,
      badge: "2001 - 2006",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      ),
      title: dictionary.education.uai.institution,
      description: dictionary.education.uai.description,
      badge: "2014 - 2019",
    },
  ];

  return (
    <PageCard
      title={dictionary.education.title}
      description={dictionary.education.description}
    >
      <Timeline1
        title={dictionary.education.timeline.title}
        description={dictionary.education.timeline.description}
        steps={steps}
      />
    </PageCard>
  );
};

export default EducationPage;
