import React from "react";
import Header from "./Components/Header";
import Product from "./Components/Product/Product";
import "./index.css";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={52.55}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={5}
          />
          <Product
            title="Logitech H390 Wired Headset, Stereo Headphones with Noise-Cancelling Microphone, USB, In-Line Controls"
            price={75.32}
            image="https://images-na.ssl-images-amazon.com/images/I/31DUeeauN-L.jpg"
            rating={5}
          />
          <Product
            title="HP M27ha FHD Monitor - Full HD Monitor (1920 x 1080p) - IPS Panel and Built-in Audio "
            price={400.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41frifnwF2L.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={74}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />
          <Product
            title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter "
            price={41.28}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            rating={5}
          />
          <Product
            title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
            price={65.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={41.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Band-Aid Brand Flexible Fabric Adhesive Bandages for Wound Care and First Aid, All One Size, 100 Count"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51EZUnWAPWL.jpg"
            rating={5}
          />
          <Product
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31-ASwHdTVL.jpg"
            rating={5}
          />
          <Product
            title="DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41MXvr5tYDL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/311ThQv0JoL.jpg"
            rating={5}
          />
          <Product
            title="Vont 2 Pack LED Camping Lantern, Super Bright Portable Survival Lanterns, Must Have During Hurricane, Emergency, Storms, Outages, Original"
            price={52.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51OSKuKLzQL.jpg"
            rating={5}
          />
          <Product
            title="Epic Elements Breast Lift Tape for Lift & Fashion | Bra Alternative of Breasts | Achieve Lift and Push up in All Clothing, Fabric, Dress Types"
            price={52.99}
            image="https://images-na.ssl-images-amazon.com/images/I/417HiNnLx9L.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
