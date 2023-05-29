import { useEffect, useState } from 'react';

const useCounter = (lastNumber:number) => {
  const [count, setCount] = useState(50); // Start the counter at 50

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= lastNumber) {
          clearInterval(timer); // Stop the counter when it reaches the last number
          return lastNumber;
        }
        return prevCount + 10;
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [lastNumber]);

  return count;
};

export default useCounter;
