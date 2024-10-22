'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/'
    );
    const json = await response.json();
    setMovies(json);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home!</h1>
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}
