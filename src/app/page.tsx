
'use-client';

import Counter from "./counter";
import type { Post } from "./interfaces/post";

async function getData() {
  const res = await fetch('http://localhost:3000/api/post');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const posts : Post[] = await getData();

  return (
    <>
      <ul>
        {posts.map(post => 
        <li key={post.authorId}>{post.authorId}</li>
          
        )}
      </ul>
      <Counter />
      <h1 className="text-3xl font-bold underline">Baca</h1>
    </>
  );
}