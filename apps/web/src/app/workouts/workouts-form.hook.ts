import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useWorkoutPost, useWorkoutPut } from "@/hooks/use-workout";

import { WorkoutFormSchema } from "./workouts-form.schema";

export type WorkoutFormSchema = z.infer<typeof WorkoutFormSchema>;

export const useWorkoutForm = ({
  workoutId,
  defaultValues,
  onClose,
}: {
  workoutId?: string;
  defaultValues: WorkoutFormSchema;
  onClose: () => void;
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
    useWorkoutPut({ onSuccess: handleSuccess });
  const { mutate: createTrainingPlan, isPending: isCreatePending } =
    useWorkoutPost({ onSuccess: handleSuccess });

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
