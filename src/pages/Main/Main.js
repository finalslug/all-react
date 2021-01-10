import React, { Component } from "react";
import CommentList from "./mainComponents/Comment/CommentList";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      CommentData: [
        {
          id: 1,
          user_name: "1user_name",
          content: "1번째 comment",
          isLiked: false,
        },
        {
          id: 2,
          user_name: "2user_name",
          content: "2번째 comment",
          isLiked: false,
        },
        {
          id: 3,
          user_name: "3user_name",
          content: "3번째 comment",
          isLiked: false,
        },
        {
          id: 4,
          user_name: "4user_name",
          content: "4번째 comment",
          isLiked: false,
        },
        {
          id: 5,
          user_name: "5user_name",
          content: "5번째 comment",
          isLiked: false,
        },
        {
          id: 6,
          user_name: "6user_name",
          content: "6번째 comment",
          isLiked: false,
        },
        {
          id: 7,
          user_name: "7user_name",
          content: "7번째 comment",
          isLiked: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="main">
        <h1>Main</h1>
        <ul>
          {/* 1) 컴포넌트 분리 전 */}
          {/* {this.state.CommentData.map((comment) => {
            return (
              <li key={comment.id}>
                <span>{comment.user_name}</span>
                <span>{comment.content}</span>
                <span>{comment.isLiked ? "yes" : "no"}</span>
              </li>
            );
          })} */}

          {/* 2) 컴포넌트 분리 후 */}
          {this.state.CommentData.map((comment) => {
            return (
              <CommentList
                key={comment.id}
                user_name={comment.user_name}
                content={comment.content}
                isLiked={comment.isLiked}
              ></CommentList>
            );
          })}

          {/* <CommentList></CommentList>
          <li>
            <span>2user_name</span>
            <span>2번째 comment</span>
            <span>unlike</span>
          </li>
          <li>
            <span>3user_name</span>
            <span>3번째 comment</span>
            <span>unlike</span>
          </li>
          <li>
            <span>4user_name</span>
            <span>4번째 comment</span>
            <span>unlike</span>
          </li>
          <li>
            <span>5user_name</span>
            <span>5번째 comment</span>
            <span>unlike</span>
          </li> */}
        </ul>
        <div>
          <input placeholder="댓글 입력"></input>
          <button>입력</button>
        </div>
      </div>
    );
  }
}

export default Main;
