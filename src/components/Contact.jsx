import React from "react";
import { MailIcon, ChatIcon } from "@heroicons/react/outline";

function Contact(props) {
  return (
    <div className="mt-16">
      <div className="mt-6 sm:mt-12 text-center space-y-4">
        <h1 className="text-4xl font-life-savers font-extrabold text-[#2B4E6A]">
          Contact
        </h1>
        {/* <p>Questions? Comments? Concerns?</p> */}
      </div>
      <div className="text-center mt-8 md:mt-14 space-y-8 md:space-y-14">
        <ChatIcon className="w-12 md:w-16 mx-auto text-slate-600" />
        <p>Questions? Comments? Concerns?</p>
        <a
          className="inline-block w-7/12 sm:w-60"
          href="mailto:josh@whosthat.io"
        >
          <div className="mx-auto text-sky-800 hover:text-sky-700 text-xl md:text-lg font-medium bg-slate-50 hover:bg-slate-100 active:bg-slate-200 transition-all border border-gray-300 rounded-md shadow-md p-2 md:p-1">
            <div className="flex flex-row justify-center space-x-2 p-2">
              <MailIcon className="w-7" />
              <p>Drop us a line!</p>
            </div>
          </div>
        </a>
        <p className="mt-12">We value and appreciate your feedback.</p>
      </div>
    </div>
  );
}

export default Contact;
