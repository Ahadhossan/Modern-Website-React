import React from "react";
import BannerImg from "../../assets/marketing-speaker.png";

const Banner = () => {
  return (
    <main className="bg-primary ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid items-center grid-cols-1 gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center order-2 gap-4 text-center text-white  md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold ">Market your Brand</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?
            </p>
            <button className="px-4 py-2 text-sm text-black transition-colors duration-300 bg-white rounded-md hover:bg-white/90">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <iframe
              className="w-full aspect-video"
              src="#"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
