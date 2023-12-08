
import React from 'react';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import { MainHeaderT } from '@/types';

import styles from './MainHeader.module.scss';

const MainHeader:React.FC<MainHeaderT> = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={styles.button}
          onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
