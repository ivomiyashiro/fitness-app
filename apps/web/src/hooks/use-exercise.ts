import { CONFIG } from "@/config";
import { ExerciseService } from "@/lib/api/exercise/exercise.api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteExercise = ({ search }: { search: string }) => {
  const query = useInfiniteQuery({
    queryKey: ["exercises", search],
    queryFn: ({ pageParam = 0 }) =>
      ExerciseService.get({
        search,
        offset: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      // Calculate next offset based on current data length
      const currentOffset = lastPage.meta.offset;
      const totalCount = lastPage.meta.totalCount;
      const nextOffset = currentOffset + CONFIG.API.LIMIT;

      // Check if we've reached the end
      return nextOffset < totalCount ? nextOffset : undefined;
    },
  });

  const data = query.data?.pages.flatMap((page) => page.data) || [];
  const totalCount = query.data?.pages[0]?.meta.totalCount || 0;

  return {
    ...query,
    data,
    totalCount,
  };
};
