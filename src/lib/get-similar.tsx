export default async function getSimilar(movieId: number) {
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=4a7f773bac62a8db118961d3e14b31a7&language=en-US`;
  const res = await fetch(api_url);

  if(!res.ok) throw new Error("Cannot get movie details");

  return res.json();
}
