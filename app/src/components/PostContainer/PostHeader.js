import React from 'react';
import './PostContainer.css';

const PostHeader = props => {
    return (
        <div className="postHeader">
            <div className="image-icon">
                <img src={props.thumbnailUrl}/>
            </div>
            <div>
                {props.username}
            </div>
        </div>
    )
}

export default PostHeader;