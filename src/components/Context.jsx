import { useState, createContext, useContext } from "react";
import { ReactDOM } from "react-dom/client";

export const myContext = createContext();

export const Context = ({children}) => {
    const [weatherActive, setWeatherActive] = useState(false);
    const [timerActive, setTimerActive] = useState(false);

    const values = {
        weatherActive,
        setWeatherActive,
        timerActive,
        setTimerActive,
    }
    return <myContext.Provider value={values}>{children}
    </myContext.Provider>;
}