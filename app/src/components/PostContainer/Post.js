import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import './PostContainer.css';
import Like from './Like';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            likes: props.post.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes })
    }

    render() {
        return (
            <div className="post-border">
                <PostHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div className="post-image">
                    <img src={this.props.post.imageUrl}/>
                </div>
                <Like
                    incrementLike={this.incrementLike}
                    likes={this.state.likes}
                />
                <CommentSection
                comment={this.props.post.comments}
                />
            </div>
    )
    }
}
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post;