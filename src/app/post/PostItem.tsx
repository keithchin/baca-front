
import React, { FC, MouseEventHandler } from 'react';


interface PostItemProps {
    _id: string,
    subforumId: {
        title: String
    },
    created_at: Date,
    authorId: {
        username: String
    },
    title: String,
    voteScore: Number
}

const PostItem: FC<PostItemProps> = ({voteScore, title, _id, authorId, created_at, subforumId }) => {
    return (
            <div className='flex justify-between'>
                <div className="flex items-center">
                    <div>
                        <div className='post-item__title'>
                            {title}
                        </div>
                        <div className='post-item__desc'>
                            <span>Posted by {authorId.username}</span>
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