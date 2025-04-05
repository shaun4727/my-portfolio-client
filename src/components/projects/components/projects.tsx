'use client';

import '../assets/projects.css';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';

export default function ProjectsSection() {
  return (
    <div className="projects-section default-padding-body">
      <Row gutter={[16, 16]} className="project-row">
        <Col span={24} className="gutter-row project-column">
          <div className="project-header">
            <h4 className="title">List of projects that I have done</h4>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="project-detail overlay-effect">
            <Image
              src="/images/static/project-item-1.png"
              width={100}
              height={100}
              className="project-image-one"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-2.svg"
              width={100}
              height={100}
              className="project-image-two"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-3.svg"
              width={100}
              height={100}
              className="project-image-three"
              alt="project-image"
            />
            <div className="slide-overlay-projects">
              <div className="overlay-content">
                <div className="title-description">
                  <h4 className="overlay-title">Overview</h4>
                  <p className="overlay-description">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock
                  </p>
                </div>
                <Button className="view-project">View Project</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="project-detail overlay-effect">
            <Image
              src="/images/static/project-item-1.png"
              width={100}
              height={100}
              className="project-image-one"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-2.svg"
              width={100}
              height={100}
              className="project-image-two"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-3.svg"
              width={100}
              height={100}
              className="project-image-three"
              alt="project-image"
            />
            <div className="slide-overlay-projects">
              <div className="overlay-content">
                <div className="title-description">
                  <h4 className="overlay-title">Overview</h4>
                  <p className="overlay-description">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock
                  </p>
                </div>
                <Button className="view-project">View Project</Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          <div className="project-detail overlay-effect">
            <Image
              src="/images/static/project-item-1.png"
              width={100}
              height={100}
              className="project-image-one"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-2.svg"
              width={100}
              height={100}
              className="project-image-two"
              alt="project-image"
            />
            <Image
              src="/images/static/project-item-3.svg"
              width={100}
              height={100}
              className="project-image-three"
              alt="project-image"
            />
            <div className="slide-overlay-projects">
              <div className="overlay-content">
                <div className="title-description">
                  <h4 className="overlay-title">Overview</h4>
                  <p className="overlay-description">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock
                  </p>
                </div>
                <Button className="view-project">View Project</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
