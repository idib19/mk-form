'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { CustomerInfo } from '@/lib/types';
const FORM_SUBMISSION_ENDPOINT = process.env.NEXT_PUBLIC_FORM_SUBMISSION_ENDPOINT;

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  location: z.string().min(5, 'Please enter your full address'),
});

interface CustomerFormProps {
  selectedModel: string;
  selectedService: string;
}

export function CustomerForm({ selectedModel, selectedService }: CustomerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      location: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const payload = {
        phoneNumber: values.phoneNumber,
        customerInfo: {
          name: values.name,
          phoneModel: selectedModel,
          issue: selectedService === 'screen-repair' ? 'cracked screen' : 'battery replacement',
        },
      };

      if (!FORM_SUBMISSION_ENDPOINT) {
        toast.error('Form submission endpoint is not configured.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(FORM_SUBMISSION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setIsSuccess(true);
      toast.success('Booking submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-6 sm:py-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-3 sm:mb-4">Booking Confirmed!</h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Thank you for choosing our service. We will contact you shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 000-0000" {...field} />
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
        </Button>
      </form>
    </Form>
  );
}