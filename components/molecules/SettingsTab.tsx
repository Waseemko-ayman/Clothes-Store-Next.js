'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TabsContent } from '../ui/tabs';
import CardHeaderContent from '../ui/display/CardHeader';

type SettingsTabProps = {
  value: string;
  title: string;
  description: string;
  settingsFields?: {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    options?: string[];
    SelectValuePlaceholder?: string;
  }[];
  children: React.ReactNode;
  cardContentClassName?: string;
};

const SettingsTab: React.FC<SettingsTabProps> = ({
  value,
  title,
  description,
  children,
  cardContentClassName,
}) => {
  return (
    <TabsContent value={value} variant="classic">
      <Card>
        <CardHeaderContent title={title} description={description} />
        <CardContent className={cardContentClassName}>{children}</CardContent>
      </Card>
    </TabsContent>
  );
};

export default SettingsTab;
