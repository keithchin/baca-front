'use client';

import React, { FC, MouseEventHandler } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


interface PostVoteProps {
    _id: string,
    subforumId: {
        title: String
    },
    created_at: Date,
    authorId: {
        _id: String
    },
    title: String,
    voteScore: Number
}

async function postVoteScore(type: String, authorId: String, _id: String) {
    const res = await fetch('http://localhost:5000/api/posts/vote', {
        method: 'POST',
        cache: 'no-store',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            voteType: type,
            userId: authorId,
            postId: _id
        })
    });
    if (!res.ok) {
        throw new Error(`Failed to ${type} post!`);
      }
      if (res.status !== 200) {
        throw new Error(`There was an error with status code ${res.status}`)
      }
      const json = await res.json();
      console.log(json);
      return json;
}
const PostVote: FC<PostVoteProps> = ({_id, authorId, voteScore }) => {
    const handleUpvote = async () => {
        console.log(authorId._id);
        postVoteScore('upvote', authorId._id, _id);
    };

    const handleDownvote = async () => {
        postVoteScore('downvote', authorId._id, _id);
    };
    return (
        <div className='flex'>
            <div className="mr-5">
                <span className="">{voteScore.toString()}</span>
            </div>
            <div className="mr-5">
                <FaArrowUp className="hover:opacity-20 hover:cursor-pointer" onClick={handleUpvote} />
                <FaArrowDown className="hover:opacity-20 hover:cursor-pointer" onClick={handleDownvote}/>
            </div>
        </div>
    );
}

export default PostVote;