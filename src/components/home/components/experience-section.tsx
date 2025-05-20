'use client';

import LeftDivider from '@/components/global/components/LeftDivider';
import '../asset/experience-section.css';
import Image from 'next/image';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { TExperience } from '@/types/home-page';
import { getExperienceSectionDataApi } from '@/services/HomeServices';

export default function ExperienceSection() {
  const [experienceData, setExperienceData] = useState<TExperience[]>([]);

  useEffect(() => {
    getExperienceSectionData();
  }, []);

  const getExperienceSectionData = async () => {
    try {
      const res = await getExperienceSectionDataApi();

      setExperienceData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
          {experienceData.map((data, index) => (
            <div className="company-info" key={index}>
              <div className="name-work">
                <h4 className="company-name">{data.company_name}</h4>
                <p className="working-since">
                  {data.start_date.split('-')[0]} -{' '}
                  {data.currently_working === true ? 'Present' : data.end_date}
                </p>
              </div>

              <h5 className="designation">Software Engineer</h5>
            </div>
          ))}
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} className="gutter-row">
          <h4 className="roles-responsibility">Roles &amp; Responsibility</h4>
          {experienceData?.map((exp, index) => (
            <ul className="responsibility-list" key={index}>
              {exp.responsibilities.map((resp, ind) => (
                <li key={ind}>{resp}</li>
              ))}
            </ul>
          ))}
        </Col>
      </Row>
    </div>
  );
}
