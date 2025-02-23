import { useState } from "react";
import { useNavigate } from "react-router";

import { TrainingPlanWeek } from "@/models";

import {
  useTrainingPlanWeek,
  useTrainingPlanWeekDelete,
  useTrainingPlanWeekPost,
} from "@/hooks/use-training-plan-week";

export const useDeleteDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedTrainingPlanWeek, setSelectedTrainingPlanWeek] = useState<
    TrainingPlanWeek | undefined
  >(undefined);

  const handleSuccess = () => {
    setDrawerOpen(false);
    setSelectedTrainingPlanWeek(undefined);
  };

  const { mutate: deleteTrainingPlanWeek, isPending } =
    useTrainingPlanWeekDelete({
      onSuccess: handleSuccess,
    });

  const handleDrawerOpen = (trainingPlanWeek: TrainingPlanWeek) => {
    setDrawerOpen(true);
    setSelectedTrainingPlanWeek(trainingPlanWeek);
  };

  const handleCloseDelete = () => {
    setDrawerOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteTrainingPlanWeek(selectedTrainingPlanWeek?.trainingPlanWeekId ?? "");
  };

  return {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete: handleDrawerOpen,
    isDeleteDrawerOpen: isDrawerOpen,
    isDeleteDrawerPending: isPending,
    selectedTrainingPlanWeek,
  };
};

export const useCreateDrawer = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleSuccess = () => {
    setDrawerOpen(false);
  };

  const { mutate: createTrainingPlanWeek, isPending } = useTrainingPlanWeekPost(
    {
      onSuccess: handleSuccess,
    },
  );

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleCloseCreate = () => {
    setDrawerOpen(false);
  };

  const handleConfirmCreate = () => {
    if (!trainingPlanId) return;

    createTrainingPlanWeek({
      trainingPlanId,
    });
  };

  return {
    handleConfirmCreate,
    handleCloseCreate,
    handleDrawerOpenCreate: handleDrawerOpen,
    isCreateDrawerOpen: isDrawerOpen,
    isCreateDrawerPending: isPending,
  };
};

export const useTrainingPlanWeeksPage = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const navigate = useNavigate();

  const { data: trainingPlanWeeks } = useTrainingPlanWeek({
    trainingPlanId,
  });

  const handleNavigate = (trainingPlanWeek: TrainingPlanWeek) => {
    navigate(
      `/training-plans/${trainingPlanId}/weeks/${trainingPlanWeek.trainingPlanWeekId}/workouts`,
    );
  };

  return {
    handleNavigate,
    trainingPlanWeeks,
  };
};
