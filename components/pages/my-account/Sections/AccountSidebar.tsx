'use client';
import Button from '@/components/atoms/Button';
import Loading from '@/components/atoms/Loading';
import { useSession } from '@/Hooks/useSession';
import { userInfoButtons } from '@/mock';
import { CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type UserInfoProps = {
  id: string;
  email: string;
  phone: string;
  display_name: string;
  avatar_url: string;
  created_at: string;
};

const AccountSidebar = ({
  activeTab,
  setActiveTab,
  data: userProfile,
  isLoading,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  data: UserInfoProps[];
  isLoading: boolean;
}) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Session Hook
  const session = useSession();

  const userName = userProfile?.[0]?.display_name;
  const userEmail = userProfile?.[0]?.email;
  const emailVerified =
    session?.user?.identities?.[0]?.identity_data.email_verified;

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
        <div className="text-center bg-white p-6 rounded-xl shadow-lg">
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

          {isLoading ? (
            <Loading spinnerSize={20} showText={false} />
          ) : (
            <>
              <h1 className="text-[var(--fifth-color)] font-semibold">
                {userName}
              </h1>
              <p className="text-[var(--six-color)]">{userEmail}</p>
            </>
          )}
          <div
            className={`flex items-center justify-center gap-1 ${
              emailVerified ? 'text-green-600' : 'text-red-600'
            } font-semibold mt-3`}
          >
            {emailVerified ? <CheckCircle size={16} /> : <XCircle size={16} />}

            <p>Email {emailVerified ? 'verified' : 'not verified'}</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-gray-600 mt-1 text-sm">
            <p>Registered via: </p>
            <span className="font-medium capitalize">
              {session?.user?.app_metadata?.provider === 'email'
                ? 'Email'
                : session?.user?.app_metadata?.provider}
            </span>
          </div>
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
