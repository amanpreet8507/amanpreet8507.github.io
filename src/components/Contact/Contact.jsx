import React from "react";
import "./Contact.scss";
import theme from "../../assets/images/background.jpg";
import mail_icon from "../../assets/images/mail.png";
import phone_icon from "../../assets/images/phone.png";
import location_icon from "../../assets/images/location.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5521aa35-76ca-4703-bfd9-2f1f80d81946");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Get in touch</h1>
        <img src={theme} alt="icon" />
      </div>
      <div className="contact__section">
        <div className="contact__left">
          <h1>Let's talk</h1>
          <p>
            Excited to bring innovative and user-impressive front-end solutions.
            Get in touch to explore how my skills can contribute to your next
            project!
          </p>
          <div className="contact__details">
            <div className="contact__detail">
              <img src={mail_icon} alt="mail" />
              <a href="mailto:amanpreet8507@gmail.com">
                amanpreet8507@gmail.com
              </a>
            </div>
            <div className="contact__detail">
              <img src={phone_icon} alt="mail" />
              <a href="6478701003">+1 (647) 870 1003</a>
            </div>
            <div className="contact__detail">
              <img src={location_icon} alt="location" />
              <p>Vancouver, BC</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact__right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Your Contact Number</label>
          <input
            type="text"
            placeholder="Enter your contact number"
            name="phone"
          />
          <label htmlFor="">Write your message here</label>
          <textarea rows="8" type="text" placeholder="Message" name="message" />
          <button className="contact__button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
