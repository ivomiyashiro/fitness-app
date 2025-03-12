import { useState } from "react";

import { WorkoutExercise } from "@/domain";

import {
  useWorkoutExercise,
  useWorkoutExerciseDelete,
  WorkoutExerciseQueryKey,
} from "@/hooks/use-workout-exercise";

import { WorkoutExerciseFormSchema } from "./workout-exercises-form/workout-exercises-form.hook";

export const useWorkoutExerciseDeleteDrawer = (
  queryKey: WorkoutExerciseQueryKey,
) => {
  const [isDeleteDrawerOpen, setDeleteDrawerOpen] = useState(false);
  const [selectedWorkoutExerciseToDelete, setSelectedWorkoutExerciseToDelete] =
    useState<WorkoutExercise | undefined>(undefined);

  const handleDeleteSuccess = () => {
    setDeleteDrawerOpen(false);
    setSelectedWorkoutExerciseToDelete(undefined);
  };

  const { mutate: deleteWorkoutExercise, isPending: isDeleteDrawerPending } =
    useWorkoutExerciseDelete({
      onSuccess: handleDeleteSuccess,
      queryKey,
    });

  const handleDeleteDrawerOpen = (workoutExercise: WorkoutExercise) => {
    setDeleteDrawerOpen(true);
    setSelectedWorkoutExerciseToDelete(workoutExercise);
  };

  const handleDeleteDrawerClose = () => {
    setDeleteDrawerOpen(false);
  };

  const handleDeleteDrawerConfirm = () => {
    deleteWorkoutExercise(
      selectedWorkoutExerciseToDelete?.workoutExerciseId ?? "",
    );
  };

  return {
    handleDeleteDrawerClose,
    handleDeleteDrawerConfirm,
    handleDeleteDrawerOpen,
    isDeleteDrawerOpen,
    isDeleteDrawerPending,
    selectedWorkoutExerciseToDelete,
  };
};

export const useWorkoutExerciseFormDrawer = ({
  workoutId,
}: {
  workoutId?: string;
}) => {
  const INITIAL_TITLE = "New Exercise";
  const INITIAL_FORM_DATA: WorkoutExerciseFormSchema = {
    workoutExerciseId: "",
    order: 1,
    exercise: {
      exerciseId: "",
      name: "",
    },
    workout: {
      workoutId: workoutId ?? "",
      name: "",
    },
    sets: [
      {
        setId: "",
        reps: 8,
        rir: 1,
      },
    ],
  };

  const [isWorkoutExerciseFormOpen, setWorkoutExerciseFormOpen] =
    useState(false);
  const [workoutExerciseFormTitle, setWorkoutExerciseFormTitle] =
    useState(INITIAL_TITLE);
  const [workoutExerciseFormData, setWorkoutExerciseFormData] =
    useState<WorkoutExerciseFormSchema>(INITIAL_FORM_DATA);

  const resetToInitialData = () => {
    setWorkoutExerciseFormData(INITIAL_FORM_DATA);
    setWorkoutExerciseFormTitle(INITIAL_TITLE);
  };

  const handleCloseForm = () => {
    setWorkoutExerciseFormOpen(false);
    resetToInitialData();
  };

  const handleAddExercise = () => {
    resetToInitialData();
    setWorkoutExerciseFormOpen(true);
  };

  const handleEditExercise = (data: WorkoutExercise) => {
    setWorkoutExerciseFormTitle(`Editing ${data.exercise.name}`);
    setWorkoutExerciseFormData(data);
    setWorkoutExerciseFormOpen(true);
  };

  return {
    handleAddExercise,
    handleCloseForm,
    handleEditExercise,
    isWorkoutExerciseFormOpen,
    workoutExerciseFormData,
    workoutExerciseFormTitle,
  };
};

export const useWorkoutExercisesPage = (queryKey: WorkoutExerciseQueryKey) => {
  const { data: workoutExercises, isFetching } = useWorkoutExercise({
    queryKey,
  });

  return {
    isFetching,
    workoutExercises: workoutExercises ?? [],
  };
};
