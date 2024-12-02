'use client';

import { phoneModels, repairServices } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Wrench } from 'lucide-react';
import { PriceTag } from '@/components/ui/price-tag';

interface ServiceSelectionProps {
  selectedModel: string;
  onSelect: (service: string) => void;
}

export function ServiceSelection({ selectedModel, onSelect }: ServiceSelectionProps) {
  const model = phoneModels[selectedModel];

  return (
    <div className="space-y-6">
      <h3 className="text-base sm:text-lg font-semibold">Select repair service for {selectedModel}</h3>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {repairServices.map((service) => {
          const price = service.id === 'screen-repair' 
            ? model.screenRepair 
            : model.batteryReplacement;

          return (
            <Card
              key={service.id}
              className="p-4 sm:p-6 cursor-pointer hover:border-primary transition-colors"
              onClick={() => onSelect(service.id)}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg">{service.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2 sm:line-clamp-none">
                    {service.description}
                  </p>
                  <PriceTag price={price} className="mt-2" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}