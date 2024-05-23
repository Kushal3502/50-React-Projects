import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "./style.css";

function Slider({ page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const result = await response.json();
      console.log(result);
      setImages(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading data...</div>;

  const handlePrev = () => {
    setCurrIdx(currIdx == 0 ? images.length - 1 : currIdx - 1);
  };

  const handleNext = () => {
    setCurrIdx(currIdx == images.length - 1 ? 0 : currIdx + 1);
  };

  return (
    <div className="container">
      <h1>Image Slider</h1>
      <div className="image-container">
        <FaCircleArrowLeft className="arrow" onClick={handlePrev} />
        <div className="slider">
          {images && images.length > 0
            ? images.map((item, index) => (
                <img
                  key={index}
                  src={item.download_url}
                  className={currIdx == index ? "show" : "hide"}
                />
              ))
            : null}
        </div>
        <FaCircleArrowRight className="arrow" onClick={handleNext} />
      </div>
      <div className="dots-container">
        {images && images.length > 0
          ? images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrIdx(index)}
                className={currIdx == index ? "dot" : "dot hide"}
              ></div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Slider;
