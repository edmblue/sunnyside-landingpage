import transformMobile from '../assets/images/mobile/image-transform.jpg';
import transformDesktop from '../assets/images/desktop/image-transform.jpg';

const Transform = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-center">
      <div className="h-[19rem] md:h-[37rem] order-2">
        <img
          src={transformMobile}
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={transformDesktop}
          className="w-full h-full object-cover hidden md:block"
        />
      </div>
      <div className="font-fraunces flex gap-5 flex-col text-center md:text-left px-7 lg:px-[8.5rem] py-14 lg:space-y-3">
        <h2 className="text-3xl md:text-5xl font-[900] text-veryDarkDesaturatedBlue  ">
          Transform your brand
        </h2>
        <p className="font-barlow font-[600] text-veryDarkGrayishBlue text-lg">
          We are a full service creative agency specializing in helping brand
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you
        </p>
        <div>
          <a
            href="#"
            className="uppercase font-[900] relative before:content-[' '] before:bg-yellow before:absolute before:h-3 before:w-full before:rounded before:top-3 before:-z-10 before:opacity-30 hover:before:opacity-100"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transform;
