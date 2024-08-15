import { useState } from "react";
import initialContacts from "./data/contacts.json";
import { ContactForm } from "./components/ContactForm/ContactForm";
// import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* 
    <SearchBox />*/}
      <ContactList contacts={contacts} />
    </div>
  );
}
