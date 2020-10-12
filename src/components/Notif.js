import React, { useState } from "react";
import "./css/notif.css";
import icon5 from "./images/icon5.png";


export default function Notif() {
  const [value, setValue] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="notif-news">
      <div className="news-container">
        <img src={icon5} />
        <div className="input-email-container">
          <p>
            با عضویت در خبرنامه آلترابو از پیشنهادات شگفت انگیز ما زودتر از بقیه
            باخبر میشین
          </p>
          <div className="input-email">
            <input
              type="text"
              placeholder="آدرس ایمیلتان را وارد کنید"
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="button" onClick={handleSub}>عضویت در خبرنامه</button>
          </div>
        </div>
      </div>
    </div>
  );
}
