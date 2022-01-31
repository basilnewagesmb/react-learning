import React from "react";
import { useGetPostByLimitQuery, useCreatePostMutation } from "services/post";

function Inbox() {
  const { isLoading, data } = useGetPostByLimitQuery(10);
  const [createPost, responseInfo,status] = useCreatePostMutation()
  const HandlePost = () => {
   createPost({ title: "b", body: "1" }).then((e)=> console.log(e.data))
  
  };


  return (
    <div>
      {data?.map((post, i) => (
        <div key={i}>{post.title}</div>
      ))}

      <button onClick={()=>HandlePost()}> post</button>
    </div>
  );
}

export default Inbox;
