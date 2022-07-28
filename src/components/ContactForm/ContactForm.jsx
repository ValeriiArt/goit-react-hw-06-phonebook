import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from "store/contactSlice";
import { nanoid } from 'nanoid'
import s from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid(4);
  const numberInputId = nanoid(4);

  const dispatch = useDispatch();
 
  
  const handleInput = e => {
    const { name, value } = e.currentTarget;    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }; 
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({
      id: nanoid(4),
      name,
      number
    }));
    setName('');
    setNumber('');
  };     


  return (
    <div className={s.form }>
      <form onSubmit={handleSubmit}>
        <label className={s.formLabel} htmlFor={nameInputId}>
          Name
        </label>
          <input
          className={s.formInput}
          id={nameInputId}
          type="text"
          name="name"
          onChange={handleInput}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.formLabel} htmlFor={numberInputId}>
          Number
        </label>
          <input
          className={s.formInput}
          id={numberInputId}
          type="tel"
          name="number"
          onChange={handleInput}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>        
    </div>
  );  
};
