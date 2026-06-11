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
} from "@/components/ui/8bit/tooltip";
import { getDictionary } from "../../dictionaries";
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
    <div className="flex-1 bg-background px-1 h-screen overflow-x-hidden overflow-y-auto">
      <Card className="bg-background shadow-none min-h-full text-foreground">
        <CardHeader>
          <CardTitle>{dictionary.overview.title}</CardTitle>
          <CardDescription>{dictionary.overview.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-12">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-6 mt-8 w-full">
            <div className="flex md:flex-row flex-col items-center gap-8">
              <Avatar className="size-60" variant="pixel">
                <AvatarImage src={meImage.src} alt="Avatar image" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-center md:items-start gap-2">
                <Label className="font-bold text-lg">Xavier Perez</Label>
                <Badge>Lv. 37</Badge>
                <Label className="text-muted-foreground text-sm">
                  {dictionary.overview.profession}
                </Label>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-lg">
              <label>{dictionary.main_skills}</label>
              {MAIN_SKILLS.map((skill) => (
                <div key={skill.name}>
                  <Label>{skill.name}</Label>
                  <Progress value={skill.level} variant="retro" />
                </div>
              ))}
            </div>
          </div>
          <div className="gap-4 grid lg:grid-cols-2 grid-rows-1">
            <div>
              <Label className="font-bold text-lg">{dictionary.about_me}</Label>
              <p className="mt-4 lg:mt-7 text-muted-foreground text-sm text-justify retro">
                <label>{dictionary.overview.about_me}</label>
              </p>
            </div>

            <div className="flex flex-col gap-2 font-mono">
              <Label className="mb-2 font-bold text-foreground text-xl">
                {dictionary.stats}
              </Label>

              <div className="flex flex-col gap-1.5 pl-4">
                {STATS.map((stat) => (
                  <Tooltip key={stat.name} delayDuration={300}>
                    <TooltipTrigger>
                      <div className="group relative flex items-end gap-2 outline-none cursor-pointer">
                        <span className="-left-4 absolute opacity-0 group-hover:opacity-100 font-bold text-emerald-600 transition-opacity">
                          {">"}
                        </span>

                        <Label className="font-bold text-muted-foreground group-hover:text-foreground text-base uppercase tracking-wide transition-colors pointer-events-none">
                          {stat.name}
                        </Label>

                        <div className="flex-1 opacity-50 mb-1.5 border-muted-foreground border-b-2 border-dotted" />

                        <label className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">
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
    </div>
  );
};

export default Overview;
