/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Image from 'next/image';
import AnimatedWrapper from './FramerMotion/AnimatedWrapper';
import NavItem from '../atoms/NavItem';
import { userList } from '@/data';
import { useAuthContext } from '@/context/AuthContext';
import useSupabaseClient from '@/Hooks/useSupabaseClient';
import Loading from '../atoms/Loading';
import { useSession } from '@/Hooks/useSession';

const UserPopover = () => {
  const { logout } = useAuthContext();

  // Supabase Hook
  const session = useSession();
  const { data: userInfo, isLoading } = useSupabaseClient('profiles', {
    id: session?.user?.id,
  });

  const handleLogout = () => {
    logout();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {isLoading ? (
          <Loading
            showText={false}
            spinnerSize={25}
            otherClassName="bg-transparent!"
          />
        ) : (
          <Image
            src={userInfo?.[0]?.avatar_url || '/assets/user-avatar.png'}
            // src={'/assets/user-avatar.png'}
            alt="user avatar"
            width={35}
            height={35}
            className="rounded-full border-2 border-(--forth-color) cursor-pointer"
          />
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <ul>
          {userList.map((item: any, index: number) => {
            if (item.title === 'Dashboard' && userInfo?.[0]?.role !== 'ADMIN')
              return false;
            return (
              <AnimatedWrapper key={item.id} custom={index}>
                <li className="w-full">
                  <NavItem
                    icon={item.icon}
                    name={item.title}
                    otherClassNameIcon={
                      item.title === 'logout' ? '!text-red-500' : ''
                    }
                    otherClassName={
                      item.title === 'logout'
                        ? '!text-red-500 hover:bg-red-50'
                        : ''
                    }
                    linkPath={
                      'link' in item ? (item.link as string) : undefined
                    }
                    onClick={item.title === 'logout' ? handleLogout : undefined}
                    showArrow={item.title !== 'logout'}
                    disablePrefetch={
                      item.title === 'Dashboard' || item.title === 'My Account'
                    }
                  />
                </li>
              </AnimatedWrapper>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
