'use client';
import Input from '@/components/atoms/Input';
import AccountSectionHeader from '@/components/molecules/AccountSectionHeader';
import AuthTemplate from '@/components/Template/AuthTemplate';
import { profileSecInputs } from '@/mock';
import React, { useState } from 'react';

const Profile = () => {
  const [loading] = useState(false);
  const [error] = useState('');
  return (
    <div>
      <AccountSectionHeader
        title="Profile Information"
        description="Update your personal details"
      />
      <AuthTemplate
        otherClassName="mt-6 !max-w-full rounded-xl"
        error={error}
        submitBtnText="Save Changes"
        loadingText="save changes..."
        loading={loading}
        formChildren={
          <>
            <div className="grid md:grid-cols-2 gap-4">
              {profileSecInputs.map((input) => (
                <div key={input.id} className="space-y-2">
                  <Input
                    id={input.name}
                    type={input.type}
                    label={input.label}
                    inputName={input.name}
                    placeholder={input.placeholder}
                    otherClassName="w-full"
                  />
                </div>
              ))}
            </div>
          </>
        }
      />
      {/* <div className="pt-6 space-y-6">
        <Button>Save Changes</Button>
      </div> */}
    </div>
  );
};

export default Profile;
