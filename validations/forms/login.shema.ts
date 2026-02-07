import * as yup from 'yup';

export const loginScheme = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('password is required'),
});
