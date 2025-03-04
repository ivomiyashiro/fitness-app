import { useParams } from "react-router";
import { NotepadTextIcon } from "lucide-react";

import { WorkoutQueryKey } from "@/hooks/use-workout";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { DrawerDialog } from "@/components/ui/drawer-dialog";
import { List, ListItem } from "@/components/ui/list";
import { AppFallback } from "@/components/ui/app-fallback";

import {
  useWorkoutDeleteDrawer,
  useWorkoutFormDrawer,
  useWorkoutsPage,
} from "./workouts.page.hook";
import { WorkoutForm } from "./workouts-form";

const WorkoutsPage = () => {
  const { trainingPlanId, trainingPlanWeekId } = useParams();

  if (!trainingPlanId || !trainingPlanWeekId) {
    throw new Error("Training plan ID and training plan week ID are required");
  }

  const queryKey: WorkoutQueryKey = {
    trainingPlanId: trainingPlanId,
    trainingPlanWeekId: trainingPlanWeekId,
  };

  const { workouts, handleNavigate, isFetching } = useWorkoutsPage(queryKey);

  const {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedWorkout,
  } = useWorkoutDeleteDrawer(queryKey);

  const {
    formData,
    formTitle,
    handleCloseForm,
    handleCreateWorkout,
    handleEditWorkout,
    isFormOpen,
  } = useWorkoutFormDrawer({
    trainingPlanWeekId: trainingPlanWeekId,
  });

  if (isFetching) {
    return <AppFallback />;
  }

  return (
    <PageLayout title="Workouts" showPrevPage={true}>
      <List allowAdding={true} onAddNew={handleCreateWorkout}>
        {workouts?.map((workout) => (
          <ListItem
            key={workout.workoutId}
            allowDeleting={true}
            allowEditing={true}
            data={workout}
            displayExpr="name"
            itemIcon={NotepadTextIcon}
            onDeleteClick={handleDrawerOpenDelete}
            onEditClick={handleEditWorkout}
            onItemClick={handleNavigate}
          />
        ))}
      </List>
      <WorkoutForm
        defaultValues={formData}
        onClose={handleCloseForm}
        open={isFormOpen}
        queryKey={queryKey}
        title={formTitle}
        workoutId={formData?.workoutId}
      />
      <DrawerDialog
        disabled={isDeleteDrawerPending}
        onCancel={handleCloseDelete}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        open={isDeleteDrawerOpen}
        title={`Are you sure you want to delete ${selectedWorkout?.name}?`}
      />
    </PageLayout>
  );
};

export default WorkoutsPage;
