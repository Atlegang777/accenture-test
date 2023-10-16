import "./CaseStudy.css";
import React, { useState, useEffect } from "react";

function CaseStudy() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetching data from API endpoint
    fetch(
      "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws"
    )
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 2 ? -2 : prevIndex + 1
      );
    }, 2000); // Change images every 2 seconds (adjust as needed)
    console.log(" interval : ", interval);

    return () => clearInterval(interval);
  }, []);

  function changeImage(arr, index) {
    if (index < 0) {
      return arr[arr.length + index];
    }
    return arr[index];
  }

  return (
    <div className="center" id="section2">
      <div>
        <div className="title">
          <div className="dash"></div>
          <p className="case-study-title">Case studies </p>
        </div>

        <div className="image-container ">
          <div
            className="image-item "
            style={{
              backgroundImage: `url(${
                changeImage(images, currentImageIndex)?.imageUrl
              })`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="image-text-container ">
              <div className="dash"></div>{" "}
              <h1 className="image-title">
                {changeImage(images, currentImageIndex)?.title}
              </h1>
              <p className="image-description">
                {changeImage(images, currentImageIndex)?.description}
              </p>
            </div>
          </div>
          <div
            className="image-item "
            style={{
              backgroundImage: `url(${
                changeImage(
                  images,
                  currentImageIndex > 0
                    ? currentImageIndex - 1
                    : currentImageIndex + 1
                )?.imageUrl
              })`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="image-text-container ">
              <div className="dash"></div>{" "}
              <h1 className="image-title">
                {
                  changeImage(
                    images,
                    currentImageIndex > 0
                      ? currentImageIndex - 1
                      : currentImageIndex + 1
                  )?.title
                }
              </h1>
              <p className="image-description">
                {
                  changeImage(
                    images,
                    currentImageIndex > 0
                      ? currentImageIndex - 1
                      : currentImageIndex + 1
                  )?.description
                }
              </p>
            </div>
          </div>
          <div
            className="image-item "
            style={{
              backgroundImage: `url(${
                changeImage(
                  images,
                  currentImageIndex > 0
                    ? currentImageIndex - 2
                    : currentImageIndex + 2
                )?.imageUrl
              })`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="image-text-container ">
              <div className="dash"></div>{" "}
              <h1 className="image-title">
                {
                  changeImage(
                    images,
                    currentImageIndex > 0
                      ? currentImageIndex - 2
                      : currentImageIndex + 2
                  )?.title
                }
              </h1>
              <p className="image-description">
                {
                  changeImage(
                    images,
                    currentImageIndex > 0
                      ? currentImageIndex - 2
                      : currentImageIndex + 2
                  )?.description
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
