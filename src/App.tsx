import React, { useState } from 'react';

import classNames from 'classnames';

import ReactLogo from '@/assets/react.svg?react';
import ViteLogo from '@/assets/vite.svg?react';

import styles from '@/styles/App.module.scss';

const App:React.FC =()=> {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <ViteLogo className={styles.logo} title="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <ReactLogo className={classNames(styles.logo, styles.react)} title="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
