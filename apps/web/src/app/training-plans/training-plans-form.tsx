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

import { TrainingPlanFormData } from "./training-plans.page.hook";
import { useTrainingPlanForm } from "./training-plans-form.hook";

export const TrainingPlanForm = ({
  defaultValues,
  open,
  title,
  onClose,
}: {
  defaultValues: TrainingPlanFormData;
  open: boolean;
  title: string;
  onClose: () => void;
}) => {
  const { form, isLoading, onSubmit } = useTrainingPlanForm({
    defaultValues,
    onClose,
  });

  return (
    <DrawerForm
      form={form}
      open={open}
      onClose={() => {
        form.reset();
        onClose();
      }}
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  className="mt-2"
                  placeholder="Best push day ever..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!defaultValues.trainingPlanId && (
          <FormField
            control={form.control}
            name="weeks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weeks</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="mt-2"
                    placeholder="Weeks..."
                    min={1}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button disabled={isLoading}>{isLoading ? "Saving..." : "Save"}</Button>
      </div>
    </DrawerForm>
  );
};
