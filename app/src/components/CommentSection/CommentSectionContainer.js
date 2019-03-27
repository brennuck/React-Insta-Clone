import React from "react";
import Comment from "./Comment";
import CommentCreate from "./CommentCreate";

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment,
      comments: ''
    };
  }
  setComment = () => {
    localStorage.setItem (
      this.props.postId,
      JSON.stringify(this.state.comment)
    )
  }

  commentHandler = e => {
    this.setState({ comments: e.target.value })
  }

  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = { text: this.state.comments, username: 'guestUser'}
    const comment = this.state.comment.slice();
    comment.push(newComment);
    this.setState({ comment, comments: ''});
  }

  render() {
    return (
      <div>
        {this.state.comment.map((c, i) => 
          <Comment key={i} comment={c} />
        )}
        <CommentCreate 
        comments={this.state.comments}
        submitComment={this.handleCommentSubmit}
        changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

export default CommentSectionContainer;
