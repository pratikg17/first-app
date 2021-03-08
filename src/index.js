// Import React and React dom libraries
import  React  from "react";
import  ReactDOM  from "react-dom";

import CommentDetail from "./CommentDetail";
// Create react component

const App = function() {
  return (
      <div className="ui container comments">
        <CommentDetail avatar="https://source.unsplash.com/random/50x45" comment="hello nice"  author="Sam" time="at 6.00pm" />
        <CommentDetail avatar="https://source.unsplash.com/random/50x40" comment="hey good" author="Alex" time="at 6.00am" />
        <CommentDetail avatar="https://source.unsplash.com/random/50x49" comment="Oi great" author="Jane" time="at 10.00pm" />
      </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
