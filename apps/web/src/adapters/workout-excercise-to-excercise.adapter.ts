import { WorkoutExercise } from "@/models";

export const toExcerciseArray = (workoutExercises: WorkoutExercise[]) => {
  return workoutExercises.map((wex) => ({
    exerciseId: wex.exercise.exerciseId,
    name: wex.exercise.name,
  }));
};
