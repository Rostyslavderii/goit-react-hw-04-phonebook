import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './Input/Input';
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

class App extends Component {
  state = {
    contacts: parsedContactsFromLS ? parsedContactsFromLS : contactsFromStart,
    filter: '',
  };

  // page: "1",
  // posts: [],
  // isLoading: false,
  // error:'',
  //};

  // onLeaveFeedback = e => {
  //   this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  //   // this.countTotalFeedback();
  //   // this.countPositiveFeedbackPercentage();
  //   //
  // };

  // bntRef = createRef();

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

    const overlap = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.number.toLowerCase() === newContact.number.toLowerCase()
    );
    overlap.length === 0
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }))
      : alert('This contact has been added');
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  // onNextPage = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // }

  // handleResizeScreen = e => (
  //   console.log(window.innerWidth)
  // )

  // componentDidMount() {
  //   // window.addEventListener('resize', () => this.handleInput(this.state.props))

  //   // fetch("https:/")
  //   //   .then(respone => Response.json())
  //   //   .then(data => this.setState({ posts: data }));

  //   this.fetchPosts(); //!!

  // }

  // fetchPosts = async () => {
  //   try { // встановлюємо іникатор завантаження та обновлюемо помилку
  //     this.setState({ error: 'Bad Request', isLoading: true });
  //     const postsData = await postsRequest();    // const response = await fetch('htttps')
  //     // const data = await response.json();

  //     this.setState({ posts: data }); // або !!!
  //     this.setState(prevState => ({
  //       posts: [...prevState.post, ...postsData],
  //     }))
  //   } catch (e) {
  //     this.setState({ error: err.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.page !== this.state.page ||
  //     prevState.todos !== this.state.todos) {
  //     console.log(`${this.state.page}`);
  //     this.fetchPosts(this.state.page)
  //   }
  // }

  render() {
    // console.log(this.btnRef.current);
    // const {posts, error, isLoading} = this.state; //!!!
    return (
      <>
        {/* {error && <Error className="error">Some error occured: {error}</Error>}
        {isLoading && <Loader className="loader">loading</Loader>} */}
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
        {/* <button ref={this.btnRef} className="btn" onChange={this.onNextPage}>
          {' '}
          NextPage
        </button> */}
      </>
    );
  }
}

export { App };
