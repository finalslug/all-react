import React, { Component } from "react";
import "./State.scss";

// state 초기 값
class State extends Component {
constructor() {
super();
this.state = {
textColor: "skyblue",
trueFalseColor: true,
isHidden: false,
};
}

// state 객체의 텍스트색 변경 -> state 바꾸는 함수 -> setState
handleTextColor = () => {
console.log("clicked");
this.setState({
textColor: "orange",
});
};

// state 객체의 trueFalseColor 변경-> state 바꾸는 함수 -> setStates
handleToggleClick = () => {
console.log("toggle clicked1");
// 1번째 방법
// if (this.state.trueFalseColor === true) {
// this.setState({
// trueFalseColor: false,
// });
// } else if (this.state.trueFalseColor === false) {
// this.setState({
// trueFalseColor: true,
// });
// }
// };

    // 2번째 방법 - boolean 데이터 활용1
    // if (this.state.trueFalseColor) {
    //   this.setState({
    //     trueFalseColor: false,
    //   });
    // } else if (!this.state.trueFalseColor) {
    //   this.setState({
    //     trueFalseColor: true,
    //   });
    // }

    // 3번째 최종 방법 - boolean 데이터 활용2
    this.setState({
      trueFalseColor: !this.state.trueFalseColor,
    });

};

handleHiddenState = () => {
console.log("clicked2");
this.setState({
isHidden: !this.state.isHidden,
});
};

render() {
return (
<div className="state">
<h1>State</h1>
<p style={{ color: "blueviolet" }}>sentence color</p>
{/_ 1 state 초기 데이터를 반영하는 요소 _/}
<p style={{ color: this.state.textColor }}>이 문장 색을 체인지</p>
{/_ 2 state 데이터를 변경하는 요소 -> 클릭되면 state 데이터 변경 _/}
<button onClick={this.handleTextColor}>color change!</button>
<br></br>

        {/* 1 state 초기 데이터를 반영하는 요소 */}
        {/* cf. 삼항 연산자 (toggle 기능) */}
        {/* cf. inline style {{ bad }} */}
        {/* <p style={{ color: "crimson" }}>true or false</p> */}
        <p style={{ color: this.state.trueFalseColor ? "green" : "red" }}>
          true or false
        </p>

        {/* cf. className 동적으로 변경 */}
        <p className={this.state.trueFalseColor ? "active" : "inactive"}>
          true or false
        </p>

        {/* 2 state 데이터를 변경하는 요소 -> 클릭되면 state 데이터 변경 */}
        <button onClick={this.handleToggleClick}>second button</button>

        {/* state 상태에 따라서 다른 요소 나타내기 -> { }로 자바스크립트 실행*/}
        {this.state.isHidden ? <p>state 값이 true</p> : <p>state 값이 false</p>}
        {/* <p>state 값이 true</p>
        <p>state 값이 false</p> */}
        <button onClick={this.handleHiddenState}>third button</button>

        {/* {this.state.isCartEmpty ? (
          <EmptyCart></EmptyCart>
        ) : (
          <FilledCart></FilledCart>
        )}
        <button onClick={this.handleHiddenState}>fourth button</button> */}
      </div>
    );

}
}

export default State;
