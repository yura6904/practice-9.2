import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function EditPost(props) {
  const [newText, setNewText] = useState()
  const prevContent = useLocation()

  return (
    <div className="EditPost">
      <input defaultValue={prevContent.state.post.content} onChange={(e) => setNewText(e.target.value)}></input>
        <NavLink to={`/posts/${prevContent.state.post.id}`} 
        state={{post: {id: prevContent.state.post.id, content: newText}}} 
        onClick={() => {props.edit(prevContent.state.post.id, newText)}}>Изменить</NavLink>

        <NavLink to={`/posts/${prevContent.state.post.id}`}
        state={{post: {id: prevContent.state.post.id, content: prevContent.state.post.content}}}>x</NavLink>
    </div>
  );
}

export default EditPost;
