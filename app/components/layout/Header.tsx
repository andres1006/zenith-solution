import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp, Zap } from "lucide-react";
import { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-sm font-medium transition-colors hover:text-primary"
  >
    {children}
  </Link>
);

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Zap className="h-6 w-6 text-primary" />
            <ArrowUp className="h-3 w-3 text-primary absolute -top-1 right-0" />
          </div>
          <span className="text-xl font-bold">ZENITH SOLUTION</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#portafolio">Portafolio</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#testimonios">Testimonios</NavLink>
        </nav>
        <Button asChild>
          <Link href="#contacto">Contáctanos</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
