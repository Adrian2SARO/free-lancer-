import React from 'react';

export const MyButton = () => {
  return (
    <div className="w-full h-40 flex items-center justify-center cursor-pointer">
      <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
        <span
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-lightorange group-hover:h-full"
        ></span>
        <span
          className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-lightorange"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth={2} // Utiliza strokeWidth en lugar de stroke-width
              strokeLinejoin="round" // Utiliza camelCase para los atributos del estilo
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span
          className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-white"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth={2} // Utiliza strokeWidth en lugar de stroke-width
              strokeLinejoin="round" // Utiliza camelCase para los atributos del estilo
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span
          className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black dark:group-hover:text-gray-200"
        >
          Ver mas a detalle
        </span>
      </div>
    </div>
  );
};
