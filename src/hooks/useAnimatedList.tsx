import { createRef, useCallback, useEffect, useRef, useState } from "react";
import { typeToastMessage } from "../types/type";

const useAnimatedList = () => {
  const [pendingRemoveItemssId, setPendingRemoveItemsId] = useState<string[]>(
    []
  );
  const [items, setItems] = useState<typeToastMessage[]>([]);

  const animatedRefs = useRef(new Map());
  const animationEndListener = useRef(new Map());

  const handleAnimationEnd = useCallback((itemId: string) => {
    const removeListener = animationEndListener.current.get(itemId);
    removeListener();

    animationEndListener.current.delete(itemId);
    animatedRefs.current.delete(itemId);

    setItems((prevState) => prevState.filter((item) => item.id !== itemId));
    setPendingRemoveItemsId((prevState) =>
      prevState.filter((id) => id !== itemId)
    );
  }, []);

  useEffect(() => {
    pendingRemoveItemssId.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const animatedElement = animatedRef?.current;
      const alreadyHasLiteners = animationEndListener.current.has(itemId);

      if (animatedElement && !alreadyHasLiteners) {
        const onAnimationEnd = () => {
          handleAnimationEnd(itemId);
        };
        const removeListener = () => {
          animatedElement.removeEventListener("animationend", onAnimationEnd);
        };

        animatedElement.addEventListener("animationend", onAnimationEnd);
        animationEndListener.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemoveItemssId, handleAnimationEnd]);

  useEffect(() => {
    const removeEventListeners = animationEndListener?.current;
    return () => {
      removeEventListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const handleRemoveItems = useCallback((id: string) => {
    setPendingRemoveItemsId((prevState) => [...prevState, id]);
  }, []);

  const getAnimatedRef = useCallback((itemId: string) => {
    let animatedRef = animatedRefs.current.get(itemId);
    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }
    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem: any) => {
      return items.map((item) => {
        const isLeaving = pendingRemoveItemssId.includes(item.id);
        const animatedRef = getAnimatedRef(item.id);

        return renderItem(item, {
          isLeaving,
          animatedRef,
        });
      });
    },
    [items, pendingRemoveItemssId]
  );

  return {
    items,
    setItems,
    handleRemoveItems,
    renderList,
  };
};

export default useAnimatedList;
