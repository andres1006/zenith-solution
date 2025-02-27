import { FC } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import LogosSection from "./components/sections/LogosSection";
import ServicesSection from "./components/sections/ServicesSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import AboutSection from "./components/sections/AboutSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CtaSection from "./components/sections/CtaSection";
import ContactSection from "./components/sections/ContactSection";
import ScrollToTop from "@/components/scroll-to-top";
import {
  HERO_DATA,
  LOGOS_DATA,
  SERVICES_DATA,
  PORTFOLIO_DATA,
  ABOUT_DATA,
  TESTIMONIALS_DATA,
  CTA_DATA,
  CONTACT_DATA,
} from "./constants/page-data";

const Home: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title={HERO_DATA.title}
          description={HERO_DATA.description}
          primaryCta={HERO_DATA.primaryCta}
          secondaryCta={HERO_DATA.secondaryCta}
          imageSrc={HERO_DATA.imageSrc}
          imageAlt={HERO_DATA.imageAlt}
        />

        <LogosSection title={LOGOS_DATA.title} logos={LOGOS_DATA.logos} />

        <ServicesSection
          badge={SERVICES_DATA.badge}
          title={SERVICES_DATA.title}
          description={SERVICES_DATA.description}
          services={SERVICES_DATA.services}
        />

        <PortfolioSection
          badge={PORTFOLIO_DATA.badge}
          title={PORTFOLIO_DATA.title}
          description={PORTFOLIO_DATA.description}
          projects={PORTFOLIO_DATA.projects}
          ctaText={PORTFOLIO_DATA.ctaText}
        />

        <AboutSection
          badge={ABOUT_DATA.badge}
          title={ABOUT_DATA.title}
          description={ABOUT_DATA.description}
          features={ABOUT_DATA.features}
          ctaText={ABOUT_DATA.ctaText}
          ctaLink={ABOUT_DATA.ctaLink}
          imageSrc={ABOUT_DATA.imageSrc}
          imageAlt={ABOUT_DATA.imageAlt}
        />

        <TestimonialsSection
          badge={TESTIMONIALS_DATA.badge}
          title={TESTIMONIALS_DATA.title}
          description={TESTIMONIALS_DATA.description}
          testimonials={TESTIMONIALS_DATA.testimonials}
        />

        <CtaSection
          title={CTA_DATA.title}
          description={CTA_DATA.description}
          buttonText={CTA_DATA.buttonText}
          buttonLink={CTA_DATA.buttonLink}
        />

        <ContactSection
          badge={CONTACT_DATA.badge}
          title={CONTACT_DATA.title}
          description={CONTACT_DATA.description}
          contactInfo={CONTACT_DATA.contactInfo}
        />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Home;
