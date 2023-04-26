import { FaUser } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';


async function PostCreate() {
    return (
        <div className="post-create">
            <div className="post-create__avatar">
                <FaUser className="post-create__avatar__icon"/>

            </div>
            <div className="flex flex-col w-full">
                <textarea className="post-create__text" placeholder="How's it going?"></textarea>
                <div className="flex justify-between mt-4 mb-4">
                    <FaPhotoVideo />
                    <div className="bc-btn__post">
                        Post
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCreate;