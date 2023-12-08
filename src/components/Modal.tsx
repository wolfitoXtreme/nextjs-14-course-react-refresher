import React from 'react';

import { ModalT } from '@/types';

import styles from './Modal.module.scss';

const Modal:React.FC<ModalT> = ({ children, onClose }) =>
  <>
    <div className={styles.backdrop}
      onClick={onClose}/>
    <dialog open
      className={styles.modal}>
      {children}
    </dialog>
  </>;

export default Modal;
