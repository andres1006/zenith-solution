import { FC } from "react";
import Image from "next/image";

interface LogoItemProps {
  src: string;
  alt: string;
}

const LogoItem: FC<LogoItemProps> = ({ src, alt }) => (
  <div className="flex items-center justify-center">
    <Image
      src={src}
      alt={alt}
      width={120}
      height={40}
      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
    />
  </div>
);

interface LogosSectionProps {
  title: string;
  logos: LogoItemProps[];
}

const LogosSection: FC<LogosSectionProps> = ({ title, logos }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-medium tracking-tight md:text-2xl">
              {title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo, index) => (
              <LogoItem key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
