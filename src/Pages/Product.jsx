import React from "react";
import ProductSection from "../Components/Product/ProductSection";
import ProductHero from "../Components/Hero/ProductHero";
import Carousel from "../Components/Hero/HeroCarsolule";
import Footer from "../Components/Footer/Footer";

function Product() {
  return (
    <div className="absolute inset-0">
      <ProductHero />
      <ProductSection />
      <Footer />

    </div>
  );
}

export default Product;
