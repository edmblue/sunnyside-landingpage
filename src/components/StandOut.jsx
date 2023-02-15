import standOutMobile from '../assets/images/mobile/image-stand-out.jpg';
import standOutDesktop from '../assets/images/desktop/image-stand-out.jpg';

const StandOut = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center">
      <div className="h-[19rem] md:h-[37rem]">
        <img
          src={standOutMobile}
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={standOutDesktop}
          className="w-full h-full object-cover hidden md:block"
        />
      </div>
      <div className="font-fraunces flex gap-5 flex-col text-center md:text-left px-7 lg:px-[8.5rem] py-14 lg:space-y-3">
        <h2 className="text-3xl md:text-4xl font-[900] text-veryDarkDesaturatedBlue  ">
          Stand out to the right audience
        </h2>
        <p className="font-barlow font-[600] text-veryDarkGrayishBlue text-lg">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places
        </p>
        <div>
          <a
            href="#"
            className="uppercase font-[900] relative before:content-[' '] before:bg-softRed before:absolute before:h-3 before:w-full before:rounded before:top-3 before:-z-10 before:opacity-30 hover:before:opacity-100"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default StandOut;
