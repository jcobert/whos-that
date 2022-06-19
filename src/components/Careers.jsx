import React from "react";

function Careers(props) {
  return (
    <div className="mt-16">
      <div className="mt-6 sm:mt-12 text-center space-y-4 px-8">
        <h1 className="text-4xl font-life-savers font-extrabold text-[#2B4E6A]">
          Careers
        </h1>
        <p>
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
  );
}

export default Careers;
