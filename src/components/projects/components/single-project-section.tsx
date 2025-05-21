'use client';

import { getSingleProjectForUserServices } from '@/services/ProjectServices';
import { TProject } from '@/types';
import { ExportOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './../assets/single-project-section.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SingleProjectSection({ id }: { id: string }) {
  const [projectDetail, setProjectDetail] = useState<TProject>();
  const [thumbnail, setThumbnail] = useState<string>();

  useEffect(() => {
    getProjectList();
    Aos.init({
      duration: 1200,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      once: false, // animate every time on scroll
      mirror: true, // animate out while scrolling up
    });
  }, []);

  const getProjectList = async () => {
    setProjectDetail(undefined);

    try {
      const res = await getSingleProjectForUserServices(id);
      setProjectDetail(res.data);
      setThumbnail(res.data.thumbnail);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    window.open(projectDetail?.link, '_blank');
  };

  return (
    <Row gutter={[16, 16]} className="project-row">
      <Col xs={24} sm={24} md={10} lg={8} xl={8} className="gutter-row">
        {/* {res} */}
        <div className="project-image" data-aos="fade-right">
          <Image
            src={thumbnail || '/images/static/tumbnail.png'}
            width={500}
            height={100}
            className="project-thumbnail"
            alt="project-image"
          />
          <div className="project-img-list">
            {projectDetail?.images &&
              projectDetail.images.map(
                ({ link }: { link: string }, index: number) => (
                  <Image
                    key={index}
                    src={link || '/images/static/tumbnail.png'}
                    width={100}
                    height={100}
                    className="project-img"
                    alt="project-image"
                    onClick={() => setThumbnail(link)}
                  />
                )
              )}
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={14} lg={16} xl={16} className="gutter-row">
        <div className="project-detail-section" data-aos="fade-left">
          <h4 className="project-title">Overview</h4>
          <p className="project-description">{projectDetail?.overview}</p>
        </div>
        <p className="project-technology">
          Technology Used: <span>Next Js, TypeScript, Node JS, React JS</span>
        </p>
        <p
          className="project-link"
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick()}
        >
          Visit Website <ExportOutlined />
        </p>
      </Col>
    </Row>
  );
}
