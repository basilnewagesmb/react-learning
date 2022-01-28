import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "components/NavBar";
import Router from "router";
import { Layout } from "antd";
import SidBar from "components/SidBar";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const { pathname } = useLocation();
  return (
    <Layout>
      {pathname.includes("/dashboard") ? null : (
        <Header>
          <NavBar />
        </Header>
      )}
      <Layout>
        {!pathname.includes("/dashboard") ? null : (
          <Sider>
            <SidBar />
          </Sider>
        )}
        <Content>
          <Router />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
