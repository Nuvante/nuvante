import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const domain = process.env.DOMAIN;

const sliderImages = [
  {
    src: "./nuvante_web.jpg",
    link: `/ProductDetails/67630548e9a7266a1f0b3533`,
  },
  {
    src: "./nuvante_web.jpg",
    link: `/ProductDetails/67630548e9a7266a1f0b3533`,
  },
  {
    src: "./nuvante_web.jpg",
    link: `/ProductDetails/67630548e9a7266a1f0b3533`,
  },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    } else {
      console.log("embla did not respond ", emblaApi);
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="embla__slide"
            onClick={() => (window.location.href = image.link)}
          >
            <img
              className="md:h-[100vh] h-[40vh]"
              src={image.src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
