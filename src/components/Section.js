import React from "react";
import "./css/section.css";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

export default function Section() {
  return (
    <section>
      {secItems.map((item, index) => (
        <div className="item-sec" key={`field-${item.id}`}>
          <img src={item.img} />
          <h2>{item.h2}</h2>
          <p>{item.p}</p>
        </div>
      ))}
    </section>
  );
}

const secItems = [
  {
    id: 1,
    img: icon2,
    h2: "لورم ایپسوم",
    p:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در",
  },
  {
    id: 2,
    img: icon3,
    h2: "لورم ایپسوم",
    p:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در",
  },
  {
    id: 3,
    img: icon4,
    h2: "لورم ایپسوم",
    p:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در",
  },
];
