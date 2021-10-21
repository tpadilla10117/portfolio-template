import { createContext, useReducer } from "react"; //imports context api

export const ThemeContext = createContext(); //1) creates a Context Object, they have a Provider React component

const INITIAL_STATE = { darkMode: false };

/* 2) Create a reducer: */
const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return {darkMode: !state.darkMode };
            default:
                return state;
    }
};

/* 3) Provider React component that allows consuming components to subscribe to context changes: */
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

    return (
            //value prop passed down to descendants of the Provider
        <ThemeContext.Provider value={ {state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}