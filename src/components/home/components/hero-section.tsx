'use client';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import '../asset/hero-section.css';
import { getHeroSectionDataApi } from '@/services/HomeServices';
import { THeroSection } from '@/types/home-page';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [heroSection, setHeroSection] = useState<THeroSection[]>([]);

  useEffect(() => {
    getHeroSectionData();
  }, []);

  const getHeroSectionData = async () => {
    try {
      const res = await getHeroSectionDataApi();

      setHeroSection(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero-section default-padding-body">
      {heroSection.map((hero, index) => (
        <Row gutter={[16, 16]} className="hero-section-row" key={index}>
          <Col xs={24} sm={24} md={24} lg={13} xl={13} className="gutter-row">
            <div className="hero-detail">
              <h6 className="designation"> {hero.stack} Web Developer</h6>
              <h2 className="title">
                Bringing <span className="special">Imagination</span> to life
                with <span className="special">fullstack</span> innovation
              </h2>
              <p className="personal-detail">{hero.about_me} </p>
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
      ))}
    </div>
  );
}
