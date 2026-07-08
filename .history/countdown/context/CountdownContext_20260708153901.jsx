import { Children } from "react";
import { useState } from "react";

const CountdownContext = React.createContext(null);

const CountdownProvider = ({ Children }) => {
  const [evente, setEvent] = useState(null);

  return <CountdownContext.Provider value={{}}>{children}</CountdownContext.Provider>;
};
