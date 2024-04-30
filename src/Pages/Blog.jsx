import React from "react";
import AllBlog from "../Components/Blog/AllBlog";
import Faq from "../Components/FAQ/Faq";
import Hero from "../Components/Hero/Hero";
import HeroTextOnly from "../Components/Hero/HeroTextOnly";
import Footer from "../Components/Footer/Footer";

const Blog = () => {
  return (
    <div className="absolute inset-0">
      <HeroTextOnly heroText="Unveiling Insights, Inspiring Ideas" subText="Exploring Every Angle, Sharing Every Story: Your Destination for Event Excellence." catBtnTitle="View All blogs" link="#allBlog" backImg={"https://thumbs.dreamstime.com/b/pr-public-relations-megaphone-vector-illustration-76496331.jpg"} />
      <AllBlog />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Blog;
