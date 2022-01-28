import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "features/users/usersSlice";
import { useNavigate, useParams } from "react-router";
import { Button, Card, Col, Row } from "antd";
function Detail() {
  const [currentPost, setCurrentPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.users);
  useEffect(() => {
    if (!loading && entities.length === 0) {
      dispatch(fetchUser());
    }
  });
  let newEntry;
  useEffect(() => {
    newEntry = entities.filter((post, i) => post.id == id);
    setCurrentPost(newEntry[0]);
  }, [entities]);
  return (
    <Row style={{ margin: "24px 16px 0" }}>
      <Col>
        <Card>
          <p>{currentPost?.id}</p>
          <h1>{currentPost?.name}</h1>
          <Button
            onClick={() => navigate(-1)}
            variant={"outlined"}
            color={"primary"}
          >
            Go back
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Detail;
