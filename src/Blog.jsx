import React from 'react';
import Article from "./Article";
const authorName = "使い方";
class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <>
        <Article 
        title = {"React"} 
        order = {3}
        author = {authorName}
        />
      </>
    )
  }
}


export default Blog