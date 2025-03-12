import { WorkoutExercise } from "@/domain";

export const toExcerciseArray = (workoutExercises: WorkoutExercise[]) => {
  return workoutExercises.map((wex) => ({
    exerciseId: wex.exercise.exerciseId,
    name: wex.exercise.name,
  }));
};
