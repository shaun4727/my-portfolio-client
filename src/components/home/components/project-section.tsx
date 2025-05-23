'use client';

import '../asset/project-section.css';
import Image from 'next/image';
import { Button, Carousel, Col, ConfigProvider, Row } from 'antd';
import RightDivider from '@/components/global/components/RightDivider';
import { useEffect, useState } from 'react';
import { getProjectListForUserServices } from '@/services/ProjectServices';
import { TProject } from '@/types';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ProjectSection() {
  const [projectList, setProjectList] = useState<TProject[]>([]);

  useEffect(() => {
    getProjectList();
    Aos.init({
      duration: 1500,
      offset: 80,
      delay: 0,
      easing: 'ease-in-out-cubic',
      once: true, // animate every time on scroll
      mirror: false, // animate out while scrolling up
    });
  }, []);

  const getProjectList = async () => {
    setProjectList([]);
    try {
      const res = await getProjectListForUserServices();
      setProjectList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="project-section default-padding-body">
      <RightDivider />
      <div className="project-container">
        <h4 className="heading">
          {' '}
          <Image
            src="/images/static/project-icon.svg"
            width={100}
            height={100}
            className="project-heading-icon"
            alt="project-icon"
          />
          My Projects
        </h4>

        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                /* here is your component tokens */
                arrowSize: 30,
              },
            },
            token: {
              /* here is your global tokens */
              colorText: 'red',
            },
          }}
        >
          <Carousel arrows infinite={false}>
            {projectList.map((project, index) => (
              <div>
                <div className="carousel-item-container">
                  <Row gutter={[16, 16]} className="project-row">
                    <Col
                      xs={24}
                      sm={24}
                      md={10}
                      lg={10}
                      xl={10}
                      className="gutter-row"
                    >
                      {' '}
                      <Image
                        src={project.thumbnail || '/images/static/tumbnail.png'}
                        width={500}
                        height={300}
                        className="project-item-image"
                        alt="project-item-image"
                        data-aos="fade-up-right"
                      />{' '}
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={14}
                      lg={14}
                      xl={14}
                      className="gutter-row"
                    >
                      <div className="description" data-aos="zoom-in-up">
                        <h3>{project.name}</h3>
                        <div className="technologies">
                          <span className="technology">Next JS</span>
                          <span className="technology">React JS</span>
                          <span className="technology">TypeScript</span>
                          <span className="technology">Node JS</span>
                          <span className="technology">Antd</span>
                        </div>
                        <p className="short-description">{project.overview}</p>
                        <Link href={`/projects/${project._id}`}>
                          <Button className="project-btn">View Project</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </Carousel>
        </ConfigProvider>
      </div>
    </div>
  );
}
