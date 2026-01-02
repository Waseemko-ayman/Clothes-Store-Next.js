import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface PurchasesFilterSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: { id: string; label: string }[]; // جديد
  className?: string;
}

const PurchasesFilterSelect: React.FC<PurchasesFilterSelectProps> = ({
  value,
  onChange,
  options,
  className = 'w-[180px]',
}) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger
        className={className}
        aria-label="Filter your orders by statuses"
      >
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        {options?.map((item) => (
          <SelectItem
            key={item.id}
            value={item.id}
            className="hover:bg-[#f4f4ff] hover:text-enjoy-primary"
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PurchasesFilterSelect;
