import { createSlice } from '@reduxjs/toolkit';

export const invoicesSlice = createSlice({
    name: 'invoices',
    initialState: {
        test: 0,
    },
    reducers: {
        setTest: state => {
            state.test += 1;
        },
    },
});

// actions
export const { setTest } = invoicesSlice.actions;

// selectors
export const selectTest = state => state.invoices.test;

export default invoicesSlice.reducer;

