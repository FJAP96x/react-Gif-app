import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['one punch']);

  const onAddCategory = (newCategory) => {
    //no utilizada en react
    //setCategories = categories.push('valorant');
    //opcion 1
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    //opcion 2 setCategories(cat => [...cat, "valorant"])
  };
  return (
    <>
      {/* title*/}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        onNewCategory={onAddCategory}
        /*  setCategories={setCategories}  */
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
