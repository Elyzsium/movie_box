import { Credits, Movies } from "@/constants/typings";
import { Calendar, ChevronRight, Clock3, Eye, List, Star } from "lucide-react";
import React from "react";
import SimilarCard from "./similarCard";
import Search from "./search";

interface MovieDetailsProps {
  movie: any;
  credits: Credits;
  similar: Movies;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movie,
  credits,
  similar,
}) => {
  let directors: string[] = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Directing") {
      directors.push(cast.original_name);
    }
  });

  let writers: string[] = [];
  credits.cast.forEach((cast) => {
    if (cast.known_for_department === "Writing") {
      writers.push(cast.original_name);
    }
  });

  let starsNames: string[] = [];
  let orderedStars = credits.cast.sort((a, b) => a.order - b.order);
  const stars = orderedStars.slice(0, 4);

  stars.forEach((star) => {
    starsNames.push(star.original_name);
  });

  const filteredSimilarMovies = similar.results.slice(0, 4);

  return (
    <section className="mt-5 mx-auto max-w-[1500px]">
      <div className="flex items-start justify-start pb-10 max-md:flex-col max-lg:px-4">
        <div className="md:w-[75%] max-md:border-none border-r pr-2 border-r-gray-200">
          <div className="flex flex-wrap items-start justify-start gap-5">
            <h1
              data-testid="movie-title"
              className="font-medium text-2xl text-[#404040]"
            >
              {movie.original_title}
            </h1>
            <div className="flex items-center justify-center gap-2">
              {movie.genres.map((genre: any) => (
                <span
                  key={genre.name}
                  className="px-4 py-1 text-sm border rounded-full text-rose-700 border-rose-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p data-testid="movie-overview" className="mt-4 text-[#333333] text-20px ">
              {movie.overview}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <p className="font-medium-500 text-md">
              Director(s):{" "}
              <span className="text-rose-700">
                {directors.length === 0
                  ? "Yet to be known"
                  : directors.join(", ")}
                .
              </span>
            </p>
            <p className="text-sm font-medium">
              Writers(s):{" "}
              <span className="text-rose-700 ">
                {writers.length === 0 ? "Yet to be known" : writers.join(", ")}.
              </span>
            </p>
            <p className="text-sm font-medium">
              Stars(s):{" "}
              <span className="text-rose-700">
                {starsNames.length === 0
                  ? "Yet to be known"
                  : starsNames.join(", ")}
                .
              </span>
            </p>
          </div>
          <div className="container p-4 mx-auto mt-6">
            <Search  />
          </div>
 
           
           {/* <div className="flex flex-col items-center justify-center gap-2 mt-6">
           <div className="items-center justify-center w-full gap-2 py-3 font-medium text-white rounded-lg f bg-rose-700">
           
              <Eye className="w-5 h-5" />
              See Showtimes
            </div>
           </div> */}
        </div>
        <div className="pl-2 max-md:mt-10 grow">
          <div className="flex items-center gap-2 md:justify-end">
            <span className="flex items-center gap-1 pr-2 text-lg font-bold border-r-2 text-rose-700 border-r-gray-200">
              <Star className="w-5 h-5 text-yellow-400" />
              {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-lg font-bold text-rose-700">
              {movie.vote_count} votes
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-6">
            <div className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white rounded-lg bg-rose-700">
              <Eye className="w-5 h-5" />
              See Showtimes
            </div>
            <div className="flex items-center justify-center w-full gap-2 py-3 font-medium text-black border rounded-lg bg-rose-200 border-rose-700">
              <List className="w-5 h-5" />
              More watch options
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="flex items-center gap-2 font-medium">
              <Clock3 className="w-5 h-5" /> Runtime:{" "}
              <span data-testid="movie-runtime">{movie.runtime}</span>mins
            </p>
            <p
              data-testid="movie-runtime"
              className="flex items-center gap-2 font-medium"
            >
              <Calendar className="w-5 h-5" /> Release Date:{" "}
              <span data-testid="movie-release-date">{new Date(movie.release_date).toUTCString()}</span>
            </p>
          </div>
          <div className="mt-10">
            <h5 className="flex items-center mb-5 text-xl font-semibold">
              Similar movies <ChevronRight className="w-5 mt-[3px] h-5" />
            </h5>
            {
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {filteredSimilarMovies.map((movie) => (
                  <SimilarCard key={movie.id} Movie={movie} />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
