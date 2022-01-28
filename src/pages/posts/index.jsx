import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "features/users/usersSlice";
import "style/posts.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.users);
  useEffect(() => {
    if (!loading && entities.length === 0) {
      dispatch(fetchUser());
    }
  });
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <h1>Posts</h1>
      {loading && <p>loading...</p>}
      <Row>
        {entities?.map((post, i) => {
          return (
            <Col key={i} span={4}>
              <Card
                hoverable
                style={{ margin: 20}}
                title={post.name}
              >
                <Button onClick={() => navigate("/posts/" + post.id)} align="center">
                  {" "}
                  See Details
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}

export default Index;
