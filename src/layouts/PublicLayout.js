import React from "react";
import { Header, Footer, Sidebar } from "../components";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Content } = Layout;

const PublicLayout = ({ children }) => {
  return (
    <>
      <Layout>
        <Header />

        <Layout>
          <Sidebar />

          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>

        <Footer />
      </Layout>
    </>
  );
};

export default PublicLayout;
