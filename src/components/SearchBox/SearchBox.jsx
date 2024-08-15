import { Formik, Form, Field } from "formik";
import { useId } from "react";

import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const searchFieldId = useId();
  return (
    <Formik>
      <Form className={css.formContainer}>
        <label htmlFor={searchFieldId} className={css.formLabel}>
          Find contact by Name
        </label>
        <Field
          type="input"
          name="search"
          id={searchFieldId}
          className={css.formField}
        />
      </Form>
    </Formik>
  );
};
