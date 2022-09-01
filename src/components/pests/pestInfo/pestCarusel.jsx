import React, { useEffect, useState } from "react";
import config from '../../../services/config';


const PestCarousel = (props) => {
  const { images } = props;
  const [image , setImage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(images.length);

  // Set the length to match current children from props
  useEffect(() => {
    setImage(images[currentIndex].image)
    console.error(images[currentIndex].image)
    setLength(images.length);
  }, [currentIndex]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  // ...
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow" dir="ltr">
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {/* {children} */}
            <img
              src={config + image}
              height="200"
              // className="d-block"
              style={{
                width: "100%",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            />
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow" dir="ltr">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default PestCarousel;
