import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './home.css'




const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <div className="home-container">
      <div className="info-box">
        <h2>Welcome to Coding Club </h2>
        <p>This is an unofficial website handled by the members odf coding club.</p>
        <div className="button-container">
          <button className="centered-button">Button 1</button>
          <button className="centered-button">Button 2</button>
        </div>
      </div>
    </div>

    
      </section>
      <Footer/>
    </>
  );
};
export default Home;