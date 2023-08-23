import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './home.css'
import './bootstrap.min.css'
import './style.css'


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="about">
  <div className="container">
    <header className="section-header">
      <h3>About Us</h3>
      <p>
        Maecenas vel turpis quis lorem aliquam tempus quis non mi. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </p>
    </header>
    <div className="row align-items-center about-row">
      <div className="col-md-6">
        <img src="img/about.jpg" alt="" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2 className="title">
          <a href="#">Welcome to Our Site</a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum rutrum ligula. Integer ac porttitor mi. In finibus
          vehicula aliquet. Vestibulum et velit placerat, pretium lorem id,
          porttitor libero. Suspendisse scelerisque nec arcu a malesuada. Nulla
          tempus dictum tristique.
        </p>
        <div className="read-more">
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    <div className="row about-cols">
      <div className="col-md-4">
        <div className="about-col">
          <div className="img">
            <img src="imgg" alt="" className="img-fluid" />
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
            <img src="img/about-objective.jpg" alt="" className="img-fluid" />
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