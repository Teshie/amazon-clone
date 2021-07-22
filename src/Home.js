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
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood BlockAmazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
