import React from 'react';
import { Switch } from '../ui/switch';
import { NotificationSwitchProps } from '@/interfaces';

const NotificationSwitch = ({
  id,
  label,
  desc,
  checked,
  onChange,
  disabled,
}: NotificationSwitchProps) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <label htmlFor={id} className="text-base font-medium text-foreground">
        {label}
      </label>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
    <Switch
      id={id}
      checked={checked}
      onCheckedChange={onChange}
      disabled={disabled}
    />
  </div>
);

export default NotificationSwitch;
