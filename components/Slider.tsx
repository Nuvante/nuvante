import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const sliderImages = [
  "./carousel.png",
  "./slider-image_.jpg",
  "./slider-image__.jpg",
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="./carousel.png" alt="" />
        </div>
        <div className="embla__slide">
          <img src="./slider-image_.jpg" alt="" />
        </div>
        <div className="embla__slide">
          <img src="./slider-image__.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
