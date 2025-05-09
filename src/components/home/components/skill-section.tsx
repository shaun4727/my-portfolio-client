'use client';

import LeftDivider from '@/components/global/components/LeftDivider';
import '../asset/skill-section.css';
import Image from 'next/image';
import { Col, Row } from 'antd';

export default function SkillSection() {
  return (
    <div className="skill-section default-padding-body">
      <LeftDivider />
      <h4 className="heading">
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
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">JavaScript</h4>
            <p className="skill-description">
              It is a programming language and core technology of the World Wide
              Web. JavaScript has become integral to the Internet
              experience{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">TypeScript</h4>
            <p className="skill-description">
              TypeScript (abbreviated as TS) is a free and open-source
              high-level programming language developed by Microsoft that adds
              static typing with optional type annotations to JavaScript.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Vue JS</h4>
            <p className="skill-description">
              Vue.js is a JavaScript framework used in Frontend for building
              user interfaces and single-page applications.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">React JS</h4>
            <p className="skill-description">
              It is a JavaScript library that aims to make building user
              interfaces based on components. It has a large community.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Next JS</h4>
            <p className="skill-description">
              It is a React framework for building web applications that offers
              various features and optimizations to improve performance, SEO
              etc.{' '}
            </p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Node JS</h4>
            <p className="skill-description">
              Node.js is a cross-platform JavaScript runtime environment. It
              runs on V8 engine and let's developer to use JavaScript to write
              server side script.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">HTML</h4>
            <p className="skill-description">
              Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Bootstrap</h4>
            <p className="skill-description">
              Bootstrap is a free, open source front-end development framework
              for the creation of websites and web apps. Designed to enable
              responsive development of mobile-first website.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Tailwind</h4>
            <p className="skill-description">
              Tailwind CSS is an open-source CSS framework. Unlike other
              frameworks it creates a list of "utility" CSS classes.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Redux</h4>
            <p className="skill-description">
              Redux is a JavaScript library for managing and centralizing
              application state. It can be used with any JS framework or
              library.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">MongoDB</h4>
            <p className="skill-description">
              MongoDB is a cross-platform, document-oriented database program
              that is used to build highly available and scalable internet
              applications.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">PostgreSQL</h4>
            <p className="skill-description">
              PostgreSQL also known as Postgres, is a free and open-source
              relational database management system emphasizing extensibility
              and SQL compliance.{' '}
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={6} xl={6} className="gutter-row">
          <div className="skill-item">
            <Image
              src="/images/static/skill-item-logo.svg"
              width={100}
              height={100}
              className="skill-item-logo"
              alt="skill-item-logo"
            />
            <h4 className="skill-heading">Prisma</h4>
            <p className="skill-description">
              Prisma is an open-source ORM for Node.js and TypeScript. It is
              used as an alternative to writing plain SQL, or using another
              database access tool such as SQL query builders{' '}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
