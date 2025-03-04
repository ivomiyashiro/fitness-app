import { useParams } from "react-router";
import { DumbbellIcon } from "lucide-react";

import { WorkoutExerciseQueryKey } from "@/hooks/use-workout-exercise";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { List, ListItem } from "@/components/ui/list";
import { DrawerDialog } from "@/components/ui/drawer-dialog";
import { AppFallback } from "@/components/ui/app-fallback";

import {
  useWorkoutExerciseDeleteDrawer,
  useWorkoutExerciseFormDrawer,
  useWorkoutExercisesPage,
} from "./workout-exercises.page.hook";
import { WorkoutExercisesForm } from "./workout-exercises-form/workout-exercises-form";

const WorkoutExercisesPage = () => {
  const { trainingPlanId, trainingPlanWeekId, workoutId } = useParams();

  if (!trainingPlanId || !trainingPlanWeekId || !workoutId) {
    throw new Error(
      "Training plan ID, training plan week ID, and workout ID are required",
    );
  }

  const queryKey: WorkoutExerciseQueryKey = {
    trainingPlanId,
    trainingPlanWeekId,
    workoutId,
  };

  const { workoutExercises, isLoading } = useWorkoutExercisesPage(queryKey);

  const {
    handleDeleteDrawerClose,
    handleDeleteDrawerConfirm,
    handleDeleteDrawerOpen,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedWorkoutExerciseToDelete,
  } = useWorkoutExerciseDeleteDrawer(queryKey);

  const {
    handleAddExercise,
    handleCloseForm,
    handleEditExercise,
    isWorkoutExerciseFormOpen,
    workoutExerciseFormData,
    workoutExerciseFormTitle,
  } = useWorkoutExerciseFormDrawer({ workoutId });

  if (isLoading) {
    return <AppFallback />;
  }

  return (
    <PageLayout title="Workout Exercises" showPrevPage={true}>
      <List allowAdding={true} onAddNew={handleAddExercise}>
        {workoutExercises?.map((workoutExercise) => (
          <ListItem
            key={workoutExercise.workoutExerciseId}
            allowDeleting={true}
            allowEditing={false}
            data={workoutExercise}
            displayExpr="exercise.name"
            itemIcon={DumbbellIcon}
            onDeleteClick={handleDeleteDrawerOpen}
            onItemClick={handleEditExercise}
          />
        ))}
      </List>
      <WorkoutExercisesForm
        defaultValues={workoutExerciseFormData}
        open={isWorkoutExerciseFormOpen}
        queryKey={queryKey}
        title={workoutExerciseFormTitle}
        onClose={handleCloseForm}
      />
      <DrawerDialog
        open={isDeleteDrawerOpen}
        title={`Are you sure you want to delete ${selectedWorkoutExerciseToDelete?.exercise.name}?`}
        disabled={isDeleteDrawerPending}
        onClose={handleDeleteDrawerClose}
        onConfirm={handleDeleteDrawerConfirm}
        onCancel={handleDeleteDrawerClose}
      />
    </PageLayout>
  );
};

export default WorkoutExercisesPage;
