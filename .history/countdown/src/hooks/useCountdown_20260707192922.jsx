import { useState } from "react";

const useCountdown = (date) => {
  const countDate = new Date(date).getTime();
  const now = new Date().getTime();
  const interval = countDate - now

  const second = 1000
  const  minute = second *60
  return 1;
};

export default useCountdown;
