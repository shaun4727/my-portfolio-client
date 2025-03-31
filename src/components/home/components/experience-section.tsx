'use client';

import LeftDivider from '@/components/global/components/LeftDivider';
import '../asset/experience-section.css';
import Image from 'next/image';
import { Col, Row } from 'antd';

export default function ExperienceSection() {
  return (
    <div className="experience-section default-padding-body">
      <LeftDivider />
      <h4 className="heading">
        {' '}
        <Image
          src="/images/static/experience-icon.svg"
          width={100}
          height={100}
          className="experience-heading-icon"
          alt="experience-icon"
        />
        Working Experience
      </h4>

      <Row gutter={[16, 16]} className="experience-row">
        <Col xs={24} sm={24} md={24} lg={8} xl={8} className="gutter-row">
          <div className="company-info">
            <div className="name-work">
              <h4 className="company-name">Mononsoft Ltd.</h4>
              <p className="working-since">2022 - present</p>
            </div>

            <h5 className="designation">Software Engineer</h5>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} className="gutter-row">
          <h4 className="roles-responsibility">Roles &amp; Responsibility</h4>
          <ul className="responsibility-list">
            <li>
              Develop and optimize frontend components for the ERP solution.
            </li>
            <li>Debug and resolve issues to enhance application stability.</li>
            <li>
              Analyze and understand project requirements to implement effective
              solutions.
            </li>
            <li>
              Find and propose solutions to improve performance and user
              experience.
            </li>
            <li>
              Collaborate with backend teams to ensure seamless integration.
            </li>
            <li>
              Review and refine code to maintain best practices and standards.
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
