import React, { FC, MouseEventHandler } from 'react';
import Link from 'next/link';
import type { IPost } from '@/app/interfaces/post';
import {  ScriptProps } from 'next/script';
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


interface PostItemProps {
    onVote: (type: string, authorId: string, subforumId: string) => void,
    _id: string,
    subforumId: {
        title: String
    },
    created_at: Date,
    authorId: string,
    title: String,
    voteScore: Number
}

const PostItem: FC<PostItemProps> = ({voteScore, title, _id, authorId, created_at, subforumId, onVote }) => {
    const handleUpvote = async () => {
     onVote('upvote', authorId, _id);
    };

    const handleDownvote = async () => {
        onVote('downvote', authorId, _id);
    };
    return (
            <div className='post-item'>
                <div className="flex items-center">
                    <div className="mr-5">
                        <span className="">{voteScore.toString()}</span>
                    </div>
                    <div className="mr-5">
                        <FaArrowUp className="hover:opacity-20 hover:cursor-pointer" onClick={handleUpvote} />
                        <FaArrowDown className="hover:opacity-20 hover:cursor-pointer" onClick={handleDownvote}/>
                    </div>
                    <div>
                        <div className='post-item__title'>
                            {title}
                        </div>
                        <div className='post-item__desc'>
                            <span>Posted by {authorId}</span>
                            <span>Posted on {(new Date(created_at)).getDate()}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='post-item__tag'>
                        {subforumId.title}
                    </div>
                </div>
            </div>
    );
}

export default PostItem;