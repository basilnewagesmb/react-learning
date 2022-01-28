import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "features/users/usersSlice";
import "style/posts.css";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.users);
  useEffect(() => {
    if (entities.length == 0) {
      dispatch(fetchUser());
    }
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>loading...</p>}
      <article>
        {entities?.map((post, i) => {
          return (
            <aside key={i}>
              <h3>{post.name}</h3>
              <button onClick={() => navigate("/posts/" + post.id)}>
                See Details
              </button>
            </aside>
          );
        })}
      </article>
    </div>
  );
}

export default Index;
