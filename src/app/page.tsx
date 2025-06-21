"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import MySwiper from "@/components/Swiper/Swiper";
import Timer from "@/components/Timer/Timer";
import cn from "classnames";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";
import BackgroundImages from "@/components/BackgroundImages/BackgroundImages";

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
      <BackgroundImages />
      <div className={styles.content}>
        <h2 className={cn(styles.title)}>
          <TypingAnimation />
        </h2>
        <div className={cn(styles.text_arrow)}>프로필?</div>
        <svg
          className={cn(styles.icon_arrow)}
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.7071 12.2929C16.3166 11.9024 15.6834 11.9024 15.2929 12.2929L13 14.5858V7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V14.5858L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L16.7071 13.7071C17.0976 13.3166 17.0976 12.6834 16.7071 12.2929Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
            fill="fff"
          />
        </svg>
        <section>
          <div
            style={{ backgroundImage: "url(/profile_1.png)" }}
            className={styles.profile_wrap}
          >
            <Image
              src="/profile_1.png"
              width={250}
              height={250}
              alt=""
              className={styles.profile_image}
            />
            <strong className={styles.profile_title}>김서연</strong>
            <strong className={styles.profile_description}>
              탄신일: 2000년 3월 17일
            </strong>
            <strong className={styles.profile_description}>
              특기: 포켓몬 마스터
            </strong>
            <strong className={styles.profile_description}>
              좋아하는 포켓몬: 뮤
            </strong>
            <strong className={styles.profile_description}>
              특이사항: 마포구 차가운 주먹과 쌍을 이룬다
            </strong>
            <strong className={styles.profile_description}>
              기타: 서연이 최고~~짱~~
            </strong>
          </div>
        </section>
        <section>
          <p className={cn(styles.description_good, styles.fade_3)}>
            너무 멋져요
          </p>
          <p className={cn(styles.description_best, styles.fade_4)}>최고!!</p>
        </section>
        <Timer />
        <section>
          <h3 className={cn(styles.swiper_title)}>~~서연이의 사진~~</h3>
          <MySwiper />
        </section>
        <section></section>
        <section></section>
      </div>
    </main>
  );
}
