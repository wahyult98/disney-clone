import React from "react";

import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalIG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import starwarV from "./../assets/Videos/star-wars.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalIG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-6 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800"
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video) {
              // Pastikan video di-mute dan atur video untuk diputar
              video.muted = true;
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    // Video berhasil dimainkan
                  })
                  .catch((error) => {
                    console.error("Video play was prevented:", error);
                  });
              }
            }
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector("video");
            if (video && !video.paused) {
              // Hanya pause jika video sedang diputar
              video.pause();
            }
          }}
        >
          <video
            src={item.video}
            loop
            playsInline
            muted // Pastikan video di-mute
            className="absolute inset-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
          <img
            src={item.image}
            className="w-full z-[1]"
            alt="production house"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
