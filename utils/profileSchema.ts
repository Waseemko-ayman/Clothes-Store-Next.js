import * as yup from 'yup';
import { alphanumericWithArabicRegex, phoneReqExp } from '@/utils/regex';

export const profileSchema = yup.object({
  firstName: yup
    .string()
    .matches(
      alphanumericWithArabicRegex,
      'first name must contain only letters or numbers and be at least two characters long',
    )
    .required('Name is required'),
  lastName: yup
    .string()
    .matches(
      alphanumericWithArabicRegex,
      'last name must contain only letters or numbers and be at least two characters long',
    )
    .required('Name is required'),
  email: yup.string().email().required('Email is required'),
  phone: yup
    .string()
    .nullable()
    .optional()
    .matches(phoneReqExp, 'Invalid phone number'),

  avatar_file: yup.mixed().nullable().optional(),
});
