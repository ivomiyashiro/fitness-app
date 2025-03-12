import { useState } from "react";
import { useNavigate } from "react-router";

import { Workout } from "@/domain";

import { WorkoutFormSchema } from "./workouts-form.hook";

import { toExcerciseArray } from "@/adapters";
import {
  useWorkout,
  useWorkoutDelete,
  WorkoutQueryKey,
} from "@/hooks/use-workout";

export const useWorkoutDeleteDrawer = ({
  trainingPlanId,
  trainingPlanWeekId,
}: WorkoutQueryKey) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | undefined>(
    undefined,
  );

  const handleSuccess = () => {
    setDrawerOpen(false);
    setSelectedWorkout(undefined);
  };

  const { mutate: deleteWorkout, isPending } = useWorkoutDelete({
    queryKey: {
      trainingPlanId,
      trainingPlanWeekId,
    },
    onSuccess: handleSuccess,
  });

  const handleDrawerOpen = (workout: Workout) => {
    setDrawerOpen(true);
    setSelectedWorkout(workout);
  };

  const handleCloseDelete = () => {
    setDrawerOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteWorkout(selectedWorkout?.workoutId ?? "");
  };

  return {
    handleCloseDelete,
    handleConfirmDelete,
    handleDrawerOpenDelete: handleDrawerOpen,
    isDeleteDrawerOpen: isDrawerOpen,
    isDeleteDrawerPending: isPending,
    selectedWorkout,
  };
};

export const useWorkoutFormDrawer = ({
  trainingPlanWeekId,
}: {
  trainingPlanWeekId: string;
}) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("New Training Plan");
  const [formData, setFormData] = useState<
    WorkoutFormSchema & { workoutId?: Workout["workoutId"] }
  >({
    name: "",
    trainingPlanWeekId: trainingPlanWeekId,
    exercises: [],
  });

  const resetData = () => {
    setFormData({
      name: "",
      trainingPlanWeekId: trainingPlanWeekId,
      exercises: [],
    });
  };

  const handleCreateWorkout = () => {
    setFormTitle("New Workout");
    resetData();
    setFormOpen(true);
  };

  const handleEditWorkout = (data: Workout) => {
    setFormData({
      ...data,
      exercises: toExcerciseArray(data.exercises),
    });
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
    handleCreateWorkout,
    handleEditWorkout,
    isFormOpen,
  };
};

export const useWorkoutsPage = ({
  trainingPlanId,
  trainingPlanWeekId,
}: WorkoutQueryKey) => {
  const navigate = useNavigate();

  const { data: workouts, isFetching } = useWorkout({
    queryKey: {
      trainingPlanId,
      trainingPlanWeekId,
    },
  });

  const handleNavigate = (workout: Workout) => {
    navigate(
      `/training-plans/${trainingPlanId}/weeks/${trainingPlanWeekId}/workouts/${workout.workoutId}/exercises`,
    );
  };

  return {
    handleNavigate,
    isFetching,
    workouts,
  };
};
