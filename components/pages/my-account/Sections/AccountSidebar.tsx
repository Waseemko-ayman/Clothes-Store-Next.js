import Button from '@/components/atoms/Button';
import { userInfoButtons } from '@/mock';
import Image from 'next/image';
import React from 'react';

const AccountSidebar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <aside className="space-y-4">
      <div className="bg-[var(--white-color)] border-[var(--seven-color)]">
        <div className="text-center pb-4">
          <Image
            src="/assets/user-avatar.png"
            alt="user"
            width={96}
            height={96}
            className="mx-auto mb-3 rounded-full border-2 border-[var(--forth-color)]"
          />
          <h1 className="text-[var(--fifth-color)] font-semibold">
            Waseem Abd Elhadi
          </h1>
          <p className="text-[var(--six-color)]">wasimabdelhadi78@email.com</p>
        </div>
        <div className="bg-[var(--seven-color)]" />
        <div className="pt-6 space-y-2">
          {/* {profileButtons.map((btn) => ( */}
          {userInfoButtons.map((btn) => {
            const { id, text } = btn;
            // const Icon = icon;
            return (
              <div key={id} className="flex flex-col gap-2">
                <Button
                  variant="primary"
                  otherClassName={`w-full justify-start ${
                    activeTab === text.toLowerCase()
                      ? '!bg-[var(--first-color)] !text-[var(--forth-color)]'
                      : ''
                  }`}
                  handleClick={() => setActiveTab(text.toLowerCase())}
                  // Icon={Icon}
                >
                  {text}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default AccountSidebar;
