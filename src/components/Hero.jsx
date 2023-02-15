import { useState } from 'react';
import IconHamburguer from '../assets/images/icon-hamburger.svg';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import ArrowDown from '../assets/images/icon-arrow-down.svg';

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-hero-pattern-mobile md:bg-hero-pattern-desktop h-[34rem] md:h-[50rem] bg-cover bg-no-repeat bg-center p-6 relative">
      <header className="flex justify-between items-center">
        <Logo fill="#FFF" className="md:top-4 md:relative" />
        <img
          src={IconHamburguer}
          alt="IconHamburguer"
          onClick={handleIsActive}
          className="md:hidden"
        />
      </header>
      <div className="flex flex-col items-center h-full gap-6 justify-center">
        <h1 className="font-fraunces font-[900] text-white tracking-[.30rem] text-4xl uppercase text-center">
          We are creatives
        </h1>
        <img src={ArrowDown} alt="arrow-down" />
      </div>
      <nav
        className={`${
          isActive ? 'block' : 'hidden'
        } absolute top-[9rem] bg-white w-[calc(100%-3rem)] text-center mx-auto md:block md:bg-transparent md:top-0`}
      >
        <ul className="flex flex-col gap-6 py-10 text-xl font-bold font-barlow text-veryDarkGrayishBlue text-center md:flex-row md:justify-end md:text-sm md:items-center md:text-white">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a
              href="#"
              className="font-fraunces text-veryDarkDesaturatedBlue bg-yellow md:bg-white inline-block rounded-full py-3 px-6 md:py-2 md:hover:bg-[#6fcfff] md:hover:opacity-90 md:hover:text-[#fff]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
