import React from "react";
import style from "./whatpeoplesay.module.css";

const dummyData = [
  {
    id: 1,
    name: "Jane Doe",
    artisan: "Busy Professional",
    email: "@janedoe",
    image: "/imagefolder/imgUser.png",
    social: "/imagefolder/Group 13.png",

    message:
      "This platform has been a game-changer for me. As a busy professional, finding reliable assistance for various tasks has never been easier. The user-friendly interface and prompt service connections make it my go-to for getting things done efficiently.",
  },

  {
    id: 1,
    name: "John Smith",
    artisan: "Task Provider",
    email: "@johnsmith",
    image: "/handsome-elegant-man-car-salon 1.png",
    social: "/imagefolder/Group 12.png",

    message:
      "I've provided my services on this platform for months, and it's been an incredible experience. It’s process of connecting with those in need, along with transparent communication and payments, makes it a hassle-free way to earn extra income.",
  },

  {
    id: 1,
    name: "Emily Jonson",
    artisan: "Task Seeker",
    email: "@emilyjonson",
    image: "/imagefolder/nomad-woman-traveling-with-family 1.png",
    social: "/imagefolder/Group.png",

    message:
      "This platform is my go-to for any task at hand. From household chores to specialised services, it's a one-stop solution. The trustworthiness of the service providers and the easy-to-use app have made my life much easier.",
  },

  {
    id: 1,
    name: "Alex Martinez",
    artisan: "Retiree Looking to Help",
    email: "@jalexmartinez",
    image: "/imagefolder/medium-shot-man-having-lunch-restaurant 1.png",
    social: "/imagefolder/Group.png",

    message:
      "In retirement, I sought ways to stay active and contribute. This platform enabled me to connect with people seeking assistance, creating a fulfilling and rewarding experience. The system's simplicity and the appreciation from those I've helped make it truly rewarding.",
  },

  {
    id: 1,
    name: "Sharon Oja",
    artisan: "College Student",
    email: "@sharonoja",
    image:
      "/imagefolder/student-strolls-college-yard-carries-rucksack-notepads-weas-pink-shirt-knitted-vest-hoop-surrounded-by-city-street-expresses-positive-emotions 1.png",
    social: "/imagefolder/Group 12.png",

    message:
      "As a college student managing a tight schedule, this platform has been a lifesaver. Whether it's finding someone to help with moving or getting a tutor for a specific subject, the flexibility and variety of services make it an essential tool for students like me.",
  },

  {
    id: 1,
    name: "Michael Arinze",
    artisan: "Skilled Professional",
    email: "@michaelarinze",
    image: "/imagefolder/medium-shot-smiley-man-posing-with-helmet 1.png",
    social: "/imagefolder/Group 13.png",

    message:
      "I'm impressed by the opportunities this platform provides for skilled professionals like myself. The ability to showcase my expertise, connect with clients, and receive prompt payments has made it an integral part of my freelance work. ",
  },
];

const WhatPeopleSay = () => {
  return (
    <div className={style.main_container}>
      <div className={style.people_container}>
        <ol>
          <p className={style.paragraph}>
            <li>What People</li>
            <li>Say About Us</li>
          </p>
        </ol>

        <div className={style.discover}>
          Discover the impact of joining our community and hear firsthand
          experiences from
          <p>
            others who have shared their thoughts about their journey with us.
          </p>
        </div>
      </div>
      <div className={style.flex_container}>
        {dummyData.map((item, index) => {
          return (
            <div className={style.testimonial_container}>
              <div className={style.container}>
                <div className={style.container_div}>
                  <div className={style.name}>{item.name} </div>
                  <div className={style.artisan}>{item.artisan}</div>
                  <div className={style.email}>{item.email}</div>
                  <div className={style.message}>{item.message}</div>
                  <div className={style.social}>
                    <img src={item.social} alt="social logo" />
                  </div>
                  <div className={style.image_div}>
                    <img className={style.image} src={item.image} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatPeopleSay;
