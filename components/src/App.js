import React from 'react';
import faker from 'faker';
// import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';

const listComment = [
  {
    name: faker.name.findName(),
    image: faker.image.avatar(),
    comment: faker.random.words()
  },
  {
    name: faker.name.findName(),
    image: faker.image.avatar(),
    comment: faker.random.words()
  },
  {
    name: faker.name.findName(),
    image: faker.image.avatar(),
    comment: faker.random.words()
  }
]

function App() {
  return (
    <div className="ui container comments">
      {listComment.map((comment, i) =>
        <ApprovalCard>
          <Comment name={comment.name} image={comment.image} comment={comment.comment} />
        </ApprovalCard>
      )}
    </div>
  );
}

export default App;
