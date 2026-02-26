import { PaymentMethod } from '@/interfaces';
import Button from '@/components/atoms/Button';
import { FaTrash } from 'react-icons/fa6';
import React from 'react';
import { Badge } from 'lucide-react';

const PaymentMethodCard = ({
  method,
  handleRemove,
}: {
  method: PaymentMethod;
  handleRemove: (id: string) => void;
}) => {
  return (
    <div className="relative p-5 bg-white border border-(--seven-color) rounded-xl overflow-hidden shadow-lg hover:border-(--forth-color)/30 transition-all duration-300">
      {method.isDefault && (
        <Badge className="absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
          Default
        </Badge>
      )}

      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center text-2xl shrink-0">
          {method.logo}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground mb-1">{method.name}</h3>

          {method.type === 'card' && (
            <div className="text-sm text-muted-foreground space-y-0.5">
              <p>Expires {method.expiry}</p>
              <p className="font-mono">•••• •••• •••• {method.last4}</p>
            </div>
          )}

          {method.type === 'paypal' && (
            <p className="text-sm text-muted-foreground">{method.email}</p>
          )}

          {method.type === 'bank' && (
            <p className="text-sm text-muted-foreground font-mono">
              Account {method.accountNumber}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-border">
        <Button
          variant="outline"
          otherClassName="flex-1 !py-2 !border-(--forth-color) !text-(--forth-color) hover:!text-white"
          disabled={method.isDefault}
        >
          Set as Default
        </Button>
        <Button
          variant="circle"
          handleClick={() => handleRemove(method.id)}
          otherClassName="group flex items-center justify-center w-10 h-10 border-none bg-red-50 hover:bg-red-500"
          aria-label="Remove item"
        >
          <FaTrash className="text-red-500 group-hover:text-white transition-colors duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
