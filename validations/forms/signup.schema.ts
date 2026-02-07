import * as yup from 'yup';
import {
  alphanumericWithArabicRegex,
  emailRegex,
  passwordRegex,
} from '@/utils/regex';

export const signUpEmailschema = yup.object().shape({
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
