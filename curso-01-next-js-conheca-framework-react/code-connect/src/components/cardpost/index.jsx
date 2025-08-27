import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../avatar";
import styles from "./cardpost.module.css";

export const CardPost = (props) => {
  const { post, highlight } = props;

  return (
    <Link className={styles.link} href={`/posts/${post.slug}`}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.header}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              fill
              alt={`Capa do post de título ${post.title}`}
            />
          </figure>
        </header>

        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>

        <footer className={styles.footer}>
          <Avatar name={post.author.name} imageSrc={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};
