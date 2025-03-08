import { useState } from "react";
import { useNavigate } from "react-router";

import { TrainingPlanWeek } from "@/models";

import {
  useTrainingPlanWeek,
  useTrainingPlanWeekCopy,
  useTrainingPlanWeekDelete,
  useTrainingPlanWeekPost,
} from "@/hooks/use-training-plan-week";

export const useTrainingPlanWeekCopyDrawer = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const [isCopyDrawerOpen, setCopyDrawerOpen] = useState(false);
  const [selectedTrainingPlanWeekToCopy, setSelectedTrainingPlanWeekToCopy] =
    useState<TrainingPlanWeek | undefined>(undefined);

  const handleSuccess = () => {
    setCopyDrawerOpen(false);
    setSelectedTrainingPlanWeekToCopy(undefined);
  };

  const { mutate: copyTrainingPlanWeek, isPending } = useTrainingPlanWeekCopy({
    onSuccess: handleSuccess,
    trainingPlanId,
  });

  const handleCopyDrawerOpen = (trainingPlanWeek: TrainingPlanWeek) => {
    setCopyDrawerOpen(true);
    setSelectedTrainingPlanWeekToCopy(trainingPlanWeek);
  };

  const handleCopyDrawerClose = () => {
    setCopyDrawerOpen(false);
  };

  const handleConfirmCopy = () => {
    copyTrainingPlanWeek(
      selectedTrainingPlanWeekToCopy?.trainingPlanWeekId ?? "",
    );
  };

  return {
    handleCopyDrawerClose,
    handleCopyDrawerOpen,
    handleConfirmCopy,
    isCopyDrawerOpen,
    isCopyDrawerPending: isPending,
    selectedTrainingPlanWeekToCopy,
  };
};

export const useTrainingPlanWeekDeleteDrawer = ({
  trainingPlanId,
}: {
  trainingPlanId: string;
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [
    selectedTrainingPlanWeekToDelete,
    setSelectedTrainingPlanWeekToDelete,
  ] = useState<TrainingPlanWeek | undefined>(undefined);

  const handleSuccess = () => {
    setDrawerOpen(false);
    setSelectedTrainingPlanWeekToDelete(undefined);
  };

  const { mutate: deleteTrainingPlanWeek, isPending } =
    useTrainingPlanWeekDelete({
      onSuccess: handleSuccess,
      trainingPlanId,
    });

  const handleDrawerOpen = (trainingPlanWeek: TrainingPlanWeek) => {
    setDrawerOpen(true);
    setSelectedTrainingPlanWeekToDelete(trainingPlanWeek);
  };

  const handleCloseDelete = () => {
    setDrawerOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteTrainingPlanWeek(
      selectedTrainingPlanWeekToDelete?.trainingPlanWeekId ?? "",
    );
  };

  return {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete: handleDrawerOpen,
    isDeleteDrawerOpen: isDrawerOpen,
    isDeleteDrawerPending: isPending,
    selectedTrainingPlanWeekToDelete,
  };
};

export const useTrainingPlanWeekCreateDrawer = ({
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
      trainingPlanId,
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

  const { data: trainingPlanWeeks, isFetching } = useTrainingPlanWeek({
    trainingPlanId,
  });

  const handleNavigate = (trainingPlanWeek: TrainingPlanWeek) => {
    navigate(
      `/training-plans/${trainingPlanId}/weeks/${trainingPlanWeek.trainingPlanWeekId}/workouts`,
    );
  };

  return {
    handleNavigate,
    isFetching,
    trainingPlanWeeks: trainingPlanWeeks ?? [],
  };
};
