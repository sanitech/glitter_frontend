import React from "react";
import AllBlog from "../Components/Blog/AllBlog";
import Faq from "../Components/FAQ/Faq";
import Hero from "../Components/Hero/Hero";
import HeroTextOnly from "../Components/Hero/HeroTextOnly";
import Footer from "../Components/Footer/Footer";

const Blog = () => {
  return (
    <div className="absolute inset-0">
      <HeroTextOnly heroText="The Blog" subText="See how game-changing companies are making the most of every engagement with Preline." catBtnTitle="View All" link="/blog"  />
      <AllBlog />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Blog;
