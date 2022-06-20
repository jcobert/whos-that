import React from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";

function About(props) {
  return (
    <div className="mt-16 md:w-9/12 lg:w-7/12 mx-auto">
      <div className="mt-6 sm:mt-12 text-center px-8">
        <h1 className="text-4xl font-life-savers font-extrabold text-[#2B4E6A]">
          About
        </h1>
        <div className="mt-8 px-4 md:mt-14 space-y-8 md:space-y-14">
          <InformationCircleIcon className="w-12 md:w-16 mx-auto text-slate-600" />
          <div className="space-y-4 text-left">
            <p>
              It can be a real challenge to keep track of the people in
              our lives, let alone someone else's. Maybe the person you recently started dating
              has a large family or many friends. A very daunting task! Or maybe
              you're just terrible with names and want to keep track of the
              people you meet.
            </p>
            <p>
              The idea for <span className="font-life-savers font-bold text-[#2B4E6A]">Who’s That?</span> came about as a way to help my then
              girlfriend (now wife, thanks to <span className="font-life-savers font-bold text-[#2B4E6A]">Who’s That?</span>) keep track of my
              friends and family. It could help her match names (and
              nicknames) to faces, along with provide quick info such as how I
              know them, where they live, and who they’re in a relationship
              with.
            </p>
            <p>
            <span className="font-life-savers font-bold text-[#2B4E6A]">Who’s That?</span> is here to save you from that awkward moment when you
              say hi, but can’t recall their name or have to nudge and
              discreetly ask your partner, "wait, who’s that again?"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
