import { createSlice } from "@reduxjs/toolkit";
import localBase from "../service/localBase";


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [...localBase],
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)            
        },
        
        deleteContact(state, action) { 
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },

        findContact(state, action) {
            state.filter = action.payload
        },
    }
});


export const { addContact, deleteContact, findContact} = contactSlice.actions;

export default contactSlice.reducer;