import { CardPost } from "@/components/cardpost";
import logger from "@/logger";
import styles from "./page.module.css";

async function getAllPosts() {
  const url = "http://localhost:3042/posts";

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Falha na rede");

    logger.info("Posts obtidos com sucesso");
    return response.json();
  } catch (error) {
    logger.error("Erro ao obter posts:", error.message);
    return [];
  }
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className={styles.posts}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
