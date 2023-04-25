import React, { FC  } from 'react';
import type { IPost } from '../interfaces/post';
import PostItem from './PostItem';
import PostClient from './PostClient';
import PostVote from './PostVote';
import { useRouter } from 'next/navigation';


interface PostProps {
  promise: Promise<IPost[]>;
  onVote: (type: string, authorId: string, subforumId: string) => void;
}

async function Post({promise, onVote}: PostProps) {
  const posts : IPost[] = await promise;
  return (
    <div className='post'>
      {posts.map(post =>
        <div className="post-item">
          <PostVote 
            key={post.authorId._id}
            {...post}
          />
          <PostItem
            key={post.authorId._id}
            {...post}
          />
        </div>
      )}
    </div>
  );
}

export default Post;