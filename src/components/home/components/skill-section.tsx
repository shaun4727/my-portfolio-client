'use client';

import LeftDivider from '@/components/global/components/LeftDivider';
import '../asset/skill-section.css';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { TSkill } from '@/types/home-page';
import { getSkillSectionDataApi } from '@/services/HomeServices';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SkillSection() {
  const [skillData, setSkillData] = useState<TSkill[]>([]);

  useEffect(() => {
    getSkillSectionData();
    Aos.init({
      duration: 1500,
      offset: 80,
      delay: 0,
      easing: 'ease-in-out-cubic',
      once: true, // animate every time on scroll
      mirror: false, // animate out while scrolling up
    });
  }, []);

  const getSkillSectionData = async () => {
    try {
      const res = await getSkillSectionDataApi();

      setSkillData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="skill-section default-padding-body">
      <LeftDivider />
      <h4 className="heading" data-aos="fade-up-right">
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
        {skillData?.map((skill, index) => (
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
            style={{ display: 'flex' }}
            className="gutter-row"
          >
            <div className="skill-item" data-aos="zoom-in-up">
              <Image
                src={skill.skill_icon}
                width={100}
                height={100}
                className="skill-item-logo"
                alt="skill-item-logo"
              />
              <h4 className="skill-heading">{skill?.name}</h4>
              <p className="skill-description">{skill?.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
