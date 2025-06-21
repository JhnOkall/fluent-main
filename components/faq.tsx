import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We prioritize local payment methods. We currently support mobile money (like M-Pesa), local bank transfers, and major credit/debit cards. Our goal is to make payment as easy as possible for all African users.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "We offer a comprehensive Freemium plan that includes 5GB of storage and access to all core features for up to 2 users. This allows you to experience the platform's power indefinitely before deciding to upgrade.",
  },
  {
    question: "Can I use my own custom domain?",
    answer:
      "Yes, custom domain and subdomain support are included in our Starter and Business plans. This allows you to brand your Fluent workspace for a professional look and feel.",
  },
  {
    question: "How secure is my data on Fluent?",
    answer:
      "Data security is our top priority. We use proven open-source technologies like Nextcloud and Keycloak, and our infrastructure employs end-to-end encryption, regular security audits, and robust access controls to protect your data.",
  },
  {
    question: "Will you offer a self-hosted option?",
    answer:
      "A one-time purchase, self-hosted option is on our future roadmap. This will enable organizations to maintain full data sovereignty and meet specific compliance needs by deploying Fluent on their own servers.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We offer community support for our Freemium users. Our Starter and Business plans include priority and premium support respectively, with dedicated account management and SLAs for our Business clients. All support is provided in local time zones.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
