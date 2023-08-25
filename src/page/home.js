import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './pg-css/home.css'
import './pg-css/bootstrap.min.css'
import './pg-css/style.css'
import 'typeface-roboto'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="about">
  <div className="container">
    <header className="section-header">
      <h3>IT Department</h3>
      <p>
        This website is created and maintained by the members of the coding club. This is non official website that contains free resources
      </p>
    </header>
    <div className="row align-items-center about-row">
      <div className="col-md-6">
        <img src="./new-removebg-preview.png" alt="" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2 className="title">
          <a href="#">Welcome to Coding Club</a>
        </h2>
        <p>
        Join us at Coding Club today and embark on an exciting journey of continuous learning, skill-building, and creative exploration. Together, we're not just learning to code – we're shaping a dynamic community passionate about the limitless possibilities of technology.
        Our mission is to democratize coding education, making it accessible to everyone, regardless of their background or financial status.
        We believe in the power of collaborative learning, which is why our platform encourages members to engage in forums and discussion boards to ask questions, share insights, and seek guidance from fellow members. Our team of experienced mentors is also here to provide expert advice and support as you navigate through various coding challenges.       
        </p>
        {/* <div className="read-more">
          <a href="#">Read More</a>
        </div> */}
      </div>
    </div>
    <div className="row about-cols">
      <div className="col-md-4">
        <div className="about-col">
          <div className="img">
            <img src="./" alt="" className="img-fluid" />
            <div className="icon">
              <i className="ion-ios-disc" />
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Mission</a>
          </h2>
          <p>
            Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc,
            ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis.
            Aenean tincidunt auctor purus, ac sodales sapien sagittis
          </p>
          <div className="read-more">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-col">
          <div className="img">
            <img src="" alt="" className="img-fluid" />
            <div className="icon">
              <i className="ion-ios-eye" />
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Vision</a>
          </h2>
          <p>
            Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc,
            ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis.
            Aenean tincidunt auctor purus, ac sodales sapien sagittis
          </p>
          <div className="read-more">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="about-col">
          <div className="img">
            <img src="./new-riew.png" alt="" className="img-fluid" />
            <div className="icon">
              <i className="ion-ios-options" />
            </div>
          </div>
          <h2 className="title">
            <a href="#">Our Objective</a>
          </h2>
          <p>
            Aenean volutpat, dolor eu finibus rhoncus, elit felis vehicula nunc,
            ut pulvinar ex diam nec lacus. Phasellus sit amet rhoncus turpis.
            Aenean tincidunt auctor purus, ac sodales sapien sagittis
          </p>
          <div className="read-more">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
};
export default Home;