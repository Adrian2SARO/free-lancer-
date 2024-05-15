import  { useEffect, useState } from "react";
import PropTypes from "prop-types";

const OpeningTimeCounter = ({ openingTime, onOpeningFinish }) => {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      if (now < openingTime) {
        const difference = openingTime - now;
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ hours, minutes, seconds });
      } else {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        onOpeningFinish(); // Llamamos a la función proporcionada cuando el contador de apertura llega a cero
      }
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [openingTime, onOpeningFinish]);

  return (
    <div className="flex gap-5 flex-col mb-4">
      <div className="flex flex-wrap bg-white w-[200px] h-[80px] text-black rounded-md justify-center items-center">
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.hours}`.padStart(2, '0')}</p>
        <p className="text-[35px] mb-2">:</p>
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.minutes}`.padStart(2, '0')}</p>
        <p className="text-[35px] mb-2">:</p>
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.seconds}`.padStart(2, '0')}</p>
      </div>
      <div>
        <h2 className="text-[10px] text-lightorange">Tiempo para la siguiente apertura</h2>
      </div>
    </div>
  );
};

OpeningTimeCounter.propTypes = {
  openingTime: PropTypes.instanceOf(Date).isRequired,
  onOpeningFinish: PropTypes.func.isRequired,
};

const ClosingTimeCounter = ({ closingTime }) => {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      if (now < closingTime) {
        const difference = closingTime - now;
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ hours, minutes, seconds });
      } else {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, [closingTime]);

  return (
    <div className="flex gap-5 flex-col mb-4">
      <div className="flex flex-wrap bg-white w-[200px] h-[80px] text-black rounded-md justify-center items-center">
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.hours}`.padStart(2, '0')}</p>
        <p className="text-[35px] mb-2">:</p>
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.minutes}`.padStart(2, '0')}</p>
        <p className="text-[35px] mb-2">:</p>
        <p className="bg-lightgray text-[30px] rounded-md p-2">{`${timeRemaining.seconds}`.padStart(2, '0')}</p>
      </div>
      <div>
        <h2 className="text-[10px] text-lightorange">Tiempo para el siguiente cierre</h2>
      </div>
    </div>
  );
};



ClosingTimeCounter.propTypes = {
  closingTime: PropTypes.instanceOf(Date).isRequired,
};

const BusinessTimeCounters = () => {
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [showClosingCounter, setShowClosingCounter] = useState(false);

  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Define opening and closing times based on the day of the week
    switch (dayOfWeek) {
      case 0: // Sunday
        setOpeningTime(new Date(now.setDate(now.getDate() + 1)).setHours(9, 0, 0)); // Next Monday 9:00 AM
        setClosingTime(new Date(now.setDate(now.getDate() + 1)).setHours(13, 30, 0)); // Next Monday 1:30 PM
        break;
      case 6: // Saturday
        setOpeningTime(new Date(now.setDate(now.getDate() + 1)).setHours(9, 0, 0)); // Next Sunday 9:00 AM
        setClosingTime(new Date(now.setDate(now.getDate() + 1)).setHours(16, 0, 0)); // Next Sunday 4:00 PM
        break;
      default: // Monday to Friday
        setOpeningTime(new Date(now.setHours(9, 0, 0))); // Today 9:00 AM
        setClosingTime(new Date(now.setHours(19, 0, 0))); // Today 7:00 PM
        break;
    }
  }, []);

  const handleOpeningFinish = () => {
    setShowClosingCounter(true); // Mostramos el contador de cierre cuando el contador de apertura llega a cero
  };

  return (
    <div >
      <OpeningTimeCounter openingTime={openingTime} onOpeningFinish={handleOpeningFinish} />
      {showClosingCounter && <ClosingTimeCounter closingTime={closingTime} />}
    </div>
  );
};

export default BusinessTimeCounters;
