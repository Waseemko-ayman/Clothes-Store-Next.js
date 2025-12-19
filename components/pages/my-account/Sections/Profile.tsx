import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import AccountSectionHeader from '@/components/molecules/AccountSectionHeader';
import { profileSecInputs } from '@/mock';
import React from 'react';

const Profile = () => {
  return (
    <div>
      <AccountSectionHeader
        title="Profile Information"
        description="Update your personal details"
      />
      <div className="pt-6 space-y-6">
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
                // defaultValue="John"
              />
            </div>
          ))}
        </div>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default Profile;
