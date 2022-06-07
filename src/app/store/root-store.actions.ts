import { createAction } from "@ngrx/store";

const Increment = createAction('Increment');
const Decrement = createAction('Decrement');
const Reset = createAction('Reset');

export {
    Increment,
    Decrement,
    Reset
}