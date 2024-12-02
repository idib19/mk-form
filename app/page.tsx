import { Metadata } from 'next';
import { BookingSteps } from '@/components/BookingSteps';

export const metadata: Metadata = {
  title: 'Phone Repair Booking',
  description: 'Book your phone repair service in just a few simple steps',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Phone Repair Booking
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Book your phone repair service in just a few simple steps
          </p>
        </div>
        <BookingSteps />
      </div>
    </main>
  );
}