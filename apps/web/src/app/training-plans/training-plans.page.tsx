import { NotepadTextIcon } from "lucide-react";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { DrawerDialog } from "@/components/ui/drawer-dialog";
import { List, ListItem } from "@/components/ui/list";

import {
  useTrainingPlanDeleteDrawer,
  useTrainingPlanFormDrawer,
  useTrainingPlansPage,
} from "./training-plans.page.hook";
import { TrainingPlanForm } from "./training-plans-form";
import { AppFallback } from "@/components/ui/app-fallback";

const TrainingPlansPage = () => {
  const { handleNavigate, trainingPlans, isFetching } = useTrainingPlansPage();

  const {
    handleDeleteDrawerClose,
    handleDeleteDrawerConfirm,
    handleDeleteDrawerOpen,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedTrainingPlanToDelete,
  } = useTrainingPlanDeleteDrawer();

  const {
    formData,
    formTitle,
    handleCloseForm,
    handleCreateNew,
    handleUpdateTrainingPlan,
    isFormOpen,
  } = useTrainingPlanFormDrawer();

  if (isFetching) {
    return <AppFallback />;
  }

  return (
    <PageLayout title="Training Plans">
      <List allowAdding={true} onAddNew={handleCreateNew}>
        {trainingPlans.map((trainingPlan, index) => (
          <ListItem
            key={trainingPlan.trainingPlanId ?? index}
            allowDeleting={true}
            allowEditing={true}
            data={trainingPlan}
            displayExpr="name"
            itemIcon={NotepadTextIcon}
            onDeleteClick={handleDeleteDrawerOpen}
            onEditClick={handleUpdateTrainingPlan}
            onItemClick={handleNavigate}
          />
        ))}
      </List>
      <TrainingPlanForm
        defaultValues={formData}
        open={isFormOpen}
        title={formTitle}
        onClose={handleCloseForm}
      />
      <DrawerDialog
        open={isDeleteDrawerOpen}
        title={`Are you sure you want to delete ${selectedTrainingPlanToDelete?.name}?`}
        disabled={isDeleteDrawerPending}
        onClose={handleDeleteDrawerClose}
        onConfirm={handleDeleteDrawerConfirm}
        onCancel={handleDeleteDrawerClose}
      />
    </PageLayout>
  );
};

export default TrainingPlansPage;
