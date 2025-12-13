import React from 'react';
import { AuthRedirectProps } from '@/interfaces';
import Link from 'next/link';

const AuthRedirect: React.FC<AuthRedirectProps> = ({
  text,
  linkText,
  href,
}) => {
  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-[var(--six-color)]">
        {text}{' '}
        <Link
          href={href}
          className="font-semibold hover:underline transition-colors text-[var(--forth-color)]"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AuthRedirect;
