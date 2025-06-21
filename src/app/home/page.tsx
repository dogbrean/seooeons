"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import MySwiper from "@/components/Swiper/Swiper";
import Timer from "@/components/Timer/Timer";

export default function Home() {
  // const audioRef = useRef<HTMLAudioElement>(null);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.volume = 0.5; // 초기 음량을 50%로 설정
  //     audioRef.current.play();
  //   }
  // }, []);
  return (
    <main className={styles.main}>
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
      <div className={styles.content}>
        <h2 className={styles.title}>大 김서연 팬페이지</h2>
        <section>
          <h3 className={styles.section_title}>
            김서연은 2000년 3월 17일에 세상을 놀라게 한 짱최고입니다.
          </h3>
          <p className={styles.description}></p>
          <p className={styles.description_good}>너무 멋져요</p>
          <p className={styles.description_best}>최고!!</p>
        </section>
        <section>
          <h3 className={styles.section_title}>~~서연이의 사진~~</h3>
          <MySwiper />
        </section>
        <section>
          <Timer />
        </section>
        <section></section>
      </div>
    </main>
  );
}
