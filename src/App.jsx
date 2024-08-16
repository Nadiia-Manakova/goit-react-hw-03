import { useState, useEffect } from "react";
import initialContacts from "./data/contacts.json";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contact");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
