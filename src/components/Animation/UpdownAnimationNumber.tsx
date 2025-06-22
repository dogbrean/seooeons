"use client";
import { useState, useEffect } from "react";

import cn from "classnames";

import s from "./UpdownAnimationNumber.module.scss";

type Props = {
  number: number;
  maxNumber: number;
  animationDirection?: "up" | "down"; // 애니메이션 방향
  animationDuration?: number;
  animationTimingFunction?: string;
  numberWidths?: number[];
};

const UpdownAnimationNumber = ({
  number,
  maxNumber,
  animationDirection = "down",
  animationDuration = 950,
  animationTimingFunction = "ease",
  numberWidths,
}: Props) => {
  const FAKE_DOM_COUNT = 2;
  const [transitionDuration, setTransitionDuration] =
    useState<number>(animationDuration);
  const [domIndex, setDomIndex] = useState<number>(0);

  useEffect(() => {
    setDomIndex(number);
    if (number === maxNumber) {
      setTimeout(() => {
        setDomIndex(-1);
        setTransitionDuration(0);
      }, animationDuration);
    } else {
      setTransitionDuration(animationDuration);
    }
  }, [number, maxNumber, animationDuration]);

  return (
    <div
      className={cn(s.updown_count_down_number, s[animationDirection])}
      style={{
        width: numberWidths && numberWidths[number],
        transform: `translateY(${
          (domIndex + FAKE_DOM_COUNT) *
          100 *
          (animationDirection === "up" ? 1 : -1)
        }%)`,
        transitionDuration: `${transitionDuration / 1000}s`,
        transitionTimingFunction: `${animationTimingFunction}`,
      }}
    >
      <span className={cn(s.number)}>{maxNumber - 1}</span>
      <span className={cn(s.number)}>{maxNumber}</span>
      {Array.from(Array(maxNumber + 1).keys()).map((_, index) => {
        return (
          <span key={index} className={cn(s.number)}>
            {index}
          </span>
        );
      })}
      <span className={cn(s.number)}>0</span>
      <span className={cn(s.number)}>1</span>
    </div>
  );
};

export default UpdownAnimationNumber;
