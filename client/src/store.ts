import { configureStore, createSlice } from "@reduxjs/toolkit";
import i18n from "./i18n";


const languageSlice = createSlice({
    name : "lang",
    initialState: {value: "en"},
    reducers: {
        switchLang : (state) => {
            if ( state.value === "en"){
                state.value = "fr";
                i18n.changeLanguage("fr");
            }
            else {
                state.value = "en"  
                i18n.changeLanguage("en");
            }
        }
    }
})

export const {switchLang} = languageSlice.actions;

export const store = configureStore({
    reducer: {
        lang : languageSlice.reducer,
    }
});