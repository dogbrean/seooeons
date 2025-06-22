"use client";
import React, { useState, useEffect } from "react";
import UpdownAnimationNumber from "../Animation/UpdownAnimationNumber";
import styles from "./Timer.module.scss";

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  minutesTenDigits: number;
  minutesOneDigits: number;
  secondsTenDigits: number;
  secondsOneDigits: number;
}

function TimeDifference() {
  const [difference, setDifference] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    minutesTenDigits: 0,
    minutesOneDigits: 0,
    secondsTenDigits: 0,
    secondsOneDigits: 0,
  });

  const formatNumberWithLeadingZeros = (number: number) => {
    if (number < 10) {
      return "0" + number;
    } else {
      return number.toString();
    }
  };

  const getTensDigit = (number: number): number => {
    return ((number % 100) - (number % 10)) / 10;
  };
  function getOnesDigit(number: number): number {
    return number % 10;
  }

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
      const minutesTenDigits = seconds > 0 ? getTensDigit(minutes) : 0;
      const minutesOneDigits = getOnesDigit(minutes);
      const secondsTenDigits = seconds > 0 ? getTensDigit(seconds) : 0;
      const secondsOneDigits = getOnesDigit(seconds);

      setDifference({
        days,
        hours,
        minutes,
        minutesTenDigits,
        minutesOneDigits,
        secondsTenDigits,
        secondsOneDigits,
      });
    }, 1000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 clearInterval
  }, []);

  return (
    <div className={styles.timer_wrap}>
      서연이의 탄생일로부터 지금까지
      <strong className={styles.time}>
        {difference.days}일 {difference.hours}시간{" "}
        <UpdownAnimationNumber
          maxNumber={5}
          number={difference.minutesTenDigits}
        />
        <UpdownAnimationNumber
          maxNumber={9}
          number={difference.minutesOneDigits}
        />
        분{" "}
        <UpdownAnimationNumber
          maxNumber={5}
          number={difference.secondsTenDigits}
        />
        <UpdownAnimationNumber
          maxNumber={9}
          number={difference.secondsOneDigits}
        />
        초
      </strong>
      가 지났어요~~ 모두들 샴페인을 들고 축하해주세요~~!@
    </div>
  );
}

export default TimeDifference;
