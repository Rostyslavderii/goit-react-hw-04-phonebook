import styles from '../ListContacts/ListContacts.module.scss';
import PropTypes from 'prop-types';
import { ItemContacts } from './ItemContacts/ItemContacts';

export const ListContacts = ({ contacts, filter, userDelete }) => {
  return (
    <ul className={styles.ListContacts}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(user => {
          return (
            <ItemContacts
              contacts={contacts}
              filter={filter}
              userDelete={userDelete}
              user={user}
              key={user.id}
            />
          );
        })}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  userDelete: PropTypes.func.isRequired,
};
