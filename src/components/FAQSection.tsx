import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Vetarent different from other rental platforms?",
      answer: "Vetarent is Nigeria's only rental platform that verifies both landlords and tenants before any rental occurs. We use multi-layered identity verification to prevent fraud and ensure safety for all parties involved in the rental process."
    },
    {
      question: "How do I get verified as a landlord?",
      answer: "Getting verified as a landlord involves submitting your identity documents, property ownership documents, and going through our KYC process. Our team reviews all submissions and typically completes verification within 24-48 hours."
    },
    {
      question: "Does it cost money to list my property?",
      answer: "Basic property listing is free. We charge a small commission only when you successfully rent out your property through our platform, ensuring you only pay when you get results."
    },
    {
      question: "How do I communicate with Vetarent?",
      answer: "You can reach us through multiple channels: our in-app chat support, email at support@vetarent.com, or phone support. Our customer service team is available to help you with any questions or issues."
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Frequently Asked <br />
              Question (FAQ&apos;s)
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12">
            <Button className="bg-vetarent-orange hover:bg-vetarent-orange/90 text-accent-foreground px-8 py-3 rounded-full">
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;