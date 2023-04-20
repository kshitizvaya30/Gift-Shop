import { createContext } from "react";
import App from "../App";

export const Context = createContext();

const AppContext = ({ children }) => {
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default AppContext;