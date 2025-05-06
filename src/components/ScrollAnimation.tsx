import { useEffect, useRef, useState } from "react";
import { ScrollAnimationProps } from "../types";
import "./ScrollAnimation.scss";

const ScrollAnimation = ({ children, threshold = 0.1, direction = "up" }: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "visible" : ""} ${direction}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
