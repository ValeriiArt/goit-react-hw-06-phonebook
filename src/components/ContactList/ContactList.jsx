// import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem";
// import s from './ContactList.module.css'


const ContactList = ({findRes}) => {
  // const contacts = useSelector(state => state.contacts.contacts);
    return (
        <ul>
        {findRes.map(contact =>
          <ContactItem key={contact.id} {...contact} />
        )}   
        </ul>
    )
};

export default ContactList;