import { NotepadTextIcon } from "lucide-react";
import { useNavigate } from "react-router";

import { useSuspenseTrainingPlan } from "@/hooks/use-training-plan";

import { PageLayout } from "@/components/layouts/page/page.layout";
import { DrawerDialog } from "@/components/ui/drawer-dialog";
import { List, ListItem } from "@/components/ui/list";

import { TrainingPlanForm } from "./training-plans-form";
import { useTrainingPlansPage } from "./training-plans.page.hook";

const TrainingPlansPage = () => {
  const navigate = useNavigate();

  const { data: trainingPlans } = useSuspenseTrainingPlan();

  const {
    formData,
    formTitle,
    handleCloseDeleteDrawer,
    handleCloseForm,
    handleCreateNew,
    handleDeleteTrainingPlan,
    handleUpdateTrainingPlan,
    handleConfirmDrawer,
    isDrawerOpen,
    isFormOpen,
  } = useTrainingPlansPage();

  return (
    <PageLayout title="Training Plans">
      <List allowAdding={true} onAddNew={handleCreateNew}>
        {trainingPlans?.map((trainingPlan, index) => (
          <ListItem
            key={trainingPlan.trainingPlanId ?? index}
            allowDeleting={true}
            allowEditing={true}
            data={trainingPlan}
            displayExpr="name"
            itemIcon={NotepadTextIcon}
            onDeleteClick={handleDeleteTrainingPlan}
            onEditClick={handleUpdateTrainingPlan}
            onItemClick={() =>
              navigate(`/training-plans/${trainingPlan.trainingPlanId}/weeks`)
            }
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
        type="destructive"
        open={isDrawerOpen}
        title={`Are you sure you want to delete ${formData.name}?`}
        onClose={handleCloseDeleteDrawer}
        onConfirm={handleConfirmDrawer}
        onCancel={handleCloseDeleteDrawer}
      />
    </PageLayout>
  );
};

export default TrainingPlansPage;
