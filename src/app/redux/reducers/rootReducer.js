import { combineReducers } from "redux";
import { ADD_MICROFRONT_APP } from "../actions/rootActions";

const initialState = { 
    microfronts: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MICROFRONT_APP: 
            return { ...state, microfronts: [...state.microfronts, action.payload]}
        default:
            return state;
    }
}

export default combineReducers({
    root: rootReducer,
})