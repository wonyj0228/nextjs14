import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css';

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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
