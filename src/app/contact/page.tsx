'use client'

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function Contact() {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    // Process form data
    console.log(data);
  };

  async function handleSubmit2() {
    try {
      const formData = getValues(); // Get form data

      const response = await fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify(formData), // Stringify form data to JSON
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData.message);

      alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className={`flex min-h-screen justify-center bg-contact px-8 py-24`}>
      <div className={`flex items-center justify-center w-full`}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"w-full sm:border-black sm:border-2 sm:bg-form sm:bg-opacity-10 max-w-2xl sm:p-8 sm:rounded-md sm:h-fit"}
        >
          <h4 className={"text-2xl mb-8 sm:text-4xl sm:mb-16"}>Leave us a message</h4>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                id="name"
                className="block w-full rounded-md p-2.5 mb-4 sm:mb-8 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Name"
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                id="emailAddress"
                className="block w-full rounded-md p-2.5 mb-4 sm:mb-8 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your email adddress"
                required
                {...field}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="phoneNumber"
                className="block w-full rounded-md p-2.5 mb-4 sm:mb-8 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your phone number"
                required
                {...field}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <textarea id="chat" rows={12}
                        className="block mb-8  p-2.5 w-full text-sm text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Time your message here..."
                        {...field}
              >

              </textarea>
            }
          />
          <div className="flex items-center justify-center w-full">
            <div className={"bg-gray-200 rounded-md w-fit py-2 px-8 text-white hover:text-black cursor-pointer"}
                 onClick={handleSubmit2}>Send
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
