import React, { Component } from "react";
import "./CommentList.scss";

class CommentList extends Component {
  render() {
    return (
      <li className="commentList">
        {/* <span>1user_name</span>
        <span>1번째 comment</span>
        <span>unlike</span> */}
        <span>{this.props.user_name}</span>
        <span>{this.props.content}</span>
        <span>{this.props.isLiked ? "좋다" : "안 좋다"}</span>
      </li>
    );
  }
}

export default CommentList;
