import { Card, Col, Row, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useGetPostByLimitQuery } from "services/post";

function Index() {
  const responseInfo = useGetPostByLimitQuery(10);
  if (responseInfo.isLoading)
    return (
      <Content>
        <Row>
        {[1,2,3,4,5,6,7].map((post, i) => (
          <Col span={6} key={i}>
            <Card
              hoverable
              style={{ margin: 20, height: 250 }}
              title={post.title}
            >
             <Skeleton/>
            </Card>
          </Col>
        ))}</Row>
      </Content>
    );
  if (responseInfo.isError)
    return <h1>An error occured {responseInfo.error.error}</h1>;
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Row>
        {responseInfo?.data.map((post, i) => (
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
