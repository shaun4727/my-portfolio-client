'use client';

import Image from 'next/image';
import { Card, Col, Drawer, Row } from 'antd';
import './assets/blog.css';
import { useState } from 'react';

export default function BlogSection() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="blog-section default-padding-body">
      <Row gutter={[16, 16]} className="blog-row">
        <Col span={24} className="gutter-row">
          <div className="blog-header">
            <Image
              src="/images/static/messageIcon.svg"
              width={100}
              height={100}
              className="message-icon"
              alt="message-icon"
            />
            <h4 className="title">Blogs I would love to share</h4>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="blog-form-row">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="gutter-row blog-section"
        >
          <Card className="box-container box-shadow">
            <h3 className="question-title">A question goes here?</h3>
            <div className="blog-excerpt">
              <p>
                as opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
              <span className="more-content" onClick={showDrawer}>
                ..more
              </span>
            </div>
          </Card>
          <Drawer
            title="Blog Detail"
            width="55%"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={open}
          >
            <h3 className="question-title">A question goes here?</h3>
            <div className="blog-excerpt">
              <p>
                as opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
            </div>
          </Drawer>
        </Col>
      </Row>
    </div>
  );
}
