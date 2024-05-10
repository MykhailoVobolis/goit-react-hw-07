import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlise = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-125-5696" },
      { id: "id-2", name: "Hermione Kline", number: "443-893-1402" },
      { id: "id-3", name: "Eden Clements", number: "645-173-7409" },
      { id: "id-4", name: "Annie Copeland", number: "227-983-2296" },
    ],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
