import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { CONFIG } from "@/config";

import { TrainingPlan } from "@/domain";

import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
} from "@/lib/api/training-plan/training-plan.api.contracts";

import { TrainingPlanService } from "@/lib/api/training-plan/training-plan.api";

export const getTrainingPlansQueryKey = ({
  trainingPlanId,
  trainingPlanWeekId,
  workoutId,
}: {
  trainingPlanId?: string;
  trainingPlanWeekId?: string;
  workoutId?: string;
}) => {
  return [
    "training-plan",
    trainingPlanId,
    trainingPlanWeekId,
    workoutId,
  ].filter((key) => key !== undefined);
};

export const useTrainingPlan = () => {
  const query = useQuery({
    queryKey: getTrainingPlansQueryKey({}),
    queryFn: () => TrainingPlanService.get(),
  });

  return {
    ...query,
    data: query.data?.data || [],
  };
};

export const useInfiniteTrainingPlan = ({ search }: { search: string }) => {
  const query = useInfiniteQuery({
    queryKey: ["training-plans", search],
    queryFn: ({ pageParam = 0 }) =>
      TrainingPlanService.get({
        search,
        offset: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentOffset = lastPage.meta.offset;
      const totalCount = lastPage.meta.totalCount;
      const nextOffset = currentOffset + CONFIG.API.LIMIT;

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

export const useTrainingPlanPut = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey({}),
    mutationFn: (data: {
      trainingPlanId: TrainingPlan["trainingPlanId"];
      data: TrainingPlanPutRequest;
    }) => TrainingPlanService.put(data.trainingPlanId, data.data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey({}) }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useTrainingPlanPost = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey({}),
    mutationFn: (data: TrainingPlanPostRequest) =>
      TrainingPlanService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey({}) }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useTrainingPlanDelete = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey({}),
    mutationFn: (trainingPlanId: TrainingPlan["trainingPlanId"]) =>
      TrainingPlanService.delete(trainingPlanId),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey({}) }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};
