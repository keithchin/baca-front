import React, { FC } from 'react';
import Link from 'next/link';
import type { IPost } from '@/app/interfaces/post';
import {  ScriptProps } from 'next/script';



function PostItem(props: IPost){
    // if(props.isIcon) {
    //     return (
    //         <a href={props.url}><i</a>
    //     );
    // } else {
    //     return (
    //         <li>{props.name}</li>
    //     );
    // }
    return (
            <div className='post-item'>
                <div>
                    <div className='post-item__title'>
                        {props.title}
                    </div>
                    <div className='post-item__desc'>
                        <span>Posted by {props.authorId}</span>
                        <span>Posted on {(new Date(props.created_at)).getDate()}</span>
                    </div>
                </div>
                <div>
                    <div className='post-item__tag'>
                        {props.subforumId.title}
                    </div>
                </div>
            </div>
    );
}

export default PostItem;