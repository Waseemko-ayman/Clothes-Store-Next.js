import React from 'react';
import AuthHeader from '../molecules/AuthHeader';
import Button from '../atoms/Button';
import ButtonLoading from '../atoms/ButtonLoading';
import { AuthTemplateProps } from '@/interfaces';
import Form from '../molecules/Form';
import { FiShield } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const AuthTemplate: React.FC<AuthTemplateProps> = ({
  error,
  control,
  handleFormSubmit,
  headerTitle,
  headerDescription,
  formChildren,
  children,
  loadingText,
  submitBtnText,
  loading,
  fieldsTypes,
  // pageName,
  otherClassName,
  // isPhoneRegister,
  // handlePhoneSubmit,
}) => {
  const pathname = usePathname();
  // const isSignup = pathname.includes('signup');
  const isLogin = pathname.includes('login');

  // const buttonIcon = isPhoneRegister ? <FaEnvelope /> : <FaMobileAlt />;
  // const buttonText = isPhoneRegister
  //   ? 'Use Email & Password'
  //   : 'Continue with Phone';

  return (
    <div className="w-full max-w-md">
      <div
        className={`rounded-xl relative z-10 shadow-2xl border-0 overflow-hidden ${otherClassName}`}
      >
        <div className="p-5 min-[425px]:p-5 bg-white">
          {headerTitle && headerDescription && (
            <AuthHeader title={headerTitle} description={headerDescription} />
          )}

          {/* {error && <FormErrorAlert error={error} />} */}

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {formChildren ? (
              formChildren
            ) : (
              <Form fieldsTypes={fieldsTypes} error={error} control={control} />
            )}
            <Button
              type="submit"
              disabled={loading}
              otherClassName="w-full hover:shadow-lg disabled:opacity-50"
            >
              {loading ? <ButtonLoading text={loadingText} /> : submitBtnText}
            </Button>
          </form>

          {/* <div>
            <div className="flex items-center my-3">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-sm text-gray-500">
                Or {isSignup ? 'signup' : 'login'} with
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <Button
              type="button"
              variant="outline"
              otherClassName="w-full flex items-center justify-center gap-3 !text-[var(--forth-color)] !border-[var(--forth-color)] hover:!text-white"
              handleClick={handlePhoneSubmit}
            >
              {buttonIcon}
              {buttonText}
            </Button>
          </div> */}

          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-300" />
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          {children}
        </div>

        <div className="h-2 bg-gradient-to-r from-[var(--forth-color)] to-[var(--second-color)]"></div>
      </div>
      {isLogin && (
        <div className="flex items-center justify-center gap-1 text-sm mt-5 text-[#054b46]">
          <FiShield />
          <p>Your data is securely encrypted and protected</p>
        </div>
      )}
    </div>
  );
};

export default AuthTemplate;
