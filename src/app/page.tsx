import Image from "next/image";
import styles from "./page.module.css";

const games = [
  {
    id: 1,
    title: "Binary Maze Runner",
    description: "Guide your AI bot through procedurally generated mazes while collecting data fragments.",
    thumbnail: "/games/binary-maze.svg",
    tags: ["Puzzle", "Logic", "AI"]
  },
  {
    id: 2,
    title: "Chrome Dino's Neural Network",
    description: "Train your AI dinosaur to evolve and overcome increasingly challenging obstacles.",
    thumbnail: "/games/chrome-dino.svg",
    tags: ["Adventure", "AI Training", "Evolution"]
  },
  {
    id: 3,
    title: "Cache Memory Quest",
    description: "Solve memory allocation puzzles to help your robot optimize its processing power.",
    thumbnail: "/next.svg",
    tags: ["Memory", "Strategy", "Optimization"]
  },
  {
    id: 4,
    title: "Quantum Bot Explorer",
    description: "Navigate through quantum realms while solving parallel processing challenges.",
    thumbnail: "/next.svg",
    tags: ["Exploration", "Quantum", "Puzzle"]
  },
  {
    id: 5,
    title: "Algorithm Arena",
    description: "Battle other AI bots using strategic sorting and pathfinding algorithms.",
    thumbnail: "/next.svg",
    tags: ["Strategy", "Competition", "Algorithms"]
  },
  {
    id: 6,
    title: "Pixel Protocol",
    description: "Repair corrupted pixels in the browser canvas using logical color sequences.",
    thumbnail: "/next.svg",
    tags: ["Puzzle", "Visual", "Debug"]
  },
  {
    id: 7,
    title: "Cookie Compiler",
    description: "Build and optimize cookie collection algorithms in this idle progression game.",
    thumbnail: "/next.svg",
    tags: ["Idle", "Programming", "Optimization"]
  },
  {
    id: 8,
    title: "DOM Tree Defender",
    description: "Protect the DOM structure from malicious scripts using your AI security bot.",
    thumbnail: "/next.svg",
    tags: ["Tower Defense", "Security", "Strategy"]
  },
  {
    id: 9,
    title: "Cache Race",
    description: "Speed through the browser's memory lanes while managing resource allocation.",
    thumbnail: "/next.svg",
    tags: ["Racing", "Resource Management", "Speed"]
  },
  {
    id: 10,
    title: "Neural Network Navigator",
    description: "Create and train neural pathways to solve increasingly complex patterns.",
    thumbnail: "/next.svg",
    tags: ["Puzzle", "AI Training", "Pattern Recognition"]
  },
  {
    id: 11,
    title: "Stack Overflow Oracle",
    description: "Debug and fix code snippets using AI analysis in time-based challenges.",
    thumbnail: "/next.svg",
    tags: ["Debug", "Time Management", "Code"]
  },
  {
    id: 12,
    title: "Browser Bot Builder",
    description: "Construct and program your own browser helper bot using modular components.",
    thumbnail: "/next.svg",
    tags: ["Building", "Programming", "Creativity"]
  },
  {
    id: 13,
    title: "Runtime Riddles",
    description: "Solve computational puzzles while managing system resources efficiently.",
    thumbnail: "/next.svg",
    tags: ["Puzzle", "Resource Management", "Logic"]
  },
  {
    id: 14,
    title: "Web Worker Wars",
    description: "Command your army of web workers in strategic battles for processing power.",
    thumbnail: "/next.svg",
    tags: ["Strategy", "Management", "Battle"]
  },
  {
    id: 15,
    title: "CSS Selector Saga",
    description: "Navigate through the DOM using CSS selectors to catch escaped style elements.",
    thumbnail: "/next.svg",
    tags: ["Adventure", "CSS", "Puzzle"]
  },
  {
    id: 16,
    title: "Function Factory",
    description: "Manage an automated factory producing and optimizing JavaScript functions.",
    thumbnail: "/next.svg",
    tags: ["Management", "Optimization", "Programming"]
  },
  {
    id: 17,
    title: "Boolean Logic Labyrinth",
    description: "Traverse through complex mazes using boolean logic gates and operators.",
    thumbnail: "/next.svg",
    tags: ["Maze", "Logic", "Puzzle"]
  },
  {
    id: 18,
    title: "API Adventure",
    description: "Explore a world of endpoints while building secure API request chains.",
    thumbnail: "/next.svg",
    tags: ["Adventure", "Security", "Networking"]
  }
];

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