'use client';

import './asset/dashboard-section.css';
import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  MessageOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import { Badge, Button, Layout, Menu, MenuProps, theme } from 'antd';
import MessageSection from './sub-components/message-contents';
import { getMessageService } from '@/services/MessageService';
import { MessageType } from '@/types';
import ProjectSection from './sub-components/projects-content';

const { Header, Sider, Content } = Layout;

export default function DashboardSection() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [allMessages, setAllMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentTab(Number(e.key));
  };
  const getAllMessages = async () => {
    const res = await getMessageService();
    if (res.success) {
      setAllMessages(
        res.data?.filter((item: MessageType) => item.seen === false)
      );
    }
    setLoading(false);
  };
  useEffect(() => {
    getAllMessages();
  }, [loading]);

  return (
    <Layout className="dashboard-section">
      <Sider trigger={null} collapsible collapsed={collapsed} width="20%">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={onClick}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <MessageOutlined />,
              label: (
                <Badge
                  count={allMessages?.length}
                  className="sider-item"
                  offset={[14, 10]}
                >
                  Messages
                </Badge>
              ),
            },
            {
              key: '2',
              icon: <FundProjectionScreenOutlined />,
              label: 'Projects',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="dashboard-content"
        >
          {currentTab === 1 && <MessageSection setLoading={setLoading} />}
          {currentTab === 2 && <ProjectSection />}
        </Content>
      </Layout>
    </Layout>
  );
}
