import { Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useGetPostByLimitQuery } from "services/post";

function Index() {
  const responseInfo = useGetPostByLimitQuery(10);
  console.log(responseInfo);
  if (responseInfo.isLoading) return <div>Loading....</div>;
  if (responseInfo.isError)
    return <h1>An error occured {responseInfo.error.error}</h1>;
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Row>
        {responseInfo?.data.map((post, i) => (
          <Col span={6} key={i}>
            <Card hoverable style={{ margin: 20,height:250 }} title={post.title}>
              <p>{post.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
}

export default Index;
