import { Card, Col, Row, Skeleton, Pagination } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetAllPostQuery } from "services/post";

function Index() {
  const navigate = useNavigate();
  let id
  const responseInfo = useGetAllPostQuery(id, {
    pollingInterval: 3000,// will trigger after 3sc
    refetchOnMountOrArgChange: true, //it call each mound
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let [searchParams] = useSearchParams();
  let urlPage = searchParams.get("page") || 1;
  useEffect(() => {
    setCurrentPage(urlPage);
  }, [urlPage]);

  const handlePagination = (page, pageSize) => {
    setCurrentPage(page);
    setPostsPerPage(pageSize);
    navigate("?page=" + page);
  }; 
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
  const currentPosts = responseInfo.data.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Row>
        <Pagination
          defaultCurrent={urlPage || 1}
          onChange={handlePagination}
          total={responseInfo?.data.length}
        />
      </Row>

      <Row>
        {responseInfo?.data &&
          currentPosts.map((post, i) => (
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
