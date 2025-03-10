import { WorkoutQueryKey } from "@/hooks/use-workout";

import { DrawerForm } from "@/components/ui/drawer-form";
import { DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExerciseCombobox } from "@/components/comboboxes/exercise/exercise-combobox";

import { useWorkoutForm, WorkoutFormSchema } from "./workouts-form.hook";

type Props = {
  defaultValues: WorkoutFormSchema;
  onClose: () => void;
  open: boolean;
  queryKey: WorkoutQueryKey;
  title: string;
  workoutId?: string;
};

export const WorkoutForm = ({
  defaultValues,
  onClose,
  open,
  queryKey,
  title,
  workoutId,
}: Props) => {
  const { form, isLoading, onSubmit } = useWorkoutForm({
    workoutId,
    defaultValues,
    onClose,
    queryKey,
  });

  return (
    <DrawerForm
      form={form}
      open={open}
      onClose={onClose}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <DrawerHeader>
        <DrawerTitle>{title}</DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-4 p-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  autoFocus={true}
                  className="mt-2"
                  placeholder="Push, Tricep, Monday..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="exercises"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exercises</FormLabel>
              <FormControl>
                <ExerciseCombobox
                  selected={field.value}
                  onSelect={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>{isLoading ? "Saving..." : "Save"}</Button>
      </div>
    </DrawerForm>
  );
};
