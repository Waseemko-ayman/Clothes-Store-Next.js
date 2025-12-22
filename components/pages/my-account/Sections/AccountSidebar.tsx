'use client';
import Button from '@/components/atoms/Button';
import { userInfoButtons } from '@/mock';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const AccountSidebar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);

      // If you want to read the file as Data URL instead of Object URL
      // const reader = new FileReader();
      // reader.onloadend = () => {
      //   setAvatarPreview(reader.result as string);
      // };
      // reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  return (
    <aside className="space-y-4">
      <div className="bg-[var(--white-color)] border-[var(--seven-color)]">
        <div className="text-center pb-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="relative w-[120px] h-[120px] overflow-hidden rounded-full shadow-lg flex items-center justify-center cursor-pointer mx-auto mb-3"
          >
            <Image
              src={avatarPreview || '/assets/user-avatar.png'}
              alt="user"
              fill
              className="object-cover rounded-full border-2 border-[var(--forth-color)]"
            />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </button>

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
