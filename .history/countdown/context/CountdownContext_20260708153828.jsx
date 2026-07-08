import { Children } from "react";
import { useState } from "react";

const CountdownContext = React.createContext(null)

const CountdownProvider = ({Children}) => {

    const [evente, ]

    return (
        <CountdownContext.Provider>
            {children}
        </CountdownContext.Provider>
    )
}