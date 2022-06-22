import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-700 text-white md:mt-16 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:px-12 text-center py-2">
        <div className="flex flex-row justify-around md:col-start-3 md:justify-self-end">
          <a
            className="p-3 md:py-2 text-sky-300 active:text-[#C5D4DE] hover:text-sky-200 transition-all ease-in-out duration-200"
            href="https://github.com/jcobert/whos-that"
          >
            <span className="flex items-center space-x-2">
              <i className="fa-solid fa-code fa-2x md:text-2xl"></i>
              <p>Check out the code</p>
            </span>
          </a>
        </div>
        <div className="text-sm md:col-start-1 md:row-start-1 md:justify-self-start md:self-center md:inline-block">
          <h6 className="mb-4 pt-2 md:mb-0 md:pt-0">
            º {currentYear} Who's That?
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
