import { Link as LinkType } from '@/types/link';
import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GITHUB_PROFILE, LINKEDIN_PROFILE } from 'src/constants';

type SocialLink = LinkType & { color?: string; icon?: IconType; };

const socialLinks: SocialLink[] = [
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    icon: SiGithub,
  },
  {
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    icon: SiLinkedin,
  },
];

const navigationLinks: LinkType[] = [
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Projects",
        href: "/projects"
    }
];

export {
  socialLinks,
  navigationLinks
};
