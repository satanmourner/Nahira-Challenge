import React from "react";
import "./css/footer.css";
import icon6 from "./images/icon6.png";
import icon7 from "./images/icon7.png";
import icon8 from "./images/icon8.png";
import icon9 from "./images/icon9.png";
import icon10 from "./images/icon10.png";
import icon11 from "./images/icon11.png";

export default function Footer() {
  return (
    <footer>
      <h1>
        هرجای دنیا که برید
        <span> آلترابو </span>
        همراهتونه!
      </h1>
      <div className="footer-images">
        {icons.map((icon, index) => (
          <img src={icon.src} key={`field-${icon.id}`} />
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-logos">
          {logos.map((logo, index) => (
            <a href={logo.link} key={`field-${logo.name}`} target="_blank">
              <i className={logo.ico} />
            </a>
          ))}
        </div>

        <div className="footer-content">
          {contents.map((content, index) => [
            <div className="content" key={`field-${content.id}`}>
              <h3>{content.name}</h3>
              <p>{content.content}</p>
              {index === 2
                ? contents2.map((c2, index) => (
                    <span key={`field-${c2.id}`}>{c2.name}</span>
                  ))
                : ""}
            </div>,
          ])}
        </div>
        <div className="footer-end">
          <span>تمامی حقوق این وبسایت متعلق به مجموعه آلترابو است</span>
        </div>
      </div>
    </footer>
  );
}

const icons = [
  {
    id: 1,
    src: icon6,
  },
  {
    id: 2,
    src: icon7,
  },
  {
    id: 3,
    src: icon8,
  },
  {
    id: 4,
    src: icon9,
  },
  {
    id: 5,
    src: icon10,
  },
  {
    id: 6,
    src: icon11,
  },
];

const logos = [
  {
    name: "instagram",
    link: "https://www.instagram.com/satanmourner",
    ico: "fa fa-instagram",
  },
  {
    name: "google-plus",
    link: "#",
    ico: "fa fa-google-plus",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/sanaz-mahmoudi",
    ico: "fa fa-linkedin-in",
  },
  {
    name: "twitter",
    link: "https://www.twitter.com/satanmourner",
    ico: "fa fa-twitter",
  },
];

const contents = [
  {
    id: 1,
    name: "درباره آلترابو",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در",
  },
  {
    id: 2,
    name: "تماس با آلترابو",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در",
  },
  {
    id: 3,
  },
];

const contents2 = [
  {
    id: 1,
    name: "بلیت هواپیما",
  },
  {
    id: 2,
    name: "بلیت اتوبوس",
  },
  {
    id: 3,
    name: "بلیت قطار",
  },
  {
    id: 4,
    name: "رزرو هتل",
  },
];
