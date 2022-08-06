import './App.css';
import {Routes, Route} from 'react-router-dom'
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Post/Post';
import NewPost from './components/Posts/NewPost/NewPost';
import EditPost from './components/Posts/EditPost/EditPost';

function App() {
  const publishPost = async (id, text) => {
    await fetch('http://localhost:7777/posts', {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, content: text, action: 'publish'})})
  }
  const editPost = async (id, text) => {
    await fetch('http://localhost:7777/posts', {method:'POST', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, content: text, action: 'edit'})})
  }
  const deletePost = async (id, text) => {
    await fetch(`http://localhost:7777/posts/${id}`, {method:'DELETE', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, content: text})})
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Posts />} />
        <Route path="/posts/:id" exact element={<Post delete={deletePost}/>} />
        <Route path="/posts/edit/:id" exact element={<EditPost edit={editPost}/>} />
        <Route path="/posts/new" exact element={<NewPost publish={publishPost}/>} />
      </Routes>
    </div>
  );
}

export default App;
