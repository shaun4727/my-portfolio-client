'use client';

import Image from 'next/image';
import { Card, Col, Drawer, Row } from 'antd';
import './assets/blog.css';
import { useEffect, useState } from 'react';
import { TBlog } from '@/types/home-page';
import { getBlogSectionDataApi } from '@/services/HomeServices';
import DOMPurify from 'dompurify';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function BlogSection() {
  const [projectList, setProjectList] = useState<TBlog[]>([]);
  const [currBlog, setCurrBlog] = useState<TBlog | null>(null);

  useEffect(() => {
    getProjectList();
  }, []);

  const getProjectList = async () => {
    setProjectList([]);
    try {
      const res = await getBlogSectionDataApi();
      setProjectList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const showSpecificBlog = (project: TBlog) => {
    setCurrBlog(project);
    showDrawer();
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="blog-section default-padding-body">
      <Row gutter={[16, 16]} className="blog-row">
        <Col span={24} className="gutter-row">
          <div className="blog-header" data-aos="fade-left">
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
          {projectList.map((project, index) => (
            <Card
              className="box-container box-shadow"
              key={index}
              data-aos="fade-up"
            >
              <h3 className="question-title">{project.question}</h3>
              <div className="blog-excerpt">
                {project.excerpt}
                <span
                  className="more-content"
                  onClick={() => showSpecificBlog(project)}
                >
                  ..more
                </span>
              </div>
            </Card>
          ))}

          <Drawer
            title="Blog Detail"
            width="55%"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={open}
          >
            <h3 className="question-title" data-aos="zoom-in">
              {currBlog?.question}
            </h3>

            <div
              style={{ marginTop: '15px' }}
              data-aos="zoom-in-up"
              className="blog-excerpt"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(currBlog?.content as string),
              }}
            ></div>
          </Drawer>
        </Col>
      </Row>
    </div>
  );
}
