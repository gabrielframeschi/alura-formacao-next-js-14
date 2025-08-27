import { CardPost } from "@/components/cardpost";
import logger from "@/logger";
import DOMPurify from "isomorphic-dompurify";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";

async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Falha na rede");

    logger.info("Post obtido com sucesso");
    const data = await response.json();

    if (data.length === 0) throw new Error("Post não encontrado");

    const post = data[0];

    const processedContent = await remark().use(html).process(post.markdown);
    const sanitizedtHtml = DOMPurify.sanitize(processedContent.toString());

    post.markdown = sanitizedtHtml;

    return post;
  } catch (error) {
    logger.error("Erro ao obter post:", error.message);
    return {};
  }
}

export default async function Post({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
}
