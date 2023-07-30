import { Button } from './Contact.styled';
import PropTypes from 'prop-types';
export const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </li>
  );
};
Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
