"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { create } from 'zustand';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from "@/components/ui/button";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactStore {
  submissions: ContactFormData[];
  isSubmitting: boolean;
  addSubmission: (data: ContactFormData) => void;
  setSubmitting: (submitting: boolean) => void;
}

const useContactStore = create<ContactStore>((set) => ({
  submissions: [],
  isSubmitting: false,
  addSubmission: (data) =>
    set((state) => ({
      submissions: [...state.submissions, data],
    })),
  setSubmitting: (submitting) => set({ isSubmitting: submitting }),
}));

export default function ContactUsPage() {
  const { addSubmission, isSubmitting, setSubmitting } = useContactStore();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    addSubmission(data);
    form.reset();
    setSubmitting(false);
    
    alert('Form submitted successfully!');
  };

  return (
   <section className="py-8 md:py-12">
     <div className="mx-auto px-4 w-full max-w-4xl">
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-center">
        
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    type="tel"
                    placeholder="Phone No."
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Please type a message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400 resize-vertical"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
           type="submit"
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full h-14 md:w-3/5 bg-[#2E7D32] text-white font-semibold text-base rounded-none shadow-[inset_4px_8px_8px_rgba(255,255,255,0.25),inset_-4px_-8px_8px_rgba(0,0,0,0.25)] hover:bg-[#245226] transition-all duration-200">
             {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
   </section>
  );
};
