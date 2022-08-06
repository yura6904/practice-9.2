import { NavLink, useLocation } from "react-router-dom";

function Post(props) {
  const post = useLocation()
  return (
    <div className="Post">
      <h3>{post.state.post.content}</h3>
        <NavLink 
          to='/'
          onClick={() => {props.delete(post.state.post.id)}}>
            Удалить
        </NavLink>
        <NavLink 
          to='/posts/edit/:id'
          state={post.state}>
            Редактировать
        </NavLink>
        <NavLink to='/'>
            x
        </NavLink>
    </div>
  );
  }
  
  export default Post;
  