import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { TrainingPlanWeek } from "@/models";

import { TrainingPlanWeekService } from "@/lib/api/training-plan-week/training-plan-week.api";
import { TrainingPlanWeekPostRequest } from "@/lib/api/training-plan-week/training-plan-week.types";

import { useCachedTrainingPlans } from "./use-training-plan";

const useCachedTrainingPlanWeeks = (trainingPlanId: string) => {
  const cachedTrainingPlans = useCachedTrainingPlans();

  const cachedTrainingPlanWeeks = cachedTrainingPlans?.find(
    (tp) => tp.trainingPlanId === trainingPlanId,
  )?.trainingPlanWeeks;
  const cachedTrainingPlanWeeksWithTrainingPlanId =
    cachedTrainingPlanWeeks?.map((tpw) => ({
      ...tpw,
      trainingPlanId: trainingPlanId,
    }));

  return cachedTrainingPlanWeeksWithTrainingPlanId;
};

export const getTrainingPlanWeekQueryKey = (handle?: string | number) => {
  return ["training-plan-week", handle];
};

export const useSuspenseTrainingPlanWeek = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const cachedTrainingPlanWeeksWithTrainingPlanId =
    useCachedTrainingPlanWeeks(trainingPlanId);

  return useSuspenseQuery({
    queryKey: getTrainingPlanWeekQueryKey(),
    queryFn: () => TrainingPlanWeekService.get({ trainingPlanId }),
    initialData: cachedTrainingPlanWeeksWithTrainingPlanId,
    retry: false,
  });
};

export const useTrainingPlanWeek = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const cachedTrainingPlanWeeksWithTrainingPlanId =
    useCachedTrainingPlanWeeks(trainingPlanId);

  return useQuery({
    queryKey: getTrainingPlanWeekQueryKey(),
    queryFn: () => TrainingPlanWeekService.get({ trainingPlanId }),
    initialData: cachedTrainingPlanWeeksWithTrainingPlanId,
    enabled: !cachedTrainingPlanWeeksWithTrainingPlanId,
    retry: false,
  });
};

export const useTrainingPlanWeekPost = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlanWeekQueryKey(),
    mutationFn: (data: TrainingPlanWeekPostRequest) =>
      TrainingPlanWeekService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlanWeekQueryKey(),
      }),
    onSuccess,
  });
};

export const useTrainingPlanWeekDelete = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlanWeekQueryKey(),
    mutationFn: (trainingPlanId: TrainingPlanWeek["trainingPlanId"]) =>
      TrainingPlanWeekService.delete(trainingPlanId),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlanWeekQueryKey(),
      }),
    onSuccess,
  });
};
