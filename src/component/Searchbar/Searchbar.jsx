import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({onSubmit}) {
  const [imageName, setImageName] = useState('')
 

  const handleNameChange = event => {
   setImageName( event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Please, enter something!');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

    return (
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormLabel>
              {/* <ImSearch style={{ marginRight: 8 }} /> */}
            </SearchFormLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="imageName"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            value={imageName}
            onChange={handleNameChange}
          />
        </SearchForm>
      </SearchBar>
    );
  
}
