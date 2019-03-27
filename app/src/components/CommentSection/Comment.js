import React from 'react';

const Comment = props => {
    return (
            <div className="commentText">
                <span className="user">{props.comment.username}</span>
                <span className="comment">{props.comment.text}</span>
            </div>
    );
};

export default Comment;