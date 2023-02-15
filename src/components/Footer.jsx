import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as IconFacebook } from '../assets/images/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/images/icon-instagram.svg';
import { ReactComponent as IconPinterest } from '../assets/images/icon-pinterest.svg';
import { ReactComponent as IconTwitter } from '../assets/images/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-[#90d4c5] py-16 px-8 space-y-8">
      <Logo fill="hsl(167, 40%, 24%)" className="mx-auto" />
      <nav>
        <ul className="flex justify-between md:justify-center md:gap-10 font-barlow text-darkModerateCyan">
          <li>
            <a className="hover:text-white" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mt-[20rem]">
        <ul className="flex justify-center gap-6">
          <li>
            <a href="#">
              <IconFacebook className="hover:white" />
            </a>
          </li>
          <li>
            <a href="#">
              <IconInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <IconTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <IconPinterest />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
