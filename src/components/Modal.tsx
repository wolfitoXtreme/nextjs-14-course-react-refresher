import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalT } from '@/types';

import styles from './Modal.module.scss';

const Modal: React.FC<ModalT> = ({ children }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('/'); // can use '..' to return one level as well
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
