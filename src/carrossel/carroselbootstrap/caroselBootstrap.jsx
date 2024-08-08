
import Image from '../index';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <Image  />
      
      </Carousel.Item>

      <Carousel.Item>
        <Image  />
       
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;