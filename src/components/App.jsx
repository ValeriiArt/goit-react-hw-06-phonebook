import { useState} from "react";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import s from './App.module.css'

export function App() {
  
  const [filter, setFilter] = useState('');
  
  const contacts = useSelector(state => state.contacts.contacts);

  const onChangeFilter = evt => {
      setFilter(evt.currentTarget.value);    
  };

  const findContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };
  const findRes = findContact();

  return (
      <div className={s.container}>
        <h2>Phonebook</h2>
      <ContactForm
        
      />
        <h2>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList findRes={findRes} /> 
      </div>
    );
};





