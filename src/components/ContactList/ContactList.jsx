import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { ListOfContacts } from './ContactList.styled';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlise';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
