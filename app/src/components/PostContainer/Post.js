import React from 'react';
import PostHeader from './PostHeader';
import './PostContainer.css';

const Post = props => {
    return (
        <div>
            <PostHeader
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl} />
            <div>
                <img src={props.post.imageUrl}/>
            </div>
        </div>
    )
}

export default Post;