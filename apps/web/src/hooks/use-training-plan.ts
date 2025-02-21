import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { TrainingPlan } from "@/models";
import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
} from "@/lib/api/training-plan/training-plan.api.contracts";

import { TrainingPlanService } from "@/lib/api/training-plan/training-plan.api";

export const getTrainingPlansQueryKey = (handle?: string | number) => {
  return ["training-plan", handle];
};

export const useCachedTrainingPlans = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<TrainingPlan[]>(getTrainingPlansQueryKey());
};

export const useTrainingPlan = () => {
  return useQuery({
    queryKey: getTrainingPlansQueryKey(),
    queryFn: () => TrainingPlanService.get(),
    retry: false,
  });
};

export const useSuspenseTrainingPlan = () => {
  return useSuspenseQuery({
    queryKey: getTrainingPlansQueryKey(),
    queryFn: () => TrainingPlanService.get(),
    retry: false,
  });
};

export const useTrainingPlanPut = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(),
    mutationFn: (data: {
      trainingPlanId: TrainingPlan["trainingPlanId"];
      data: TrainingPlanPutRequest;
    }) => TrainingPlanService.put(data.trainingPlanId, data.data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey() }),
    onSuccess,
  });
};

export const useTrainingPlanPost = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(),
    mutationFn: (data: TrainingPlanPostRequest) =>
      TrainingPlanService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey() }),
    onSuccess,
  });
};

export const useTrainingPlanDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(),
    mutationFn: (trainingPlanId: TrainingPlan["trainingPlanId"]) =>
      TrainingPlanService.delete(trainingPlanId),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: getTrainingPlansQueryKey() }),
  });
};
