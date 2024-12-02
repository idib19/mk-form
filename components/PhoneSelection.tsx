'use client';

import { phoneModels } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import { PhoneModelCard } from '@/components/phone-model-card';

interface PhoneSelectionProps {
  onSelect: (model: string) => void;
}

export function PhoneSelection({ onSelect }: PhoneSelectionProps) {
  const iPhones = Object.values(phoneModels).filter(model => 
    model.name.toLowerCase().includes('iphone')
  );
  const samsungs = Object.values(phoneModels).filter(model => 
    model.name.toLowerCase().includes('samsung')
  );

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4">Select your iPhone model</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {iPhones.map((model) => (
            <PhoneModelCard
              key={model.name}
              model={model}
              onSelect={() => onSelect(model.name)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4">Select your Samsung model</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {samsungs.map((model) => (
            <PhoneModelCard
              key={model.name}
              model={model}
              onSelect={() => onSelect(model.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}