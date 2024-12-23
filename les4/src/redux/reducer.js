import { createReducer, createAction } from '@reduxjs/toolkit';

const INCREMENT_NUM = 'INCREMENT_NUM';
const INCREMENT_NUM5 = 'INCREMENT_NUM5';
const DECREMENT_NUM5 = 'DECREMENT_NUM5';

const DECREMENT_NUM = 'DECREMENT_NUM';
const SET_TEXT = 'SET_TEXT';
const RESET = 'RESET';
const NUM = 'NUM';

export const incrementNum5 = createAction(INCREMENT_NUM5);
export const decrementNum5 = createAction(DECREMENT_NUM5);

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const setText = createAction(SET_TEXT);
export const reset = createAction(RESET);
export const num = createAction(NUM);

const initialState = {
    num: 0,
    text: 'Hello World!',
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(INCREMENT_NUM, (state) => {  
            if (state.num < 15) {
                state.num++; 
            }
        })
        .addCase(DECREMENT_NUM, (state) => {
            if (state.num > 0) {
                state.num--; 
            }
        })

        .addCase(INCREMENT_NUM5, (state) => {         
            if (state.num + 5 <= 15) {
                state.num += 5;
            } else {
                state.num = 15; 
            }
        })
        .addCase(DECREMENT_NUM5, (state) => {
            if (state.num - 5 >= 0) {
                state.num -= 5;
            } else {
                state.num = 0; 
            }
        })
        .addCase(SET_TEXT, (state, action) => {
            state.text = action.payload;
        })
        .addCase(RESET, (state) => {
            state.num = 0;
        });
});
