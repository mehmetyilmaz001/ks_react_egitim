import React from "react";

import { Link } from "react-router-dom";
import { Menu, Layout } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1"  title="Menu">
            <Menu.Item key="1"> <Link to="/">Anasayfa</Link></Menu.Item>
            <Menu.Item key="2"> <Link to="/user-management">Kullanıcı Yönetimi</Link></Menu.Item>
            
          </SubMenu>
         
        </Menu>
      </Sider>
    
  );
};

export default Sidebar;
