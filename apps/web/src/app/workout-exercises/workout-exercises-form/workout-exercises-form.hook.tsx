import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  useWorkoutExerciseCreate,
  useWorkoutExerciseUpdate,
  WorkoutExerciseQueryKey,
} from "@/hooks/use-workout-exercise";

import {
  WorkoutExerciseCreateSchema,
  WorkoutExerciseUpdateSchema,
} from "@/lib/schemes/workout-exercises-form.schema";

export type WorkoutExerciseFormSchema = z.infer<
  typeof WorkoutExerciseCreateSchema | typeof WorkoutExerciseUpdateSchema
>;

export const useWorkoutExercisesForm = ({
  defaultValues,
  onClose,
  queryKey,
}: {
  defaultValues: WorkoutExerciseFormSchema;
  onClose: () => void;
  queryKey: WorkoutExerciseQueryKey;
}) => {
  const handleResetFormAndClose = () => {
    form.reset(defaultValues);
    onClose();
  };

  const handleSuccess = () => {
    handleResetFormAndClose();
  };

  const { mutate: updateWorkoutExercise, isPending: isUpdatePending } =
    useWorkoutExerciseUpdate({
      onSuccess: handleSuccess,
      queryKey,
    });
  const { mutate: createWorkoutExercise, isPending: isCreatePending } =
    useWorkoutExerciseCreate({
      onSuccess: handleSuccess,
      queryKey,
    });

  const form = useForm<WorkoutExerciseFormSchema>({
    resolver: zodResolver(
      "workoutExerciseId" in defaultValues && defaultValues.workoutExerciseId
        ? WorkoutExerciseUpdateSchema
        : WorkoutExerciseCreateSchema,
    ),
    values: defaultValues,
  });

  const onSubmit = (data: WorkoutExerciseFormSchema) => {
    if (
      "workoutExerciseId" in defaultValues &&
      defaultValues.workoutExerciseId
    ) {
      updateWorkoutExercise({
        workoutExerciseId: defaultValues.workoutExerciseId,
        exerciseId: data.exercise.exerciseId,
        order: "order" in data ? data.order : undefined,
        sets: data.sets.map((set) => ({
          setId: "setId" in set && set.setId ? set.setId : "",
          reps: set.reps,
          rir: set.rir,
        })),
      });
    } else {
      createWorkoutExercise({
        exerciseId: data.exercise.exerciseId,
        workoutId: data.workout.workoutId,
        sets: data.sets.map((set) => ({
          reps: set.reps,
          rir: set.rir,
        })),
      });
    }
  };

  return {
    form,
    handleResetFormAndClose,
    isLoading: isCreatePending || isUpdatePending,
    onSubmit,
  };
};
