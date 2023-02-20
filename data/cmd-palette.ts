import { IconType } from 'react-icons/lib';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoHome, IoPencil, IoCodeSlashOutline, IoTerminalOutline, IoMoon } from 'react-icons/io5';

import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE
} from 'src/constants';

type BaseItem = {
  title: string;
};

export type PageItem = BaseItem & {
  href: string;
  icon?: IconType;
};

export type SocialItem = BaseItem & {
  href: string;
  icon: IconType;
};

export type ThemeItem = BaseItem & {
  id: 'theme';
  icon: IconType;
};

export type SearchItemsType = {
  pages: PageItem[];
  social: SocialItem[];
  theme: ThemeItem[];
};

export const searchItems: SearchItemsType = {
  pages: [
    {
      title: 'Home',
      href: '/',
      icon: IoHome,
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: IoPencil,
    },
    {
      title: 'Projects',
      href: '/projects',
      icon: IoCodeSlashOutline,
    },
    {
      title: 'Uses',
      href: '/uses',
      icon: IoTerminalOutline,
    },
  ],
  social: [
    {
      title: 'GitHub',
      href: GITHUB_PROFILE,
      icon: SiGithub,
    },
    {
      title: 'Linkedin',
      href: LINKEDIN_PROFILE,
      icon: SiLinkedin,
    },
  ],
  theme: [
    {
      id: 'theme',
      title: 'Change theme',
      icon: IoMoon,
    },
  ],
};
