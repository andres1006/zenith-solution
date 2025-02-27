import { FC } from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "@/components/testimonial-card";

interface TestimonialType {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  badge: string;
  title: string;
  description: string;
  testimonials: TestimonialType[];
}

const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  badge,
  title,
  description,
  testimonials,
}) => {
  return (
    <section
      id="testimonios"
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
