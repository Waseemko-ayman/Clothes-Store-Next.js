import React from 'react';
import { AuthRedirectProps } from '@/interfaces';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AuthRedirect: React.FC<AuthRedirectProps> = ({
  text,
  linkText,
  href,
}) => {
  return (
    <div className="text-center">
      <p className="text-sm text-(--six-color)">
        {text}{' '}
        <Link
          href={href}
          className="group inline-flex items-center gap-1 font-semibold hover:underline transition-colors text-(--forth-color)"
        >
          {linkText}
          <ArrowRight
            size={17}
            className="text-(--forth-color) animate-bounce-horizontal"
          />
        </Link>
      </p>
    </div>
  );
};

export default AuthRedirect;
