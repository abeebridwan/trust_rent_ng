
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Vetarent?</AccordionTrigger>
          <AccordionContent>
            Vetarent is Nigeria's most trusted rental platform, connecting verified landlords, properties, and tenants to eliminate rental fraud.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do you verify properties?</AccordionTrigger>
          <AccordionContent>
            Our team conducts physical inspections and verifies property documents to ensure every listing is authentic and accurately represented.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a fee for tenants?</AccordionTrigger>
          <AccordionContent>
            Creating an account and browsing listings is free. A small service fee is applied when you successfully rent a property through our platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How do I list my property?</AccordionTrigger>
          <AccordionContent>
            Landlords can sign up and submit their property for verification. Once our team verifies the details, your property will be listed on our platform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
