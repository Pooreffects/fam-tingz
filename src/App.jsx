import { useState } from 'react';
import BelovedList from './components/BelovedList';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

export default function App() {
  const [lovers, setLovers] = useState([
    { name: 'Mohamed', love: 0 },
    { name: 'Hadil', love: 0 },
  ]);

  const midnight = new Date().setHours(0, 0, 0, 0);
  const [date, setDate] = useState(Date.now() + midnight);

  function handleIncrement(index) {
    const nextLovers = lovers.map((l, i) => {
      if (i === index) {
        return { ...l, love: l.love + 1 };
      } else {
        return { ...l };
      }
    });
    setLovers(nextLovers);
  }

  function renderer({ hours, minutes, seconds, completed }) {
    if (completed) {
      return (
        <ul className='flex items-center justify-center gap-10'>
          {lovers.map((relative, i) => (
            <BelovedList key={i} name={relative.name} love={relative.love} />
          ))}
        </ul>
      );
    } else {
      return (
        <motion.section
          initial={{ opacity: 0, translateX: -10 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 2, duration: 0.5, ease: 'linear' }}
          className='flex items-center content-center justify-center gap-3 border-2 rounded-lg py-3 bg-gray-900 hover:bg-gray-800 text-red-400  hover:bg-texture hover:bg-cover hover:-translate-y-[6px] hover:cursor-pointer transition-all duration-150 ease-in-out p-6 '
        >
          <div className='flex flex-col items-center'>
            <div className='font-semibold text-5xl'>{hours}</div>
            <p className='text-base font-semibold text-slate-300 hover:text-slate-800'>
              Hours
            </p>
          </div>

          <span className='leading-snug text-4xl'>:</span>
          <div className='flex flex-col items-center'>
            <div className='font-semibold text-5xl'>{minutes}</div>
            <p className='text-base font-semibold text-slate-300 hover:text-slate-800'>
              Minutes
            </p>
          </div>

          <span className='leading-snug text-4xl'>:</span>
          <div className='flex flex-col items-center'>
            <div className='font-semibold text-5xl'>{seconds}</div>
            <p className='text-base font-semibold text-slate-300 hover:text-slate-800'>
              Seconds
            </p>
          </div>
        </motion.section>
      );
    }
  }

  return (
    <main className='container mx-auto w-full h-full'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-14 w-full h-full'>
        <div className='flex flex-col items-center gap-6'>
          <motion.h1
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, ease: 'backIn' }}
            className='text-center tracking-tight md:tracking-normal lg:tracking-wide xl:tracking-wide font-secondary text-xl lg:text-3xl xl:text-3xl md:2xl font-semibold text-slate-200 break-words'
          >
            How much love do you carry for
            <br />
            <span className='text-red-300 italic hover:cursor-pointer'>
              {``} One Another?
            </span>
            {``} huh?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'backIn' }}
            className='text-center font-semibold font-secondary text-sm tracking-wide text-red-300 break-words'
          >
            -- By clicking each button, you could increment the love for one
            another --
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            delay: 1,
            staggerChildren: 0.3,
            ease: 'easeIn',
          }}
          className='flex items-center justify-center w-full md:gap-10 lg:gap-10 gap-4 sm:px-4'
        >
          {lovers.map((lover, index) => (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={index}
              onClick={() => handleIncrement(index)}
              className='border-2 p-2 border-slate-300 rounded-md text-sm font-secondary font-semibold text-slate-300 hover:bg-red-400 hover:text-slate-50 hover:-translate-y-[3px] transition-all duration-100 ease-out shadow'
            >
              {lover.name}!?
            </motion.button>
          ))}
        </motion.div>
        <div className='flex flex-col items-center py-2 gap-10'>
          <motion.h3
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'backIn' }}
            className='text-center font-semibold break-words text-base font-primary tracking-wide md:text-xl lg:text-xl text-slate-300 px-8'
          >
            <span className='text-red-300'>PS</span>: you gotta wait till
            midnight to see the results 🤭
          </motion.h3>

          <Countdown date={date} renderer={renderer} daysInHours autoStart />
        </div>
      </div>
    </main>
  );
}
