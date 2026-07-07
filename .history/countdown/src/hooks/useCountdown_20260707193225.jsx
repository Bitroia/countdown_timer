import { useState } from "react";

const useCountdown = (date) => {
  const countDate = new Date(date).getTime();
  const now = new Date().getTime();
  const interval = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const dayNumber = Math.floor(interval / day);
  const hourNumber = Math.floor((interval % day) / hour);
  const minuteNumber = Math.floor(interval / day);
  const secondNumber = Math.floor(interval / day);
  return 1;
};

export default useCountdown;
