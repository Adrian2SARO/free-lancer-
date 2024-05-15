import React from 'react';

const SocialButton2 = ({ href, buttonText, svgPath }) => {
  return (
    <section className="flex justify-center items-center">
      <a href={href} className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1.2em"
          viewBox="0 0 24 24"
          strokeWidth="1"
          fill="currentColor"
          stroke="currentColor"
          className="w-5"
        >
          <path d={svgPath}></path>
        </svg>
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
          {buttonText}
        </span>
      </a>
    </section>
  );
};

export default SocialButton2;
