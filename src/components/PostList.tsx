import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { PostT } from '@/types';

import Post from './Post';

import styles from './PostList.module.scss';

const PostList: React.FC = () => {
  const posts = useLoaderData() as PostT[];

  return (
    <>
      {posts.length ? (
        <ul className={styles.posts}>
          {posts.map(({ author, body }, index) => (
            <Post key={`post-${index}`} author={author} body={body} />
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <b>No posts published yet.</b>
        </p>
      )}
    </>
  );
};

export default PostList;
