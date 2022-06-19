import React from "react";
import { BriefcaseIcon } from "@heroicons/react/outline";

function Careers(props) {
  return (
    <div className="mt-16">
      <div className="mt-6 sm:mt-12 text-center px-8">
        <h1 className="text-4xl font-life-savers font-extrabold text-[#2B4E6A]">
          Careers
        </h1>
        <div className="mt-8 md:mt-14 space-y-8 md:space-y-14">
          <BriefcaseIcon className="w-12 mx-auto text-slate-600" />
          <p className="">
            We're not hiring at the moment but if you are, please feel free to{" "}
            <a
              className="font-medium text-sky-800 hover:text-sky-600 transition-all"
              href="mailto:josh@joshcobert.com"
            >
              reach out!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
