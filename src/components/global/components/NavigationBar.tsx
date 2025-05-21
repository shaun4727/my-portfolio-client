'use client';
import { ConfigProvider, Menu, MenuProps } from 'antd';
import '../asset/NavigationBar.css';
import { basicNavRoutes } from '../utils/constant';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function NavigationBar() {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      once: false, // animate every time on scroll
      mirror: true, // animate out while scrolling up
    });
  }, []);

  const onClick: MenuProps['onClick'] = (e) => {
    document.title = e.key;

    if (e.key == 'logout') {
      console.log(e.key);
    } else {
      router.push(`/${e.key}`);
    }
  };

  return (
    <div className="navigation-section">
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHoverColor: '#034C53',
              itemColor: '#000',
              popupBg: '#fff' /**background color for small device menu */,
              horizontalItemHoverColor: '#034c53',
              horizontalItemSelectedColor: '#034c53',
            },
          },
        }}
      >
        <div
          className={`default-padding-body navigation-menu`}
          data-aos="zoom-out"
        >
          <Image
            src="/images/static/portfolio-logo.svg"
            width={100}
            height={100}
            className="portfolio-logo"
            alt="portfolio-logo"
          />
          <Menu
            mode="horizontal"
            className="main-menu"
            onClick={onClick}
            items={basicNavRoutes}
          />
        </div>
      </ConfigProvider>
    </div>
  );
}
