import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './Input/Input';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  // onLeaveFeedback = e => {
  //   this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  //   // this.countTotalFeedback();
  //   // this.countPositiveFeedbackPercentage();
  //   //
  // };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.value
      ),
    }));
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addNewContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [
        newContact,
        ...prevState.contacts,
      ] /* (data +good:1, good:2, good:3,) */,
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact
            addNewContact={this.addNewContact}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title="Contacts">
          <Input handleInput={this.handleInput} />
          <ListContacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            userDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export { App };

// handleIncrementgood = e => {
//   // if (this.state.count >= 100) return;
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       good: prevState.good + 1,
//     };
//   });
//   this.countTotalFeedback();
//   this.countPositiveFeedbackPercentage();
// };

// countTotalFeedback = e => {
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       total: prevState.good + prevState.neutral + prevState.bad,
//     };
//   });
// };

// countPositiveFeedbackPercentage = e => {
//   this.setState(prevState => {
//     console.log(e.currentTarget);
//     return {
//       feedback: Math.round((prevState.good * 100) / prevState.total),
//     };
//   });
// };
