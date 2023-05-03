'use client'
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';



function PostCreate() {
    const [text, setText] = useState('');
    const [create, showCreate] = useState(false);
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    function isEmpty() {
        return text.trim().length === 0;
    }
    
    function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
    }

    function handleShowCreate() {
        showCreate(!create);
    }

    async function submitPost() {
        const res = await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: text,
              authorId: "643bc10b707ed9ba662f1993",
              subforumId: "643bcebf135af6999a1a50af"
            }),
        });
        if (!res.ok) {
            throw new Error(`Failed to create post!`);
        }
    }

    async function handleSubmit() {
        setIsFetching(true);
        await submitPost();
        setIsFetching(false);
    
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh();
        });
      };
    
    
    return (
        <>
            {!create && (
                <div className="flex justify-between">
                    <div className="post-create__click" onClick={handleShowCreate}>How's it going?</div>
                    <button className="bc-btn__post" disabled={isEmpty()}>
                        Post
                    </button>
                </div>
            )}
            {create && (
                <div className="post-create">
                    <div className="flex flex-col w-full pl-6">
                        <textarea className="post-create__text" placeholder="How's it going?" onChange={handleTextChange}  />
                        <div className="flex justify-between mt-4 mb-4">
                            <FaPhotoVideo />
                            <button className="bc-btn__post" disabled={isEmpty()} onClick={handleSubmit}>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostCreate;