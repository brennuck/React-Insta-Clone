import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import './PostContainer.css';

const Post = props => {
    return (
        <div className="post-border">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div className="post-image">
                <img src={props.post.imageUrl}/>
            </div>
            <div className="bt">
                <div className="heart">
                    <i class="far fa-heart"></i>
                </div>
                <div className="commentBubble">
                    <i class="far fa-comment"></i>
                </div>
            </div>
            <CommentSection comment={props.post.comments} />
        </div>
    )
}

export default Post;