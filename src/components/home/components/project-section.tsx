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
            <div className="project-item overlay-effect">
              <Image
                src="/images/static/project-1.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
              <div className="slide-overlay">
                <div className="overlay-content">
                  <h4 className="overlay-title">Project One</h4>
                  <Button className="view-all-projects">View Project</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item overlay-effect">
              <Image
                src="/images/static/project-2.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
              <div className="slide-overlay">
                <div className="overlay-content">
                  <h4 className="overlay-title">Project One</h4>
                  <Button className="view-all-projects">View Project</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item overlay-effect">
              <Image
                src="/images/static/project-1.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
              <div className="slide-overlay">
                <div className="overlay-content">
                  <h4 className="overlay-title">Project One</h4>
                  <Button className="view-all-projects">View Project</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
            <div className="project-item overlay-effect">
              <Image
                src="/images/static/project-2.svg"
                width={100}
                height={100}
                className="project-item-image"
                alt="project-item-image"
              />
              <div className="slide-overlay">
                <div className="overlay-content">
                  <h4 className="overlay-title">Project One</h4>
                  <Button className="view-all-projects">View Project</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <Button className="view-all-projects">View All</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
