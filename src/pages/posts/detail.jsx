import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "features/users/usersSlice";
import { useNavigate, useParams } from "react-router";
function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPost, setCurrentPost] = useState();
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.users);
  useEffect(() => {
    if (entities.length < 0) {
      dispatch(fetchUser());
    }
  });
  useEffect(() => {
    const newEntry = entities.filter((post, i) => post.id === id)[0];
    setCurrentPost(newEntry);
  }, [entities]);

  return (
    <article>
      <aside>
        <p>{currentPost?.id}</p>
        <h1>{currentPost?.name}</h1>
        <button
          onClick={() => navigate(-1)}
          variant={"outlined"}
          color={"primary"}
        >
          Go back
        </button>
      </aside>
    </article>
  );
}

export default Detail;
