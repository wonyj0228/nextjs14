import Link from 'next/link';

export const metadata = {
  title: 'home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(API_URL).then((res) => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Home!</h1>
      <div>
        {movies.map((movie) => {
          return (
            <li>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
