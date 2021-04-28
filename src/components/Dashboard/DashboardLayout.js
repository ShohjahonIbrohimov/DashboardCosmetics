import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FormatPainterOutlined,
  TagsOutlined,
  TeamOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "../../styles/DashboardLayout.module.css";
import { Avatar } from "antd";
import { ADMIN_ROUTES } from "../../routes/routes";
import { Route, Switch, Link } from "react-router-dom";
// REDUX
import { logout } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const { Content, Footer, Sider } = Layout;

const adminMenuItems = [
  {
    title: "Bosh sahifa",
    icon: <HomeOutlined />,
    link: "/dashboard",
  },
];

const DashboardLayout = () => {
  const [collapsed, setcollapsed] = useState(false);
  const dispatch = useDispatch();

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };

  return (
    <Layout className={styles.layout}>
      <Sider
        theme='dark'
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className={styles.side_header}>
          <Avatar
            className={styles.avatar}
            size='medium'
            icon={<UserOutlined />}
          />
          {!collapsed && <h4 className={styles.username}>John Doe</h4>}
        </div>

        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          {adminMenuItems.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              <Link to={item.link}>{item.title}</Link>
            </Menu.Item>
          ))}
          <Menu.Item
            onClick={() => dispatch(logout())}
            key='logout'
            icon={<LogoutOutlined />}
          >
            Chiqish
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Content className={styles.content}>
          <Switch>
            {ADMIN_ROUTES.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Content>
        <Footer className={styles.footer}>
          Mardex ©2021 Created by Raqamli Dunyo LLC Front End team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
