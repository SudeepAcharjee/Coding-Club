import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
        <div className="col-md-6">
          <div className="form">
            <form className="contactForm">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
</>

        <Footer/>
      </>
    );
  };

export default Contact;