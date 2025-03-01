import { UseFormReturn } from "react-hook-form";

import { FormLabel } from "@/components/ui/form";

import { WorkoutExerciseFormSchema } from "../workout-exercises-form/workout-exercises-form.hook";
import { useWorkoutExercisesSetInputList } from "./workout-exercises-set-input-list.hook";

import { WorkoutExercisesSetInputListItem } from "./workout-exercises-set-input-list-item";

export const WorkoutExercisesSetInputList = ({
  form,
}: {
  form: UseFormReturn<WorkoutExerciseFormSchema>;
}) => {
  const { fields, handleAddSet, handleRemoveSet } =
    useWorkoutExercisesSetInputList({ form });

  return (
    <div className="mb-4 space-y-2">
      <FormLabel className="flex items-center justify-between">
        <span>Sets</span>
        <button
          className="text-primary hover:underline"
          type="button"
          onClick={handleAddSet}
        >
          + Add Set
        </button>
      </FormLabel>
      <ul className="flex flex-col gap-4 py-2">
        {fields.map((item, index) => (
          <WorkoutExercisesSetInputListItem
            key={item.id}
            form={form}
            index={index}
            fields={fields}
            onRemove={handleRemoveSet}
          />
        ))}
      </ul>
    </div>
  );
};
