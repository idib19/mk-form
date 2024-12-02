import { PhoneModel, RepairService } from './types';

export const phoneModels: Record<string, PhoneModel> = {
  'iPhone 8': { name: 'iPhone 8', screenRepair: 119, batteryReplacement: 59 },
  'iPhone 11': { name: 'iPhone 11', screenRepair: 139, batteryReplacement: 99 },
  'iPhone 12': { name: 'iPhone 12', screenRepair: 149, batteryReplacement: 99 },
  'iPhone 13': { name: 'iPhone 13', screenRepair: 159, batteryReplacement: 129 },
  'iPhone 14': { name: 'iPhone 14', screenRepair: 199, batteryReplacement: 149 },
  'Samsung S20': { name: 'Samsung S20', screenRepair: 249, batteryReplacement: 149 },
  'Samsung S21': { name: 'Samsung S21', screenRepair: 249, batteryReplacement: 149 },
  'Samsung S22': { name: 'Samsung S22', screenRepair: 249, batteryReplacement: 149 },
  'Samsung S23': { name: 'Samsung S23', screenRepair: 289, batteryReplacement: 199 },
  'Samsung A51': { name: 'Samsung A51', screenRepair: 199, batteryReplacement: 129 },
  'Samsung A52': { name: 'Samsung A52', screenRepair: 219, batteryReplacement: 149 },
};

export const repairServices: RepairService[] = [
  {
    id: 'screen-repair',
    name: 'Screen Repair',
    description: 'Fix cracked screens, display issues, and touch functionality',
  },
  {
    id: 'battery-replacement',
    name: 'Battery Replacement',
    description: 'Replace old or damaged batteries to improve device performance',
  },
];