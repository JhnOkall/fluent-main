import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Freemium",
    emoji: "🌱",
    price: "Free",
    description: "For students, sole traders, and individuals getting started.",
    features: [
      "5GB of storage",
      "Up to 2 users",
      "Access to core Nextcloud apps",
      "OnlyOffice web version",
      "Limited video calling",
      "Community support",
    ],
    cta: "Get Started",
    variant: "outline",
  },
  {
    name: "Starter",
    emoji: "⚡️",
    price: "Ksh. 300",
    period: "/ user/month",
    description: "For small businesses, growing NGOs, and professional teams.",
    features: [
      "All Freemium features, plus:",
      "30GB storage per user",
      "Meetings up to 30 participants",
      "Custom branding & domains",
      "Full email integration",
      "Priority support",
    ],
    cta: "Choose Starter",
    variant: "default",
    highlight: true,
  },
  {
    name: "Business",
    emoji: "🚀",
    price: "Ksh. 1,000",
    period: "/ user/month",
    description: "For established businesses needing advanced features.",
    features: [
      "All Starter features, plus:",
      "100GB storage per user",
      "Advanced RBAC",
      "Advanced OnlyOffice features",
      "Meetings up to 100 participants",
      "Premium support with SLAs",
    ],
    cta: "Contact Sales",
    variant: "outline",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background/80">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Accessible Pricing for All Africans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent, currency-adjusted pricing that fits your budget. Choose
            a plan and start collaborating today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col h-full ${
                tier.highlight ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold font-headline flex items-center justify-center gap-2">
                  <span>{tier.emoji}</span>
                  {tier.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary my-4">
                  {tier.price}
                  {tier.period && (
                    <span className="text-lg font-normal text-muted-foreground">
                      {tier.period}
                    </span>
                  )}
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.variant as any}
                  style={
                    tier.highlight
                      ? {
                          backgroundColor: "hsl(var(--accent))",
                          color: "hsl(var(--accent-foreground))",
                        }
                      : {}
                  }
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 text-muted-foreground">
          <p>
            Annual plans available with a discount.{" "}
            <a href="#" className="text-primary underline">
              Learn more
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
