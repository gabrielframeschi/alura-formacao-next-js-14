import { CardPost } from "@/components/cardpost";
import logger from "@/logger";
import Link from "next/link";
import styles from "./page.module.css";

async function getAllPosts(page) {
  const url = `http://localhost:3042/posts?_page=${page}&_per_page=6`;

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

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.posts}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      <div className={styles.pagination}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
