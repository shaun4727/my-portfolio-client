'use client';

import LeftDivider from '@/components/global/components/LeftDivider';
import '../asset/skill-section.css';
import Image from 'next/image';
import { Col, Row } from 'antd';

export default function SkillSection() {
  return (
    <div className="skill-section default-padding-body">
      <LeftDivider />
      <h4 className="heading">
        {' '}
        <Image
          src="/images/static/skill-icon.svg"
          width={100}
          height={100}
          className="skill-heading-icon"
          alt="skill-icon"
        />
        My Skills
      </h4>

      <Row gutter={[16, 16]} className="skill-row">
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              It is a long established fact that a reader will be distracted by
              the readable{' '}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
