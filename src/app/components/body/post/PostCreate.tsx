'use client'
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';



function PostCreate() {
    const [text, setText] = useState('');

    function isEmpty() {
        return text.trim().length === 0;
    }
    
    function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }
    
    return (
        <div className="post-create">
            <div className="post-create__avatar">
                <FaUser className="post-create__avatar__icon"/>

            </div>
            <div className="flex flex-col w-full">
                <textarea className="post-create__text" placeholder="How's it going?" onChange={handleTextChange}  />
                <div className="flex justify-between mt-4 mb-4">
                    <FaPhotoVideo />
                    <button className="bc-btn__post" disabled={isEmpty()}>
                        Post
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCreate;