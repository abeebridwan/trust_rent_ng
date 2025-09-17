"use client";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [viewAllClicked, setViewAllClicked] = useState(false);

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

  const handleViewAll = () => {
    if (viewAllClicked) {
      // If all are open, close all
      setOpenItems([]);
      setViewAllClicked(false);
    } else {
      // Open all items
      const allItemValues = faqs.map((_, index) => `item-${index}`);
      setOpenItems(allItemValues);
      setViewAllClicked(true);
    }
  };

  const handleAccordionChange = (value: string) => {
    setOpenItems(prev => {
      if (prev.includes(value)) {
        // Remove the item if it's already open
        const newOpenItems = prev.filter(item => item !== value);
        // Update viewAllClicked state based on whether all items are still open
        setViewAllClicked(newOpenItems.length === faqs.length);
        return newOpenItems;
      } else {
        // Add the item if it's closed
        const newOpenItems = [...prev, value];
        // Update viewAllClicked state based on whether all items are now open
        setViewAllClicked(newOpenItems.length === faqs.length);
        return newOpenItems;
      }
    });
  };

  return (
    <section className="bg-background py-16">
      <div className="grid md:grid-cols-[30%_1fr] gap-8 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-left md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground md:mb-8 md:!leading-[50px]">
              Frequently Asked <br />
              Question (FAQ&apos;s)
            </h2>
          </div>

          <div className="mt-12 hidden md:block">
            <Button 
              onClick={handleViewAll}
              className="bg-[#FF8F00] hover:bg-[#E68000] text-white font-semibold px-16 py-6 rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] transition-all duration-200 w-[200px]"
            >
              {viewAllClicked ? "Collapse All" : "View All"}
            </Button>
          </div>
        </div>

        <div>
          <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-none px-6 bg-card"
              >
                <AccordionTrigger 
                  className="text-left font-semibold md:font-bold text-foreground text-[14px] md:text-lg hover:no-underline py-4 md:py-8"
                  onClick={() => handleAccordionChange(`item-${index}`)}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground md:text-black font-medium pb-6 text-xs md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 block md:hidden">
            <Button 
              onClick={handleViewAll}
              className="bg-[#FF8F00] hover:bg-[#E68000] text-white font-semibold px-4 md:px-16 py-6 rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] transition-all duration-200 w-[140px]"
            >
              {viewAllClicked ? "Collapse All" : "View All"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;