import { Children } from "react";
import { useState } from "react";
import React from "react";

const CountdownContext = React.createContext(null);

const CountdownProvider = ({ Children }) => {
  const [evente, setEvent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  );
};

export { CountdownContext, CountdownProvider };
