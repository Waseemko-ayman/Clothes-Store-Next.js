import { AlertCircle } from 'lucide-react';

const InlineError = ({
  textColor = 'text-white',
  otherClassName,
}: {
  textColor?: string;
  otherClassName?: string;
}) => {
  return (
    <span
      className={`flex items-center ${textColor} text-sm gap-1 ${otherClassName}`}
    >
      <AlertCircle className="w-4 h-4" />
      <p>Sorry! Something went wrong.</p>
    </span>
  );
};

export default InlineError;
