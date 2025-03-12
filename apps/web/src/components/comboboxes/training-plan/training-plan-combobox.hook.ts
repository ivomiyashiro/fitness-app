import { useState } from "react";

import { TrainingPlan } from "@/domain";

import { useDebounce } from "@/hooks/use-debounce";
import { useInfiniteTrainingPlan } from "@/hooks/use-training-plan";

export const useTrainingPlanCombobox = ({
  selected,
}: {
  selected?: TrainingPlan[];
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
  } = useInfiniteTrainingPlan({ search: debouncedSearch });

  const selectedTrainingPlan = data?.filter((trainingPlan) =>
    selected?.some((tp) => tp.trainingPlanId === trainingPlan.trainingPlanId),
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
    selectedTrainingPlan,
    totalCount,
  };
};
