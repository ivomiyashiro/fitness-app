import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

import { Workout } from "@/models";

import { WorkoutService } from "@/lib/api/workout/workout.api";
import {
  WorkoutPostRequest,
  WorkoutPutRequest,
} from "@/lib/api/workout/workout.api.types";

import { getTrainingPlansQueryKey } from "./use-training-plan";

export const getTrainingPlanWorkoutsQueryKey = (handle?: string | number) => {
  return ["workout", handle];
};

export const useSuspenseWorkout = ({
  trainingPlanWeekId,
}: {
  trainingPlanWeekId?: string;
}) => {
  return useSuspenseQuery({
    queryKey: getTrainingPlanWorkoutsQueryKey(),
    queryFn: () => WorkoutService.get({ trainingPlanWeekId }),
  });
};

export const useWorkoutPost = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlansQueryKey(),
    mutationFn: (data: WorkoutPostRequest) => WorkoutService.post(data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlanWorkoutsQueryKey(),
      }),
    onSuccess: () => onSuccess?.(),
  });
};

type WorkoutPutArgs = {
  workoutId: Workout["workoutId"];
  data: WorkoutPutRequest;
};

export const useWorkoutPut = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlanWorkoutsQueryKey(),
    mutationFn: ({ workoutId, data }: WorkoutPutArgs) =>
      WorkoutService.put(workoutId, data),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlanWorkoutsQueryKey(),
      }),
    onSuccess: () => onSuccess?.(),
  });
};

export const useWorkoutDelete = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: getTrainingPlanWorkoutsQueryKey(),
    mutationFn: (workoutId: Workout["workoutId"]) =>
      WorkoutService.delete(workoutId),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: getTrainingPlanWorkoutsQueryKey(),
      }),
    onSuccess: () => onSuccess?.(),
  });
};
