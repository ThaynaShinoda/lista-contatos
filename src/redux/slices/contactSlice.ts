import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Contact = {
  id: number;
  fullName: string;
  phonenumber: string;
  email: string;
  category: string;
}

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      fullName: "Beltrano",
      phonenumber: "(12) 34567-8910",
      email: "beltrano123@gmail.com",
      category: "Favorites"
    },
    {
      id: 2,
      fullName: "Fulano da Silva",
      phonenumber: "(21) 98765-4321",
      email: "fulano.silva@email.com",
      category: "Work"
    },
    {
      id: 3,
      fullName: "Ciclano Pereira",
      phonenumber: "(11) 99988-7766",
      email: "ciclano.pereira@mail.com",
      category: "Normal"
    },
    {
      id: 4,
      fullName: "Ana Souza",
      phonenumber: "(31) 91234-5678",
      email: "ana.souza@email.com",
      category: "Favorites"
    },
    {
      id: 5,
      fullName: "Mariana Oliveira",
      phonenumber: "(41) 99876-5432",
      email: "mariana.oliveira@mail.com",
      category: "Work"
    },
    {
      id: 6,
      fullName: "João Pedro",
      phonenumber: "(51) 93456-7890",
      email: "joaopedro@email.com",
      category: "Normal"
    },
    {
      id: 7,
      fullName: "Lucas Fernandes",
      phonenumber: "(61) 94567-8901",
      email: "lucas.fernandes@mail.com",
      category: "Favorites"
    },
    {
      id: 8,
      fullName: "Fernanda Lima",
      phonenumber: "(71) 97890-1234",
      email: "fernanda.lima@email.com",
      category: "Work"
    },
    {
      id: 9,
      fullName: "Carlos Almeida",
      phonenumber: "(81) 92345-6789",
      email: "carlos.almeida@mail.com",
      category: "Normal"
    },
    {
      id: 10,
      fullName: "Beatriz Santos",
      phonenumber: "(91) 96789-0123",
      email: "beatriz.santos@email.com",
      category: "Favorites"
    },
  ]
}

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const existedContact = state.contacts.find((contact) => contact.fullName.toLocaleLowerCase() === action.payload.fullName.toLowerCase())

      if(existedContact) {
        alert("Esse nome já existe na sua lista de contatos")
      } else {
        const lastContact = state.contacts[state.contacts.length - 1];
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
    updateContact: (state, actions: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === actions.payload.id);
      if( index !== -1) {
        state.contacts[index] = actions.payload;
      }
    }
  }
})

export const { addContact, removeContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;