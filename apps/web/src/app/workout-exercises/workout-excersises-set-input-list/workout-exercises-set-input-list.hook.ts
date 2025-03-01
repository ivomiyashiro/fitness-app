import { useFieldArray, UseFormReturn } from "react-hook-form";
import { WorkoutExerciseFormSchema } from "../workout-exercises-form/workout-exercises-form.hook";

export const useWorkoutExercisesSetInputList = ({
  form,
}: {
  form: UseFormReturn<WorkoutExerciseFormSchema>;
}) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "sets",
  });

  const handleAddSet = () => {
    append({ reps: 8, rir: 1 });
  };

  const handleRemoveSet = (index: number) => {
    if (fields.length === 1) return;
    remove(index);
  };

  return { fields, handleAddSet, handleRemoveSet };
};
