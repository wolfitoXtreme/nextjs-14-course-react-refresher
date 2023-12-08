import React, { useState } from 'react';

import MainHeader from '@/components/MainHeader';
import PostList from '@/components/PostList';

const App: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <>
      <MainHeader onCreatePost={toggleModalHandler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={toggleModalHandler}
        />
      </main>
    </>
  );
};

export default App;
