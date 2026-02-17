import * as Yup from 'yup';
import {
  alphanumericWithArabicRegex,
  emailRegex,
  messageRegex,
} from '@/utils/regex';

export const formSchema = Yup.object({
  username: Yup.string()
    .matches(
      alphanumericWithArabicRegex,
      'Please enter at least 5 characters for your name.',
    )
    .required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .matches(emailRegex, 'Please enter a valid email address.')
    .required('Email is required'),
  subject: Yup.string()
    .matches(
      alphanumericWithArabicRegex,
      'Please enter at least 5 characters for the subject.',
    )
    .required('Subject is required'),
  message: Yup.string()
    .matches(
      messageRegex,
      'Please enter at least 20 characters for your message.',
    )
    .required('Message is required'),
});
