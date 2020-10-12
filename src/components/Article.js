import React, { useRef, useState } from "react";
import "./css/article.css";
import img1 from "./images/img1";
import img2 from "./images/img2";
import img3 from "./images/img3";
import img4 from "./images/img4";
import img5 from "./images/img5";
import img6 from "./images/img6";
import img7 from "./images/img7";
import img8 from "./images/img8";

var count = [1, 1];
var temp = [0, 0];

export default function Article() {
  const [trans, setTrans] = useState(["", ""]);

  const transRight = (index) => {
    if (count[index] <= 0) count[index] = 1;
    let newTrans = [...trans];
    newTrans[index] = "translateX(" + count[index] * -540 + "px)";
    count[index] += 1;
    temp[index] = count[index];
    setTrans(newTrans);
  };

  const transLeft = (index) => {
    let newTrans = [...trans];
    newTrans[index] = "translateX(" + (-540 * (temp[index] - 1) + 540) + "px)";
    count[index] -= 1;
    temp[index] = count[index];
    if (temp[index] <= 0) newTrans = "";
    setTrans(newTrans);
  };

  return (
    <article>
      {tripCategories.map((cat, index) => [
        <div className="trip" key={`field-${cat.id}`}>
          <h2>{cat.name}</h2>,
          <div className="trip-images">
            <div
              class="trip-images-container"
              style={{ transform: trans[index] }}
            >
              {index === 0
                ? tripItems1.map((item, index) => (
                    <div
                      className="image-container"
                      key={`field-${item.id}`}
                      style={{ "--counter": item.id }}
                    >
                      <img src={item.src} />
                      <button type="button">{item.name}</button>
                    </div>
                  ))
                : tripItems2.map((item, index) => (
                    <div
                      className="image-container"
                      key={`field-${item.id}`}
                      style={{ "--counter": item.id }}
                    >
                      <img src={item.src} />
                      <button type="button">{item.name}</button>
                    </div>
                  ))}
            </div>
            <div className="arrows">
              <div
                className="circle-arr right"
                onClick={() => transRight(index)}>
                <i className="fa fa-angle-right" />
              </div>
              <div className="circle-arr left" onClick={() => transLeft(index)}>
                <i className="fa fa-angle-left" />
              </div>
            </div>
          </div>
        </div>,
      ])}
    </article>
  );
}

const tripCategories = [
  {
    id: 1,
    name: "پیشنهادهای جهانگردی آلتربو",
  },
  {
    id: 2,
    name: "پیشنهادهای ایرانگردی آلتربو",
  },
];

const tripItems1 = [
  {
    id: 0,
    name: "کولولامپور",
    src: img1,
  },
  {
    id: 1,
    name: "دبی",
    src: img2,
  },
  {
    id: 2,
    name: "پکن",
    src: img3,
  },
  {
    id: 3,
    name: "استامبول",
    src: img4,
  },
  {
    id: 4,
    name: "کولولامپور",
    src: img1,
  },
  {
    id: 5,
    name: "دبی",
    src: img2,
  },
  {
    id: 6,
    name: "پکن",
    src: img3,
  },
  {
    id: 7,
    name: "استامبول",
    src: img4,
  },
];

const tripItems2 = [
  {
    id: 0,
    name: "اصفهان",
    src: img5,
  },
  {
    id: 1,
    name: "تبریز",
    src: img6,
  },
  {
    id: 2,
    name: "شیراز",
    src: img7,
  },
  {
    id: 3,
    name: "مشهد",
    src: img8,
  },
  {
    id: 4,
    name: "اصفهان",
    src: img5,
  },
  {
    id: 5,
    name: "تبریز",
    src: img6,
  },
  {
    id: 6,
    name: "شیراز",
    src: img7,
  },
  {
    id: 7,
    name: "مشهد",
    src: img8,
  },
];
