import React, { createContext, useReducer} from "react";
import GlobalReducer from "./GlobalReducer";

const mainState = {
    video:"video"
};

export const GlobalContext = createContext(mainState);
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer,mainState);
    const change = (video) => {
        dispatch({
            type:"Change",
            payload:video
        })
    }
    return(
    <GlobalContext.Provider
    value={{
    video:state.video,
    change
    }}
   
    >
    {children}
    </GlobalContext.Provider>
    );

};