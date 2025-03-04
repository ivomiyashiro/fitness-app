import { useState } from "react";
import { useNavigate } from "react-router";

import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
} from "@/lib/api/training-plan/training-plan.api.contracts";
import { trainingPlanToFormDataArray } from "@/adapters";

import {
  useTrainingPlan,
  useTrainingPlanDelete,
} from "@/hooks/use-training-plan";

export type TrainingPlanFormData = TrainingPlanPostRequest &
  TrainingPlanPutRequest & { trainingPlanId?: string };

export const useTrainingPlanDeleteDrawer = () => {
  const [isDeleteDrawerOpen, setDeleteDrawerOpen] = useState(false);
  const [selectedTrainingPlanToDelete, setSelectedTrainingPlanToDelete] =
    useState<TrainingPlanFormData | undefined>(undefined);

  const handleDeleteSuccess = () => {
    setDeleteDrawerOpen(false);
    setSelectedTrainingPlanToDelete(undefined);
  };

  const { mutate: deleteTrainingPlan, isPending: isDeleteDrawerPending } =
    useTrainingPlanDelete({
      onSuccess: handleDeleteSuccess,
    });

  const handleDeleteDrawerOpen = (trainingPlan: TrainingPlanFormData) => {
    setDeleteDrawerOpen(true);
    setSelectedTrainingPlanToDelete(trainingPlan);
  };

  const handleDeleteDrawerClose = () => {
    setDeleteDrawerOpen(false);
  };

  const handleDeleteDrawerConfirm = () => {
    deleteTrainingPlan(selectedTrainingPlanToDelete?.trainingPlanId ?? "");
  };

  return {
    handleDeleteDrawerClose,
    handleDeleteDrawerConfirm,
    handleDeleteDrawerOpen,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedTrainingPlanToDelete,
  };
};

export const useTrainingPlanFormDrawer = () => {
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

  const handleCloseForm = () => {
    setFormOpen(false);
    resetData();
  };

  return {
    formData,
    formTitle,
    handleCloseForm,
    handleCreateNew,
    handleUpdateTrainingPlan,
    isFormOpen,
  };
};

export const useTrainingPlansPage = () => {
  const navigate = useNavigate();
  const { data: trainingPlans, isFetching } = useTrainingPlan();

  const handleNavigate = (trainingPlan: TrainingPlanFormData) => {
    if (trainingPlan.trainingPlanId) {
      navigate(`/training-plans/${trainingPlan.trainingPlanId}/weeks`);
    }
  };

  return {
    handleNavigate,
    isFetching,
    trainingPlans: trainingPlanToFormDataArray(trainingPlans ?? []),
  };
};
