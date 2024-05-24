import React from "react";
import style from "./aboutus.module.css";
// import Navbar from "../navbar/Navbar";
// import FooterBar from "../footerbar/FooterBar";

const dummyData = [
  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },

  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },

  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },

  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },

  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },

  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },
  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },
  {
    name: "Michael Arinze",
    image: "/imagefolder/Frame 1000007521.png",
    track: "Product Designer",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className={style.main_container}>
        <div className={style.about}>
          <img
            className={style.image}
            src="/imagefolder/medium-shot-man-cleaning-table 3.png"
            alt="medium man"
          />
          <h4 className={style.about_header}>About Us</h4>
        </div>
        <div className={style.story_container}>
          <div className={style.image_div}>
            <img
              className={style.elegantman}
              src="/imagefolder/handsome-elegant-man-car-salon 1.png"
              alt="elegant man"
            />
            <img
              className={style.frame}
              src="/imagefolder/Frame 1000007452.png"
              alt="frame"
            />
            <img
              className={style.frame1}
              src="/imagefolder/Frame 1000007449.png"
              alt="frame"
            />

            <img
              className={style.frame2}
              src="/imagefolder/african-american-man-getting-ready-his-new-home-move (1) 1.png"
              alt="American man"
            />
            <img
              className={style.frame3}
              src="/imagefolder/Frame 1000007451.png"
              alt="frame"
            />
            <img
              className={style.frame4}
              src="/imagefolder/Frame 1000007450.png"
              alt="frame"
            />
          </div>
          <div className={style.story_div}>
            <h3 className={style.story_header1}>Our Story</h3>
            <p className={style.paragrah}>
              EppMeWork began with a simple desire—to redefine the way you
              transform your home. Faced with the challenge of finding skilled
              craftsmen and reliable service providers, we set out to create a
              platform that simplifies the process. Our mission is clear: to
              connect you with expert contractors and skilled artisans, making
              your home transformation journey seamless and stress-free. At
              EppMeWork, we're more than just a company—we're your partner in
              creating the home of your dreams.
            </p>
          </div>
        </div>
        <div className={style.story_container}>
          <div className={style.mission_div}>
            <h3 className={style.story_header2}>Our Mission</h3>
            <p className={style.paragrah}>
              At EppMeWork, our dedicated mission revolves around transforming
              the way you discover and engage with skilled artisans. We are
              committed to redefining simplicity in the process, ensuring that
              finding the right artisans for your needs is not only efficient
              but also a seamless and stress-free experience. Join our community
              and witness a new era of simplicity in connecting with artisans
              who bring your projects to life. At EppMeWork, we're not just
              simplifying the search; we're enhancing the way you collaborate
              with skilled professionals.
            </p>
          </div>

          <div className={style.image_div2}>
            <img
              className={style.elegantman}
              src="/imagefolder/handsome-elegant-man-car-salon 1.png"
              alt="elegant man"
            />
            <img
              className={style.frame}
              src="/imagefolder/Frame 1000007452.png"
              alt="frame"
            />
            <img
              className={style.frame1}
              src="/imagefolder/Frame 1000007449.png"
              alt="frame"
            />

            <img
              className={style.frame2}
              src="/imagefolder/african-american-man-getting-ready-his-new-home-move (1) 1.png"
              alt="American man"
            />
            <img
              className={style.frame3}
              src="/imagefolder/Frame 1000007451.png"
              alt="frame"
            />
            <img
              className={style.frame4}
              src="/imagefolder/Frame 1000007450.png"
              alt="frame"
            />
          </div>
        </div>
        <div className={style.team_container}>
          <h3 className={style.team_para}>Our Team</h3>
          <div className={`${style.photomap}`}>
            {dummyData.map((items, index) => {
              return (
                <div className={`${style.photodiv}`} key={index}>
                  <div className={`${style.photodiv2}`}>
                    <img src={items.image} alt="" />
                    <div className={`${style.photodeatails}`}>
                      <h1>{items.name}</h1>
                      <h3 className={style.track}>{items.track}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
