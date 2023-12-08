import React, { useState } from 'react';

import { InputChangeI, NewPostT, TextAreaChangeI } from '@/types';

import styles from './NewPost.module.scss';

const NewPost:React.FC<NewPostT> = ({ onCancel }) => {
  const [bodyText, setBodyText] = useState('');
  const [authorText, setAuthorText] = useState('');

  const changeBodyHandler = (event: TextAreaChangeI) => {
    const { target: { value } } = event;
    setBodyText(value);
  };

  const changeAuthorHandler = (event: InputChangeI) => {
    const { target: { value } } = event;
    setAuthorText(value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = {
      body: bodyText,
      author: authorText,
    };

    // eslint-disable-next-line no-console
    console.log({ postData });

    onCancel();
  };

  return (
    <form className={styles.form}
      onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body"
          required
          rows={3}
          onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text"
          id="name"
          required
          onChange={changeAuthorHandler}/>
      </p>
      <p className={styles.actions}>
        <button type="button"
          onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
