import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { TrainingPlanWeek } from "@/models";

import { TrainingPlanWeekService } from "@/lib/api/training-plan-week/training-plan-week.api";
import { TrainingPlanWeekPostRequest } from "@/lib/api/training-plan-week/training-plan-week.types";

import { getTrainingPlansQueryKey } from "./use-training-plan";

export const useTrainingPlanWeek = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  return useQuery({
    queryKey: getTrainingPlansQueryKey({ trainingPlanId }),
    queryFn: () => TrainingPlanWeekService.get({ trainingPlanId }),
  });
};

export const useTrainingPlanWeekPost = ({
  trainingPlanId,
  onSuccess,
}: {
  trainingPlanId: string;
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey({ trainingPlanId }),
    mutationFn: (data: TrainingPlanWeekPostRequest) =>
      TrainingPlanWeekService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey({ trainingPlanId }),
      }),
    onSuccess,
  });
};

export const useTrainingPlanWeekDelete = ({
  trainingPlanId,
  onSuccess,
}: {
  trainingPlanId: string;
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey({ trainingPlanId }),
    mutationFn: (trainingPlanId: TrainingPlanWeek["trainingPlanId"]) =>
      TrainingPlanWeekService.delete(trainingPlanId),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey({ trainingPlanId }),
      }),
    onSuccess,
  });
};
