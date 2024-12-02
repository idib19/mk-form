'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PhoneSelection } from '@/components/PhoneSelection';
import { ServiceSelection } from '@/components/ServiceSelection';
import { CustomerForm } from '@/components/CustomerForm';
import { Card } from '@/components/ui/card';

export function BookingSteps() {
  const [activeStep, setActiveStep] = useState('phone');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handlePhoneSelection = (model: string) => {
    setSelectedModel(model);
    setActiveStep('service');
  };

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setActiveStep('info');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <Tabs value={activeStep} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="phone" className="text-sm sm:text-base">Phone Model</TabsTrigger>
          <TabsTrigger value="service" className="text-sm sm:text-base">Service</TabsTrigger>
          <TabsTrigger value="info" className="text-sm sm:text-base">Your Information</TabsTrigger>
        </TabsList>
        <TabsContent value="phone">
          <PhoneSelection onSelect={handlePhoneSelection} />
        </TabsContent>
        <TabsContent value="service">
          <ServiceSelection 
            selectedModel={selectedModel}
            onSelect={handleServiceSelection}
          />
        </TabsContent>
        <TabsContent value="info">
          <CustomerForm
            selectedModel={selectedModel}
            selectedService={selectedService}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
}