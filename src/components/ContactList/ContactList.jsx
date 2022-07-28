import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem";
// import s from './ContactList.module.css'


const ContactList = () => {
  const data = useSelector(state => state.contacts.contacts);
  const search = useSelector(state => state.contacts.filter);
 
  const findContact = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  };

  const contacts = findContact();


  return (
      <ul>
      {contacts.map(contact =>
        <ContactItem key={contact.id} {...contact} />
      )}   
      </ul>
  )
};

export default ContactList;