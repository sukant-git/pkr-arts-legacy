import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  description: string;
  content: string;
}

const InfoCard = ({ title, description, content }: InfoCardProps) => {
  return (
    <Card className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
