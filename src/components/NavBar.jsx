import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useSelector } from "react-redux";

function NavBar() {
  const { user, name } = useSelector((state) => state.auth);

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">home</Link>
      </Menu.Item>
      <Menu.Item key="post" icon={<AppstoreOutlined />}>
        <Link to="/posts">posts</Link>
      </Menu.Item>
      {user ? (
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
          <Link to="/dashboard">dashboard</Link>
        </Menu.Item>
      ) : (
        <Menu.Item key="login" icon={<AppstoreOutlined />}>
          <Link to="/auth/login">Login</Link>
        </Menu.Item>
      )}
      {user && (
        <Menu.Item key="avatar">
          <Link to="/">
            <Avatar
              style={{ backgroundColor: "green", verticalAlign: "middle" }}
              size="large"
            >
              {name.slice(0, 1)}
            </Avatar>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default NavBar;
