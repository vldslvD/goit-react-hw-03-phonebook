import PropTypes from 'prop-types';
import { Field } from 'components/Form/Form.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <Field
        value={value}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
