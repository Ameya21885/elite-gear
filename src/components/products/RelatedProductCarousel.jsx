import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";
import CategoriesItem from "../categories/CategoriesItem";
import cat1 from "../../assets/category/headphones.jpg";

// EmblaCarousel Component
const EmblaCarousel = ({ slides, options }) => {
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
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <CategoriesItem
                img={slide.img}
                heading={slide.heading}
                amount={slide.amount}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

const RelatedProductCarousel = () => {
  const OPTIONS = {
    slidesToScroll: 1,
    loop: true,
    align: "start",
  }; // Enable looping and set alignment

  const carouselData = [
    { img: cat1, heading: "Heading 1", amount: "3999" },
    { img: cat1, heading: "Heading 2", amount: "3999" },
    { img: cat1, heading: "Heading 3", amount: "3999" },
    { img: cat1, heading: "Heading 4", amount: "3999" },
    { img: cat1, heading: "Heading 5", amount: "3999" },
    { img: cat1, heading: "Heading 6", amount: "3999" },
    { img: cat1, heading: "Heading 7", amount: "3999" },
    { img: cat1, heading: "Heading 8", amount: "3999" },
    { img: cat1, heading: "Heading 9", amount: "3999" },
    { img: cat1, heading: "Heading 10", amount: "3999" },
    { img: cat1, heading: "Heading 11", amount: "3999" },
    { img: cat1, heading: "Heading 12", amount: "3999" },
    { img: cat1, heading: "Heading 13", amount: "3999" },
    { img: cat1, heading: "Heading 14", amount: "3999" },
    { img: cat1, heading: "Heading 15", amount: "3999" },
    { img: cat1, heading: "Heading 16", amount: "3999" },
  ];

  return <EmblaCarousel slides={carouselData} options={OPTIONS} />;
};

// usePrevNextButtons Hook
export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

// PrevButton Component
export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

// NextButton Component
export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

// useDotButton Hook
export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi
      .on("reInit", onInit)
      .on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
  }, [emblaApi, onInit]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export default RelatedProductCarousel;
