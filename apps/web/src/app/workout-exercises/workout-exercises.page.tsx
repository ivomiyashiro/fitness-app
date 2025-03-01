import { useParams } from "react-router";
import { DumbbellIcon } from "lucide-react";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { List, ListItem } from "@/components/ui/list";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

import {
  useWorkoutExerciseDeleteDrawer,
  useWorkoutExerciseFormDrawer,
  useWorkoutExercisesPage,
} from "./workout-exercises.page.hook";
import { WorkoutExercisesForm } from "./workout-exercises-form/workout-exercises-form";

const WorkoutExercisesPage = () => {
  const { workoutId } = useParams();
  const { workoutExercises } = useWorkoutExercisesPage({ workoutId });

  const {
    handleDeleteDrawerClose,
    handleDeleteDrawerConfirm,
    handleDeleteDrawerOpen,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedWorkoutExerciseToDelete,
  } = useWorkoutExerciseDeleteDrawer();

  const {
    handleAddExercise,
    handleCloseForm,
    handleEditExercise,
    isWorkoutExerciseFormOpen,
    workoutExerciseFormData,
    workoutExerciseFormTitle,
  } = useWorkoutExerciseFormDrawer({ workoutId });

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
