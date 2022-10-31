import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './Input/Input';
import { useState, useEffect } from 'react';
// import { createRef } from 'react';
// import { postsRequest } from './services/api';

const LS_KEY = 'Contacts';
const contactsFromLS = localStorage.getItem(LS_KEY);
const parsedContactsFromLS = JSON.parse(contactsFromLS);

const contactsFromStart = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    parsedContactsFromLS ? parsedContactsFromLS : contactsFromStart
  );
  const [filter, setFilter] = useState('');

  const deleteContact = e => {
    setContacts(prevContact =>
      prevContact.filter(contact => contact.id !== e.target.value)
    );
  };

  // const handleInput = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  const addNewContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts(
      prevContacts => [
        newContact,
        ...prevContacts,
      ] /* (data +good:1, good:2, good:3,) */
    );

    const overlap = contacts.filter(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.number.toLowerCase() === newContact.number.toLowerCase()
    );
    overlap.length === 0
      ? setContacts(prevContacts => [...prevContacts, newContact])
      : alert('This contact has been added');
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContact = filterInput => {
    setFilter(filterInput);
  };

  return (
    <>
      <Section title="Phonebook">
        <FormAddContact
          addNewContact={addNewContact}
          // onChange={e => setFilter(e.currentTarget.value)}
        />
      </Section>
      <Section title="Contacts">
        <Input filterContact={filterContact} />
        <ListContacts
          contacts={contacts}
          filter={filter}
          userDelete={deleteContact}
        />
      </Section>
      {/* <button ref={this.btnRef} className="btn" onChange={this.onNextPage}>
          {' '}
          NextPage
        </button> */}
    </>
  );
};
