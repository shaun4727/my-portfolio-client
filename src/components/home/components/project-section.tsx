'use client';

import '../asset/project-section.css';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import RightDivider from '@/components/global/components/RightDivider';
import { useEffect, useState } from 'react';
import { getProjectListForUserServices } from '@/services/ProjectServices';
import { TProject } from '@/types';
import Link from 'next/link';

export default function ProjectSection() {
  const [projectList, setProjectList] = useState<TProject[]>([]);

  useEffect(() => {
    getProjectList();
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

        <Row gutter={[16, 16]} className="project-row">
          {projectList.map((project, index) => (
            <Col
              xs={24}
              sm={24}
              md={8}
              lg={6}
              xl={6}
              key={index}
              className="gutter-row"
            >
              <div className="project-item overlay-effect">
                <Image
                  src={project.thumbnail || '/images/static/tumbnail.png'}
                  width={500}
                  height={200}
                  className="project-item-image"
                  alt="project-item-image"
                />
                <div className="slide-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">{project.name}</h4>
                    <Link href={`/projects/${project._id}`}>
                      {' '}
                      <Button className="view-all-projects">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}

          <Col span={24}>
            <Link href={`/projects`}>
              <Button className="view-all-projects">View All</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
