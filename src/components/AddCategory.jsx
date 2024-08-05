import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  //desestructuring del event : target
  const onInputChange = ({ target }) => {
    //console.log(e.target.value);
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='search gifs'
        value={inputValue}
        //onChange={(event) => onInputChange(event)} forma tradicional
        onChange={onInputChange}
      />
    </form>
  );
};
