import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function SidBar() {
  return (
    <Menu theme="dark">
      <Menu.Item key={"home"} icon={<MailOutlined />}>
        <Link to={"/"}>Back to Home</Link>
      </Menu.Item>
      <Menu.Item  key={"inbox"} icon={<AppstoreOutlined />}>
        <Link to={"/dashboard/inbox"}>inbox</Link>{" "}
      </Menu.Item>
      <Menu.Item  key={"settings"} icon={<SettingOutlined />}>
        <Link to={"/dashboard/settings-and-privacy"}>settings</Link>{" "}
      </Menu.Item>
    </Menu>
  );
}

export default SidBar;
