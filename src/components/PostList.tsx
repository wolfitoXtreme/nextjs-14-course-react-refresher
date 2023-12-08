import React from 'react';

import { PostListI } from '@/types';

import Modal from './Modal';
import NewPost from './NexPost';
import Post from './Post';

import styles from './PostList.module.scss';

const PostList:React.FC<PostListI> = ({ isPosting, onStopPosting })=>{

  return(
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      }

      <ul className={styles.posts}>
        <Post author='James'
          body='Minima modi nihil dolore'/>
      </ul>
    </>);};

export default PostList;
