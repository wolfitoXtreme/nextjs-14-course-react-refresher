import React from 'react';
import { Link, Form, redirect, ActionFunction } from 'react-router-dom';

import Modal from '@/components/Modal';

import styles from './NewPost.module.scss';

// eslint-disable-next-line react-refresh/only-export-components
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // creates object from 'formData'

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // will redirect to specified route after data updating
  return redirect('/');
};

const NewPost: React.FC = () => {
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={styles.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;
