import Image from "next/image";
import styles from "./BackgroundImages.module.scss";

const BackgroundImages = () => {
  return (
    <div>
      <Image
        src={"/berry.png"}
        width={61}
        height={61}
        alt="체리"
        className={styles.bg_berry}
      />
      <Image
        src={"/heart_purple.png"}
        width={40}
        height={40}
        alt="체리"
        className={styles.bg_heart_purple}
      />
      <Image
        src={"/cherry.png"}
        width={61}
        height={61}
        alt="체리"
        className={styles.bg_cherry}
      />
      <Image
        src={"/heart_pink.png"}
        width={62}
        height={62}
        alt="체리"
        className={styles.bg_heart_pink}
      />
      <Image
        src={"/butterfly.png"}
        width={50}
        height={50}
        alt="체리"
        className={styles.bg_butterfly}
      />
    </div>
  );
};

export default BackgroundImages;
