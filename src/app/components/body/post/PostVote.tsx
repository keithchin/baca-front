'use client';

import router, { useRouter } from 'next/navigation';
import React, { FC, MouseEventHandler, useState, useTransition } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

interface PostVoteProps {
  _id: string;
  subforumId: {
    title: String;
  };
  created_at: Date;
  authorId: {
    _id: String;
  };
  title: String;
  voteScore: number;
}

async function postVoteScore(
  type: String,
  authorId: String,
  _id: String
) {

  const res = await fetch('http://localhost:5000/api/posts/vote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      voteType: type,
      userId: authorId,
      postId: _id,
    }),
  });
  if (!res.ok) {
    throw new Error(`Failed to ${type} post!`);
  }
  if (res.status !== 200) {
    throw new Error(`There was an error with status code ${res.status}`);
  }
  const json = await res.json();
  return json;
}

const PostVote: FC<PostVoteProps> = ({ _id, authorId, voteScore }) => {
  const router = useRouter();
  const [score, setScore] = useState(voteScore);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);


  const handleUpvote: MouseEventHandler<SVGElement> = async () => {
    setIsFetching(true);
    const result = await postVoteScore('upvote', authorId._id, _id);
    
    setScore(result.voteScore);
    setIsFetching(false);

    startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
    });
  };

  const handleDownvote: MouseEventHandler<SVGElement> = async () => {
    setIsFetching(true);

    const result = await postVoteScore('downvote', authorId._id, _id);

    setScore(result.voteScore);
    setIsFetching(false);

    startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
    });
  };

  return (
    <div className="flex">
      <div className="mr-5">
        <span className="">{score}</span>
      </div>
      <div className="mr-5">
        <FaArrowUp
          className="hover:opacity-20 hover:cursor-pointer"
          onClick={handleUpvote}
        />
        <FaArrowDown
          className="hover:opacity-20 hover:cursor-pointer"
          onClick={handleDownvote}
        />
      </div>
    </div>
  );
};

export default PostVote;