import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './pg-css/notes-pg.css';
const Notes = () => {
  return (
    <>
      <Navbar />
      <div className="ctnr">
  <div className="container">
    <div className="card">
      <div className="card__border">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png"
          alt="card image"
          className="card__img"
        />
      </div>
      <h3 className="card__name">HTML5</h3>
      <span className="card__profession">HTML Notes</span>
      <div className="card__social" id="card-social">
        <div className="card__social-control">
          <div className="card__social-toggle" id="card-toggle">
            <i className="ri-download-cloud-2-line" />
          </div>
          <a href="#" className="card__social-text">
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="card">
      <div className="card__border">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          alt="card image"
          className="card__img"
        />
      </div>
      <h3 className="card__name">CSS3</h3>
      <span className="card__profession">CSS3 Notes</span>
      <div className="card__social" id="card-social">
        <div className="card__social-control">
          <div className="card__social-toggle" id="card-toggle">
            <i className="ri-download-cloud-2-line" />
          </div>
          <a href="#" className="card__social-text">
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="card">
      <div className="card__border">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png"
          alt="card image"
          className="card__img"
        />
      </div>
      <h3 className="card__name">Javascript</h3>
      <span className="card__profession">HTML Notes</span>
      <div className="card__social" id="card-social">
        <div className="card__social-control">
          <div className="card__social-toggle" id="card-toggle">
            <i className="ri-download-cloud-2-line" />
          </div>
          <a href="#" className="card__social-text">
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="card">
      <div className="card__border">
        <img
          src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=1920&h=1920&q=100&fm=webp"
          alt="card image"
          className="card__img"
        />
      </div>
      <h3 className="card__name">Python</h3>
      <span className="card__profession">Python Notes</span>
      <div className="card__social" id="card-social">
        <div className="card__social-control">
          <div className="card__social-toggle" id="card-toggle">
            <i className="ri-download-cloud-2-line" />
          </div>
          <a href="#" className="card__social-text">
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
};

export default Notes;