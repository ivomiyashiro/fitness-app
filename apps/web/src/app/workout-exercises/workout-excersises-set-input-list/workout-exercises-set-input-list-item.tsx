import { FieldArrayWithId, UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  FormMessage,
  FormControl,
  FormLabel,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { WorkoutExerciseFormSchema } from "../workout-exercises-form/workout-exercises-form.hook";

type Props = {
  form: UseFormReturn<WorkoutExerciseFormSchema>;
  index: number;
  fields: FieldArrayWithId<WorkoutExerciseFormSchema, "sets", "id">[];
  onRemove: (index: number) => void;
};

export const WorkoutExercisesSetInputListItem = ({
  form,
  index,
  fields,
  onRemove,
}: Props) => {
  return (
    <li className="flex items-end gap-2">
      <FormField
        control={form.control}
        name={`sets.${index}.setId`}
        render={({ field }) => (
          <FormItem className="hidden">
            <FormLabel>SetId</FormLabel>
            <FormControl>
              <Input
                autoFocus={true}
                className="mt-2"
                placeholder="SetId..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`sets.${index}.reps`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reps</FormLabel>
            <FormControl>
              <Input min={1} type="number" placeholder="Reps..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`sets.${index}.rir`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>RIR</FormLabel>
            <FormControl>
              <div className="flex gap-2">
                <Input min={0} type="number" placeholder="RIR..." {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        variant="destructive"
        type="button"
        disabled={fields.length === 1}
        onClick={() => onRemove(index)}
      >
        Remove
      </Button>
    </li>
  );
};
