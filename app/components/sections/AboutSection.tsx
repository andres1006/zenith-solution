import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

interface FeatureItemProps {
  icon: ReactNode;
  text: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ icon, text }) => (
  <li className="flex items-center gap-2">
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
      {icon}
    </div>
    <span>{text}</span>
  </li>
);

interface AboutSectionProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

const AboutSection: FC<AboutSectionProps> = ({
  badge,
  title,
  description,
  features,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src={imageSrc}
            width={550}
            height={550}
            alt={imageAlt}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {badge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {title}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={<Zap className="h-4 w-4 text-primary" />}
                  text={feature}
                />
              ))}
            </ul>
            <div>
              <Button size="lg" asChild>
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
