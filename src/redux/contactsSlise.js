import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
