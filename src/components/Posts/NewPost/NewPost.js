import { useState } from "react";
import { NavLink } from "react-router-dom";

function NewPost(props) {
  const [text, setText] = useState()

  return (
    <div className="NewPost">
      <input defaultValue={'Введите текст'} onChange={(e) => {setText(e.target.value)}}></input>
      <button onClick={async () => {await props.publish('new-post', text)}}>
        <NavLink to='/'>
          Опубликовать
        </NavLink>
      </button>
      <button>
        <NavLink to='/'>
            x
        </NavLink>
      </button>
      
    </div>
  );
}
  
  export default NewPost;
  