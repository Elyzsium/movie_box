import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/container";
import MovieCard from "@/components/ui/card";
import { Movies } from "@/constants/typings"
import getMovies from "@/lib/get-movies";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";

const FeaturedMovies = async () => {
  const moviesData: Promise<Movies> = getMovies();

  const { results: movies } = await moviesData;

  return (
    <section className="mt-10">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-xl font-bold md:text-3xl">
            <ChevronLeft className="w-6 h-6 text-rose-700" /> Featured Movies
          </h3>
          <Link
            className="flex items-center gap-2 text-sm font-bold text-rose-700 hover:underline"
            href="/movies"
          >
            See More <ChevronRight className="w-4 h-4 text-rose-700" />
          </Link>
        </div>
        <div>
          {
            <Suspense fallback={<Loading />}>
              <div className="grid items-start justify-start mt-8 place-items-center gap-x-2 gap-y-5 sm:gap-y-10 max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} Movie={movie} />
                ))}
              </div>
            </Suspense>
          }
        </div>
      </Container>
    </section>
  );
};

export default FeaturedMovies;
