import { WorkoutExerciseQueryKey } from "@/hooks/use-workout-exercise";

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

import {
  useWorkoutExercisesForm,
  WorkoutExerciseFormSchema,
} from "./workout-exercises-form.hook";
import { WorkoutExercisesSetInputList } from "../workout-excersises-set-input-list/workout-exercises-set-input-list";

type Props = {
  defaultValues: WorkoutExerciseFormSchema;
  onClose: () => void;
  open: boolean;
  title: string;
  queryKey: WorkoutExerciseQueryKey;
};

export const WorkoutExercisesForm = ({
  defaultValues,
  onClose,
  open,
  title,
  queryKey,
}: Props) => {
  const { form, handleResetFormAndClose, isLoading, onSubmit } =
    useWorkoutExercisesForm({
      defaultValues,
      onClose,
      queryKey,
    });

  return (
    <DrawerForm
      className="relative"
      form={form}
      onClose={handleResetFormAndClose}
      onSubmit={form.handleSubmit(onSubmit)}
      open={open}
    >
      <DrawerHeader>
        <DrawerTitle>{title}</DrawerTitle>
      </DrawerHeader>
      <div className="flex flex-col gap-4 p-4">
        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Order</FormLabel>
              <FormControl>
                <Input
                  autoFocus={true}
                  className="mt-2"
                  placeholder="Order..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="exercise.exerciseId"
          render={({ field }) => {
            const selectedExercise = field.value
              ? [
                  {
                    exerciseId: field.value,
                    name: "",
                  },
                ]
              : [];

            return (
              <FormItem>
                <FormLabel>Exercises</FormLabel>
                <FormControl>
                  <ExerciseCombobox
                    mode="single"
                    selected={selectedExercise}
                    onSelect={(exercise) =>
                      field.onChange(exercise[0]?.exerciseId || "")
                    }
                  />
                </FormControl>
                <p className="text-destructive text-[0.8rem] font-medium">
                  {form.formState.errors?.exercise?.exerciseId?.message}
                </p>
              </FormItem>
            );
          }}
        />
        <WorkoutExercisesSetInputList form={form} />
        <FormField
          control={form.control}
          name="workout.workoutId"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>WorkoutId</FormLabel>
              <FormControl>
                <Input
                  autoFocus={true}
                  className="mt-2"
                  placeholder="WorkoutId..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="bg-background sticky bottom-0 w-full p-4">
        <Button disabled={isLoading} className="w-full">
          {isLoading ? "Saving..." : "Save"}
        </Button>
      </div>
    </DrawerForm>
  );
};
