import { useParams } from "react-router";
import { CalendarIcon } from "lucide-react";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { List, ListItem } from "@/components/ui/list";
import { DrawerDialog } from "@/components/ui/drawer-dialog";

import {
  useCreateDrawer,
  useDeleteDrawer,
  useTrainingPlanWeeksPage,
} from "./training-plan-weeks.page.hook";

const TrainingPlanWeeksPage = () => {
  const { trainingPlanId } = useParams();

  const {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedTrainingPlanWeek,
  } = useDeleteDrawer();

  const {
    handleCloseCreate,
    handleConfirmCreate,
    handleDrawerOpenCreate,
    isCreateDrawerOpen,
    isCreateDrawerPending,
  } = useCreateDrawer({
    trainingPlanId: trainingPlanId ?? "",
  });

  const { trainingPlanWeeks, handleNavigate } = useTrainingPlanWeeksPage({
    trainingPlanId: trainingPlanId ?? "",
  });

  return (
    <PageLayout title="Training Plan Weeks" showPrevPage={true}>
      <List
        allowAdding={true}
        addButtonText="Add week"
        onAddNew={handleDrawerOpenCreate}
      >
        {trainingPlanWeeks?.map((tpw, index) => (
          <ListItem
            key={tpw.trainingPlanWeekId ?? index}
            allowDeleting={true}
            allowEditing={false}
            data={tpw}
            displayExpr="weekNumber"
            itemIcon={CalendarIcon}
            label="Week"
            onDeleteClick={handleDrawerOpenDelete}
            onItemClick={handleNavigate}
          />
        ))}
      </List>
      <DrawerDialog
        type="destructive"
        open={isDeleteDrawerOpen}
        title={`Are you sure you want to delete week ${selectedTrainingPlanWeek?.weekNumber}?`}
        disabled={isDeleteDrawerPending}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseDelete}
      />
      <DrawerDialog
        type="default"
        open={isCreateDrawerOpen}
        title={`Are you sure you want to add a new training plan week?`}
        primaryButtonText="Confirm"
        disabled={isCreateDrawerPending}
        onClose={handleCloseCreate}
        onConfirm={handleConfirmCreate}
        onCancel={handleCloseCreate}
      />
    </PageLayout>
  );
};

export default TrainingPlanWeeksPage;
