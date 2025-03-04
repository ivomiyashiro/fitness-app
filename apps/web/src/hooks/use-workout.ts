import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Workout } from "@/models";

import { WorkoutService } from "@/lib/api/workout/workout.api";
import {
  WorkoutPostRequest,
  WorkoutPutRequest,
} from "@/lib/api/workout/workout.api.types";

import { getTrainingPlansQueryKey } from "./use-training-plan";

export type WorkoutQueryKey = {
  trainingPlanId: string;
  trainingPlanWeekId: string;
};

export const useWorkout = ({ queryKey }: { queryKey: WorkoutQueryKey }) => {
  return useQuery({
    queryKey: getTrainingPlansQueryKey(queryKey),
    queryFn: () =>
      WorkoutService.get({ trainingPlanWeekId: queryKey.trainingPlanWeekId }),
  });
};

export const useWorkoutPost = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: (data: WorkoutPostRequest) => WorkoutService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => onSuccess?.(),
  });
};

type WorkoutPutArgs = {
  workoutId: Workout["workoutId"];
  data: WorkoutPutRequest;
};

export const useWorkoutPut = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: ({ workoutId, data }: WorkoutPutArgs) =>
      WorkoutService.put(workoutId, data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => onSuccess?.(),
  });
};

export const useWorkoutDelete = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: (workoutId: Workout["workoutId"]) =>
      WorkoutService.delete(workoutId),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => onSuccess?.(),
  });
};
