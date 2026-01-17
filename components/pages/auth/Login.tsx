'use client';
import { PATHS } from '@/mock/paths';
import AuthRedirect from '@/components/molecules/AuthRedirect';
import { loginInputs } from '@/mock';
import AuthTemplate from '@/components/Template/AuthTemplate';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormData, LoginPhoneFormData } from '@/interfaces';
import { useAuthContext } from '@/context/AuthContext';

const loginScheme = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('password is required'),
});

// const loginPhoneScheme = yup.object({
//   phone: yup
//     .string()
//     .matches(phoneReqExp, 'Phone number format is incorrect')
//     .required('Phone number is required'),
// });

const LoginPage = () => {
  // const [showPassword, setShowPassword] = useState(false);
  // const [isPhoneRegister, setIsPhoneRegister] = useState(false);

  // const fields = isPhoneRegister ? loginPhoneInputs : loginInputs;

  // Auth Context
  const { login, signInWithPhoneOTP, isLoading } = useAuthContext();

  const emailForm = useForm({
    resolver: yupResolver(loginScheme),
    defaultValues: { email: '', password: '' },
  });

  // const phoneForm = useForm({
  //   resolver: yupResolver(loginPhoneScheme),
  //   defaultValues: { phone: '' },
  // });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = emailForm;
  // } = isPhoneRegister ? phoneForm : emailForm;

  const onSubmit = async (data: LoginFormData | LoginPhoneFormData) => {
    if ('phone' in data) {
      signInWithPhoneOTP(data);
    } else {
      login(data);
    }
  };

  return (
    <AuthTemplate
      // key={isPhoneRegister ? 'phone' : 'email'}
      headerTitle="Welcome Back"
      headerDescription="Sign in to your account to continue"
      error={errors}
      control={control}
      fieldsTypes={loginInputs}
      handleFormSubmit={handleSubmit(onSubmit)}
      submitBtnText="Sign In"
      loadingText="Signing in..."
      loading={isLoading}
      // isPhoneRegister={isPhoneRegister}
      // handlePhoneSubmit={() => setIsPhoneRegister((prev) => !prev)}
    >
      <AuthRedirect
        text="Don’t have an account?"
        linkText="Create account"
        href={PATHS.AUTH.SIGNUP}
      />
    </AuthTemplate>
  );
};

export default LoginPage;
