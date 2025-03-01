import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  WorkoutExerciseCreateRequest,
  WorkoutExerciseUpdateRequest,
} from "@/lib/api/workout-exercise/workout-exercise.types";
import { WorkoutExerciseService } from "@/lib/api/workout-exercise/workout-exercise.api";

export const getWorkoutExercisesQueryKey = (handle?: string) => [
  "workout-exercise",
  handle,
];

export const useSuspenseWorkoutExercise = ({
  workoutId,
}: {
  workoutId?: string;
}) => {
  return useQuery({
    queryKey: getWorkoutExercisesQueryKey(),
    queryFn: () => WorkoutExerciseService.get({ workoutId }),
    retry: false,
  });
};

export const useWorkoutExerciseCreate = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getWorkoutExercisesQueryKey(),
    mutationFn: (data: WorkoutExerciseCreateRequest) =>
      WorkoutExerciseService.post(data),

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getWorkoutExercisesQueryKey(),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useWorkoutExerciseUpdate = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getWorkoutExercisesQueryKey(),
    mutationFn: (
      data: { workoutExerciseId: string } & WorkoutExerciseUpdateRequest,
    ) => WorkoutExerciseService.put(data.workoutExerciseId, data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getWorkoutExercisesQueryKey(),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

export const useWorkoutExerciseDelete = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getWorkoutExercisesQueryKey(),
    mutationFn: (workoutExerciseId: string) =>
      WorkoutExerciseService.delete(workoutExerciseId),

    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getWorkoutExercisesQueryKey(),
      }),
    onSuccess: () => {
      onSuccess?.();
    },
  });
};
