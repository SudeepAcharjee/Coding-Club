import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Typewriter from "../components/Typewriter";
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
        Feel free to <Typewriter text="contact us for any query. We will be happy to help you." delay={100} infinite />

        </p>
      </div>
      <div className="row contact-info">
        <div className="col-md-4">
          <div className="contact-address">
            <i className="ion-md-pin" />
            <h3>Address</h3>
            <p>
            <img width="30" height="30" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
            <a href="https://goo.gl/maps/oKDNZGAh18tYUbwr9"> LCB College, Guwahati, India</a>
            {/* <address>LCB College, Guwahati, India</address> */}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-phone">
            <i className="ion-md-call" />
            <h3>Admin Contact</h3>
            <p>
              <a href="tel:+91">+91 XXXXX XXXXX</a>
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