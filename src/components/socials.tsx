import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Lukec9",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/",
  },
  // {
  //   icon: <FaYoutube />,
  //   path: "https://www.youtube.com/",
  // },
  // {
  //   icon: <FaTwitter />,
  //   path: "https://twitter.com/",
  // },
];

type SocialsProps = {
  containerStyles: string;
  iconsStyles: string;
};

export default function Socials({ containerStyles, iconsStyles }: SocialsProps) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link target="_blank" key={index} href={social.path}>
          <span className={iconsStyles}>{social.icon}</span>
        </Link>
      ))}
    </div>
  );
}
