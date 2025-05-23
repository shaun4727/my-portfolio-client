'use client';

import Image from 'next/image';
import '../asset/footer-section.css';
import { Col, Row } from 'antd';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function FooterSection() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 80,
      delay: 0,
      easing: 'ease-in-out-cubic',
      once: true, // animate every time on scroll
      mirror: false, // animate out while scrolling up
    });
  }, []);
  return (
    // data-aos="zoom-out"
    <div className="footer-section default-padding-body">
      <Row gutter={[16, 16]} className="footer-row">
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="gutter-row">
          <div className="smaller-screen-alignment">
            <Image
              src="/images/static/portfolio-logo.svg"
              width={100}
              height={100}
              className="portfolio-logo"
              alt="portfolio-logo"
            />
            <h4 className="footer-title">Contact</h4>
            <p className="footer-line">+880 1944057819</p>
            <p className="footer-line">hossain.shaun27@gmail.com</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="gutter-row">
          <div className="smaller-screen-alignment">
            <h4 className="footer-title">Services</h4>
            <p className="footer-line">Developing Website</p>
            <p className="footer-line">Bug Fixing</p>
            <p className="footer-line">Api Create</p>
            <p className="footer-line">Extend Feature of existing website</p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="gutter-row">
          <div className="smaller-screen-alignment">
            <h4 className="footer-title">Quick Links</h4>
            <p className="footer-line">Home</p>
            <p className="footer-line">Projects</p>
            <p className="footer-line">Contact</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
