'use client';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import '../asset/hero-section.css';

export default function HeroSection() {
  return (
    <div className="hero-section default-padding-body">
      <Row gutter={[16, 16]} className="hero-section-row">
        <Col xs={24} sm={24} md={24} lg={13} xl={13} className="gutter-row">
          <div className="hero-detail">
            <h6 className="designation">Full Stack Web Developer</h6>
            <h2 className="title">
              Bringing <span className="special">Imagination</span> to life with{' '}
              <span className="special">fullstack</span> innovation
            </h2>
            <p className="personal-detail">
              I'm a passionate and result driven web developer with a strong
              foundation in JavaScript. Through my journey as a developer I have
              learned various JavaScript frameworks and libraries. I'm working
              as a Frontend developer in my current company for 3 years.{' '}
            </p>
            <Button className="resume">Download Resume</Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={11} xl={11} className="gutter-row">
          <div className="hero-image-section">
            <Image
              src="/images/static/hero-image.svg"
              width={100}
              height={100}
              className="hero-image"
              alt="hero-image"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
