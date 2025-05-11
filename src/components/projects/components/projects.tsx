'use client';

import '../assets/projects.css';
import Image from 'next/image';
import { Button, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { TProject } from '@/types';
import { getProjectListForUserServices } from '@/services/ProjectServices';
import Link from 'next/link';

export default function ProjectsSection() {
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
  const imgClass: Record<number, string> = {
    1: 'one',
    2: 'two',
    3: 'three',
  };

  return (
    <div className="projects-section default-padding-body">
      <Row gutter={[16, 16]} className="project-row">
        <Col span={24} className="gutter-row project-column">
          <div className="project-header">
            <h4 className="title">List of projects that I have done</h4>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="gutter-row">
          {projectList.map((project, index: number) => (
            <div className="project-detail overlay-effect">
              {project.images?.map(({ link }, index) => (
                <Image
                  src={link || '/images/static/tumbnail.png'}
                  key={index}
                  width={300}
                  height={100}
                  className={`project-image-${imgClass[index + 1]}`}
                  alt="project-image"
                />
              ))}

              <div className="slide-overlay-projects">
                <div className="overlay-content">
                  <div className="title-description">
                    <h4 className="overlay-title">Overview</h4>
                    <p className="overlay-description">
                      {project.overview.substring(0, 219)}
                    </p>
                  </div>
                  <Link href={`/projects/${project._id}`}>
                    <Button className="view-project">View Project</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
