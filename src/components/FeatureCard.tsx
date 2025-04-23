import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden group border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
