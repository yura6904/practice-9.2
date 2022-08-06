import { NavLink } from "react-router-dom";
import { useJsonFetch } from "../useJsonFetch/useJsonFetch";

function Posts(props) {
    const {data, error, isLoading} = useJsonFetch('http://localhost:7777/posts')

    return (
      <div className="Posts">
          <button>
            <NavLink
            to='/posts/new'>
              Добавить
            </NavLink>
          </button>

          {data?.map((p, id) => (
            <div className="post-card" key={p.id}>
              <NavLink 
              to={`/posts/${p.id}`}
              state={{post: p}}>
                <h3>{p.content}</h3>
              </NavLink>
            </div>
          ))}
      </div>
    );
  }
  
  export default Posts;
  