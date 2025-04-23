import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-accent/50 bg-secondary/50 backdrop-blur-sm border-secondary/80">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-secondary/80">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
