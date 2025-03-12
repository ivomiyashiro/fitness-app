import { useCallback, useEffect, useRef } from "react";
import { ComboboxContentProps } from "./combobox.types";

export const useComboboxContent = <T>({
  highlightedIndex,
  onEndReached,
  data,
}: Pick<
  ComboboxContentProps<T>,
  "highlightedIndex" | "onEndReached" | "data"
>) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLLIElement>(null);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && ulRef.current) {
      const listItems = ulRef.current.querySelectorAll("li");
      if (listItems[highlightedIndex]) {
        listItems[highlightedIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [highlightedIndex]);

  // Setup intersection observer for infinite scrolling
  const setupObserver = useCallback(() => {
    if (onEndReached && loadMoreRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            onEndReached();
          }
        },
        { threshold: 0.5 },
      );

      observerRef.current.observe(loadMoreRef.current);
    }
  }, [onEndReached]);

  // Cleanup observer on unmount
  useEffect(() => {
    setupObserver();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupObserver, data]);

  return {
    loadMoreRef,
    ulRef,
  };
};
