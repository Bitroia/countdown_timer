import { Children } from "react";
import { useState } from "react";

const CountdownContext = React.createContext(null)

const CountdownProvider = ({Children}) => {
    return (
        <CountdownContext.Provider/>
        {children}
    )
}