import { Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashBoardMain() {
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <Row>
        <h1>Dashboard main</h1>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Content>
  );
}

export default DashBoardMain;
