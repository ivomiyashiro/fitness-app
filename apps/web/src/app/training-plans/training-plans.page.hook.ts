import { useState } from "react";

import { useTrainingPlanDelete } from "@/hooks/use-training-plan";

import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
} from "@/lib/api/training-plan/training-plan.api.contracts";

export type TrainingPlanFormData = TrainingPlanPostRequest &
  TrainingPlanPutRequest & { trainingPlanId?: string };

export const useTrainingPlansPage = () => {
  const { mutate: deleteTrainingPlan } = useTrainingPlanDelete();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [isFormOpen, setFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("New Training Plan");
  const [formData, setFormData] = useState<TrainingPlanFormData>({
    trainingPlanId: "",
    name: "",
    description: "",
    weeks: 1,
  });

  const resetData = () => {
    setFormData({
      trainingPlanId: "",
      name: "",
      description: "",
      weeks: 1,
    });
  };

  const handleCreateNew = () => {
    resetData();
    setFormTitle("New Training Plan");
    setFormOpen(true);
  };

  const handleUpdateTrainingPlan = (data: TrainingPlanFormData) => {
    setFormData(data);
    setFormTitle(`Editing ${data.name}`);
    setFormOpen(true);
  };

  const handleDeleteTrainingPlan = (data: TrainingPlanFormData) => {
    setFormData(data);
    setDrawerOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    resetData();
  };

  const handleCloseDeleteDrawer = () => {
    resetData();
    setDrawerOpen(false);
  };

  const handleConfirmDrawer = () => {
    if (formData.trainingPlanId) {
      deleteTrainingPlan(formData.trainingPlanId);
    }
  };

  return {
    formData,
    formTitle,
    handleCloseDeleteDrawer,
    handleCloseForm,
    handleConfirmDrawer,
    handleCreateNew,
    handleDeleteTrainingPlan,
    handleUpdateTrainingPlan,
    isDrawerOpen,
    isFormOpen,
  };
};
