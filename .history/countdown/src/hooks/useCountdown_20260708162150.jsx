import { useState, useEffect } from "react";

const countdown = () => {
  const [year, month, dayValue] = date.split("-");

  const countDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(dayValue)
  ).getTime();

  const now = new Date().getTime();
  const interval = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const dayNumber = Math.floor(interval / day);
  const hourNumber = Math.floor((interval % day) / hour);
  const minuteNumber = Math.floor((interval % hour) / minute);
  const secondNumber = Math.floor((interval % minute) / second);

  setDay(dayNumber);
  setHour(hourNumber);
  setMinute(minuteNumber);
  setSecond(secondNumber);
};
  useEffect(() => {
    countdown();

    const timer = setInterval(countdown, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return [day, hour, minute, second];
};

export default useCountdown;
