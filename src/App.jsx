import GraphicDesign from './components/GraphicDesign';
import Hero from './components/Hero';
import Photography from './components/Photography';
import StandOut from './components/StandOut';
import Transform from './components/Transform';
import { testimonials } from './data/info';
import Testimonial from './components/Testimonial';
import milkBottlesMobile from './assets/images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from './assets/images/mobile/image-gallery-orange.jpg';
import coneMobile from './assets/images/mobile/image-gallery-cone.jpg';
import sugarMobile from './assets/images/mobile/image-gallery-sugar-cubes.jpg';
import milkBottlesDesktop from './assets/images/desktop/image-gallery-milkbottles.jpg';
import orangeDesktop from './assets/images/desktop/image-gallery-orange.jpg';
import coneDesktop from './assets/images/desktop/image-gallery-cone.jpg';
import sugarDesktop from './assets/images/desktop/image-gallery-sugarcubes.jpg';

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Hero />
      <div>
        <Transform />
        <StandOut />
      </div>
      <div className="md:grid md:grid-cols-2">
        <GraphicDesign />
        <Photography />
      </div>
      <div className="py-4 px-8 text-center md:my-16">
        <h2 className="uppercase font-fraunces font-[900] tracking-[0.27rem] text-grayishBlue py-10">
          Client testimonials
        </h2>
        <div className="space-y-16 md:flex md:items-center md:space-y-0 md:my-10 md:gap-16 md:px-[10rem]">
          {testimonials.map((item, i) => (
            <Testimonial item={item} key={i} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 mt-8 md:grid-cols-4">
        <img src={milkBottlesMobile} alt="Milk Bottles" className="md:hidden" />
        <img src={orangeMobile} alt="Orange in a plate" className="md:hidden" />
        <img src={coneMobile} alt="Icecream Cone" className="md:hidden" />
        <img src={sugarMobile} alt="Sugar cubes" className="md:hidden" />
        <img
          src={milkBottlesDesktop}
          alt="Milk Bottles"
          className="hidden md:block"
        />
        <img
          src={orangeDesktop}
          alt="Orange in a plate"
          className="hidden md:block"
        />
        <img
          src={coneDesktop}
          alt="Icecream Cone"
          className="hidden md:block"
        />
        <img src={sugarDesktop} alt="Sugar cubes" className="hidden md:block" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
