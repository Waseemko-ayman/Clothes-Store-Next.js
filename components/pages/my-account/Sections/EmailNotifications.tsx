'use client';
import Button from '@/components/atoms/Button';
import CardWrapper from '@/components/Template/CardWrapper';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import React, { useState } from 'react';

const EmailNotifications = () => {
  const [allNotifications, setAllNotifications] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [frequency, setFrequency] = useState('instant');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Save changes');
  };

  return (
    <CardWrapper otherClassName="mt-6">
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <div className="space-y-1">
            <label
              htmlFor="all-notifications"
              className="text-lg font-medium text-foreground"
            >
              Enable all email notifications
            </label>
            <p className="text-sm text-muted-foreground">
              Master control for all email notifications
            </p>
          </div>
          <Switch
            id="all-notifications"
            checked={allNotifications}
            onCheckedChange={setAllNotifications}
          />
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label
                htmlFor="order-updates"
                className="text-base font-medium text-foreground"
              >
                Order updates
              </label>
              <p className="text-sm text-muted-foreground">
                Get notified about your order status and shipping
              </p>
            </div>
            <Switch
              id="order-updates"
              checked={orderUpdates}
              onCheckedChange={setOrderUpdates}
              disabled={!allNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label
                htmlFor="security-alerts"
                className="text-base font-medium text-foreground"
              >
                Security alerts
              </label>
              <p className="text-sm text-muted-foreground">
                Important notifications about your account security
              </p>
            </div>
            <Switch
              id="security-alerts"
              checked={securityAlerts}
              onCheckedChange={setSecurityAlerts}
              disabled={!allNotifications}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <label
                htmlFor="marketing"
                className="text-base font-medium text-foreground"
              >
                Marketing & promotional emails
              </label>
              <p className="text-sm text-muted-foreground">
                Receive updates about new features and special offers
              </p>
            </div>
            <Switch
              id="marketing"
              checked={marketing}
              onCheckedChange={setMarketing}
              disabled={!allNotifications}
            />
          </div>
        </div>

        <div className="pt-6 border-t border-border space-y-3">
          <label
            htmlFor="frequency"
            className="text-base font-medium text-foreground"
          >
            Notification frequency
          </label>
          <Select
            value={frequency}
            onValueChange={setFrequency}
            disabled={!allNotifications}
          >
            <SelectTrigger id="frequency" className="h-11 bg-background mt-2">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instant">Instant</SelectItem>
              <SelectItem value="daily">Daily digest</SelectItem>
              <SelectItem value="weekly">Weekly summary</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Choose how often you want to receive email notifications
          </p>
        </div>

        <Button type="submit" otherClassName="w-full font-medium">
          Save Changes
        </Button>
      </form>
    </CardWrapper>
  );
};

export default EmailNotifications;
