// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ data }) => {
  return (
    <div className="contact-container">
      <div className="image-container">
        <img
          src={data.photo}
          alt="gambar kucing"
          className="profile-image"
        ></img>
      </div>

      <div className="detail-container">
        <p className="name">{data.name}</p>
        <p className="phone">{data.phone}</p>
        <p className="email">{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
