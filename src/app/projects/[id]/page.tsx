import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import '@/components/projects/assets/single-project-section.css';
import { ExportOutlined } from '@ant-design/icons';

export default function SingleProject() {
  return (
    <div className="single-project-section default-padding-body">
      <Row gutter={[16, 16]} className="project-row">
        <Col xs={24} sm={24} md={10} lg={8} xl={8} className="gutter-row">
          <div className="project-image">
            <Image
              src="/images/static/project-item-1.png"
              width={100}
              height={100}
              className="project-thumbnail"
              alt="project-image"
            />
            <div className="project-img-list">
              <Image
                src="/images/static/project-item-2.svg"
                width={100}
                height={100}
                className="project-img"
                alt="project-image"
              />
              <Image
                src="/images/static/project-item-3.svg"
                width={100}
                height={100}
                className="project-img"
                alt="project-image"
              />
              <Image
                src="/images/static/project-item-3.svg"
                width={100}
                height={100}
                className="project-img"
                alt="project-image"
              />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={16} xl={16} className="gutter-row">
          <div className="project-detail-section">
            <h4 className="project-title">Overview</h4>
            <p className="project-description">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock
            </p>
          </div>
          <p className="project-technology">
            Technology Used: <span>Next Js, TypeScript, Node JS, React JS</span>
          </p>
          <p className="project-link">
            Visit Website <ExportOutlined />
          </p>
        </Col>
      </Row>
    </div>
  );
}
