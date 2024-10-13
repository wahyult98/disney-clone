/* eslint-disable no-unused-vars */
import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieList({ movie }) {
  return (
    <div>
      {" "}
      <section className="hover:scale-110 transition-all duration-300 ease-in">
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] cursor-pointer border-gray-400 hover:scale-110 transition-all duration-300 ease-in "
        />
        <h2 className="text-white w-[110px] md:w-[200px] mt-2 ">
          {movie.title}
        </h2>
      </section>
    </div>
  );
}

export default HrMovieList;
