import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { ListOfContacts } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlise';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // console.log(contacts);
  const filterToLowerCase = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterToLowerCase)
  );
  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          click={() => dispatch(deleteContact(id))}
        />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
