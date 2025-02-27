import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { MessageSquare } from "lucide-react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  content: string;
}

const ContactInfoItem: FC<ContactInfoItemProps> = ({
  icon,
  title,
  content,
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
      {icon}
    </div>
    <div className="space-y-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{content}</p>
    </div>
  </div>
);

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

interface ContactSectionProps {
  badge: string;
  title: string;
  description: string;
  contactInfo: ContactInfo;
}

const ContactSection: FC<ContactSectionProps> = ({
  badge,
  title,
  description,
  contactInfo,
}) => {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
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
            <div className="space-y-4 pt-4">
              <ContactInfoItem
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                title="Email"
                content={contactInfo.email}
              />
              <ContactInfoItem
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                title="Teléfono"
                content={contactInfo.phone}
              />
              <ContactInfoItem
                icon={<MessageSquare className="h-5 w-5 text-primary" />}
                title="Dirección"
                content={contactInfo.address}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md">
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
