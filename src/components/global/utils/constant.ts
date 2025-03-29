import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number] & { route: string };

export const basicNavRoutes: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
    route: '/',
  },
  {
    label: 'Projects',
    key: 'projects',
    route: '/projects',
  },
  {
    label: 'Contact',
    key: 'contact',
    route: '/contact',
  },
];
