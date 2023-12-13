import React from 'react';
import { Outlet } from 'react-router-dom';

import PostList from '@/components/PostList';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const { posts: existingPosts } = await response.json();

  return existingPosts;
};

const Posts: React.FC = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Posts;
