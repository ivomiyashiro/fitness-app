import { NotepadTextIcon } from "lucide-react";

import { DrawerDialog } from "@/components/ui/drawer-dialog";
import { List, ListItem } from "@/components/ui/list";
import { PageLayout } from "@/components/layouts/page/page.layout";

import {
  useDeleteDrawer,
  useFormDrawer,
  useWorkoutsPage,
} from "./workouts.page.hook";
import { WorkoutForm } from "./workouts-form";

const WorkoutsPage = () => {
  const { trainingPlanWeekId, workouts, handleNavigate } = useWorkoutsPage();

  const {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedWorkout,
  } = useDeleteDrawer();

  const {
    formData,
    formTitle,
    handleCloseForm,
    handleCreateWorkout,
    handleEditWorkout,
    isFormOpen,
  } = useFormDrawer({
    trainingPlanWeekId: trainingPlanWeekId,
  });

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
        workoutId={formData?.workoutId}
        defaultValues={formData}
        open={isFormOpen}
        title={formTitle}
        onClose={handleCloseForm}
      />
      <DrawerDialog
        type="destructive"
        open={isDeleteDrawerOpen}
        title={`Are you sure you want to delete ${selectedWorkout?.name}?`}
        disabled={isDeleteDrawerPending}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseDelete}
      />
    </PageLayout>
  );
};

export default WorkoutsPage;
