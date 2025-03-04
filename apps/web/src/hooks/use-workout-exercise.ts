import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  WorkoutExerciseCreateRequest,
  WorkoutExerciseUpdateRequest,
} from "@/lib/api/workout-exercise/workout-exercise.types";
import { WorkoutExerciseService } from "@/lib/api/workout-exercise/workout-exercise.api";

import { getTrainingPlansQueryKey } from "./use-training-plan";

export type WorkoutExerciseQueryKey = {
  trainingPlanId: string;
  trainingPlanWeekId: string;
  workoutId: string;
};

export const useWorkoutExercise = ({
  queryKey,
}: {
  queryKey: WorkoutExerciseQueryKey;
}) => {
  return useQuery({
    queryKey: getTrainingPlansQueryKey(queryKey),
    queryFn: () =>
      WorkoutExerciseService.get({ workoutId: queryKey.workoutId }),
  });
};

export const useWorkoutExerciseCreate = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutExerciseQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: (data: WorkoutExerciseCreateRequest) =>
      WorkoutExerciseService.post(data),

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useWorkoutExerciseUpdate = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutExerciseQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: (
      data: { workoutExerciseId: string } & WorkoutExerciseUpdateRequest,
    ) => WorkoutExerciseService.put(data.workoutExerciseId, data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useWorkoutExerciseDelete = ({
  queryKey,
  onSuccess,
}: {
  queryKey: WorkoutExerciseQueryKey;
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(queryKey),
    mutationFn: (workoutExerciseId: string) =>
      WorkoutExerciseService.delete(workoutExerciseId),

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlansQueryKey(queryKey),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};
