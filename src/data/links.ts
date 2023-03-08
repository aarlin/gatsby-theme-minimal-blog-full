import { Link as LinkType } from "@/types/link";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaRss } from "react-icons/fa";
import { GITHUB_PROFILE, LINKEDIN_PROFILE, RSS_FEED } from "src/constants";

type SocialLink = LinkType & { color?: string; icon?: IconType };

const socialLinks: SocialLink[] = [
	{
		href: GITHUB_PROFILE,
		label: "GitHub",
		icon: FaGithub,
	},
	{
		href: LINKEDIN_PROFILE,
		label: "LinkedIn",
		icon: FaLinkedin,
	},
	{
		href: RSS_FEED,
		label: "Rss Feed",
		icon: FaRss,
	},
];

const navigationLinks: LinkType[] = [
	{
		label: "Blog",
		href: "/blog",
	},
	// {
	//     label: "Projects",
	//     href: "/projects"
	// }
];

export { socialLinks, navigationLinks };
