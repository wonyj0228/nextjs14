import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('start fetch');
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log('end fetch');

  // 순서대로 fetch하면 속도가 지연됨
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  return <h1>{movie.title}</h1>;
}
