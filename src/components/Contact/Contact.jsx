import PropTypes from 'prop-types';
import { FaUserAlt, FaTrash } from 'react-icons/fa';
import css from './Contact.module.css'
export default function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div className={css.wrapper}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p className={css.number}>{name}</p>
      </div>
      <div className={css.wrapper}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};