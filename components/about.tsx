import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, DollarSign, Globe } from "lucide-react";

const valueProps = [
  {
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    title: "African-First Pricing",
    description:
      "Currency-adjusted pricing and local payment methods like mobile money.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Integrated Experience",
    description:
      "A single platform to replace multiple, expensive subscriptions for a seamless workflow.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Local Support",
    description:
      "Customer support in local time zones with a deep understanding of your needs.",
  },
];

export function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background/80">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Mission: Empowering African Success
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fluent was born from a simple idea: Africa deserves world-class
              technology that understands its unique economic and operational
              landscape. We are committed to breaking down the barriers of high
              costs and fragmented services imposed by foreign platforms.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our goal is to provide an affordable, integrated, and powerful
              productivity suite that enables individuals, businesses, and
              organizations across the continent to thrive.
            </p>
            <div className="mt-8 grid gap-4">
              {valueProps.map((prop) => (
                <div key={prop.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{prop.title}</h4>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/2.png"
              width={800}
              height={600}
              alt="Team collaborating in an office in Africa"
              fill
              className="object-cover"
              data-ai-hint="team meeting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
