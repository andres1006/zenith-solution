import { FC } from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle: FC<SectionTitleProps> = ({
  badge,
  title,
  description,
  className = "",
  align = "center",
}) => {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`flex flex-col ${alignmentClasses[align]} space-y-4 ${className}`}
    >
      <div className="space-y-2">
        {badge && (
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            {badge}
          </div>
        )}
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          {title}
        </h2>
        {description && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
