import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card";

interface PageCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  contentClassName?: string;
}

const PageCard = ({
  children,
  title,
  description,
  contentClassName,
}: PageCardProps) => {
  return (
    <div className="flex-1 bg-background px-1 h-screen overflow-x-hidden overflow-y-auto">
      <Card className="bg-background shadow-none min-h-full text-foreground">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className={contentClassName}>{children}</CardContent>
      </Card>
    </div>
  );
};

export default PageCard;
