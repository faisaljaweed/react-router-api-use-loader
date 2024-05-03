import { Link } from "react-router-dom";
import { CONTACTS } from "../data/contacts";

const ContactsPage = () => {
  return <div>
    <h1>Contacts List:</h1>
    <ul>
      {
        CONTACTS.map((contactItem) => {
          return <li key={contactItem.id}>
            <Link to={`/contacts/${contactItem.id}`}>{contactItem.name}</Link>
          </li>
        })
      }
    </ul>
  </div>
}


export default ContactsPage;