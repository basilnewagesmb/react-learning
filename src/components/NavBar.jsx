import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function NavBar() {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">home</Link>
      </Menu.Item>
      <Menu.Item key="post" icon={<AppstoreOutlined />}>
        <Link to="/posts">posts</Link> 
      </Menu.Item>
      <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
        <Link to="/dashboard">dashboard</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavBar;
