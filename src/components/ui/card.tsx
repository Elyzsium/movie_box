import { getGenreNames } from "@/lib/get-genre";
import { MoviesResult } from "@/constants/typings";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ Movie }: { Movie: MoviesResult }) => {
  const genres = getGenreNames(Movie.genre_ids);

  return (
    <Link href={`/movies/${Movie.id}`}>
      <div
        data-testid="movie-card"
        className="relative flex flex-col space-y-2 group"
      >
        <Image
          data-testid="movie-poster"
          className=" rounded-tl-xl rounded-tr-xl h-[230px] md:w-[250px] md:h-[370px]"
          src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`}
          alt="Movie poster"
          width={250}
          height={370}
        />
        {Movie.media_type === "tv" && (
          <div className="absolute px-3 py-1 text-gray-300 rounded-full top-3 left-2 glassmorphism">
            <span className="text-xs md:text-sm">TV Series</span>
          </div>
        )}
        <div className="absolute text-gray-300 p-2 rounded-full top-[13px] right-3 glassmorphism">
          <Heart className="w-4 h-4" />
        </div>
        <div className="max-w-[150px] md:max-w-[250px]">
          <span className="text-xs text-muted-foreground">
            USA,{" "}
            <span data-testid="movie-release-date">
              {Movie.release_date || "To be announced"}
            </span>{" "}
          </span>
          <h4
            data-testid="movie-title"
            className="md:text-xl max-w-[250px] text-base font-bold"
          >
            {Movie.title || Movie.name}
          </h4>
          <div className="flex items-center justify-between gap-1">
            <span className="flex items-center gap-1 font-semibold max-md:text-xs md:gap-2">
              <Image src="images/tmdb.svg" alt="imdb" width={35} height={17} />
              860 / 100
            </span>
            <span className="flex items-center gap-1 font-semibold max-md:text-xs md:gap-2">
              <Image
                src="images/tomato.svg"
                alt="rotten tomatoes"
                width={17}
                height={17}
              />
              97%
            </span>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            {genres.join(", ")}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
