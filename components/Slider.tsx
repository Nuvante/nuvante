import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const sliderImages = [
  {
    src: "./carousel.png",
    link: "http://localhost:3000/ProductDetails/67630548e9a7266a1f0b3533",
  },
  {
    src: "./carousel.png",
    link: "http://localhost:3000/ProductDetails/12345678e9a7266a1f0b3533",
  },
  {
    src: "./carousel.png",
    link: "http://localhost:3000/ProductDetails/87654321e9a7266a1f0b3533",
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
            <img src={image.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
