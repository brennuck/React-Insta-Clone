import React from "react";
import Comment from "./Comment";
import CommentCreate from "./CommentCreate";

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment
    };
  }
  render() {
    return (
      <div>
        {this.state.comment.map((c, i) => 
          <Comment key={i} comment={c} />
        )}
        <CommentCreate />
      </div>
    );
  }
}

export default CommentSectionContainer;
