import { useEffect, useState } from "react";
import styles from "./about.module.css"

function WeddingCountDown() {
  const weddingDate = new Date("2025-11-22T18:05:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  if (timeLeft === null) {
    return <div>💍 Հարսանիքը արդեն կայացել է։</div>;
  }

  return (
    <div>
      <h2>⏳ Մինչ հարսանիք մնացել է</h2>
      <p className={styles.date}>
        {timeLeft.days} օր, {timeLeft.hours} ժամ, {timeLeft.minutes} րոպե,{" "}
        {timeLeft.seconds} վայրկյան
      </p>
    </div>
  );
}

export default WeddingCountDown;
