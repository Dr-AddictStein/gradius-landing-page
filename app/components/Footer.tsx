import React from "react";
import Logo from "./GradiusLogo";
import LinkList from "./LinkList";
import SocialIcons from "./SocialIcons";

interface FooterProps {
  companyLinks: { name: string; url: string }[];
  infoLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyLinks, infoLinks }) => {
  return (
    <footer className="  text-black text-base font-medium">
      <div className="border-t border-violet-100 border-opacity-10 px-6 py-10 md:px-12 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Logo & Description */}
          <div className="flex flex-col items-start w-full lg:w-1/3">
            <Logo />
            <p className="mt-4 text-gray-500 text-sm sm:text-base">
              The first self-trained AI tutor for a truly <br /> personalized
              learning experience.
            </p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap gap-8 w-full lg:w-2/3 justify-between">
            <LinkList title="Company" links={companyLinks} />
            <LinkList title="Info" links={infoLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
