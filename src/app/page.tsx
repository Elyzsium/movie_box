import Banner from "@/components/Home/banner";
import Navbar from "@/components/Navbar/navbar";
import FeaturedMovies from "@/components/featured";
import Footer from "@/components/footer";
import getMovies from "@/lib/get-movies";
import { Movies } from "@/constants/typings";

const Home = async () => {
  const moviesData: Promise<Movies> = getMovies();

  const { results: movies } = await moviesData;

  const bannerMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <>
      <Navbar />
      <main>
        <Banner movie={bannerMovie} />
        <FeaturedMovies />
      </main>
      <Footer />
    </>
  );
};

export default Home;
