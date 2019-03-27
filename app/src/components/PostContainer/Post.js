import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSectionContainer';
import './PostContainer.css';

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
                    incrementLike={this.incrementLike}
                    likes={this.state.likes}
                />
                <div className="post-image">
                    <img src={this.props.post.imageUrl}/>
                </div>
                <div className="like-section">
                    <div className="bt" onClick={this.props.incrementLike}>
                        <div className="heart">
                            <i class="far fa-heart"></i>
                        </div>
                        <div className="commentBubble">
                            <i class="far fa-comment"></i>
                        </div>
                    </div>
                    <div className="bt">
                        <div className="likes">{this.props.likes}</div>
                    </div>
                </div>
                <CommentSection comment={this.props.post.comments} />
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