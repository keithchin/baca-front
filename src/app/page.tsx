
import Post from "./components/post/Post";
import { IPost } from "./interfaces/post";
import { Suspense } from "react";

async function getData() {
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

// async function postVoteScore(type: String, authorId: String, subforumId: String) {
//   const res = await fetch('http://localhost:5000/api/posts/vote', {
//       method: 'POST',
//       cache: 'no-store',
//       mode: 'cors',
//       body: JSON.stringify({
//           voteType: type,
//           authorId: authorId,
//           subforumId: subforumId
//       })
//   });
//   if (!res.ok) {
//     throw new Error(`Failed to ${type} post!`);
//   }
//   if (res.status !== 200) {
//     throw new Error(`There was an error with status code ${res.status}`)
//   }
//   const json = await res.json();
//   console.log(json);
//   return json;
// }

export default async function Home() {
  const posts : IPost[] = await getData();

  // const handleVote = (type: string, authorId: string, subforumId: string) => {
  //   postVoteScore(type, authorId, subforumId);
  // };
  

  return (
    <Suspense fallback={<p className="bc__load">Loading feed...</p>}>
      {/* @ts-expect-error Async Server Component */}
      <Post promise={posts} />
    </Suspense>
  );
}