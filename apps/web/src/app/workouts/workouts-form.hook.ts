import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Workout } from "@/domain";

import { WorkoutFormSchema } from "@/lib/schemes/workouts-form.schema";

import {
  useWorkoutPost,
  useWorkoutPut,
  WorkoutQueryKey,
} from "@/hooks/use-workout";

export type WorkoutFormSchema = z.infer<typeof WorkoutFormSchema>;

export const useWorkoutForm = ({
  defaultValues,
  onClose,
  queryKey,
  workoutId,
}: {
  defaultValues: WorkoutFormSchema;
  onClose: () => void;
  queryKey: WorkoutQueryKey;
  workoutId?: Workout["workoutId"];
}) => {
  const form = useForm<WorkoutFormSchema>({
    resolver: zodResolver(WorkoutFormSchema),
    values: defaultValues,
  });

  const handleSuccess = () => {
    form.reset({
      name: "",
      trainingPlanWeekId: "",
      exercises: [],
    });
    onClose();
  };

  const { mutate: updateTrainingPlan, isPending: isUpdatePending } =
    useWorkoutPut({
      onSuccess: handleSuccess,
      queryKey,
    });
  const { mutate: createTrainingPlan, isPending: isCreatePending } =
    useWorkoutPost({
      onSuccess: handleSuccess,
      queryKey,
    });

  const onSubmit = (data: WorkoutFormSchema) => {
    if (workoutId) {
      updateTrainingPlan({
        workoutId: workoutId,
        data: {
          name: data.name,
          trainingPlanWeekId: defaultValues.trainingPlanWeekId,
          exercises: data.exercises,
        },
      });
    } else {
      createTrainingPlan({
        name: data.name,
        trainingPlanWeekId: defaultValues.trainingPlanWeekId,
        exercises: data.exercises,
      });
    }
  };

  return {
    form,
    isLoading: isCreatePending || isUpdatePending,
    onSubmit,
  };
};
