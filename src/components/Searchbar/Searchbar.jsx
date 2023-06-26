import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSearch } from 'react-icons/hi';
import { Form, Input, SearchBtn } from './Searchbar.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    const trimmedValue = event.currentTarget.value.trim();
    setQuery(trimmedValue.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast('Write what you are looking for');
    }

    onSubmit(query);
    setQuery('');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        value={query}
        required
        placeholder="Search movies..."
      />
      <SearchBtn type="submit">
        <HiOutlineSearch size={28} />
      </SearchBtn>
      <ToastContainer autoClose={2000} />
    </Form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
