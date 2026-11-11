import React, { useState } from 'react';
import {
    BarChartOutlined,
    DashboardOutlined,
    DesktopOutlined,
    EditOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: 'Обзор' },
    { key: '/diary', icon: <EditOutlined />, label: 'Дневник' },
    { key: '/stats', icon: <BarChartOutlined />, label: 'Статистика' },
    { key: '/upload', icon: <UploadOutlined />, label: 'Загрузка' },
    { key: '/profile', icon: <UserOutlined />, label: 'Профиль' },
];


const navigate = useNavigate();

<Menu
    items={menuItems}
    onClick={({ key }) => navigate(key)}
/>

const location = useLocation();

<Menu
    selectedKeys={[location.pathname]}
    items={menuItems}
    onClick={({ key }) => navigate(key)}
/>



const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: 24 }}>
                    <Outlet />

                    
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;