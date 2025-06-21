"use client";
import React, { useState, useEffect } from "react";

function TypingAnimation() {
  const [fullText] = useState("SEOOEONS: 大 김서연 팬페이지");
  const [displayText, setDisplayText] = useState<React.ReactNode>("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId); // 타이핑 완료 후 interval 종료
      }
    }, 150); // 0.1초마다 한 글자씩 추가

    return () => clearInterval(intervalId); // 컴포넌트 unmount 시 interval 정리
  }, [fullText, index]);

  return (
    <div>
      <span className="typing-text">{displayText}</span>
    </div>
  );
}
export default TypingAnimation;
