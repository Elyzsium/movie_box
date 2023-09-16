export default async function getVideo(movieId: number) {
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4a7f773bac62a8db118961d3e14b31a7&language=en-US`;
  const res = await fetch(api_url);

  if(!res.ok) throw new Error("Cannot get movie videos");

  return res.json();
}