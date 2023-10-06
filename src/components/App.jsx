import ContactForm from './ContactForm/ContactForm';
import { Container, Title, SubTitle, Message } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const length = contacts.length;
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {length > 0 ? (
        <Filter />
      ) : (
        <Message>Contact list is empty! Add your first contact.</Message>
      )}
      {length > 0 && <ContactList />}
    </Container>
  );
};
export default App;
