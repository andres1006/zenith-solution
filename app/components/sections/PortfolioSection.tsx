import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import PortfolioItem from "@/components/portfolio-item";

interface PortfolioItemType {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface PortfolioSectionProps {
  badge: string;
  title: string;
  description: string;
  projects: PortfolioItemType[];
  ctaText: string;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({
  badge,
  title,
  description,
  projects,
  ctaText,
}) => {
  return (
    <section
      id="portafolio"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <SectionTitle
          badge={badge}
          title={title}
          description={description}
          align="center"
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
