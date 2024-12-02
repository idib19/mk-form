'use client';

import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';
import { PhoneModel } from '@/lib/types';

interface PhoneModelCardProps {
  model: PhoneModel;
  onSelect: () => void;
}

export function PhoneModelCard({ model, onSelect }: PhoneModelCardProps) {
  return (
    <div className="w-full">
      <Button
        variant="outline"
        className="w-full h-auto py-4 flex flex-col items-center justify-center gap-2 hover:bg-accent/50"
        onClick={onSelect}
      >
        <Smartphone className="h-6 w-6" />
        <span className="font-medium">{model.name}</span>
      </Button>
    </div>
  );
}