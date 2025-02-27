import Link from "next/link";
import { ArrowUp, Zap } from "lucide-react";
import { FC } from "react";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink: FC<SocialLinkProps> = ({ href, children }) => (
  <Link href={href} className="text-muted-foreground hover:text-foreground">
    {children}
  </Link>
);

const Footer: FC = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Zap className="h-6 w-6 text-primary" />
            <ArrowUp className="h-3 w-3 text-primary absolute -top-1 right-0" />
          </div>
          <span className="text-lg font-bold">ZENITH SOLUTION</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} ZENITH SOLUTION. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <SocialLink href="#">Twitter</SocialLink>
          <SocialLink href="#">LinkedIn</SocialLink>
          <SocialLink href="#">Instagram</SocialLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
