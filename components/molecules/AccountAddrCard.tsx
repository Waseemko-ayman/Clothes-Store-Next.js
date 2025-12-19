import React from 'react';
import Button from '../atoms/Button';
import { Badge, MapPin } from 'lucide-react';
import CardWrapper from '../Template/CardWrapper';
import { AccountAddrCardProps } from '@/interfaces';

const AccountAddrCard = ({ addr }: { addr: AccountAddrCardProps }) => {
  const paraStyle = 'text-sm text-[var(--six-color)]';
  return (
    <CardWrapper key={addr.id}>
      <div className="space-y-2">
        <div className="flex items-center max-[426px]:justify-center gap-2">
          <MapPin className="h-4 w-4 text-[var(--forth-color)]" />
          <h3 className="font-semibold text-[var(--fifth-color)]">
            {addr.type}
          </h3>
          {addr.default && (
            <Badge className="bg-[var(--third-color)] text-[var(--white-color)]">
              Default
            </Badge>
          )}
        </div>
        <p className={paraStyle}>{addr.address}</p>
        <p className={paraStyle}>{addr.city}</p>
      </div>
      <div className="flex gap-2">
        <Button otherClassName="!py-2 !px-4">Edit</Button>
        <Button otherClassName="text-white bg-destructive hover:bg-destructive/50 !py-2 !px-4">
          Delete
        </Button>
      </div>
    </CardWrapper>
  );
};

export default AccountAddrCard;
