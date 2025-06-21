"use client";
import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

function TimeDifference() {
  const [difference, setDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const startDate = new Date(2000, 2, 17, 7, 48, 0); // 2000년 3월 17일 7시 48분
      const now = new Date();
      const diff = now.getTime() - startDate.getTime(); // 밀리초 단위 차이

      const diffInSeconds = Math.floor(diff / 1000);
      const days = Math.floor(diffInSeconds / (24 * 60 * 60));
      const hours = Math.floor((diffInSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
      const seconds = diffInSeconds % 60;

      setDifference({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 clearInterval
  }, []);

  return (
    <div className={styles.timer_wrap}>
      서연이의 탄생일로부터 지금까지~
      <div className={styles.timer}>
        <strong className={styles.time}>
          {difference.days}일 {difference.hours}시간 {difference.minutes}분{" "}
          {difference.seconds}초
        </strong>{" "}
        가 지났어요~~
      </div>
      모두들 샴페인을 들고 축하해주세요~~!@
    </div>
  );
}

export default TimeDifference;
