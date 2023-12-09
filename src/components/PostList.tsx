import React, { useState } from 'react';

import { PostListI, PostT } from '@/types';

import Modal from './Modal';
import NewPost from './NexPost';
import Post from './Post';

import styles from './PostList.module.scss';

const PostList: React.FC<PostListI> = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState<PostT[]>([]);

  const addPostHandler = (postData: PostT) => {
    // setPosts([postData, ...posts]);
    // ensures accurate state updates (state depends on previous state)
    setPosts((existingPosts: PostT[]) => [postData, ...existingPosts]);
  };

  return (
    <>
      {/* posts: {JSON.stringify(posts, null, 2)} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
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
