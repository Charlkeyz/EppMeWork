import React from "react";
import style from "./gethelp.module.css";

const dummyData = [
  {
    artisan1: "Mechanic",
  },
  {
    artisan2: "Electrician",
  },
  {
    artisan3: "Plumbing",
  },
  {
    artisan4: "Locksmith",
  },
  {
    artisan5: "Drivers",
  },
  {
    artisan6: "Nannies",
  },
  {
    artisan7: "Chef",
  },
  {
    artisan8: "Cleaners",
  },
];

const GetHelp = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.get}>Get Help Today</h3>
      </div>

      <div className={style.flex_container}>
        {dummyData.map((item, index) => {
          return (
            <div className={style.artisan_container}>
              <div className={style.artisan1}>
                {item.artisan1}
                <div className={style.artisan2}>{item.artisan2}</div>
                <div className={style.artisan3}>{item.artisan3}</div>
                <div className={style.artisan4}>{item.artisan4}</div>
                <div className={style.artisan5}>{item.artisan5}</div>
                <div className={style.artisan6}>{item.artisan6}</div>
                <div className={style.artisan7}>{item.artisan7}</div>
                <div className={style.artisan8}>{item.artisan8}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetHelp;
