'use client';
import React from 'react';
import { PATHS } from '@/mock/paths';
import AuthRedirect from '@/components/molecules/AuthRedirect';
import AuthTemplate from '@/components/Template/AuthTemplate';
import { signupInputs } from '@/mock';
import { signupFormData } from '@/interfaces';
import { useAuthContext } from '@/context/AuthContext';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  alphanumericWithArabicRegex,
  emailRegex,
  passwordRegex,
} from '@/utils/regex';

const signUpEmailschema = yup.object().shape({
  name: yup
    .string()
    .matches(
      alphanumericWithArabicRegex,
      'Name must contain only letters or numbers and be at least two characters long',
    )
    .required('Name is required'),
  email: yup
    .string()
    .email()
    .matches(emailRegex, 'Email format is incorrect')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      passwordRegex,
      'Password must include uppercase, lowercase, number, special character, and be at least 8 characters long',
    )
    .required('Password is required'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});

// const signUpPhoneScheme = yup.object({
//   phone: yup
//     .string()
//     .matches(phoneReqExp, 'Phone number format is incorrect')
//     .required('Phone number is required'),
//   password: yup
//     .string()
//     .matches(
//       passwordRegex,
//       'Password must include uppercase, lowercase, number, special character, and be at least 8 characters long',
//     )
//     .required('Password is required'),
// });

const SignupPage = () => {
  // const [isPhoneRegister, setIsPhoneRegister] = useState(false);

  // const fields = isPhoneRegister ? signupPhoneInputs : signupInputs;

  // Aith Cotntext
  const { signup, isLoading } = useAuthContext();

  // Username, Email, and Password Form
  const emailForm = useForm({
    resolver: yupResolver(signUpEmailschema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  // Phone, and Password Form
  // const phoneForm = useForm({
  //   resolver: yupResolver(signUpPhoneScheme),
  //   defaultValues: { phone: '', password: '' },
  // });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = emailForm;
  // } = isPhoneRegister ? phoneForm : emailForm;

  // const onSubmit = async (data: signupFormData | SignupPhoneFormData) => {
  const onSubmit = async (data: signupFormData) => {
    // const payload =
    //   'email' in data
    //     ? {
    //         email: data.email || '',
    //         password: data.password || '',
    //         options: { data: { display_name: data.name || '' } },
    //       }
    //     : 'phone' in data
    //     ? { phone: data.phone || '', password: data.password || '' }
    //     : undefined;

    // if (payload) signup(payload);

    const payload = {
      email: data.email || '',
      password: data.password || '',
      options: { data: { display_name: data.name || '' } },
    };

    if (payload) signup(payload);
  };

  return (
    <AuthTemplate
      // key={isPhoneRegister ? 'phone' : 'email'}
      headerTitle="Create Your Account"
      headerDescription="Sign up to get started and enjoy all features"
      error={errors}
      control={control}
      fieldsTypes={signupInputs}
      handleFormSubmit={handleSubmit(onSubmit)}
      submitBtnText="Sign Up"
      loadingText="Signing up..."
      loading={isLoading}
      // isPhoneRegister={isPhoneRegister}
      // handlePhoneSubmit={() => setIsPhoneRegister((prev) => !prev)}
    >
      <AuthRedirect
        text="Already have an account?"
        linkText="Sign in"
        href={PATHS.AUTH.LOGIN}
      />
    </AuthTemplate>
  );
};

export default SignupPage;
