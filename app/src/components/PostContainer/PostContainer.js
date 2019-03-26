import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <div key={post.timestamp}>
          <div className="top-post">
            <img
              className="thumb"
              src={post.thumbnailUrl}
              alt={post.timestamp}
            />
            <h6>{post.username}</h6>
          </div>
          <img src={post.imageUrl} alt={post.timestamp} />
          <div className="comment-yo">
            <span className="bt">
              <i class="far fa-heart" />
              <i class="far fa-comment" />
            </span>
            <strong>
              <span className="likes">{post.likes} Likes</span>
            </strong>
            <span className="comments">
              <CommentSection comments={post.comments} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      imgUrl: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      comments: PropTypes.array,
      likes: PropTypes.number
    })
  )
};

export default PostContainer;
