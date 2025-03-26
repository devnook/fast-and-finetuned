'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

interface Game {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
}

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/data/games.json')
      .then(res => res.json())
      .then(data => setGames(data.games))
      .catch(error => console.error('Error loading games:', error));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Game Library</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {games.map(game => (
            <div key={game.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={game.thumbnail}
                  alt={game.title}
                  width={280}
                  height={157}
                  className={styles.thumbnail}
                />
              </div>
              <div className={styles.content}>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div className={styles.tags}>
                  {game.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Game Library. All rights reserved.</p>
      </footer>
    </div>
  );
}