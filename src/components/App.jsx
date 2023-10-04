import ContactForm from './ContactForm/ContactForm';
import { Container, Title, SubTitle, Message } from "./App.styled";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const createUser = contact => {
    const userAlreadyExist = contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase());
  if(userAlreadyExist) {
        Notify.warning('Contact is alresdy exist!');
        return 
  }
  const newContact = {
    id: nanoid(),
    ...contact,
  }
  // console.log(newContact);
  setContacts(prevContacts => [newContact, ...prevContacts])
  }
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
        )
  }
  const onChangeFilter = filterQuery => {
    setFilter(filterQuery.trim())
  }
  const toFiltereContacts = () => {
      
      const filterToLowerCase = filter.toLowerCase();
      return contacts.filter(({name}) => name.toLowerCase().includes(filterToLowerCase))
    }
    
  const filteredContacts = toFiltereContacts();  
  const length = contacts.length;
  return (
    <Container>
        <Title>Phonebook</Title>
        <ContactForm
              onSubmit={createUser} 
               />
          <SubTitle>Contacts</SubTitle>{
            length > 0 ?
              <Filter 
                  value={filter} 
                  onChangeFilter={onChangeFilter}/>
              :
              <Message>Contact list is empty! Add your first contact.</Message>     
          }{
            length > 0 &&
            <ContactList 
                contacts={filteredContacts}
                onDeleteContact={deleteContact}
                />
          }

        </Container>
  )
}
export default App;



