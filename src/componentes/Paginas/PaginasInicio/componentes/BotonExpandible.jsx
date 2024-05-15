import { useState } from 'react';

const BotonExpandible = () => {
  const [expandido, setExpandido] = useState(false);

  const handleClick = () => {
    setExpandido(!expandido);
  };

  return (
    <button
      className={`bg-lightorange text-white px-4 py-2 rounded-full transition-all duration-3000 ease-in-out${expandido ? 'w-50' : 'w-100'}`}
      onClick={handleClick}
    >
      {expandido ? (
        <p><span className='font-bold'>Cotiza</span> tu pedido al +81 8358 6175</p>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      )}
    </button>
  );
};

export default BotonExpandible;
