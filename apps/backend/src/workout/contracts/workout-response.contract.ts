export type WorkoutResponse = {
  workoutId: string;
  trainingPlanWeekId: string;
  name: string;
  order: number;
  exercises: {
    workoutExerciseId: string;
    order: number;
    exercise: {
      exerciseId: string;
      name: string;
    };
    workout: {
      workoutId: string;
      name: string;
    };
  }[];
};
