import React from "react";
import { useGetPostByLimitQuery } from "services/post";

function Index() {
  const responseInfo = useGetPostByLimitQuery(10);
  console.log(responseInfo);
  if (responseInfo.isLoading) return <div>Loading....</div>;
  if (responseInfo.isError)
    return <h1>An error occured {responseInfo.error.error}</h1>;
  return (
    <div>
      home
      {responseInfo?.data.map((post, i) => (
        <div key={i}>
          <h2>
            {post.id} {post.title}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Index;
