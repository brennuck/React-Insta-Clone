import React from "react";

const Like = props => {
  return (
    <div className="bt">
      <div className="testing">
        <div className="likeComment">
          <div className="heart">
            <i class="far fa-heart" onClick={props.incrementLike} />
          </div>
        </div>
        <div className="likeComment">
          <i class="far fa-comment" />
        </div>
      </div>
      <div className="likeNumber">{props.likes} likes</div>
    </div>
  );
};

export default Like;
