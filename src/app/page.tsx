"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, ArrowUpRight, Zap, Target, Clock, Star, MessageSquareQuote, CheckCircle2, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function MintMediumPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Mint Medium"
          navItems={[
            { name: "Process", id: "process" },
            { name: "Services", id: "services" },
            { name: "Proof", id: "proof" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Your website. Done in 48 hours."
          description="High-converting, professional websites built for local service businesses. We build your site first — you only pay if you love it."
          tag="Built Fast. Built to Convert."
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "See Our Work", href: "#work" },
            { text: "Claim Your Spot", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-product_23-2149168590.jpg", imageAlt: "Modern Med Spa website mockup" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-handsome-friendly-looking-young-unshaven-male-mechanic-plumber-yellow-gloves_343059-3536.jpg", imageAlt: "Roofing contractor landing page" },
            { imageSrc: "http://img.b2bpic.net/free-photo/with-closed-eyes-joyful-young-afro-american-male-barber-wearing-uniform-with-shaving-cream-applied-his-face-holding-straight-razor_141793-98891.jpg", imageAlt: "Barbershop booking interface" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-wearing-protective-glove_23-2149164346.jpg", imageAlt: "Dental clinic service site" },
            { imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-laptop-with-rate-charts-display-while-man-woman-working-business-project-design-computer-screen-with-data-chart-information-finance-analysis-desk_482257-40065.jpg", imageAlt: "HVAC professional web presence" },
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-using-eye-patches_23-2150467043.jpg", imageAlt: "Luxury salon mobile design" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="The Mint Medium Difference"
          description="We don't do 'bespoke digital experiences.' We build functional, fast, conversion-focused machines for local businesses."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "48-Hour Launch",              description: "Stop waiting months. Our proven framework gets you live in 48 hours flat.",              bentoComponent: "reveal-icon",              icon: Clock
            },
            {
              title: "Show First, Charge Later",              description: "We build a custom version of your site before we talk pricing. No risk, ever.",              bentoComponent: "reveal-icon",              icon: Target
            },
            {
              title: "Built for Conversion",              description: "Google Reviews, direct booking, and click-to-call buttons on every page.",              bentoComponent: "reveal-icon",              icon: ArrowUpRight
            }
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Mint Medium didn't just build me a website; they built me a lead generator. It was done in two days and I had three enquiries within the first week."
          rating={5}
          author="— Mark Davies, Owner of Summit Roofing"
          avatars={[{ src: "http://img.b2bpic.net/free-photo/portrait-male-personal-shopper-working_23-2148924139.jpg", alt: "Client" }]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
        <MetricCardOne
          title="Why Speed Matters"
          description="Every week your site isn't live is money left on the table."
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "time", value: "48hr", title: "Launch Time", description: "From content to go-live", icon: Clock },
            { id: "risk", value: "$0", title: "Upfront Cost", description: "Build before you pay", icon: ShieldCheck },
            { id: "growth", value: "100%", title: "Conversion", description: "Designed to turn clicks into clients", icon: TrendingUp }
          ]}
        />
        <FeatureCardSixteen
          title="Stop Losing Leads"
          description="Compare your current site to a Mint Medium build."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: ["Slow load times", "Hard to find contact info", "No booking capability", "Invisible on Google", "Doesn't work on mobile"]
          }}
          positiveCard={{
            items: ["Lightning-fast speed", "Integrated Google Reviews", "Direct 'Book Now' workflow", "SEO-optimized local ranking", "Flawless mobile experience"]
          }}
        />
        <FaqBase
          title="Common Questions"
          description="Clear answers for busy business owners."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "How is it only 48 hours?", content: "We don't start from scratch. We use niche-specific, conversion-tested frameworks that we customize to your branding, content, and needs." },
            { id: "2", title: "What if I don't like the site?", content: "We build it before asking for a penny. If you don't love it, you don't pay. No contracts, no awkward conversations." },
            { id: "3", title: "Do I own the website?", content: "Yes. You own everything. We walk you through how to make basic changes yourself so you never have to pay us for simple updates." },
            { id: "4", title: "What niches do you work with?", content: "We specialize in local services: Salons, Med Spas, Roofing, HVAC, Plumbing, Dental, Landscaping, and similar businesses." }
          ]}
        />
        <ContactCTA
          tag="Ready to grow?"
          title="Your website. Done in 48 hours."
          description="See your site built before you pay a single dollar. Let's get to work."
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Get Started Now", href: "#contact" }
          ]}
          useInvertedBackground={true}
        />
        <FooterBase
          logoText="Mint Medium"
          copyrightText="© 2025 Mint Medium"
          columns={[
            {
              title: "Niches",              items: [
                { label: "Home Services", href: "#" },
                { label: "Beauty & Wellness", href: "#" },
                { label: "Health & Medical", href: "#" },
                { label: "Restaurants", href: "#" }
              ]
            },
            {
              title: "Agency",              items: [
                { label: "Our Process", href: "#" },
                { label: "Pricing", href: "#" },
                { label: "Client Results", href: "#" }
              ]
            }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
