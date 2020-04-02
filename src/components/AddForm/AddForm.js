import React, { useState }  from 'react';
import styles from './AddForm.module.css';




const AddForm = (props) => {
const [username,setUsername]=useState('');

const HandleSubmit=(event)=>{
  event.preventDefault();
  const randomUser={
    id:Math.ceil(Math.random()*100),
    name:username,
    avatar_url:"https://place-hold.it/75*75",
    company: `$(username)'s company`
  }

  props.onAddCards(randomUser);
  setUsername('');
}

const handleChange=(event)=>{
  setUsername(event.target.value);
}
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="GitHub username . . ."
        required
      />
      <button type="submit" className={styles.button}>Add card</button>
    </form>
  );
}

export default AddForm;
