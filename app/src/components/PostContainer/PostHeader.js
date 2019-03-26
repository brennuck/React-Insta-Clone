import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <section className="post-h">
            <img src={props.thumbnailUrl}/>
            <h3>{props.username}</h3>
        </section>
    )
}

export default PostHeader;