import React from 'react';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Input from '@/components/atoms/Input';
import Layer from '@/components/atoms/Layer';
import PersonInfoCard from '@/components/molecules/PersonInfoCard';
import { INPUT_TYPE, PERSON_INFO } from '@/mock';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormValues from '@/interfaces/FormValue';
import { useForm } from 'react-hook-form';

const alphanumericWithArabicRegex = /^[A-Za-z\u0621-\u064A0-9_ ]{5,}$/;
const messageRegex = /^[\s\S]{20,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = Yup.object({
  username: Yup.string()
    .matches(
      alphanumericWithArabicRegex,
      'Please enter at least 5 characters for your name.'
    )
    .required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .matches(emailRegex, 'Please enter a valid email address.')
    .required('Email is required'),
  subject: Yup.string()
    .matches(
      alphanumericWithArabicRegex,
      'Please enter at least 5 characters for the subject.'
    )
    .required('Message is required'),
  message: Yup.string()
    .matches(
      messageRegex,
      'Please enter at least 20 characters for your message.'
    )
    .required('Message is required'),
});

const LeaveMessage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    reset();
  };
  return (
    <Layer>
      <Container otherClassName="flex items-start justify-between py-[50px] px-5 border border-[var(--seven-color)] gap-10 max-[992px]:flex-wrap max-[992px]:gap-10">
        <div className="max-w-full flex-1">
          <Link
            href="#"
            className="text-[var(--six-color)] opacity-[0.5] uppercase hover:text-[var(--forth-color)] hover:opacity-[1] transition-all duration-300"
          >
            Leave A Message
          </Link>
          <h2 className="text-[var(--fifth-color)] text-3xl my-5 font-bold">
            We love to hear from you
          </h2>
          <form
            className="max-w-full w-full flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {INPUT_TYPE.map(({ id, type, name, placeholder }) => (
              <div key={id}>
                <Input
                  type={type}
                  inputName={name}
                  placeholder={placeholder}
                  register={register}
                  otherClassName={`${
                    errors[name as keyof FormValues] ? '!border-red-600' : ''
                  }${type === 'textarea' ? 'h-[205px]' : ''} w-full`}
                />
                {errors[name as keyof FormValues] && (
                  <p className="bg-[rgba(255, 0, 0, 0.308)] p-2.5 text-red-500 m-0">
                    {errors[name as keyof FormValues]?.message}
                  </p>
                )}
              </div>
            ))}
            <Button variant="primary">Submit</Button>
          </form>
        </div>
        <div className="max-md:justify-center max-[991px]:flex max-[991px]:justify-between max-[991px]:flex-wrap">
          {PERSON_INFO.map(({ id, name, src, information }) => (
            <PersonInfoCard
              key={id}
              personName={name}
              imgSrc={`/assets/people/${src}.jpg`}
              imgAlt={name}
              imgTitle={name}
              information={information}
            />
          ))}
        </div>
      </Container>
    </Layer>
  );
};

export default LeaveMessage;
