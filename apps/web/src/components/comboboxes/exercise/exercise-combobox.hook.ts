import { useState } from "react";

import { Exercise } from "@/domain";

import { useDebounce } from "@/hooks/use-debounce";
import { useInfiniteExercise } from "@/hooks/use-exercise";

export const useExerciseCombobox = ({
  selected,
}: {
  selected?: Exercise[];
}) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const {
    data,
    totalCount,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteExercise({ search: debouncedSearch });

  const selectedExercise = data?.filter((exercise) =>
    selected?.some((ex) => ex.exerciseId === exercise.exerciseId),
  );

  const handleEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    data,
    handleEndReached,
    handleSearch: setSearch,
    isLoading: isLoading || isFetchingNextPage,
    search,
    selectedExercise,
    totalCount,
  };
};
