export default async function getMovies() {
  const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=4a7f773bac62a8db118961d3e14b31a7&language=en-US&page=1`;

  const res = await fetch(api_url, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
