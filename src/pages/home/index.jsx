import { Card, Col, Row, Skeleton, Pagination } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useGetAllPostQuery } from "services/post";

function Index() {
  const responseInfo = useGetAllPostQuery(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handlePagination =(page, pageSize)=>{
    setCurrentPage(page)
    setPostsPerPage(pageSize)

    
  }
  if (responseInfo.isLoading)
    return (
      <Content>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7].map((post, i) => (
            <Col span={6} key={i}>
              <Card
                hoverable
                style={{ margin: 20, height: 250 }}
                title={post.title}
              >
                <Skeleton />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    );
  if (responseInfo.isError)
    return <h1>An error occured {responseInfo.error.error}</h1>;
    const currentPosts = responseInfo.data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Pagination defaultCurrent={1} onChange={handlePagination} total={responseInfo?.data.length} />
      <Row>
        {responseInfo?.data && currentPosts.map((post, i) => (
          <Col span={6} key={i}>
            <Card
              hoverable
              style={{ margin: 20, height: 250 }}
              title={post.title}
            >
              <p>{post.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Index;
