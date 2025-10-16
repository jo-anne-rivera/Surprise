import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const reunionDate = new Date('2025-10-30T08:00:00+01:00');
      const now = new Date();
      const difference = reunionDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
      <h3 className="text-3xl font-script text-rose-900 mb-4">
        Until We're Together in Paris
      </h3>
      <p className="text-lg font-handwriting text-rose-700 mb-6">
        October 30th, 2025 at 8:00 AM-ish...
      </p>
      
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4">
          <div className="text-5xl font-bold text-rose-900">{timeLeft.days}</div>
          <div className="text-sm font-handwriting text-rose-700 mt-1">Days</div>
        </div>
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4">
          <div className="text-5xl font-bold text-rose-900">{timeLeft.hours}</div>
          <div className="text-sm font-handwriting text-rose-700 mt-1">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4">
          <div className="text-5xl font-bold text-rose-900">{timeLeft.minutes}</div>
          <div className="text-sm font-handwriting text-rose-700 mt-1">Minutes</div>
        </div>
        <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4">
          <div className="text-5xl font-bold text-rose-900">{timeLeft.seconds}</div>
          <div className="text-sm font-handwriting text-rose-700 mt-1">Seconds</div>
        </div>
      </div>
      
      <p className="text-2xl font-handwriting text-rose-800 mt-6">
        Can't wait to see you soon Ryokun! 🇫🇷✨
      </p>
    </div>
  );
};

export default Countdown;