import { Menu, Popover } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "features/auth/authSlice";

function NavBar() {
  const { user, name } = useSelector((state) => state.auth);
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  

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
          <Popover
            content={<a onClick={()=>dispatch(logout())}>logout</a>}
            trigger="click"
            visible={visibility}
            onVisibleChange={()=>setVisibility(true)}
          >
            <Avatar
              style={{ backgroundColor: "green", verticalAlign: "middle" }}
              size="large"
            >
              {name.slice(0, 1)}
            </Avatar>
          </Popover>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default NavBar;
