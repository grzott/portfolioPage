import { actions } from "./actionTypes";
import { createStore } from "redux"

const initialState = {
    toggleTheme: true,
    toggleLanguage: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TOGGLE_THEME:
            return { ...state, toggleTheme: !state.toggleTheme }
        case actions.TOGGLE_LANGUAGE:
            return { ...state, toggleLanguage: !state.toggleLanguage }
        default:
            return state
    }
}

export default createStore(
    reducer
)
