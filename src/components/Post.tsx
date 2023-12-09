import React from 'react';

import { PostT } from '@/types';

import styles from './Post.module.scss';

const Post: React.FC<PostT> = ({ author, body }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <br></br>
      <p className={styles.text}>{body}</p>
      <br></br>
    </li>
  );
};

export default Post;

// import { SampleAI, SampleBI } from '@/types';

// const testFuncA:SampleAI =({ a, b }) => {
//   return `${a} ${b}`;
// };

// const testFuncB:SampleBI =(a, b) => {
//   return `${a} ${b}`;
// };

// testFuncB('a', 5);

// type TestType = {
//   name: string,
//   age: number
// }
// interface TestFunc<P = TestType> {
//   (props: P): string
// }
// const testFunc:TestFunc<TestType> = ({name, age}) => `name: ${name}, age: ${age}`;
// console.log(testFunc({name: 'Charles', age: 50}));
