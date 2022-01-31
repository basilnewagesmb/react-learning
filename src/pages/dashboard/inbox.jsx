import { Row } from "antd";
import React from "react";
import { useGetPostByLimitQuery, useCreatePostMutation } from "services/post";

function Inbox() {
  const { isLoading, data } = useGetPostByLimitQuery(10);
  const HandlePost = () => {
   const create = useCreatePostMutation({ title: "b", body: "1" });
   console.log(create);
  };

  if (isLoading) {
    return <p>loading..</p>;
  }
  return (
    <div>
      {data.map((post, i) => (
        <div key={i}>{post.title}</div>
      ))}

      <button onClick={()=>HandlePost()}> post</button>
    </div>
  );
}

export default Inbox;
