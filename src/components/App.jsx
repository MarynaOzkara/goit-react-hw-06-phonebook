import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm/ContactForm';
import { Container, Title, SubTitle, Message } from './App.styled';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlise';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const createUser = contact => {
    const userAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (userAlreadyExist) {
      Notify.warning('Contact is alresdy exist!');
      return;
    }
    dispatch(addContact(contact));
  };
  // const deleteUser = contactId => {
  //   // setContacts(prevContacts =>
  //   //   prevContacts.filter(contact => contact.id !== contactId)
  //   // );
  //   dispatch(deleteContact(contactId));
  // };
  // const onChangeFilter = filterQuery => {
  //   setFilter(filterQuery.trim());
  // };
  // const toFiltereContacts = () => {
  //   // const filterToLowerCase = filter.toLowerCase();
  //   // return contacts.filter(({ name }) =>
  //   //   name.toLowerCase().includes(filterToLowerCase)
  //   // );
  // };

  // const filteredContacts = toFiltereContacts();
  const length = contacts.length;
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={createUser} />
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
