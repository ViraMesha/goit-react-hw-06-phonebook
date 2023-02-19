import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontSize: '34px', marginBottom: '10px' }}>Contacts</h2>

      <Filter />
      <ContactList />
    </div>
  );
};
