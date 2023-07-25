"use client";

import List from "./List";
import Title from "./Title";
import Form from "./Form";
import Image from "next/image";
import { useState } from "react";
import Confirmation from "./Confirmation";

const items = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And Much more!",
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const onSubmit = (email: string) => {
    setSubmitted(true);
    setEmail(email);
  };

  const closeConfirmation = () => {
    setSubmitted(false);
  };

  return (
    <div className="flex sm:flex-row flex-col-reverse sm:max-w-[930px] w-full justify-between gap-2">
      {!submitted ? (
        <>
          <div className="flex flex-col p-6 justify-center sm:max-w-[460px] max-w-full ">
            <Title>Stay updated!</Title>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <List items={items} />
            <Form onSubmit={onSubmit} />
          </div>
          <div className="rounded-lg sm:p-6">
            {/* desktop  */}
            <div className="w-[400px] h-[593px] hidden sm:block">
              <Image
                src="/illustration-sign-up-desktop.svg"
                alt="illustration sign up desktop"
                width={400}
                height={593}
                className="object-contain"
              />
            </div>
            {/* mobile */}
            <div className="w-full relative h-[284px] block sm:hidden bg-orange-50">
              <Image
                src="/illustration-sign-up-mobile.svg"
                alt="illustration sign up mobile"
                fill
                className="object-cover rounded-b-2xl"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-6">
            <Confirmation email={email} onClick={closeConfirmation} />
          </div>
        </>
      )}
    </div>
  );
}
