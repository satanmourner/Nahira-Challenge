import React, { useState } from "react";
import useYup from "@usereact/use-yup";
import * as yup from "yup";
import "./css/header.css";
import mainLogo from "./images/logo.png";
import slider from "./images/slider.png";
import lang from "./images/lang.png";
import airplane from "./images/airplane.png";
import train from "./images/train.png";
import bus from "./images/bus.png";
import hotel from "./images/hotel.png";
import icon1 from "./images/icon1.png";

const today = new Date().toLocaleDateString();

const validation = yup.object().shape({
  begin: yup
    .string()
    .min(2, "too short")
    .max(20, "too long")
    .required("required"),
  end: yup
    .string()
    .min(2, "too short")
    .max(20, "too long")
    .required("required"),
  date: yup
    .date()
    .required("required")
    .min(
      yup.ref("not valid date"),
      () => `Date needs to be after ${today}`
    ),
});

export default function Header() {
  const [value, setValue] = useState({
    begin: "",
    end: "",
    date: "",
  });

  const [sub, setSub] = useState(false);

  const handleChnage = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const { errors, validate } = useYup(value, validation, {
    validateOnChange: true,
  });

  const handleSub = (e) => {
    e.preventDefault();
    setSub(true);
    console.log(value, errors);
  };

  return (
    <header style={{ background: `url(${slider})` }}>
      <nav>
        <div className="right-col">
          <img src={mainLogo} />
          {navItem.map((nav, index) => (
            <a href={nav.link} key={`field-${nav.id}`}>
              {nav.name}
            </a>
          ))}
          <a href="#">
            <i className="fa fa-user-circle" /> ورود/عضویت
          </a>
        </div>

        <div className="left-col">
          <span>&lt;</span>
          <img src={lang} />
          <span>فارسی</span>
          <span>&gt;</span>
        </div>
      </nav>

      <div className="ticket-container">
        <div className="tickets">
          <div className="top-row">
            <div className="line">
              {navItem.map((nav, index) => (
                <span key={`field-${nav.name}`}>
                  <img src={nav.img} />
                  <a href={nav.link}>{nav.name}</a>
                </span>
              ))}
            </div>
          </div>

          <div className="mid-row">
            <span>
              <span>یه طرفه</span>
              <i className="fa fa-angle-down" />
            </span>
            <span>
              <span>1 نفر بزرگسالان</span>
              <i className="fa fa-angle-down" />
            </span>
          </div>

          <div className="bot-row">
            {inputContainer.map((item, index) => [
              <div className="input-container" key={`field-${item.name}`}>
                <div className="row-input">
                  <div className="name-input">
                    <i className={item.icon} />
                    <span>{item.content}</span>
                    <span>|</span>
                  </div>
                  <input type="text" name={item.name} onChange={handleChnage} />
                </div>
                <pre style={{ display: sub ? "block" : "none" }}>
                  {JSON.stringify(errors[item.name])}
                </pre>
              </div>,
              index == 0 ? <img src={icon1} /> : "",
            ])}
            <button type="button" onClick={handleSub}>
              جستجو
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const navItem = [
  {
    id: 1,
    link: "#",
    name: "بلیت هواپیما",
    img: airplane,
  },
  {
    id: 2,
    link: "#",
    name: "بلیت قطار",
    img: train,
  },
  {
    id: 3,
    link: "#",
    name: "بلیت اتوبوس",
    img: bus,
  },
  {
    id: 4,
    link: "#",
    name: "رزرو هتل",
    img: hotel,
  },
];

const inputContainer = [
  {
    name: "begin",
    icon: "fa fa-map-marker",
    content: "مبدأ",
  },
  {
    name: "end",
    icon: "fa fa-map-marker",
    content: "مقصد",
  },
  {
    name: "date",
    icon: "fa fa-calendar-o",
    content: "تاریخ",
  },
];
