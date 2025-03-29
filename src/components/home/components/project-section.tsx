'use client';

import '../asset/project-section.css';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import RightDivider from '@/components/global/components/RightDivider';

export default function ProjectSection() {
  return (
    <div className="project-section default-padding-body">
      <RightDivider />
      <div className="project-container">
        <h4 className="heading">
          {' '}
          <Image
            src="/images/static/project-icon.svg"
            width={100}
            height={100}
            className="project-heading-icon"
            alt="project-icon"
          />
          My Projects
        </h4>

        <Row gutter={[16, 16]} className="project-row">
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item">
              <Image
                src="/images/static/project-1.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item">
              <Image
                src="/images/static/project-2.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item">
              <Image
                src="/images/static/project-1.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item">
              <Image
                src="/images/static/project-2.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
            </div>
          </Col>
          <Button className="view-all-projects">View All</Button>
        </Row>
      </div>
    </div>
  );
}
