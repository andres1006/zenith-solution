import { FC, ReactNode } from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "@/components/service-card";

interface ServiceItemType {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  badge: string;
  title: string;
  description: string;
  services: ServiceItemType[];
}

const ServicesSection: FC<ServicesSectionProps> = ({
  badge,
  title,
  description,
  services,
}) => {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <SectionTitle
          badge={badge}
          title={title}
          description={description}
          align="center"
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
