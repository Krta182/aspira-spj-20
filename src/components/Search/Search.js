import React from 'react';
import styles from './Search.module.css';


const Search = (props) => {

  const handleChange=(event)=>{
    props.onFilterCards(event.target.value);
  }

  return (
    <div className={styles.search}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search . . ."
        required
      />
    </div>
  );
}

export default Search;
