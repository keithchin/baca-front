'client only';

import React, { FC } from 'react';
import type { IPost, IPostItem } from "../../interfaces/post";
import PostItem from './PostItem';
import { useAppState } from '@/app/context/AppContext';

// async function getData() {
//   const res = await fetch('http://localhost:5000/api/posts');
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   if (res.status !== 200) {
//     throw new Error(`There was an error with status code ${res.status}`)
//   }

//   return res.json();
// }

async function Post() {
  const { posts } = useAppState();
  // const posts : IPost[] = await getData();

  // router.events.on('routeChangeStart', () => {
  //   console.log('new route!');
  // });

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