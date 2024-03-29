import { MoviesResult } from "@/constants/typings";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SimilarCard = ({ Movie }: { Movie: MoviesResult }) => {
  return (
    <Link href={`/movies/${Movie.id}`}>
      <div
        className="relative flex flex-col space-y-2 group"
      >
        <Image
          className="w-[120px] rounded-[20px] h-[200px] md:w-[173px] md:h-[271px]"
          src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`}
          alt="Movie poster"
          width={250}
          height={370}
        />
        <div className="absolute right-1 rounded-[20px] p-1 glassmorphism top-0">
          <span className="flex items-center gap-1 text-sm font-medium text-black text">
            <Star className="w-3 h-3 text-yellow-400" /> {Movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SimilarCard;
