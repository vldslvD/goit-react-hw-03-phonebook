import { Contact } from 'components/Contact/Contact';
import PropTypes from 'prop-types';
export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          ></Contact>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
