import { Badge, Calendar, ChevronRight, Package } from 'lucide-react';
import React from 'react';
import Button from '../atoms/Button';
import { AccountOrderCardProps } from '@/interfaces';
import CardWrapper from '../Template/CardWrapper';

const AccountOrderCard = ({ order }: { order: AccountOrderCardProps }) => {
  return (
    <CardWrapper>
      <div className="flex-1 space-y-3">
        <div className="flex items-center max-[426px]:justify-center gap-3">
          <h3 className="font-semibold text-base text-(--fifth-color) tracking-tight">
            {order.id}
          </h3>
          <Badge
            className={
              order.status === 'Delivered'
                ? 'bg-(--forth-color) text-(--white-color)'
                : order.status === 'In Transit'
                  ? 'bg-(--third-color) text-(--white-color)'
                  : 'bg-(--six-color) text-(--white-color)'
            }
          >
            {order.status}
          </Badge>
        </div>

        <div className="flex items-center gap-5 text-sm text-(--six-color)">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span className="font-medium">{order.date}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Package className="h-3.5 w-3.5" />
            <span className="font-medium">{order.items} items</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right max-[426px]:text-center">
          <div className="text-xs text-(--six-color) mb-1 font-medium uppercase tracking-wide">
            Total
          </div>
          <div className="font-bold text-xl text-(--fifth-color)">
            {order.total}
          </div>
        </div>

        <Button
          href="#"
          variant="ghost"
          Icon={ChevronRight}
          iconPosition="right"
          iconClassName="w-5 h-5"
          otherClassName="!py-2 !px-4"
        >
          View
        </Button>
      </div>
    </CardWrapper>
  );
};

export default AccountOrderCard;
