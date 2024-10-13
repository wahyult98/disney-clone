/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieList from "./HrMovieCard";

const cardWidth = 300; // Atur lebar gambar per MovieCard (dalam piksel)

export default function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null); // Pastikan ref diinisialisasi dengan null

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]); // Tambahkan genreId sebagai dependensi

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        console.log(resp.data.results);
        setMovieList(resp.data.results || []); // Handle jika data kosong
      })
      .catch((error) => {
        console.error("Error fetching movie list:", error);
      });
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: cardWidth, // Gulir satu gambar
        behavior: "smooth", // Haluskan pergerakan saat mengklik chevron
      });
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollBy({
        left: -cardWidth, // Gulir satu gambar ke kiri
        behavior: "smooth", // Haluskan pergerakan saat mengklik chevron
      });
    }
  };

  return (
    <div className="relative">
      {/* Chevron Left */}
      <HiChevronLeft
        className={`hidden md:block text-white text-[30px] absolute left-0 mx-8 ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[150px]"
        } cursor-pointer z-10`}
        onClick={sliderLeft}
      />

      {/* Chevron Right */}
      <HiChevronRight
        className={`hidden md:block text-white text-[30px] absolute right-0 mx-8 ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[150px]"
        } cursor-pointer z-10`}
        onClick={sliderRight}
      />

      {/* Movie List */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth  pt-5 px-3 pb-5"
      >
        {movieList.map((item) => (
          <React.Fragment key={item.id}>
            {index_ % 3 === 0 ? (
              <HrMovieList movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
