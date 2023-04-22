
import Post from "./components/post/Post";
import { Suspense } from "react";

export default async function Home() {

  return (
    <Suspense fallback={<p className="bc__load">Loading feed...</p>}>
      {/* @ts-expect-error Server Component */}
      <Post />
    </Suspense>
  );
}