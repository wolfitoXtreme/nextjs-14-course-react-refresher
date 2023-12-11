import React, { useEffect, useState } from 'react';

import { PostListI, PostT } from '@/types';

import Modal from './Modal';
import NewPost from './NexPost';
import Post from './Post';

import styles from './PostList.module.scss';

const PostList: React.FC<PostListI> = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState<PostT[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/posts');
      const { posts: existingPosts } = await response.json();

      setIsLoading(false);

      return setPosts(existingPosts);
    };
    fetchPosts();
  }, []);

  const addPostHandler = (postData: PostT) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // setPosts([postData, ...posts]);
    // ensures accurate state updates (state depends on previous state)
    setPosts((existingPosts: PostT[]) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>
          <b>Loading please wait....</b>
        </p>
      ) : (
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
      )}
    </>
  );
};

export default PostList;
