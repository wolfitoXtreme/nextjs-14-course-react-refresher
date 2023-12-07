import { useState } from 'react';

import ReactLogo from '@/assets/react.svg?react';
import ViteLogo from '@/assets/vite.svg?react';

import '@/styles/App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <ViteLogo className="logo" title="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo react" title="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;


// type TestType = {
//   name: string,
//   age: number
// }
// interface TestFunc<P = TestType> {
//   (props: P): string
// }
// const testFunc:TestFunc<TestType> = ({name, age}) => `name: ${name}, age: ${age}`;
// console.log(testFunc({name: 'Charles', age: 50}));
