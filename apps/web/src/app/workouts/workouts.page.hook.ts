import { useState } from "react";
import { useParams, useNavigate } from "react-router";

import { Workout } from "@/models";

import { WorkoutFormSchema } from "./workouts-form.hook";

import { toExcerciseArray } from "@/adapters";
import { useSuspenseWorkout, useWorkoutDelete } from "@/hooks/use-workout";

export const useDeleteDrawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | undefined>(
    undefined,
  );

  const handleSuccess = () => {
    setDrawerOpen(false);
    setSelectedWorkout(undefined);
  };

  const { mutate: deleteWorkout, isPending } = useWorkoutDelete({
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

export const useFormDrawer = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("New Training Plan");
  const [formData, setFormData] = useState<WorkoutFormSchema>({
    name: "",
    trainingPlanWeekId: "",
    workoutId: "",
    order: 0,
    exercises: [],
  });

  const resetData = () => {
    setFormData({
      name: "",
      trainingPlanWeekId: "",
      workoutId: "",
      order: 0,
      exercises: [],
    });
  };

  const handleCreateWorkout = () => {
    setFormTitle("New Workout");
    resetData();
    setFormOpen(true);
  };

  const handleUpdateWorkout = (data: Workout) => {
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
    handleUpdateWorkout,
    isFormOpen,
  };
};

export const useWorkoutsPage = () => {
  const navigate = useNavigate();
  const { trainingPlanId, trainingPlanWeekId } = useParams();

  const { data: workouts } = useSuspenseWorkout({
    trainingPlanWeekId,
  });

  const handleNavigate = (workout: Workout) => {
    navigate(
      `/training-plans/${trainingPlanId}/weeks/${trainingPlanWeekId}/workouts/${workout.workoutId}/exercises`,
    );
  };

  return {
    handleNavigate,
    workouts,
  };
};
