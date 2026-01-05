import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/mock';
import { PATHS } from '@/mock/paths';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ButtonLoading from '../atoms/ButtonLoading';
import InlineError from './InlineError';

const SidebarContent = ({ pathname }: { pathname: string }) => {
  const [isLoading] = useState(false);
  const [error] = useState('');

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-center border-b border-b-gray-300 p-4">
          <Link
            href={PATHS.HOME}
            className="flex items-center gap-2 font-semibold"
          >
            <Image
              src="/assets/landing/logo.webp"
              alt="Wénor Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex-1 overflow-auto p-2">
          <div className="flex flex-col items-start gap-4">
            <nav className="grid items-start text-sm font-medium w-full">
              {sidebarLinks
                // .filter((link) => {
                //   const alwaysVisible = ['enjoyGames'];
                //   if (alwaysVisible.includes(link.title)) return true;

                //   if (
                //     link.title === 'dashboard' &&
                //     permissions.includes('manage orders')
                //   )
                //     return true;

                //   if (link.title === 'productSubscribers') {
                //     return permissions.includes('manage users');
                //   }

                //   if (isAdmin) return true;

                //   const requiredPermission = linkPermissionMap[link.title];
                //   return requiredPermission
                //     ? permissions.includes(requiredPermission)
                //     : false;
                // })
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-black hover:bg-muted',
                      pathname === link.href && 'bg-muted text-black'
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-t-gray-300 p-3">
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-4">
          {isLoading ? (
            <ButtonLoading borderColor="text-black" />
          ) : error ? (
            <InlineError textColor="text-black" />
          ) : (
            <Image
              // src={
              //   user?.photo
              //     ? `${API_IMAGE_URL}${user?.photo}`
              //     : '/assets/user-avatar.png'
              // }
              src="/assets/user-avatar.png"
              alt="character"
              width={30}
              height={30}
            />
          )}
          <div>
            <p className="text-sm font-medium">
              {isLoading ? 'Loading...' : 'user?.name'}
            </p>
            {/* <p className="text-xs">
              {isLoading
                ? 'Loading...'
                : user?.is_admin
                ? t('Dashboard.roles.admin')
                : t('Dashboard.roles.user')}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
