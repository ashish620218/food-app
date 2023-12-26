import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/images.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => { 
  return ( 
    <div className="home-container"> 
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            RICE BOUL
          </h1>
          <p className="primary-text">
          Rice bowls are a versatile and satisfying dish that transcends cultural boundaries. Comprising a wholesome base of fluffy, steamed rice, these bowls are a canvas for a myriad of flavorful ingredients. From vibrant vegetables and succulent proteins to savory sauces and aromatic spices, rice bowls offer a harmonious blend of textures and tastes.
          </p>
          <button className="secondary-button">
            VIEW ORDER MENU <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;