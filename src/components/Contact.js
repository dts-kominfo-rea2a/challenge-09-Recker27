// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ name, phone, email, photo }) => {
  return (
    <div className="contact-container">
      <div className="image-container">
        <img src={photo} alt="gambar kucing" class="profile-image"></img>
      </div>

      <div className="detail-container">
        <p className="name">{name}</p>
        <p className="phone">{phone}</p>
        <p className="email">{email}</p>
      </div>
    </div>
  );
};

export default Contact;
