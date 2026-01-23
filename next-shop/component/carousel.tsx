"use client";

import React from "react";
import { Carousel } from "acme-carousel";

const CarouselComponent = () => {
  const items = [
    {
      id: "1",
      src: "https://www.everlane.com/cdn/shop/files/ac079cd2_5ded.jpg?v=1753411392",
      alt: "Beautiful landscape",
      title: "Amazing View",
      description: "A stunning landscape photograph",
    },
    {
      id: "2",
      src: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/724855s.jpg?im=Resize,width=750",
      alt: "City skyline",
      title: "Urban Life",
      description: "The vibrant city at night",
    },
  ];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Carousel
        items={items}
        autoplay={{ enabled: true, interval: 3000 }}
        infinite
        pauseOnHover
      />
    </div>
  );
};
export default CarouselComponent;
