import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{number}</p>
      </div>
      <button className={css.btn}>delete</button>
    </>
  );
}
