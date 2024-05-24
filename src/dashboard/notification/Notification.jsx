import React from "react";
import style from "./notification.module.css";

const dummyData = [
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "2 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "4 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "6 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "8 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "10 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "12 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "14 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "16 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "18 minutes",
  },
  {
    image: "/imagefolder/Frame 1000007395.png ",
    name: "Pablo Ini",
    time: "20 minutes",
  },
];

const Notification = () => {
  return (
    <div className={style.main_container}>
      {dummyData.map((item, index) => {
        return (
          <div className={style.flex_container}>
            <div className={style.container}>
              <div className={style.image}>
                <img src={item.image} alt="image" />
                <div className={style.name}>
                  {item.name}

                  <a className={style.offer}> has made an offer on</a>
                  <span> Help me clean my house</span>
                  <span className={style.time}>{item.time}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
