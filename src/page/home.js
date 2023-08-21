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
        <h2>Welcome to our website</h2>
        <p>This is some introductory text about our website
          lorem ijdsifj  fhi j ndoihjf  ndioj 9 nhiojf
          bvgiurh09jr
          vjoiprjvoprkopvkrf[pvkrk
          vfrjopkjrokvirp[k rf rkporkorn rrjfjdfopijfoipjdnds i fjfkmdnfkjsdifjdsfjopejrfjdj
          ffdiovjjopfdjkvokvhnrfkkr[pfi-]ofpjrp[fgjr[ikv;rjvpojrpjfkednriejfoe[pfeinfljop
          opfgaoprfgopjd;jvkop]]]]].</p>
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