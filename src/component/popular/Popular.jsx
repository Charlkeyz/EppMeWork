import React, { useState } from "react";
import style from "./popu.module.css";

const dummyData = [
  {
    id: 1,
    image: "/imagefolder/side-view-adult-male-cleaning-window 1 (1).png",
    heading: "Cleaning Agent",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 2,
    image: "/imagefolder/Music & Talk (3) 2.png",
    heading: "Electrical Help",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 3,
    image:
      "/imagefolder/african-american-mother-taking-care-loving-her-baby 1.png",
    heading: "Professional Nannies",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 4,
    image: "/imagefolder/image 1.png",
    heading: "Plumbing",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 5,
    image:
      "/imagefolder/african-american-man-getting-ready-his-new-home-move (1) 1.png",
    heading: "Moving Help",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 6,
    image: "/imagefolder/handsome-elegant-man-car-salon 1.png",
    heading: "Drivers",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 7,
    image: "/imagefolder/Music & Talk (3) 3.png",
    heading: "Locksmith",
    paragraph: "Starting price at #4,000",
  },
  {
    id: 8,
    image:
      "/imagefolder/young-smiling-afro-american-cook-chef-uniform-holds-cake-plate-points-with-hand-isolated-white-wall 1.png",
    heading: "Chefs",
    paragraph: "Starting price at #4,000",
  },
];

const Popular = () => {
  const [imageSlider, setImageSlider] = useState(0);

  const handleImageSlider = () => {
    setImageSlider(!setImageSlider);
  };

  return (
    <>
      <div className={style.popular_container}>
        <div className={style.header}>Popular Projects</div>
        <div className={style.popular}>
          {dummyData.map((item, index) => {
            return (
              <div className={style.mainContainer} key={index}>
                <div className={style.popular_div}>
                  <div className={style.image_div}>
                    <img src={item.image} alt="image" />
                    <div className={style.image_container}>
                      {item.heading} <p> {item.paragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.popular}>
          {dummyData.map((item, index) => {
            return (
              <div
                className={`${style.mainContainer} ${style.mobile_main_container}`}
                key={index}
              >
                <div
                  className={`${style.popular_div} ${style.slidingpanelcontainer}`}
                >
                  <div className={style.image_div}>
                    <img src={item.image} alt="image" />
                    <div className={style.image_container}>
                      {item.heading} <p> {item.paragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;

/*

*/
