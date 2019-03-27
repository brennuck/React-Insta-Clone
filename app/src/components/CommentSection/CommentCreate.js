import React from 'react';

const CommentCreate = props => {
    return (
        <form onSubmit={props.submitComment}>
            <input 
            type="text"
            placeholder="Add comment..."
            />
        </form>
    )
}

export default CommentCreate;