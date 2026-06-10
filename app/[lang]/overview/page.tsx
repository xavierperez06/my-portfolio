import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/8bit/avatar";
import { Progress } from "@/components/ui/8bit/progress";
import { Label } from "@/components/ui/8bit/label";
import { Badge } from "@/components/ui/8bit/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/8bit/tooltip";
import { getDictionary } from "../dictionaries";
import meImage from "@/public/me.jpeg";

const MAIN_SKILLS = [
  { name: ".NET", level: 100 },
  { name: "React", level: 100 },
  { name: "Node.js", level: 75 },
  { name: "SQL", level: 80 },
];

const Overview = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;

  const dictionary = await getDictionary(lang as "en" | "es");

  const STATS = [
    {
      name: dictionary.overview.stats.str.name,
      value: dictionary.overview.stats.str.value,
      description: dictionary.overview.stats.str.description,
    },
    {
      name: dictionary.overview.stats.dex.name,
      value: dictionary.overview.stats.dex.value,
      description: dictionary.overview.stats.dex.description,
    },
    {
      name: dictionary.overview.stats.int.name,
      value: dictionary.overview.stats.int.value,
      description: dictionary.overview.stats.int.description,
    },
    {
      name: dictionary.overview.stats.vit.name,
      value: dictionary.overview.stats.vit.value,
      description: dictionary.overview.stats.vit.description,
    },
    {
      name: dictionary.overview.stats.char.name,
      value: dictionary.overview.stats.char.value,
      description: dictionary.overview.stats.char.description,
    },
  ];

  return (
    <Card className="w-full h-screen bg-gray-900 text-white flex flex-col rounded-none border-y-0 border-r-0">
      <CardHeader>
        <CardTitle>{dictionary.overview.title}</CardTitle>
        <CardDescription>{dictionary.overview.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-12">
        <div className="flex justify-center items-center gap-6 w-full mt-8">
          <div className="flex items-center gap-8">
            <Avatar className="size-60" variant="pixel">
              <AvatarImage src={meImage.src} alt="Avatar image" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start gap-2">
              <Label className="text-lg font-bold">Xavier Perez</Label>
              <Badge>Lv. 37</Badge>
              <Label className="text-sm text-gray-400">
                {dictionary.overview.profession}
              </Label>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-lg">
            {MAIN_SKILLS.map((skill) => (
              <div key={skill.name}>
                <Label>{skill.name}</Label>
                <Progress value={skill.level} variant="retro" />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-lg font-bold">{dictionary.about_me}</Label>
            <p className="text-sm text-gray-400 mt-7 retro">
              <label>{dictionary.overview.about_me}</label>
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono">
            <Label className="text-xl font-bold text-white mb-2">
              {dictionary.stats}
            </Label>

            <div className="flex flex-col gap-1.5 pl-4">
              {STATS.map((stat) => (
                <Tooltip key={stat.name} delayDuration={300}>
                  <TooltipTrigger>
                    <div className="relative flex items-end gap-2 group cursor-pointer outline-none">
                      <span className="absolute -left-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        {">"}
                      </span>

                      {/* Stat Name - Removed cursor-help from the end of this className! */}
                      <Label className="text-base font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-wide pointer-events-none">
                        {stat.name}
                      </Label>

                      {/* Subtle dotted line */}
                      <div className="flex-1 border-b-2 border-dotted border-slate-600 mb-1.5 opacity-50" />

                      <label className="text-lg font-bold text-emerald-400">
                        {stat.value}
                      </label>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent side="right">
                    <p>{stat.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Overview;
