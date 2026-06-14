import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/8bit/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/8bit/tooltip";

import "@/components/ui/8bit/styles/retro.css";

export interface TimelineEvent {
  badge?: string;
  description: string;
  icon: ReactNode;
  title: string;
  tooltip?: string;
  role?: string;
}

interface Timeline3Props {
  className?: string;
  description?: string;
  events?: TimelineEvent[];
  title?: string;
}

const defaultEvents: TimelineEvent[] = [
  {
    icon: "Q1",
    title: "Public Launch",
    description:
      "50+ components available. Registry goes live. Community Discord opens.",
    badge: "DONE",
    tooltip:
      "We launched the 8-bit component library to the public, featuring over 50 retro-styled components. The registry is live for easy access and installation, and our community Discord is buzzing with early adopters sharing their creations and feedback.",
  },
  {
    icon: "Q2",
    title: "Block System",
    description:
      "Full-page blocks: hero, pricing, FAQ, social proof. Build landing pages in minutes.",
    badge: "NOW",
    tooltip:
      "Introducing our Block System: pre-designed full-page sections like hero banners, pricing tables, FAQs, and social proof. Mix and match blocks to build stunning landing pages in minutes, no design skills required.",
  },
  {
    icon: "Q3",
    title: "Pro Templates",
    description:
      "Complete landing page templates. One-click deploy. Premium themes.",
    tooltip:
      "Our Pro Templates are here: complete landing page designs that you can deploy with one click. Choose from a variety of premium themes tailored for different industries and use cases, all built with our 8-bit components for that nostalgic pixel-perfect look.",
  },
  {
    icon: "Q4",
    title: "Animation Pack",
    description:
      "Pixel transitions, sprite animations, and retro loading screens.",
    tooltip:
      "Level up your UI with our Animation Pack! Add pixel transitions, sprite animations, and retro loading screens to bring your projects to life. Perfect for game interfaces, portfolio sites, or any project that needs a touch of nostalgic flair.",
  },
  {
    icon: "Q5",
    title: "Game UI Kit",
    description:
      "Inventory systems, dialogue boxes, battle UIs. Full game interface toolkit.",
    tooltip:
      "Our Game UI Kit provides everything you need to create immersive game interfaces. From inventory systems to dialogue boxes and battle UIs, this toolkit has you covered.",
  },
];

function EventCard({
  event,
  align = "left",
}: {
  event: TimelineEvent;
  align?: "left" | "right";
}) {
  return (
    <Tooltip key={event.title + event.role} delayDuration={300}>
      <TooltipTrigger>
        <Card>
          <CardHeader className="pb-2">
            <div
              className={cn(
                "flex flex-col-reverse md:flex-row items-center gap-4",
                align === "right" && "justify-end",
              )}
            >
              {align === "right" && event.badge && (
                <Badge className="text-[9px]">{event.badge}</Badge>
              )}
              <CardTitle
                className={cn(
                  "retro text-xs",
                  align === "right" && "text-right",
                )}
              >
                {event.title}
              </CardTitle>
              {align !== "right" && event.badge && (
                <Badge className="text-[9px]">{event.badge}</Badge>
              )}
            </div>
            {event.role && (
              <div className="text-[9px] text-muted-foreground">
                {event.role}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <p
              className={cn(
                "text-muted-foreground text-[10px] leading-relaxed",
                align === "right" && "text-right",
              )}
            >
              {event.description}
            </p>
          </CardContent>
        </Card>
        <TooltipContent>
          <p>{event.tooltip}</p>
        </TooltipContent>
      </TooltipTrigger>
    </Tooltip>
  );
}

export default function Timeline3({
  title = "Roadmap",
  description = "Where we've been and where we're going",
  events = defaultEvents,
  className,
}: Timeline3Props) {
  return (
    <section className={cn("w-full px-4 py-4", className)}>
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="retro mb-3 font-bold text-2xl tracking-tight md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="retro text-muted-foreground text-[9px]">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Mobile: simple vertical (icon left + card right) */}
        <div className="flex flex-col gap-6 md:hidden">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-0 border-l-2 border-dashed border-border" />
            {events.map((event) => (
              <div
                className="relative flex gap-4 pb-6"
                key={event.title + event.role}
              >
                <div className="retro relative z-10 flex size-12 shrink-0 items-center justify-center border-2 border-primary bg-background font-bold text-sm">
                  {event.icon}
                </div>
                <div className="flex-1 pt-1">
                  <EventCard event={event} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: zigzag (alternating left/right) */}
        <div className="relative hidden md:block">
          <div className="absolute top-0 bottom-0 left-1/2 w-0 -translate-x-1/2 border-l-2 border-dashed border-border" />

          <div className="flex flex-col gap-8">
            {events.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  className="relative flex items-center"
                  key={event.title + event.role}
                >
                  {/* Left side */}
                  <div className="flex-1 pr-8">
                    {isLeft && (
                      <div>
                        <EventCard align="right" event={event} />
                      </div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="retro relative z-10 flex size-12 shrink-0 items-center justify-center border-2 border-primary bg-background font-bold text-sm">
                    {event.icon}
                  </div>

                  {/* Right side */}
                  <div className="flex-1 pl-8">
                    {!isLeft && <EventCard event={event} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
