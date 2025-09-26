import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsPage() {
  const faqs = [
    {
      question: "What makes Vetarent different from other rental platforms?",
      answer: "Vetarent is Nigeria's only rental platform that verifies both landlords and tenants before allowing them to list or rent. This drastically reduces fraud and builds trust."
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
    <section className="py-8 md:py-12">
      <div className="mx-auto px-4 w-full max-w-4xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
           {faqs.map((faq, index) => (
          <AccordionItem  key={`item-${index}`} value={`item-${index}`} className="border border-border rounded-none px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold md:font-bold text-foreground text-[14px] md:text-lg hover:no-underline py-4 md:py-8">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground md:text-black font-medium pb-6 text-xs md:text-base leading-relaxed" >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}