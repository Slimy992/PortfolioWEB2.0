import { configureStore, createSlice } from "@reduxjs/toolkit";


const languageSlice = createSlice({
    name : "lang",
    initialState: {value: "en"},
    reducers: {
        updateLang : (state,action) => {
            state.value = action.payload;
        },
    }
})

export const {updateLang} = languageSlice.actions;

export const store = configureStore({
    reducer: {
        lang : languageSlice.reducer,
    }
});