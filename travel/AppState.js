import React, { useReducer } from "react";
import Context from './context';
import reducer, { initialState } from "./reducer";

const AppState = (props) => {
    const [_global, dispatch] = useReducer(reducer, initialState);

    const changeMode = (mode) => {
        dispatch({
            type: "MODE",
            payload: {
                mode
            }
        })
    };

    const changeLangage = (langage) => {
        dispatch({
            type: "LANGAGE",
            payload: {
                langage
            }
        })
    };

    return (
        <Context.Provider 
            value={{state: _global,changeLangage,changeMode}}
        >
            {props.children}
        </Context.Provider>
    )
}


export default AppState;
