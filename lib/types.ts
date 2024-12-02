export interface PhoneModel {
  name: string;
  screenRepair: number;
  batteryReplacement: number;
}

export interface RepairService {
  id: string;
  name: string;
  description: string;
}

export interface CustomerInfo {
  name: string;
  phoneNumber: string;
  email: string;
  location: string;
  phoneModel: string;
  issue: string;
}

export interface BookingFormData extends CustomerInfo {
  selectedModel: string;
  selectedService: string;
}