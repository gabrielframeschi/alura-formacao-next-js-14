import Image from "next/image";
import { Avatar } from "../avatar";
import styles from "./cardpost.module.css";

export const CardPost = (props) => {
  const { post } = props;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
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
  );
};
