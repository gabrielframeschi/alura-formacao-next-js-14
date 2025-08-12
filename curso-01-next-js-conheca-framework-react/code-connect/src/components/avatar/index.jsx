import Image from "next/image";
import styles from "./avatar.module.css";

export const Avatar = (props) => {
  const { name, imageSrc } = props;

  return (
    <ul className={styles.avatar}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
