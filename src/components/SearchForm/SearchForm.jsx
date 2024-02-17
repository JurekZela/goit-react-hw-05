import { Formik } from 'formik';
import { useState } from 'react';
import { FormStyles as Form, Button, Input } from './SearchForm-styled.js';

const SearchForm = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  }

  const onSubmit = e => {
    e.preventDefault();
    if (!query) {
      <p>Please enter a sometings</p>
      console.log("Please enter a sometings");
    }

    onChange(query);
    setQuery('');
  }

    return (
    <Formik >
         <Form onSubmit={onSubmit}>
           <Input
           value={query}
           onChange={changeQuery}
           type="text"
           autoComplete="off"
           autoFocus
           placeholder="Search movies"
           />
           <Button type="submit">
             Submit
           </Button>
         </Form>
     </Formik>
    )
};

export default SearchForm;
