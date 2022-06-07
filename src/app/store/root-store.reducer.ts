import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { Decrement, Increment, Reset } from "./root-store.actions";
import { AppState } from "./root-store.model";

const initialState = {
    counter: 0
}


const counterReducer = createReducer(
    initialState,
    on(Increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(Decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(Reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    }),
);

export function reducer(state: any, action: Action) {
    return counterReducer(state, action);
}


// export const reducer: ActionReducer<AppState> = {
//     counter: counterReducer
// }