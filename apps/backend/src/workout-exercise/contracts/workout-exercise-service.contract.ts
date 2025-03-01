export type WorkoutExerciseService = {
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
  sets: {
    setId: string;
    reps: number;
    rir: number;
  }[];
};
