import Body from './components/body/Body';
import Post from "./components/body/post/Post";
import LeftSidebar from "./components/body/LeftSidebar";
import RightSidebar from "./components/body/RightSidebar";
import { IPost } from "./interfaces/post";
import { Suspense } from "react";
import { ISubforum } from "./interfaces/subforum";
import PostCreate from './components/body/post/PostCreate';

async function getPosts() {
  const res = await fetch('http://localhost:5000/api/posts', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  if (res.status !== 200) {
    throw new Error(`There was an error with status code ${res.status}`)
  }

  return res.json();
}




export default async function Home() {
  const posts : IPost[] = await getPosts();

  return (
    <Suspense fallback={<p className="bc__load">Loading feed...</p>}>
        <Body>
          <PostCreate />
          {/* @ts-expect-error Async Server Component */}
          <Post promise={posts} />
        </Body>
    </Suspense>
  );
}