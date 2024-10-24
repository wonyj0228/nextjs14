import { API_URL } from '../app/(home)/page';

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const videos = await getMovie(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
