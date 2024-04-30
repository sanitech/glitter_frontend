import React, { useEffect, useRef, useState } from "react";
import { eventCounterData } from "../../Data";
import axios from "axios";
import DOMPurify from 'dompurify';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [successful, setSuccess] = useState({});
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      const sanitizedFormData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        company: DOMPurify.sanitize(formData.company),
        phone: DOMPurify.sanitize(formData.phone),
        message: DOMPurify.sanitize(formData.message),
      };

      axios
        .post("/send-email", sanitizedFormData)
        .then((response) => {
          console.log("Email sent successfully");
          // Optionally, reset the form after successful submission
          setFormData(null);
          formRef.current.reset();
          setSuccess({
            message:
              "Thank you for your message. We'll get back to you shortly.",
            type: "success",
          });
        })
        .catch((error) => {
          console.error("Error sending email:", error.response.data);
          setSuccess({
            message: "An error occurred. Please try again later.",
            type: "error",
          });
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
 
    // Add more validation rules for other fields if needed
    return errors;
  };

  
 
  
  return (
    <div>
      <div className="bg-neutral-950 md:pt-10 pt-20">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Contact us
            </h2>
            <p className="mt-1 text-neutral-400">
              Whatever your goal - we will get you there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-name"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Name"
                      name="name"
                      onInput={handleChange}
                    />
                     {errors.name && <div classNameName="text-red-500 text-sm my-1">{errors.name}</div>}
                    <label
                      for="hs-tac-input-name"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="hs-tac-input-email"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Email"
                      name="email"
                      onInput={handleChange}
                    />
                     {errors.email && <div classNameName="text-red-500 text-sm my-1">{errors.email}</div>}
                    <label
                      for="hs-tac-input-email"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-company"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Company"
                      name="company"
                      onInput={handleChange}
                    />
                    <label
                      for="hs-tac-input-company"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Company
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-phone"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      placeholder="Phone"
                      name="phone"
                      onInput={handleChange}
                    />
                    <label
                      for="hs-tac-input-phone"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="hs-tac-message"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2"
                      name="message"
                      placeholder="This is a textarea placeholder"
                      onInput={handleChange}
                    ></textarea>
                    <label
                      for="hs-tac-message"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Tell us about your project
                    </label>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-xs text-neutral-500">
                    All fields are required
                  </p>
                  {successful.message && (
                    <div
                      className={`p-4 my-4 text-sm ${
                        successful.type === "success"
                          ? "text-orange-500 bg-neutral-700"
                          : "text-red-400 bg-red-50"
                      } rounded-lg  `}
                      role="alert"
                    >
                      <span className="font-medium">{successful?.message}</span>
                    </div>
                  )}
                  <p className="mt-5">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-orange-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                    >
                      Submit
                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-14">
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Our address:</h4>

                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    Ethiopia, Addis Ababa, 22 Golagol, <br />H & M Building,
                    Office No. 310
                  </address>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Email us:</h4>

                  <a
                    className="mt-1 text-neutral-400 text-sm"
                    href="#mailto:glitterpromotionone@gmail.com"
                    target="_blank"
                  >
                    glitterpromotionone@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">We're hiring</h4>
                  <p className="mt-1 text-neutral-400">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                  </p>
                  <p className="mt-2">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-orange-500 decoration-2 hover:underline focus:outline-none focus:underline"
                      href="#"
                    >
                      Job openings
                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
