import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">
              Productivity Tools{" "}
              <span className="text-primary">Built for Africa,</span> Priced for
              Africa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Fluent is Africa's premier productivity suite, offering
              locally-priced, fully integrated collaboration and document
              management tools for everyone—from students to large
              organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#">Start for Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#pricing">See Pricing Plans</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              5GB Free Storage. No credit card required.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/1.png"
              alt="Fluent Platform Dashboard"
              width={1200}
              height={900}
              fill
              className="object-cover"
              data-ai-hint="collaboration business"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
