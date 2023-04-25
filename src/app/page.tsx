
import Post from "./post/Post";
import Grid from "./components/Grid";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import { IPost } from "./interfaces/post";
import { Suspense } from "react";
import { ISubforum } from "./interfaces/subforum";

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

async function getSubforums() {
  const res = await fetch('http://localhost:5000/api/subforums', {
    cache: 'force-cache'
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
  const subforums: ISubforum[] = await getSubforums();

  return (
    <Suspense fallback={<p className="bc__load">Loading feed...</p>}>
      <Grid>
        {/* @ts-expect-error Async Server Component */}
        <LeftSidebar promise={subforums}/>
        {/* @ts-expect-error Async Server Component */}
        <Post promise={posts} />
        {/* @ts-expect-error Async Server Component */}
        <RightSidebar promise={subforums}/>
      </Grid>
    </Suspense>
  );
}