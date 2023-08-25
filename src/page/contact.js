import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './pg-css/contact.css'
const Contact = () => {
    return (
      <>
        <Navbar />
        <>
  {/* Banner Section End*/}
  {/* Contact Section Start */}
  <section className="contact">
    <div className="container">
      <div className="section-header">
        <h3 className="section-title">Contact Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ullamcorper pharetra ligula nec hendrerit. Ut eu libero nec magna
          placerat fringilla.

        </p>
      </div>
      <div className="row contact-info">
        <div className="col-md-4">
          <div className="contact-address">
            <i className="ion-md-pin" />
            <h3>Address</h3>
            <address>Your Location, City, Country</address>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-phone">
            <i className="ion-md-call" />
            <h3>Admin Contact</h3>
            <p>
              <a href="tel:+91">+91</a>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-email">
            <i className="ion-md-mail" />
            <h3>Email</h3>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-6">
          <div className="map">
            <iframe
              src=""
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div> */}
    
      </div>
    
   
   
      <form>
        <input name="name" placeholder="What is your name?" className="name" required />
        <input name="emailaddress" placeholder="What is your email?" className="email" type="email" required />
        <textarea rows={4} cols={50} name="subject" placeholder="Please enter your message" className="message" required defaultValue={""} />
        <input name="submit" className="btn" type="submit" defaultValue="Send" />
      </form>
      </div>
      </section>
      </>
  
  {/* Contact Section End */}




        <Footer/>
      </>
    );
  };

export default Contact;