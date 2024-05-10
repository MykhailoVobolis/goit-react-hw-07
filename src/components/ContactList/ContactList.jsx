import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { getContacts, getSearchQuery } from "../../redux/selectots";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const valueSearch = useSelector(getSearchQuery);

  const visibleContacts = contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(valueSearch.name.toLowerCase())
  );

  return (
    <>
      <ul className={css.container}>
        {visibleContacts.map((contacts) => (
          <li key={contacts.id}>
            <Contact contacts={contacts} />
          </li>
        ))}
      </ul>
    </>
  );
}
