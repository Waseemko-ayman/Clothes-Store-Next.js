import { ElementType } from 'react';
import PageSection from './PageSection';
import BulletList from './BulletList';
import Link from 'next/link';

interface InfoListSectionProps {
  Icon: ElementType;
  title: string;
  description?: string;
  items?: string[];
  link?: boolean;
  highlight?: boolean;
}

const InfoListSection = ({
  Icon,
  title,
  description,
  items,
  link,
  highlight = false,
}: InfoListSectionProps) => {
  return (
    <PageSection
      highlight={highlight}
      icon={<Icon className="h-5 w-5 text-primary" />}
      title={title}
    >
      {description && (
        <p className="mb-4 text-muted-foreground">
          {description}
          {link && (
            <Link
              href="mailto:wasimabdelhadi78@gmail.com"
              className="font-semibold text-primary hover:underline"
            >
              wasimabdelhadi78@gmail.com
            </Link>
          )}
        </p>
      )}
      {items && <BulletList items={items} />}
    </PageSection>
  );
};

export default InfoListSection;
