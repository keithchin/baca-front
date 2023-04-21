import React from 'react';
import type { IPost, IPostItem } from "../../interfaces/post";
import PostItem from './PostItem';

async function getData() {
  const res = await fetch('http://localhost:3000/api/post');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Post = async () => {
    const posts : IPost[] = await getData();

  return (
    <>
      <div className="post">
        {posts.map(post =>
          <PostItem
            key={post.authorId}
            {...post}
          />
        )}
      </div>
    </>
  );
}

export default Post;