// import React, { useEffect } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const Section5 = () => {
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide text-black">Slide 1</div>
//         <div className="embla__slide text-black">Slide 2</div>
//         <div className="embla__slide text-black">Slide 3</div>
//       </div>
//     </div>
//   );
// };

// export default Section5;

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { DotButton, useDotButton } from "./EmblaCDot";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCButton";
import useEmblaCarousel from "embla-carousel-react";
import Section1 from "./Section1";
import person from "../assets/images/person.png";

const EmblaCarousel = (props) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full flex flex-col justify-center items-center  gap-5 lg:w-[70%] my-24 ">
      <div className="text-gray-500  text-3xl">Testimonials</div>
      <div className="embla w-[95%] px-1 md:w-[78%] relative ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div
                className="embla__slide flex justify-center items-center flex-col"
                key={index}
              >
                <div className="embla__slide__number  text-base sm:text-xl md:text-xl text-center text-gray-400">
                  “Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Integer convallis volutpat
                  dui quis scelerisque.”
                </div>
                <div className="flex justify-center items-center flex-col gap-3">
                  <img
                    src={person}
                    className="rounded-full w-1/2"
                    alt="persion"
                  />
                  <h3 className="text-gray-600 font-bold  text-xl">
                    Maria Jones
                  </h3>
                  <p className="text-gray-400">CEO, Co-Founder, XYZ Inc.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls flex justify-center items-center flex-row w-full    h-full  ">
          <div className="embla__buttons absolute  top-[40%] hidden md:flex md:justify-between md:items-center md:flex-row  w-[115%] ">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              // className="relative right-0"
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              // className="relative left-0"
            />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
