import React, { ReactNode } from "react";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import { EmblaOptionsType } from "embla-carousel";

import useEmblaCarousel from "embla-carousel-react";

type PropType = {
  slides: ReactNode[];
  title: ReactNode;
  isHiddenDots?: boolean;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isHiddenDots, title } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="flex items-start sm:items-center flex-col sm:flex-row justify-between gap-1 mb-9">
        {title}
        <div className="theme-light flex gap-2 self-end">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">{item}</div>
              </div>
            ))}
          </div>
        </div>

        {!isHiddenDots && (
          <div className="embla__dots theme-light mt-5">
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
        )}
      </section>
    </>
  );
};

export default EmblaCarousel;
