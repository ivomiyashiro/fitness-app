export type SetResponse = {
  setId: string;
  reps: number;
  rir: number;
};

export type WorkoutExerciseResponse = {
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
  sets: SetResponse[];
};
