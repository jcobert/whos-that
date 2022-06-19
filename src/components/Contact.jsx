import React from "react";
import { MailIcon } from "@heroicons/react/outline";

function Contact(props) {
  return (
    <div className="mt-16">
      <div className="mt-6 text-center space-y-4">
        <h1 className="text-4xl font-life-savers font-extrabold text-[#2B4E6A]">
          Contact
        </h1>
        <p>Questions? Comments? Concerns?</p>
      </div>
      <div className="text-center mt-12">
        <div className="w-7/12 mx-auto text-sky-800 text-xl font-medium bg-slate-50 border border-gray-300 rounded-md shadow-md p-2">
          <div className="flex flex-row justify-center space-x-2 p-2">
              <MailIcon className="w-7" />
              <a className="" href="mailto:josh@whosthat.io">
                Drop us a line!
              </a>
          </div>
        </div>
        <p className="mt-12">We value and appreciate your feedback.</p>
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
