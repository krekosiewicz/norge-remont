'use client'

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator'
import { ContactForm } from '@/app/api/contact/route'

// Define a schema using Nope Validator
const schema = Nope.object().shape({
  name: Nope.string().required('Name is required'),
  email: Nope.string().email('Must be a valid email').required('Email is required'),
  phone: Nope.string().regex(/^\d{3}-\d{3}-\d{3}$/, 'Phone number must be in xxx-xxx-xxx format').required('Phone number is required'),
  message: Nope.string()/*.required('Please leave some details'),*/
});

function Contact() {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {name: '', email: '', phone: '', message: ''},
    resolver: nopeResolver(schema)
  });

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
  };

  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setValue('phone', formattedPhoneNumber);
  };

  // Typed submit handler using the form fields interface
  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseData = await response.json();
      alert(responseData.message || 'Message successfully sent');
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  };

  return (
    <div className={`flex min-h-screen justify-center bg-contact px-8 py-24`}>
      <div className={`flex w-full items-center justify-center`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={
            "w-full max-w-2xl sm:h-fit sm:rounded-md sm:border-2 sm:border-black sm:bg-form sm:bg-opacity-10 sm:p-8"
          }
        >
          <h4 className={"mb-8 text-2xl sm:mb-16 sm:text-4xl"}>
            Leave us a message
          </h4>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div className={"relative mb-4 sm:mb-8"}>
                <input
                  {...field}
                  type="text"
                  id="name"
                  className={`block w-full rounded-md p-2.5 text-sm text-gray-900 focus:outline-2 focus:outline -outline-offset-2 ${
                    !!fieldState.error ? 'outline-red-500 outline-2 outline' : ''
                  }`}
                  placeholder="Your Name"
                />
                {fieldState.error && (
                  <p className="hidden absolute top-11 pl-2.5 text-xs text-red-500 sm:block">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div className={"relative mb-4 sm:mb-8"}>
                <input
                  type="text"
                  id="emailAddress"
                  className={`block w-full rounded-md p-2.5 text-sm text-gray-900 focus:outline-2 focus:outline -outline-offset-2  ${
                    !!fieldState.error ? 'outline-red-500 outline-2 outline' : ''
                  }`}
                  placeholder="Your email adddress"
                  {...field}
                />
                {fieldState.error && (
                  <p className="hidden absolute top-11 pl-2.5 text-xs text-red-500 sm:block">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <div className={"relative mb-4 sm:mb-8"}>
                <input
                  {...field}
                  type="text"
                  onChange={onPhoneChange}
                  className={`block w-full rounded-md p-2.5 text-sm text-gray-900 focus:outline-2 focus:outline -outline-offset-2  ${
                    !!fieldState.error ? 'outline-red-500 outline-2 outline' : ''
                  }`}
                  placeholder="Your phone number"
                />
                {fieldState.error && (
                  <p className="hidden absolute top-11 pl-2.5 text-xs text-red-500 sm:block">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                id="chat"
                rows={12}
                className="mb-8 block  w-full rounded-md p-2.5 text-sm text-gray-900 focus:outline-2 focus:outline -outline-offset-2"
                placeholder="Time your message here..."
                {...field}
              ></textarea>
            )}
          />
          <div className="flex w-full items-center justify-center">
            <button
              type="submit"
              className="w-fit cursor-pointer rounded-md bg-gray-200 px-8 py-2 text-white hover:text-black"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
