import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { TrainingPlan } from "@/models";
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
  return ["training-plan", trainingPlanId, trainingPlanWeekId, workoutId];
};

export const useTrainingPlan = () => {
  return useQuery({
    queryKey: getTrainingPlansQueryKey({}),
    queryFn: () => TrainingPlanService.get(),
  });
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
