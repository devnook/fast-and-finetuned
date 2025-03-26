import Image from "next/image";
import styles from "./page.module.css";

const games = Array(18).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Game ${i + 1}`,
  description: "An exciting adventure game with stunning graphics and engaging gameplay.",
  thumbnail: `/game-${i + 1}.jpg`,
  tags: ["Adventure", "RPG", "Action"]
}));

export default function Home() {
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
                  src="/next.svg"
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