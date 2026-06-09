import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/8bit/card";

interface SideMenuProps {
  dictionary: Record<string, any>;
}
const SideMenu = ({ dictionary }: SideMenuProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{dictionary.menu.title}</CardTitle>
        <CardDescription>This is the side menu description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the side menu.</p>
      </CardContent>
      <CardFooter>
        <p>Footer content here.</p>
      </CardFooter>
    </Card>
  );
};

export default SideMenu;
