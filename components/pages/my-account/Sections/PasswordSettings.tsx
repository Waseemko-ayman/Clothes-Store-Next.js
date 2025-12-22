'use client';
import AuthTemplate from '@/components/Template/AuthTemplate';
import CardWrapper from '@/components/Template/CardWrapper';
import { passSettingsInputs } from '@/mock';
import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa6';

const PasswordSettings = () => {
  const [loading] = useState(false);
  const [error] = useState('');

  return (
    <div>
      {/* <CardWrapper otherClassName="mt-6">
        <form className="space-y-4 w-full">
          {passSettingsInputs.map((input) => {
            const { id, label, type, name, placeholder } = input;
            return (
              <div key={id} className="space-y-2">
                <Input
                  id={name}
                  type={type}
                  label={label}
                  inputName={name}
                  placeholder={placeholder}
                  otherClassName="w-full"
                  isRequired
                  required
                />
                {name === 'newPassword' && (
                  <p className="text-xs text-gray-500">
                    Must be at least 8 characters with letters and numbers
                  </p>
                )}
              </div>
            );
          })}
          <Button type="submit" otherClassName="mt-4">
            Update Password
          </Button>
        </form>
      </CardWrapper> */}
      <AuthTemplate
        otherClassName="mt-6 !max-w-full rounded-xl"
        error={error}
        submitBtnText="Update Password"
        loadingText="Update Password..."
        loading={loading}
        fieldsTypes={passSettingsInputs}
        pageName="update-password"
      />
      <CardWrapper otherClassName="!bg-gray-100 mt-8">
        <div className="bg-yellow-400 p-2 rounded-full flex items-center justify-center">
          <FaQuestion className="text-black" />
        </div>
        <p className="text-sm text-gray-500">
          <span className="text-black font-semibold">Security Tip:</span> Choose
          a strong password that you don&rsquo;t use elsewhere. Consider using a
          password manager to keep your accounts secure.
        </p>
      </CardWrapper>
    </div>
  );
};

export default PasswordSettings;
