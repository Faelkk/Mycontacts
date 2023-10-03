import { useState, useRef, useEffect } from "react";

const useAnimation = (isModalVisible: boolean) => {
  const [shouldRender, setShouldRender] = useState(isModalVisible);
  const animatedElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalVisible) {
      setShouldRender(true);
    }

    const handleAnimationEnd = () => {
      setShouldRender(false);
    };

    if (!isModalVisible && animatedElementRef.current) {
      animatedElementRef.current.addEventListener(
        "animationend",
        handleAnimationEnd
      );
    }
    return () => {
      if (animatedElementRef.current) {
        animatedElementRef.current.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, [isModalVisible]);

  return { shouldRender, animatedElementRef };
};

export default useAnimation;
