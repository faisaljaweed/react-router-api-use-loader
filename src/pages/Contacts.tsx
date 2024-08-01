import { Link, useLoaderData } from "react-router-dom";
import { GetContact } from "../api/api";

export const Contactloader = async () => {
  const contacts = await GetContact();
  return { contacts };
};
const ContactsPage = () => {
  const { contacts } = useLoaderData() as Awaited<
    ReturnType<typeof Contactloader>
  >;
  return (
    <div>
      <h1>Contacts List:</h1>
      <ul>
        {contacts.map((contactItem) => {
          return (
            <li key={contactItem.login.uuid}>
              <Link to={`/contacts/${contactItem.login.uuid}`}>
                {contactItem.name.first} {contactItem.name.last}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsPage;
