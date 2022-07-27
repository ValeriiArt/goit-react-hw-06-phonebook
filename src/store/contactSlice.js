import { createSlice } from "@reduxjs/toolkit";
import localBase from "../service/localBase";
import { nanoid } from 'nanoid'

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [...localBase],
    },
    reducers: {
        addContact(state, action) {
            
            const newContact = state.contacts.find(contact => {
                return contact.name.toLowerCase().trim() === action.payload.name.toLowerCase().trim();
            });
            if (newContact) {
                alert(`${action.payload.name} is already in contacts`);
            return;
            };
            if (action.payload.name.trim().length) {
                
                state.contacts.push({
                    id: nanoid(5),
                    name: action.payload.name,
                    number: action.payload.number,
                })   
            }
        },
        
        deleteContact(state, action) { 
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        },
    }
});

export const { addContact, deleteContact} = contactSlice.actions;

export default contactSlice.reducer;